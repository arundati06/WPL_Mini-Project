/** /api/institution - for logged-in institutions */
const express = require('express');
const { q, pool } = require('../lib/db');
const { requireLogin } = require('../lib/auth');
const { validateSubmission, insertSubmission } = require('./auth');

const router = express.Router();
const inst = requireLogin('institution');

router.get('/me', inst, async (req, res, next) => {
  try {
    const [institution] = await q('SELECT * FROM institutions WHERE user_id = ?', [req.session.userId]);
    const submissions = institution
      ? await q('SELECT * FROM scholarship_submissions WHERE institution_id = ? ORDER BY submitted_at DESC', [institution.institution_id])
      : [];
    res.json({ institution: institution || null, submissions });
  } catch (e) { next(e); }
});

router.post('/submissions', inst, async (req, res, next) => {
  try {
    const s = validateSubmission(req.body);
    const [institution] = await q('SELECT institution_id FROM institutions WHERE user_id = ?', [req.session.userId]);
    if (!institution) return res.status(400).json({ error: 'No institution profile on this account.' });
    const conn = await pool.getConnection();
    try { await insertSubmission(conn, institution.institution_id, s); } finally { conn.release(); }
    res.status(201).json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
