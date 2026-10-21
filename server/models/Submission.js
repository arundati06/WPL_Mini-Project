const mongoose = require('mongoose');

// Collection: scholarship_submissions  (scholarships sent in by institutions, waiting for admin review)
const submissionSchema = new mongoose.Schema({
  institution:     { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
  name:            { type: String, required: true },
  amount_inr:      { type: Number, required: true, min: 0 },
  num_awards:      { type: Number, required: true, min: 1 },
  deadline:        { type: String, required: true },                              // 'YYYY-MM-DD'
  education_level: { type: String, required: true },
  eligible_fields: { type: String, required: true },
  min_percentage:  { type: Number, required: true, min: 0, max: 100 },
  max_income_inr:  { type: Number, required: true, min: 0 },
  location:        { type: String, default: null },
  other_criteria:  { type: String, default: null },
  documents:       { type: String, default: null },
  apply_link:      { type: String, default: null },
  description:     { type: String, required: true },
  status:          { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  reviewer_note:   { type: String, default: null },
  submitted_at:    { type: Date, default: Date.now },
  reviewed_at:     { type: Date, default: null },
}, { versionKey: false });

module.exports = mongoose.model('Submission', submissionSchema, 'scholarship_submissions');
