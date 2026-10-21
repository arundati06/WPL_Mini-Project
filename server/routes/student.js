/** /api/profile, /api/matches, /api/saved - for logged-in students */
const express = require('express');
const { StudentProfile, SavedScholarship, Scholarship } = require('../models');
const { validator, LEVELS, GENDERS, SOCIAL } = require('../lib/validate');
const { requireLogin } = require('../lib/auth');
const { matchScholarships } = require('../lib/match');

const router = express.Router();
const student = requireLogin('student');

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
    const profile = {
      full_name: d.name, age: d.age, gender: d.gender, state: d.state, city: d.city, domicile_state: d.domicile || d.state,
      social_category: d.category, education_level: d.level, institute_name: d.institute, course: d.course,
      field_of_study: d.field, year_of_study: d.year, percentage: d.score, annual_family_income: d.income,
      income_bracket: d.incomeBracket, needs_financial_aid: d.assist, first_gen_learner: d.firstGen,
      has_disability: d.disability, sports_achievement: d.sports, academic_achievement: d.academic,
      extracurricular: d.extra, parent_govt_employee: d.govt, special_category: d.special || null,
      updated_at: new Date(),
    };
    // one profile per user: update it, or create it the first time
    await StudentProfile.updateOne({ user: req.session.userId }, { $set: profile }, { upsert: true, runValidators: true });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.get('/profile', student, async (req, res, next) => {
  try {
    const p = await StudentProfile.findOne({ user: req.session.userId }).lean();
    res.json({ profile: p || null });
  } catch (e) { next(e); }
});

// Matches are worked out in Node (lib/match.js) from the saved profile and the scholarships collection
router.get('/matches', student, async (req, res, next) => {
  try {
    const p = await StudentProfile.findOne({ user: req.session.userId }).lean();
    if (!p) return res.json({ matches: [], needsProfile: true });
    const all = await Scholarship.find({ dataSource: 'manual' }).lean();
    res.json({ matches: matchScholarships(p, all) });
  } catch (e) { next(e); }
});

// Saved scholarships (heart button)
router.get('/saved', student, async (req, res, next) => {
  try {
    const rows = await SavedScholarship.find({ user: req.session.userId }).sort({ saved_at: 1 }).lean();
    res.json({ ids: rows.map((r) => r.scholarship_id) });
  } catch (e) { next(e); }
});

router.post('/saved/:id', student, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: 'Bad scholarship id.' });
    if (!(await Scholarship.exists({ scholarship_id: id }))) return res.status(404).json({ error: 'Scholarship not found.' });
    await SavedScholarship.updateOne({ user: req.session.userId, scholarship_id: id },
      { $setOnInsert: { saved_at: new Date() } }, { upsert: true });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.delete('/saved/:id', student, async (req, res, next) => {
  try {
    await SavedScholarship.deleteOne({ user: req.session.userId, scholarship_id: Number(req.params.id) });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
