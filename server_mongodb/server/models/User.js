const mongoose = require('mongoose');

// Collection: users  (student, institution and admin logins)
const userSchema = new mongoose.Schema({
  email:           { type: String, required: true, unique: true, trim: true },   // always stored in lower case
  password_hash:   { type: String, required: true },                              // bcrypt hash, never the password
  role:            { type: String, enum: ['student', 'institution', 'admin'], required: true, index: true },
  full_name:       { type: String, required: true },
  phone:           { type: String, default: null },
  education_level: { type: String, default: null },
  is_active:       { type: Boolean, default: true },                              // false = deactivated by an admin
  login_count:     { type: Number, default: 0 },
  created_at:      { type: Date, default: Date.now },
  last_login_at:   { type: Date, default: null },
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema, 'users');
