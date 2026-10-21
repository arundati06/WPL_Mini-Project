/**
 * Login sessions in MongoDB (collection "sessions"), replacing express-mysql-session.
 * Each document: { _id: <session id>, session: {...}, userId: "<user _id>", expires: Date }
 * A TTL index on `expires` lets MongoDB delete old sessions by itself.
 */
const session = require('express-session');
const mongoose = require('mongoose');

const Session = mongoose.model('Session', new mongoose.Schema({
  _id:     String,
  session: mongoose.Schema.Types.Mixed,
  userId:  { type: String, index: true, default: null },
  expires: { type: Date, index: { expireAfterSeconds: 0 } },
}, { versionKey: false, minimize: false }), 'sessions');

const DAY = 24 * 3600 * 1000;
const expiryOf = (sess) => (sess && sess.cookie && sess.cookie.expires ? new Date(sess.cookie.expires) : new Date(Date.now() + 7 * DAY));

class MongoSessionStore extends session.Store {
  get(sid, cb) {
    Session.findById(sid).lean().then(
      (doc) => cb(null, doc && doc.expires > new Date() ? doc.session : null),
      (err) => cb(err));
  }

  set(sid, sess, cb) {
    const plain = JSON.parse(JSON.stringify(sess));      // cookie object -> plain data
    Session.updateOne({ _id: sid }, { $set: { session: plain, userId: plain.userId || null, expires: expiryOf(sess) } }, { upsert: true })
      .then(() => cb && cb(null), (err) => cb && cb(err));
  }

  touch(sid, sess, cb) {
    Session.updateOne({ _id: sid }, { $set: { expires: expiryOf(sess) } })
      .then(() => cb && cb(null), (err) => cb && cb(err));
  }

  destroy(sid, cb) {
    Session.deleteOne({ _id: sid }).then(() => cb && cb(null), (err) => cb && cb(err));
  }
}

module.exports = { MongoSessionStore, Session };
