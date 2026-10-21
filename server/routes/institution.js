/** /api/institution - for logged-in institutions */
const express = require('express');
const { Institution, Submission } = require('../models');
const { requireLogin } = require('../lib/auth');
const { institutionRow, submissionRow } = require('../lib/rows');
const { validateSubmission, insertSubmission } = require('./auth');

const router = express.Router();
const inst = requireLogin('institution');

router.get('/me', inst, async (req, res, next) => {
  try {
    const institution = await Institution.findOne({ user: req.session.userId }).lean();
    const submissions = institution
      ? await Submission.find({ institution: institution._id }).sort({ submitted_at: -1 }).lean()
      : [];
    res.json({ institution: institution ? institutionRow(institution) : null, submissions: submissions.map(submissionRow) });
  } catch (e) { next(e); }
});

router.post('/submissions', inst, async (req, res, next) => {
  try {
    const s = validateSubmission(req.body);
    const institution = await Institution.findOne({ user: req.session.userId }).lean();
    if (!institution) return res.status(400).json({ error: 'No institution profile on this account.' });
    await insertSubmission(institution._id, s);
    res.status(201).json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
