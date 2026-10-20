/** /api/admin - manage registered users and submissions (admins only) */
const express = require('express');
const bcrypt = require('bcryptjs');
const { q } = require('../lib/db');
const { requireLogin } = require('../lib/auth');

const router = express.Router();
router.use(requireLogin('admin'));

router.get('/stats', async (req, res, next) => {
  try {
    const [s] = await q(`SELECT
        (SELECT COUNT(*) FROM users) AS users,
        (SELECT COUNT(*) FROM users WHERE role = 'student') AS students,
        (SELECT COUNT(*) FROM users WHERE role = 'institution') AS institutions,
        (SELECT COUNT(*) FROM users WHERE created_at >= NOW() - INTERVAL 7 DAY) AS new_this_week,
        (SELECT COUNT(*) FROM students) AS profiles,
        (SELECT COUNT(*) FROM scholarship_submissions WHERE status = 'Pending') AS pending_submissions,
        (SELECT COUNT(*) FROM scholarships) AS scholarships`);
    res.json(s);
  } catch (e) { next(e); }
});

router.get('/users', async (req, res, next) => {
  try {
    const search = `%${String(req.query.q || '').trim()}%`;
    const role = ['student', 'institution', 'admin'].includes(req.query.role) ? req.query.role : null;
    const rows = await q(`SELECT * FROM v_registered_users
                          WHERE (full_name LIKE ? OR email LIKE ? OR IFNULL(institution_name, '') LIKE ?)
                            AND (? IS NULL OR role = ?)
                          ORDER BY created_at DESC LIMIT 500`, [search, search, search, role, role]);
    res.json({ users: rows });
  } catch (e) { next(e); }
});

router.patch('/users/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (id === req.session.userId) return res.status(400).json({ error: "You can't change your own admin account here." });
    const active = req.body.isActive ? 1 : 0;
    await q('UPDATE users SET is_active = ? WHERE user_id = ?', [active, id]);
    if (!active) await q("DELETE FROM sessions WHERE data LIKE ?", [`%"userId":${id},%`]);   // log them out everywhere
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.post('/users/:id/password', async (req, res, next) => {
  try {
    const pw = String(req.body.password || '');
    if (pw.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    await q('UPDATE users SET password_hash = ? WHERE user_id = ?', [await bcrypt.hash(pw, 10), Number(req.params.id)]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.delete('/users/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (id === req.session.userId) return res.status(400).json({ error: "You can't delete your own account." });
    await q('DELETE FROM users WHERE user_id = ?', [id]);   // profile, institution, saved items cascade
    await q("DELETE FROM sessions WHERE data LIKE ?", [`%"userId":${id},%`]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.patch('/institutions/:id/verify', async (req, res, next) => {
  try {
    await q('UPDATE institutions SET is_verified = ? WHERE institution_id = ?', [req.body.verified ? 1 : 0, Number(req.params.id)]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.get('/submissions', async (req, res, next) => {
  try {
    const rows = await q(`SELECT s.*, i.name AS institution_name, i.institution_id, i.is_verified, u.email
                          FROM scholarship_submissions s
                          JOIN institutions i ON i.institution_id = s.institution_id
                          JOIN users u ON u.user_id = i.user_id
                          ORDER BY s.status = 'Pending' DESC, s.submitted_at DESC LIMIT 500`);
    res.json({ submissions: rows });
  } catch (e) { next(e); }
});

router.patch('/submissions/:id', async (req, res, next) => {
  try {
    const status = ['Pending', 'Approved', 'Rejected'].includes(req.body.status) ? req.body.status : null;
    if (!status) return res.status(400).json({ error: 'Status must be Pending, Approved or Rejected.' });
    const note = String(req.body.note || '').slice(0, 255) || null;
    await q('UPDATE scholarship_submissions SET status = ?, reviewer_note = ?, reviewed_at = NOW() WHERE submission_id = ?',
            [status, note, Number(req.params.id)]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
