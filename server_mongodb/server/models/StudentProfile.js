const mongoose = require('mongoose');

// Collection: students  (the eligibility form, saved when a student is logged in)
// Yes/no answers are stored as 1 or 0, which is what the website expects.
const studentSchema = new mongoose.Schema({
  user:                 { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  full_name:            { type: String, required: true },
  age:                  { type: Number, required: true, min: 10, max: 80 },
  gender:               { type: String, enum: ['Female', 'Male', 'Other', 'Prefer not to say'], required: true },
  nationality:          { type: String, default: 'India' },
  state:                { type: String, required: true },
  city:                 { type: String, required: true },
  domicile_state:       { type: String, default: null },
  social_category:      { type: String, enum: ['General', 'OBC', 'SC', 'ST', 'EWS'], required: true },
  education_level:      { type: String, required: true },
  institute_name:       { type: String, required: true },
  course:               { type: String, required: true },
  field_of_study:       { type: String, required: true },
  year_of_study:        { type: String, required: true },
  percentage:           { type: Number, required: true, min: 0, max: 100 },
  annual_family_income: { type: Number, required: true, min: 0 },
  income_bracket:       { type: String, required: true },
  needs_financial_aid:  { type: Number, default: 0 },
  first_gen_learner:    { type: Number, default: 0 },
  has_disability:       { type: Number, default: 0 },
  sports_achievement:   { type: Number, default: 0 },
  academic_achievement: { type: Number, default: 0 },
  extracurricular:      { type: Number, default: 0 },
  parent_govt_employee: { type: Number, default: 0 },
  special_category:     { type: String, default: null },
  updated_at:           { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('StudentProfile', studentSchema, 'students');
