/** /api/profile, /api/matches, /api/saved - for logged-in students */
const express = require('express');
const { q, pool } = require('../lib/db');
const { validator, LEVELS, GENDERS, SOCIAL } = require('../lib/validate');
const { requireLogin } = require('../lib/auth');

const router = express.Router();
const student = requireLogin('student');

const COLS = ['full_name', 'age', 'gender', 'state', 'city', 'domicile_state', 'social_category', 'education_level',
  'institute_name', 'course', 'field_of_study', 'year_of_study', 'percentage', 'annual_family_income', 'income_bracket',
  'needs_financial_aid', 'first_gen_learner', 'has_disability', 'sports_achievement', 'academic_achievement',
  'extracurricular', 'parent_govt_employee', 'special_category'];

// Save the eligibility form (student-form.html) to the account
router.put('/profile', student, async (req, res, next) => {
  try {
    const d = validator(req.body)
      .str('name', { min: 2, max: 120 }).num('age', { min: 10, max: 80 })
      .str('gender', { oneOf: GENDERS }).str('state', { max: 80 }).str('city', { max: 80 })
      .str('domicile', { required: false, max: 80 }).str('category', { oneOf: SOCIAL })
      .str('level', { oneOf: LEVELS }).str('institute', { max: 160 }).str('course', { max: 80 })
      .str('field', { max: 80 }).str('year', { max: 20 })
      .num('score', { min: 0, max: 100 }).num('income', { min: 0, max: 1e10 }).str('incomeBracket', { max: 40 })
      .yesno('assist').yesno('firstGen').yesno('disability').yesno('sports').yesno('academic').yesno('extra').yesno('govt')
      .str('special', { required: false, max: 60 })
      .done();
    const vals = [d.name, d.age, d.gender, d.state, d.city, d.domicile || d.state, d.category, d.level, d.institute, d.course,
      d.field, d.year, d.score, d.income, d.incomeBracket, d.assist, d.firstGen, d.disability, d.sports, d.academic,
      d.extra, d.govt, d.special || null];
    await q(`INSERT INTO students (user_id, ${COLS.join(', ')}) VALUES (?, ${COLS.map(() => '?').join(', ')})
             ON DUPLICATE KEY UPDATE ${COLS.map((c) => `${c} = VALUES(${c})`).join(', ')}`, [req.session.userId, ...vals]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.get('/profile', student, async (req, res, next) => {
  try {
    const [p] = await q('SELECT * FROM students WHERE user_id = ?', [req.session.userId]);
    res.json({ profile: p || null });
  } catch (e) { next(e); }
});

// Matches computed inside MySQL by the sp_match_scholarships stored procedure
router.get('/matches', student, async (req, res, next) => {
  try {
    const [p] = await q('SELECT 1 FROM students WHERE user_id = ?', [req.session.userId]);
    if (!p) return res.json({ matches: [], needsProfile: true });
    const [sets] = await pool.query('CALL sp_match_scholarships(?)', [req.session.userId]);
    const rows = Array.isArray(sets[0]) ? sets[0] : sets;
    res.json({ matches: rows.filter((r) => Number(r.eligible) === 1).map((r) => ({
      id: r.scholarship_id, name: r.name, scope: r.scope, category: r.category, score: Number(r.match_score),
      amount: r.amount_inr, amountNote: r.amount_note, deadline: r.deadline, deadlineNote: r.deadline_note, officialUrl: r.official_url })) });
  } catch (e) { next(e); }
});

// Saved scholarships (heart button)
router.get('/saved', student, async (req, res, next) => {
  try {
    const rows = await q('SELECT scholarship_id FROM saved_scholarships WHERE user_id = ? ORDER BY saved_at', [req.session.userId]);
    res.json({ ids: rows.map((r) => r.scholarship_id) });
  } catch (e) { next(e); }
});

router.post('/saved/:id', student, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: 'Bad scholarship id.' });
    const [s] = await q('SELECT 1 FROM scholarships WHERE scholarship_id = ?', [id]);
    if (!s) return res.status(404).json({ error: 'Scholarship not found.' });
    await q('INSERT IGNORE INTO saved_scholarships (user_id, scholarship_id) VALUES (?, ?)', [req.session.userId, id]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.delete('/saved/:id', student, async (req, res, next) => {
  try {
    await q('DELETE FROM saved_scholarships WHERE user_id = ? AND scholarship_id = ?', [req.session.userId, Number(req.params.id)]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
