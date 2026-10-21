const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

module.exports = {
  ROOT: path.join(__dirname, '..', '..'),            // project root (the website files)
  DB_DIR: path.join(__dirname, '..', '..', 'database'),
  port: Number(process.env.PORT || 3000),
  sessionSecret: process.env.SESSION_SECRET || 'dev-only-secret-change-me',
  // Local MongoDB (the same server MongoDB Compass connects to), or a MongoDB Atlas link
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/scholarconnect',
};
