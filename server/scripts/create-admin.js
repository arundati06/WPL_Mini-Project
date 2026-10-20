/**
 * Create (or reset the password of) an admin account.
 *   npm run create-admin                       -> asks for name, email and password
 *   node scripts/create-admin.js you@mail.com "Your Name"   -> asks only for the password
 */
const readline = require('readline');
const bcrypt = require('bcryptjs');
const { pool, q } = require('../lib/db');

function ask(question, hidden = false) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (hidden) {
      rl._writeToOutput = (s) => { if (s.includes(question)) rl.output.write(s); else rl.output.write('*'); };
    }
    rl.question(question, (a) => { rl.close(); if (hidden) process.stdout.write('\n'); resolve(a.trim()); });
  });
}

(async () => {
  let [email, name] = process.argv.slice(2);
  if (!email) email = await ask('Admin email: ');
  if (!name) name = await ask('Admin name: ');
  const pw = process.env.ADMIN_PASSWORD || await ask('Password (min 8 characters): ', true);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('That email address is not valid.');
  if (pw.length < 8) throw new Error('Password must be at least 8 characters.');
  const hash = await bcrypt.hash(pw, 10);
  const existing = await q('SELECT user_id FROM users WHERE email = ?', [email.toLowerCase()]);
  if (existing.length) {
    await q("UPDATE users SET password_hash = ?, role = 'admin', is_active = 1, full_name = ? WHERE user_id = ?",
            [hash, name || 'Admin', existing[0].user_id]);
    console.log(`Updated ${email}: it is now an admin with the new password.`);
  } else {
    await q("INSERT INTO users (email, password_hash, role, full_name) VALUES (?, ?, 'admin', ?)",
            [email.toLowerCase(), hash, name || 'Admin']);
    console.log(`Created admin account ${email}. Log in at /login.html, then open /admin.html.`);
  }
  await pool.end();
})().catch(async (e) => { console.error('✗', e.message); await pool.end(); process.exit(1); });
