/** Session helpers + route guards. */
function publicUser(u) {
  return { id: u.user_id, name: u.full_name, email: u.email, role: u.role, phone: u.phone,
           educationLevel: u.education_level, createdAt: u.created_at, lastLoginAt: u.last_login_at };
}

/** Start a fresh session for this user (prevents session fixation). */
function startSession(req, user) {
  return new Promise((resolve, reject) => {
    req.session.regenerate((err) => {
      if (err) return reject(err);
      req.session.userId = user.user_id;
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

module.exports = { publicUser, startSession, requireLogin };
