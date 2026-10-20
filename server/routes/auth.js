/** /api/auth - register, login, logout, current user */
const express = require('express');
const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const { q, tx } = require('../lib/db');
const { validator, LEVELS, INST_TYPES, emailRe, phoneRe, urlRe } = require('../lib/validate');
const { publicUser, startSession } = require('../lib/auth');

const router = express.Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many attempts. Please wait 15 minutes and try again.' } });

async function emailTaken(email) {
  return (await q('SELECT 1 FROM users WHERE email = ?', [email])).length > 0;
}

// ---- Student registration (student-register.html)
router.post('/register', limiter, async (req, res, next) => {
  try {
    const d = validator(req.body)
      .str('name', { min: 2, max: 120, msg: 'Please enter your full name.' })
      .str('email', { max: 160, re: emailRe, msg: 'Enter a valid email address.' })
      .str('phone', { required: false, re: phoneRe, msg: 'Enter a valid 10-digit mobile number.' })
      .str('level', { oneOf: LEVELS, msg: 'Choose your current level of study.' })
      .str('password', { min: 8, max: 72, msg: 'Password must be at least 8 characters.' })
      .done();
    d.email = d.email.toLowerCase();
    if (await emailTaken(d.email)) return res.status(409).json({ error: 'An account with this email already exists. Please log in.', field: 'email' });
    const hash = await bcrypt.hash(d.password, 10);
    const r = await q(`INSERT INTO users (email, password_hash, role, full_name, phone, education_level, login_count, last_login_at)
                       VALUES (?, ?, 'student', ?, ?, ?, 1, NOW())`, [d.email, hash, d.name, d.phone, d.level]);
    const [user] = await q('SELECT * FROM users WHERE user_id = ?', [r.insertId]);
    await startSession(req, user);
    res.status(201).json({ user: publicUser(user) });
  } catch (e) { next(e); }
});

// ---- Institution registration + first scholarship submission (institution-form.html)
router.post('/register-institution', limiter, async (req, res, next) => {
  try {
    const i = validator(req.body)
      .str('instName', { min: 2, max: 160, msg: 'Please enter the institution name.' })
      .str('instType', { oneOf: INST_TYPES, msg: 'Choose an institution type.' })
      .str('website', { required: false, re: urlRe, msg: 'Enter a valid URL starting with http:// or https://' })
      .str('address', { min: 3, msg: 'Please enter the address.' })
      .str('city', { max: 80, msg: 'Please enter the city.' })
      .str('state', { max: 80, msg: 'Please enter the state.' })
      .str('contact', { max: 120, msg: 'Please enter a contact person.' })
      .str('email', { max: 160, re: emailRe, msg: 'Enter a valid email address.' })
      .str('phone', { re: phoneRe, msg: 'Enter a valid 10-digit phone number.' })
      .str('password', { min: 8, max: 72, msg: 'Password must be at least 8 characters.' })
      .done();
    const s = validateSubmission(req.body);
    i.email = i.email.toLowerCase();
    if (await emailTaken(i.email)) return res.status(409).json({ error: 'An account with this email already exists. Please log in.', field: 'email' });
    const hash = await bcrypt.hash(i.password, 10);
    const userId = await tx(async (c) => {
      const [u] = await c.execute(`INSERT INTO users (email, password_hash, role, full_name, phone, login_count, last_login_at)
                                   VALUES (?, ?, 'institution', ?, ?, 1, NOW())`, [i.email, hash, i.contact, i.phone]);
      const [inst] = await c.execute(`INSERT INTO institutions (user_id, name, institution_type, website, address, city, state, contact_person, email, phone)
                                      VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [u.insertId, i.instName, i.instType, i.website, i.address, i.city, i.state, i.contact, i.email, i.phone]);
      await insertSubmission(c, inst.insertId, s);
      return u.insertId;
    });
    const [user] = await q('SELECT * FROM users WHERE user_id = ?', [userId]);
    await startSession(req, user);
    res.status(201).json({ user: publicUser(user) });
  } catch (e) { next(e); }
});

function validateSubmission(body) {
  return validator(body)
    .str('schName', { min: 3, max: 200, msg: 'Please enter the scholarship name.' })
    .num('amount', { min: 0, max: 1e9, msg: 'Enter a valid amount.' })
    .num('recipients', { min: 1, max: 1e6, msg: 'Enter at least 1 recipient.' })
    .date('deadline', { future: true, msg: 'Pick a deadline that is not in the past.' })
    .str('level', { oneOf: LEVELS, msg: 'Choose an education level.' })
    .str('fields', { max: 255, msg: 'Enter the eligible fields of study.' })
    .num('minScore', { min: 0, max: 100, msg: 'Minimum score must be 0-100.' })
    .num('maxIncome', { min: 0, max: 1e10, msg: 'Enter a valid income limit.' })
    .str('location', { required: false })
    .str('other', { required: false })
    .str('docs', { required: false })
    .str('link', { required: false, re: urlRe, msg: 'Enter a valid application link.' })
    .str('description', { min: 10, max: 5000, msg: 'Please describe the scholarship (10+ characters).' })
    .done();
}

async function insertSubmission(conn, institutionId, s) {
  await conn.execute(`INSERT INTO scholarship_submissions (institution_id, name, amount_inr, num_awards, deadline, education_level,
                        fields, min_percentage, max_income_inr, location, other_criteria, documents, apply_link, description)
                      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [institutionId, s.schName, s.amount, s.recipients, s.deadline, s.level, s.fields, s.minScore, s.maxIncome,
     s.location, s.other, s.docs, s.link, s.description]);
}

// ---- Login (login.html). role = 'student' | 'institution' (admins may use either tab)
router.post('/login', limiter, async (req, res, next) => {
  try {
    const d = validator(req.body)
      .str('email', { re: emailRe, msg: 'Enter a valid email address.' })
      .str('password', { max: 200, msg: 'Please enter your password.' })
      .str('role', { required: false, oneOf: ['student', 'institution'] })
      .done();
    const [user] = await q('SELECT * FROM users WHERE email = ?', [d.email.toLowerCase()]);
    const ok = user && (await bcrypt.compare(d.password, user.password_hash));
    if (!ok) return res.status(401).json({ error: 'Incorrect email or password.' });
    if (!user.is_active) return res.status(403).json({ error: 'This account has been deactivated. Please contact the site admin.' });
    if (d.role && user.role !== 'admin' && user.role !== d.role) {
      return res.status(403).json({ error: `This is a${user.role === 'institution' ? 'n institution' : ' student'} account - use the ${user.role === 'institution' ? 'Institution' : 'Student'} Login tab.` });
    }
    await q('UPDATE users SET last_login_at = NOW(), login_count = login_count + 1 WHERE user_id = ?', [user.user_id]);
    await startSession(req, user);
    res.json({ user: publicUser(user) });
  } catch (e) { next(e); }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => { res.clearCookie('sc.sid'); res.json({ ok: true }); });
});

router.get('/me', async (req, res, next) => {
  try {
    if (!req.session.userId) return res.json({ user: null });
    const [user] = await q('SELECT * FROM users WHERE user_id = ? AND is_active = 1', [req.session.userId]);
    if (!user) { req.session.destroy(() => {}); return res.json({ user: null }); }
    res.json({ user: publicUser(user) });
  } catch (e) { next(e); }
});

module.exports = { router, validateSubmission, insertSubmission };
