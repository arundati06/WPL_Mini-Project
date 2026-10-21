/**
 * End-to-end check of the account system. Starts the server on a spare port, registers test
 * accounts, exercises every endpoint, then deletes the test accounts again.
 *   npm test        (MongoDB must be running and `npm run db:init` done once)
 */
const assert = require('assert');
const bcrypt = require('bcryptjs');
const app = require('../server');
const { connect, disconnect } = require('../lib/db');
const { User } = require('../models');
const { deleteAccount } = require('../lib/accounts');

const stamp = Date.now();
const created = [];
let passed = 0;

function client(base) {
  let cookie = '';
  return async (method, path, body) => {
    const res = await fetch(base + path, {
      method, redirect: 'manual',
      headers: { ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}), ...(cookie ? { Cookie: cookie } : {}) },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const set = res.headers.get('set-cookie');
    if (set) cookie = set.split(';')[0];
    let data = null;
    try { data = await res.json(); } catch (_) { /* not json */ }
    return { status: res.status, data };
  };
}

async function check(name, fn) {
  try { await fn(); passed++; console.log('  ✓', name); }
  catch (e) { console.log('  ✗', name, '-', e.message); process.exitCode = 1; }
}

(async () => {
  await connect();
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const student = client(base), inst = client(base), admin = client(base), anon = client(base);
  const sEmail = `test.student.${stamp}@example.com`, iEmail = `test.inst.${stamp}@example.com`, aEmail = `test.admin.${stamp}@example.com`;
  const future = new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10);
  console.log('ScholarConnect smoke test');

  await check('health: database connected', async () => {
    const r = await anon('GET', '/api/health'); assert.equal(r.status, 200); assert.equal(r.data.db, 'connected');
  });
  await check('website pages are served', async () => {
    for (const p of ['/', '/index.html', '/login.html', '/js/data.js', '/css/style.css']) assert.equal((await fetch(base + p)).status, 200, p);
  });
  await check('private files are NOT served (.env, database, server code)', async () => {
    for (const p of ['/server/.env', '/database/fetch/.env', '/database/db.json', '/server/server.js', '/.git/config', '/js/../server/.env'])
      assert.equal((await fetch(base + p)).status, 404, p);
  });
  await check('register validation rejects bad input', async () => {
    const r = await anon('POST', '/api/auth/register', { name: 'A', email: 'bad', level: 'x', password: '123' });
    assert.equal(r.status, 400); assert.ok(r.data.errors.email && r.data.errors.password);
  });
  await check('student can register (and is logged in)', async () => {
    const r = await student('POST', '/api/auth/register', { name: 'Test Student', email: sEmail, phone: '9876543210', level: 'Undergraduate', password: 'secret123' });
    assert.equal(r.status, 201); created.push(r.data.user.id);
    assert.equal((await student('GET', '/api/auth/me')).data.user.email, sEmail);
  });
  await check('password is stored as a bcrypt hash', async () => {
    const u = await User.findOne({ email: sEmail }).lean();
    assert.ok(u.password_hash.startsWith('$2') && (await bcrypt.compare('secret123', u.password_hash)));
  });
  await check('duplicate email is refused', async () => {
    const r = await anon('POST', '/api/auth/register', { name: 'Again', email: sEmail.toUpperCase(), level: 'Undergraduate', password: 'secret123' });
    assert.equal(r.status, 409);
  });
  await check('wrong password is refused', async () => {
    assert.equal((await anon('POST', '/api/auth/login', { email: sEmail, password: 'nope-nope', role: 'student' })).status, 401);
  });
  await check('student cannot log in on the institution tab', async () => {
    assert.equal((await anon('POST', '/api/auth/login', { email: sEmail, password: 'secret123', role: 'institution' })).status, 403);
  });
  await check('student saves eligibility profile', async () => {
    const r = await student('PUT', '/api/profile', { name: 'Test Student', age: 19, gender: 'Female', state: 'Maharashtra', city: 'Mumbai',
      category: 'General', level: 'Undergraduate', institute: 'X', course: 'B.Tech', field: 'Computer Science', year: '2nd Year',
      score: 85, income: 500000, incomeBracket: '₹3,00,000 – ₹6,00,000', assist: 'yes', firstGen: 'no', disability: 'no',
      sports: 'no', academic: 'no', extra: 'no', govt: 'no', special: '' });
    assert.equal(r.status, 200);
    assert.equal((await student('GET', '/api/profile')).data.profile.field_of_study, 'Computer Science');
  });
  await check('saving the profile twice updates it (still one profile)', async () => {
    const body = { name: 'Test Student', age: 20, gender: 'Female', state: 'Maharashtra', city: 'Mumbai',
      category: 'General', level: 'Undergraduate', institute: 'X', course: 'B.Tech', field: 'Computer Science', year: '3rd Year',
      score: 85, income: 500000, incomeBracket: 'x', assist: 'yes', firstGen: 'no', disability: 'no',
      sports: 'no', academic: 'no', extra: 'no', govt: 'no', special: '' };
    assert.equal((await student('PUT', '/api/profile', body)).status, 200);
    assert.equal((await student('GET', '/api/profile')).data.profile.age, 20);
  });
  await check('matches are worked out from the saved profile', async () => {
    const r = await student('GET', '/api/matches');
    assert.equal(r.status, 200); assert.ok(r.data.matches.length > 0, 'expected matches');
    assert.ok(r.data.matches.every((m) => m.score >= 0 && m.score <= 100));
  });
  await check('saved scholarships: add, list, remove', async () => {
    assert.equal((await student('POST', '/api/saved/1', {})).status, 200);
    assert.deepEqual((await student('GET', '/api/saved')).data.ids, [1]);
    assert.equal((await student('POST', '/api/saved/1', {})).status, 200);          // saving twice is fine
    assert.deepEqual((await student('GET', '/api/saved')).data.ids, [1]);
    assert.equal((await student('POST', '/api/saved/999999', {})).status, 404);
    await student('DELETE', '/api/saved/1');
    assert.deepEqual((await student('GET', '/api/saved')).data.ids, []);
    await student('POST', '/api/saved/1', {});
  });
  await check('non-JSON posts are refused (CSRF guard)', async () => {
    const r = await fetch(base + '/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'email=a&password=b' });
    assert.equal(r.status, 415);
  });
  await check('institution registers with a scholarship submission', async () => {
    const r = await inst('POST', '/api/auth/register-institution', { instName: 'Test College', instType: 'College / University',
      website: 'https://college.example.org', address: '1 Road', city: 'Pune', state: 'Maharashtra', contact: 'Test Contact',
      email: iEmail, phone: '9123456780', password: 'secret123', schName: 'Test Merit Award', amount: 50000, recipients: 10,
      deadline: future, level: 'Undergraduate', fields: 'Engineering', minScore: 70, maxIncome: 600000, description: 'A test scholarship for the smoke test.' });
    assert.equal(r.status, 201, JSON.stringify(r.data)); created.push(r.data.user.id);
    const me = await inst('GET', '/api/institution/me');
    assert.equal(me.data.submissions.length, 1); assert.equal(me.data.submissions[0].status, 'Pending');
    assert.equal(me.data.submissions[0].fields, 'Engineering');
    assert.equal(me.data.institution.name, 'Test College');
  });
  await check('students cannot open institution or admin APIs', async () => {
    assert.equal((await student('GET', '/api/institution/me')).status, 403);
    assert.equal((await student('GET', '/api/admin/users')).status, 403);
    assert.equal((await anon('GET', '/api/admin/users')).status, 401);
  });
  await check('admin can list users, review submissions, deactivate', async () => {
    const hash = await bcrypt.hash('adminpass1', 10);
    const a = await User.create({ email: aEmail, password_hash: hash, role: 'admin', full_name: 'Test Admin' });
    created.push(String(a._id));
    assert.equal((await admin('POST', '/api/auth/login', { email: aEmail, password: 'adminpass1', role: 'student' })).status, 200);
    const users = (await admin('GET', '/api/admin/users?q=' + stamp)).data.users;
    assert.equal(users.length, 3);
    const subs = (await admin('GET', '/api/admin/submissions')).data.submissions;
    const mine = subs.find((s) => s.email === iEmail);
    assert.equal((await admin('PATCH', '/api/admin/submissions/' + mine.submission_id, { status: 'Approved', note: 'Looks good' })).status, 200);
    assert.equal((await inst('GET', '/api/institution/me')).data.submissions[0].status, 'Approved');
    const sid = users.find((u) => u.email === sEmail).user_id;
    await admin('PATCH', '/api/admin/users/' + sid, { isActive: false });
    assert.equal((await student('GET', '/api/auth/me')).data.user, null, 'deactivated user should be logged out');
    assert.equal((await anon('POST', '/api/auth/login', { email: sEmail, password: 'secret123' })).status, 403);
    await admin('PATCH', '/api/admin/users/' + sid, { isActive: true });
    assert.equal((await (await admin('GET', '/api/admin/stats')).data).users >= 3, true);
  });
  await check('logout ends the session', async () => {
    await inst('POST', '/api/auth/logout', {});
    assert.equal((await inst('GET', '/api/auth/me')).data.user, null);
  });

  // clean up test accounts (profiles, institutions, submissions, saved items and sessions go with them)
  for (const id of created) await deleteAccount(id);
  console.log(`\n${passed} checks passed${process.exitCode ? ', some FAILED' : ''}. Test accounts removed.`);
  server.close(); await disconnect();
  process.exit(process.exitCode || 0);
})().catch(async (e) => { console.error('✗', e.message); process.exitCode = 1; try { await disconnect(); } catch (_) { /* ignore */ } process.exit(1); });
