const mysql = require('mysql2/promise');
const { db } = require('./config');

const pool = mysql.createPool({
  ...db,
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true,       // return DATE/DATETIME as plain strings
  charset: 'utf8mb4',
});

/** Run a query and return rows. */
async function q(sql, params = []) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

/** Run several statements in one transaction. fn receives a connection. */
async function tx(fn) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const out = await fn(conn);
    await conn.commit();
    return out;
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
}

module.exports = { pool, q, tx };
