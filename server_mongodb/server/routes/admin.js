/** /api/admin - manage registered users and submissions (admins only) */
const express = require('express');
const bcrypt = require('bcryptjs');
const { User, Institution, Submission, StudentProfile, SavedScholarship, Scholarship } = require('../models');
const { Session } = require('../lib/sessionStore');
const { requireLogin, isId } = require('../lib/auth');
const { submissionRow } = require('../lib/rows');
const { deleteAccount } = require('../lib/accounts');

const router = express.Router();
router.use(requireLogin('admin'));

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const badId = (res) => res.status(400).json({ error: 'Bad id.' });

router.get('/stats', async (req, res, next) => {
  try {
    const weekAgo = new Date(Date.now() - 7 * 24 * 3600 * 1000);
    const [users, students, institutions, newThisWeek, profiles, pending, scholarships] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: 'student' }),
      User.countDocuments({ role: 'institution' }),
      User.countDocuments({ created_at: { $gte: weekAgo } }),
      StudentProfile.countDocuments(),
      Submission.countDocuments({ status: 'Pending' }),
      Scholarship.countDocuments(),
    ]);
    res.json({ users, students, institutions, new_this_week: newThisWeek, profiles, pending_submissions: pending, scholarships });
  } catch (e) { next(e); }
});

router.get('/users', async (req, res, next) => {
  try {
    const search = String(req.query.q || '').trim();
    const role = ['student', 'institution', 'admin'].includes(req.query.role) ? req.query.role : null;
    const filter = {};
    if (role) filter.role = role;
    if (search) {
      const re = new RegExp(escapeRe(search), 'i');
      const instUsers = await Institution.distinct('user', { name: re });      // search by institution name too
      filter.$or = [{ full_name: re }, { email: re }, ...(instUsers.length ? [{ _id: { $in: instUsers } }] : [])];
    }
    const users = await User.find(filter).sort({ created_at: -1 }).limit(500).lean();
    const ids = users.map((u) => u._id);
    const [insts, profiles, saved] = await Promise.all([
      Institution.find({ user: { $in: ids } }).lean(),
      StudentProfile.find({ user: { $in: ids } }).select('user').lean(),
      SavedScholarship.aggregate([{ $match: { user: { $in: ids } } }, { $group: { _id: '$user', n: { $sum: 1 } } }]),
    ]);
    const instBy = new Map(insts.map((i) => [String(i.user), i]));
    const hasProfile = new Set(profiles.map((p) => String(p.user)));
    const savedBy = new Map(saved.map((x) => [String(x._id), x.n]));
    res.json({ users: users.map((u) => {
      const i = instBy.get(String(u._id));
      return { user_id: String(u._id), full_name: u.full_name, email: u.email, role: u.role, phone: u.phone,
        education_level: u.education_level, is_active: u.is_active ? 1 : 0, created_at: u.created_at,
        last_login_at: u.last_login_at, login_count: u.login_count,
        institution_name: i ? i.name : null, institution_verified: i && i.is_verified ? 1 : 0,
        has_profile: hasProfile.has(String(u._id)) ? 1 : 0, saved_count: savedBy.get(String(u._id)) || 0 };
    }) });
  } catch (e) { next(e); }
});

router.patch('/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!isId(id)) return badId(res);
    if (id === req.session.userId) return res.status(400).json({ error: "You can't change your own admin account here." });
    const active = !!req.body.isActive;
    await User.updateOne({ _id: id }, { $set: { is_active: active } });
    if (!active) await Session.deleteMany({ userId: id });          // log them out everywhere
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.post('/users/:id/password', async (req, res, next) => {
  try {
    if (!isId(req.params.id)) return badId(res);
    const pw = String(req.body.password || '');
    if (pw.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    await User.updateOne({ _id: req.params.id }, { $set: { password_hash: await bcrypt.hash(pw, 10) } });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.delete('/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!isId(id)) return badId(res);
    if (id === req.session.userId) return res.status(400).json({ error: "You can't delete your own account." });
    await deleteAccount(id);                                        // profile, institution, saved items and sessions go too
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.patch('/institutions/:id/verify', async (req, res, next) => {
  try {
    if (!isId(req.params.id)) return badId(res);
    await Institution.updateOne({ _id: req.params.id }, { $set: { is_verified: !!req.body.verified } });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.get('/submissions', async (req, res, next) => {
  try {
    const subs = await Submission.find().sort({ submitted_at: -1 }).limit(500).lean();
    subs.sort((a, b) => (b.status === 'Pending') - (a.status === 'Pending'));       // Pending first, newest first inside each group
    const insts = await Institution.find({ _id: { $in: subs.map((s) => s.institution) } }).lean();
    const users = await User.find({ _id: { $in: insts.map((i) => i.user) } }).select('email').lean();
    const instBy = new Map(insts.map((i) => [String(i._id), i]));
    const emailBy = new Map(users.map((u) => [String(u._id), u.email]));
    res.json({ submissions: subs.map((s) => {
      const i = instBy.get(String(s.institution)) || {};
      return { ...submissionRow(s), institution_name: i.name, is_verified: i.is_verified ? 1 : 0, email: emailBy.get(String(i.user)) };
    }) });
  } catch (e) { next(e); }
});

router.patch('/submissions/:id', async (req, res, next) => {
  try {
    if (!isId(req.params.id)) return badId(res);
    const status = ['Pending', 'Approved', 'Rejected'].includes(req.body.status) ? req.body.status : null;
    if (!status) return res.status(400).json({ error: 'Status must be Pending, Approved or Rejected.' });
    const note = String(req.body.note || '').slice(0, 255) || null;
    await Submission.updateOne({ _id: req.params.id }, { $set: { status, reviewer_note: note, reviewed_at: new Date() } });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = router;
