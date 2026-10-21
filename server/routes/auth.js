/** /api/auth - register, login, logout, current user */
const express = require('express');
const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const { User, Institution, Submission } = require('../models');
const { validator, LEVELS, INST_TYPES, emailRe, phoneRe, urlRe } = require('../lib/validate');
const { publicUser, startSession, isId } = require('../lib/auth');

const router = express.Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many attempts. Please wait 15 minutes and try again.' } });

async function emailTaken(email) {
  return !!(await User.exists({ email }));
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
    const user = await User.create({ email: d.email, password_hash: hash, role: 'student', full_name: d.name,
      phone: d.phone, education_level: d.level, login_count: 1, last_login_at: new Date() });
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

    // Three documents are created one after another; if one fails, the earlier ones are removed again.
    let user, inst;
    try {
      user = await User.create({ email: i.email, password_hash: hash, role: 'institution', full_name: i.contact,
        phone: i.phone, login_count: 1, last_login_at: new Date() });
      inst = await Institution.create({ user: user._id, name: i.instName, institution_type: i.instType, website: i.website,
        address: i.address, city: i.city, state: i.state, contact_person: i.contact, email: i.email, phone: i.phone });
      await insertSubmission(inst._id, s);
    } catch (e) {
      if (inst) await Institution.deleteOne({ _id: inst._id });
      if (user) await User.deleteOne({ _id: user._id });
      throw e;
    }
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

async function insertSubmission(institutionId, s) {
  return Submission.create({ institution: institutionId, name: s.schName, amount_inr: s.amount, num_awards: s.recipients,
    deadline: s.deadline, education_level: s.level, eligible_fields: s.fields, min_percentage: s.minScore,
    max_income_inr: s.maxIncome, location: s.location, other_criteria: s.other, documents: s.docs,
    apply_link: s.link, description: s.description });
}

// ---- Login (login.html). role = 'student' | 'institution' (admins may use either tab)
router.post('/login', limiter, async (req, res, next) => {
  try {
    const d = validator(req.body)
      .str('email', { re: emailRe, msg: 'Enter a valid email address.' })
      .str('password', { max: 200, msg: 'Please enter your password.' })
      .str('role', { required: false, oneOf: ['student', 'institution'] })
      .done();
    const user = await User.findOne({ email: d.email.toLowerCase() }).lean();
    const ok = user && (await bcrypt.compare(d.password, user.password_hash));
    if (!ok) return res.status(401).json({ error: 'Incorrect email or password.' });
    if (!user.is_active) return res.status(403).json({ error: 'This account has been deactivated. Please contact the site admin.' });
    if (d.role && user.role !== 'admin' && user.role !== d.role) {
      return res.status(403).json({ error: `This is a${user.role === 'institution' ? 'n institution' : ' student'} account - use the ${user.role === 'institution' ? 'Institution' : 'Student'} Login tab.` });
    }
    await User.updateOne({ _id: user._id }, { $set: { last_login_at: new Date() }, $inc: { login_count: 1 } });
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
    const user = isId(req.session.userId) ? await User.findOne({ _id: req.session.userId, is_active: true }).lean() : null;
    if (!user) { req.session.destroy(() => {}); return res.json({ user: null }); }
    res.json({ user: publicUser(user) });
  } catch (e) { next(e); }
});

module.exports = { router, validateSubmission, insertSubmission };
