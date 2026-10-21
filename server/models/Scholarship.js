const mongoose = require('mongoose');

// Collection: scholarships  (the directory). Filled from database/db.json by `npm run db:init`.
// Each document keeps the same fields as db.json (name, educationLevel, fields, states, maxIncome ...),
// so only the two fields the server searches on are declared here.
const scholarshipSchema = new mongoose.Schema({
  scholarship_id: { type: Number, required: true, unique: true },   // db.json's "id"
  dataSource:     { type: String, index: true },                    // 'manual' (hand-verified), 'wikidata' or 'kaggle'
}, { strict: false, versionKey: false });

module.exports = mongoose.model('Scholarship', scholarshipSchema, 'scholarships');
