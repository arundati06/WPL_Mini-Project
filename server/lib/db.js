const mongoose = require('mongoose');
const { mongoUri } = require('./config');

let connecting = null;

/** Connect once; calling it again returns the same connection. A failed attempt can be retried. */
function connect() {
  if (!connecting) {
    connecting = mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
      .catch((e) => { connecting = null; throw e; });
  }
  return connecting;
}

/** Throws if MongoDB cannot be reached. */
async function ping() {
  if (mongoose.connection.readyState !== 1) throw new Error('not connected');
  await mongoose.connection.db.command({ ping: 1 });
}

async function disconnect() {
  connecting = null;
  await mongoose.disconnect();
}

/** The link without the password, for log messages. */
function safeUri() {
  return mongoUri.replace(/\/\/([^:@/]+):[^@]*@/, '//$1:***@');
}

module.exports = { mongoose, connect, ping, disconnect, safeUri };
