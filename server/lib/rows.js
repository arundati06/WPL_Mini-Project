/** Turn database documents into the JSON shapes the website pages expect. */

function institutionRow(i) {
  return { ...i, institution_id: String(i._id) };
}

function submissionRow(s) {
  const { _id, institution, eligible_fields, ...rest } = s;
  return { submission_id: String(_id), institution_id: String(institution), ...rest, fields: eligible_fields };
}

module.exports = { institutionRow, submissionRow };
