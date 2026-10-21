const mongoose = require('mongoose');

// Collection: institutions  (one per institution login)
const institutionSchema = new mongoose.Schema({
  user:             { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  name:             { type: String, required: true },
  institution_type: { type: String, required: true },
  website:          { type: String, default: null },
  address:          { type: String, required: true },
  city:             { type: String, required: true },
  state:            { type: String, required: true },
  contact_person:   { type: String, required: true },
  email:            { type: String, required: true },
  phone:            { type: String, required: true },
  is_verified:      { type: Boolean, default: false },                            // set by an admin
  created_at:       { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('Institution', institutionSchema, 'institutions');
