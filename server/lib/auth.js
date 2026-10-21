/** Session helpers + route guards. User ids are the MongoDB _id, kept as text in the session. */
function publicUser(u) {
  return { id: String(u._id), name: u.full_name, email: u.email, role: u.role, phone: u.phone,
           educationLevel: u.education_level, createdAt: u.created_at, lastLoginAt: u.last_login_at };
}

/** Start a fresh session for this user (prevents session fixation). */
function startSession(req, user) {
  return new Promise((resolve, reject) => {
    req.session.regenerate((err) => {
      if (err) return reject(err);
      req.session.userId = String(user._id);
      req.session.role = user.role;
      req.session.save((e) => (e ? reject(e) : resolve()));
    });
  });
}

function requireLogin(...roles) {
  return (req, res, next) => {
    if (!req.session.userId) return res.status(401).json({ error: 'Please log in first.' });
    if (roles.length && !roles.includes(req.session.role)) return res.status(403).json({ error: 'Your account cannot do that.' });
    next();
  };
}

/** True for a 24-character MongoDB id. */
const isId = (s) => /^[0-9a-f]{24}$/i.test(String(s));

module.exports = { publicUser, startSession, requireLogin, isId };
