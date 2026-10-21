/**
 * Eligibility matching on the server (replaces the MySQL procedure sp_match_scholarships).
 * Same rules and weights as js/eligibility.js:
 *   Education 25 · Field 20 · Income 25 · Location 15 · Other 15
 * `p` is a saved student profile (collection "students"), `s` a scholarship document.
 */
const has = (list, value) => Array.isArray(list) && list.includes(value);

function bonusOk(p, s) {
  if (s.category === 'Sports' && Number(p.sports_achievement)) return 1;
  if (s.category === 'Arts' && Number(p.extracurricular)) return 1;
  if (s.category === 'Financial Need' && Number(p.first_gen_learner)) return 1;
  if (s.category === 'Women in Education' && p.gender === 'Female') return 1;
  if (Number(p.academic_achievement)) return 1;
  return 0;
}

function evaluate(p, s) {
  const edu = has(s.educationLevel, p.education_level);
  const field = has(s.fields, 'All Fields') || has(s.fields, p.field_of_study);
  const income = s.maxIncome == null || Number(p.annual_family_income) <= s.maxIncome;
  const location = has(s.states, 'All India') || has(s.states, p.state);
  const pct = s.minimumPercentage == null || Number(p.percentage) >= s.minimumPercentage;
  const gender = !s.gender || s.gender === 'All' || s.gender === p.gender;
  const social = !(s.socialCategories || []).length || has(s.socialCategories, p.social_category);
  const nationality = has(s.nationalities, 'Any country') || has(s.nationalities, p.nationality || 'India');
  const profile = !s.requires
    || (s.requires === 'Disability' ? Number(p.has_disability) === 1 : p.special_category === s.requires);

  const score = (edu ? 25 : 0) + (field ? 20 : 0) + (income ? 25 : 0) + (location ? 15 : 0)
    + Math.round(((pct ? 1 : 0) + (gender ? 1 : 0) + bonusOk(p, s)) / 3 * 15);
  const eligible = edu && field && income && location && pct && gender && social && nationality && profile;
  return { eligible, score };
}

/** Eligible scholarships for a profile, best match first. API-imported records have no rules, so they are skipped. */
function matchScholarships(profile, scholarships) {
  return scholarships
    .filter((s) => !s.dataSource || s.dataSource === 'manual')
    .map((s) => ({ s, ...evaluate(profile, s) }))
    .filter((r) => r.eligible)
    .sort((a, b) => b.score - a.score
      || (a.s.deadline ? 0 : 1) - (b.s.deadline ? 0 : 1)
      || String(a.s.deadline || '').localeCompare(String(b.s.deadline || '')))
    .map(({ s, score }) => ({
      id: s.scholarship_id, name: s.name, scope: s.scope, category: s.category, score,
      amount: s.amount ?? null, amountNote: s.amountNote, deadline: s.deadline ?? null,
      deadlineNote: s.deadlineNote, officialUrl: s.officialUrl,
    }));
}

module.exports = { matchScholarships, evaluate };
