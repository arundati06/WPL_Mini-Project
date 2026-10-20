/**
 * Create / update the ScholarConnect MySQL database.
 *   npm run db:init          -> scholarship content (schema.sql + seed.sql) + accounts (accounts.sql)
 *   npm run db:content       -> only refresh scholarship content (accounts untouched)
 *   node scripts/db-init.js --accounts   -> only the account tables
 * Accounts are never deleted: accounts.sql only uses CREATE ... IF NOT EXISTS.
 */
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const { db, DB_DIR } = require('../lib/config');
const { splitSql } = require('../lib/sqlfile');

async function runFile(conn, file) {
  const stmts = splitSql(fs.readFileSync(path.join(DB_DIR, file), 'utf8'));
  for (const s of stmts) await conn.query(s);
  console.log(`  ✓ ${file} (${stmts.length} statements)`);
}

async function main() {
  const onlyAccounts = process.argv.includes('--accounts');
  const { database, ...server } = db;
  let conn;
  try {
    conn = await mysql.createConnection({ ...server, charset: 'utf8mb4' });
  } catch (e) {
    console.error(`\n✗ Could not connect to MySQL at ${server.host}:${server.port} as "${server.user}".`);
    console.error('  Is MySQL running (XAMPP: start MySQL)? Are DB_USER / DB_PASSWORD in server/.env right?');
    console.error('  Details:', e.message);
    process.exit(1);
  }
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  await conn.query(`USE \`${database}\``);

  // Older versions of this project had a users table without names; it never held real accounts.
  const [legacy] = await conn.query(
    `SELECT COUNT(*) AS n FROM information_schema.tables t
      WHERE t.table_schema = ? AND t.table_name = 'users'
        AND NOT EXISTS (SELECT 1 FROM information_schema.columns c
                         WHERE c.table_schema = t.table_schema AND c.table_name = 'users' AND c.column_name = 'full_name')`,
    [database]);
  if (legacy[0].n) {
    console.log('  • removing empty account tables from an older version of this project');
    await conn.query('SET FOREIGN_KEY_CHECKS = 0');
    for (const t of ['applications', 'saved_scholarships', 'students', 'users']) await conn.query(`DROP TABLE IF EXISTS ${t}`);
    await conn.query('SET FOREIGN_KEY_CHECKS = 1');
  }

  console.log(`Setting up database "${database}" ...`);
  if (!onlyAccounts) { await runFile(conn, 'schema.sql'); await runFile(conn, 'seed.sql'); }
  await runFile(conn, 'accounts.sql');   // tables are IF NOT EXISTS; views/procedure refreshed

  const [[c]] = await conn.query('SELECT (SELECT COUNT(*) FROM scholarships) AS scholarships, (SELECT COUNT(*) FROM users) AS users');
  console.log(`Done: ${c.scholarships} scholarships, ${c.users} registered users.`);
  await conn.end();
}

main().catch((e) => { console.error('✗', e.message); process.exit(1); });
