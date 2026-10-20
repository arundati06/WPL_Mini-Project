/**
 * ScholarConnect server: serves the website and the account API on one port.
 *   cd server && npm install && npm run db:init && npm start   ->  http://localhost:3000
 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const config = require('./lib/config');
const { pool } = require('./lib/db');

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1);

// Basic security headers
app.use((req, res, next) => {
  res.set({ 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY', 'Referrer-Policy': 'same-origin' });
  next();
});

app.use(express.json({ limit: '100kb' }));

// Login sessions are stored in the MySQL `sessions` table
app.use(session({
  name: 'sc.sid',
  secret: config.sessionSecret,
  store: new MySQLStore({ createDatabaseTable: false, clearExpired: true, checkExpirationInterval: 15 * 60 * 1000 }, pool),
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 7 * 24 * 3600 * 1000 },
}));

// Request bodies must be JSON. HTML forms on other sites can only send form-encoded or text bodies,
// so this blocks cross-site form posts (CSRF). Requests without a body (e.g. DELETE) are fine.
app.use('/api', (req, res, next) => {
  if (!['GET', 'HEAD', 'OPTIONS'].includes(req.method) && req.headers['content-type'] && !req.is('application/json')) {
    return res.status(415).json({ error: 'Send JSON.' });
  }
  next();
});

const auth = require('./routes/auth');
app.use('/api/auth', auth.router);
app.use('/api', require('./routes/student'));
app.use('/api/institution', require('./routes/institution'));
app.use('/api/admin', require('./routes/admin'));
app.get('/api/health', async (req, res) => {
  try { await pool.query('SELECT 1'); res.json({ ok: true, db: 'connected' }); }
  catch (e) { res.status(503).json({ ok: false, db: 'not connected', error: e.message }); }
});
app.use('/api', (req, res) => res.status(404).json({ error: 'Not found.' }));

// Website files - only the public ones (never database/, server/, .env, etc.)
const PUBLIC = /^\/(?:[\w-]+\.html|css\/[\w./-]+|js\/[\w./-]+|assets\/[\w ./-]+)$/;
app.get('/', (req, res) => res.sendFile(path.join(config.ROOT, 'index.html')));
app.use((req, res, next) => {
  const p = decodeURIComponent(req.path);
  if (req.method !== 'GET' || !PUBLIC.test(p) || p.includes('..')) return next();
  const file = path.join(config.ROOT, p);
  fs.access(file, fs.constants.R_OK, (err) => (err ? next() : res.sendFile(file)));
});
app.use((req, res) => res.status(404).send('Not found'));

// Errors -> JSON
app.use((err, req, res, next) => {   // eslint-disable-line no-unused-vars
  if (err.status === 400 && err.errors) return res.status(400).json({ error: err.message, errors: err.errors });
  if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'That already exists.' });
  if (err.code === 'ECONNREFUSED' || err.code === 'ER_ACCESS_DENIED_ERROR' || err.code === 'ER_BAD_DB_ERROR') {
    return res.status(503).json({ error: 'Database is not available. Is MySQL running and set up (npm run db:init)?' });
  }
  console.error(err);
  res.status(err.status || 500).json({ error: err.status ? err.message : 'Something went wrong on the server.' });
});

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`ScholarConnect running at http://localhost:${config.port}`);
    pool.query('SELECT COUNT(*) AS n FROM users').then(([[r]]) => console.log(`Database connected - ${r.n} registered users.`))
      .catch((e) => console.log(`⚠ Database not ready: ${e.message}\n  Start MySQL and run: npm run db:init`));
  });
}

module.exports = app;
