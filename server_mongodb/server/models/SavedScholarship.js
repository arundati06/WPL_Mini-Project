const mongoose = require('mongoose');

// Collection: saved_scholarships  (the heart button). scholarship_id is the "id" used in js/data.js and db.json.
const savedSchema = new mongoose.Schema({
  user:           { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  scholarship_id: { type: Number, required: true },
  saved_at:       { type: Date, default: Date.now },
}, { versionKey: false });

savedSchema.index({ user: 1, scholarship_id: 1 }, { unique: true });

module.exports = mongoose.model('SavedScholarship', savedSchema, 'saved_scholarships');
