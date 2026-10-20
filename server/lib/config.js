const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

module.exports = {
  ROOT: path.join(__dirname, '..', '..'),            // project root (the website files)
  DB_DIR: path.join(__dirname, '..', '..', 'database'),
  port: Number(process.env.PORT || 3000),
  sessionSecret: process.env.SESSION_SECRET || 'dev-only-secret-change-me',
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'scholarconnect',
  },
};
