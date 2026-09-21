/* ============================================================
   ScholarConnect - Eligibility Matching Engine
   Pure functions: given a student profile and the SCHOLARSHIPS
   dataset, decide eligibility and a weighted match score.
   Weights: Education 25% · Field 20% · Income 25% · Location 15% · Other 15%
   ============================================================ */

function fieldMatches(scholarshipFields, studentField){
  if(scholarshipFields.includes('All Fields')) return true;
  return scholarshipFields.includes(studentField);
}

function locationMatches(scholarshipStates, studentState){
  if(scholarshipStates.includes('All India')) return true;
  return scholarshipStates.includes(studentState);
}

function educationMatches(scholarshipLevels, studentLevel){
  return scholarshipLevels.includes(studentLevel);
}

function genderMatches(scholarshipGender, studentGender){
  return scholarshipGender === 'All' || scholarshipGender === studentGender;
}

// "Other criteria" bucket: academic score threshold + gender fit +
// category-specific signals (sports/arts/first-gen/disability/need).
function otherCriteriaScore(student, s){
  let points = 0;
  let max = 0;

  // Academic score vs minimum (worth 2 of the 15 pts share -> normalise below)
  max += 1;
  if(student.percentage >= s.minimumPercentage) points += 1;

  max += 1;
  if(genderMatches(s.gender, student.gender)) points += 1;

  max += 1;
  if(s.category === 'Sports' && student.sportsAchievement === 'yes') points += 1;
  else if(s.category === 'Arts' && student.extracurricular === 'yes') points += 1;
  else if(s.category === 'Financial Need' && student.firstGenLearner === 'yes') points += 1;
  else if(s.category === 'Women in Education' && student.gender === 'Female') points += 1;
  else if(student.academicAchievement === 'yes') points += 1; // generic credit otherwise

  return points / max; // 0..1
}

function evaluateScholarship(student, s){
  const reasons = [];

  const eduOk = educationMatches(s.educationLevel, student.educationLevel);
  reasons.push({ ok: eduOk, text: eduOk
    ? `Education level (${student.educationLevel}) matches.`
    : `Not eligible: this scholarship is for ${s.educationLevel.join('/')}, not ${student.educationLevel}.` });

  const fieldOk = fieldMatches(s.fields, student.field);
  reasons.push({ ok: fieldOk, text: fieldOk
    ? `Field of study (${student.field}) matches.`
    : `Not eligible: field of study must be ${s.fields.join(', ')}.` });

  const incomeOk = student.income <= s.maxIncome;
  reasons.push({ ok: incomeOk, text: incomeOk
    ? `Family income is within the ${formatAmount(s.maxIncome)} limit.`
    : `Not eligible because annual family income exceeds the stated limit of ${formatAmount(s.maxIncome)}.` });

  const locationOk = locationMatches(s.states, student.state);
  reasons.push({ ok: locationOk, text: locationOk
    ? `Location (${student.state}) matches.`
    : `Not eligible: this scholarship is limited to ${s.states.join(', ')}.` });

  const percentOk = student.percentage >= s.minimumPercentage;
  reasons.push({ ok: percentOk, text: percentOk
    ? `Academic score meets the ${s.minimumPercentage}% minimum.`
    : `Not eligible: minimum required score is ${s.minimumPercentage}%.` });

  const eligible = eduOk && fieldOk && incomeOk && locationOk && percentOk;

  const educationScore = eduOk ? 25 : 0;
  const fieldScore = fieldOk ? 20 : 0;
  const incomeScore = incomeOk ? 25 : 0;
  const locationScore = locationOk ? 15 : 0;
  const otherScore = Math.round(otherCriteriaScore(student, s) * 15);

  const totalScore = Math.min(100, educationScore + fieldScore + incomeScore + locationScore + otherScore);

  return { scholarship: s, eligible, score: totalScore, reasons };
}

function matchLabel(score){
  if(score >= 85) return 'Strong Match';
  if(score >= 65) return 'Good Match';
  if(score >= 45) return 'Partial Match';
  return 'Weak Match';
}

// Runs the full dataset through evaluateScholarship and returns
// eligible results sorted by score, descending.
function runEligibilityEngine(student){
  return SCHOLARSHIPS
    .map(s => evaluateScholarship(student, s))
    .sort((a, b) => b.score - a.score);
}
