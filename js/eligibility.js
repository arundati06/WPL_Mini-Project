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
  if(s.minimumPercentage === null || student.percentage >= s.minimumPercentage) points += 1;

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

  const incomeOk = s.maxIncome === null || student.income <= s.maxIncome;
  reasons.push({ ok: incomeOk, text: s.maxIncome === null
    ? `No family income limit for this scholarship.`
    : incomeOk
      ? `Family income is within the ${formatAmount(s.maxIncome)} limit.`
      : `Not eligible because annual family income exceeds the stated limit of ${formatAmount(s.maxIncome)}.` });

  const locationOk = locationMatches(s.states, student.state);
  reasons.push({ ok: locationOk, text: locationOk
    ? `Location (${student.state}) matches.`
    : `Not eligible: this scholarship is limited to ${s.states.join(', ')}.` });

  const percentOk = s.minimumPercentage === null || student.percentage >= s.minimumPercentage;
  reasons.push({ ok: percentOk, text: s.minimumPercentage === null
    ? (s.specialEligibility ? `Merit condition: ${s.specialEligibility}.` : `No fixed minimum percentage.`)
    : percentOk
      ? `Academic score meets the ${s.minimumPercentage}% minimum.`
      : `Not eligible: minimum required score is ${s.minimumPercentage}%.` });

  const genderOk = genderMatches(s.gender, student.gender);
  if(!genderOk) reasons.push({ ok: false, text: `Not eligible: this scholarship is open to ${s.gender} applicants only.` });

  const socialList = s.socialCategories || [];
  const socialOk = socialList.length === 0 || socialList.includes(student.category);
  if(socialList.length) reasons.push({ ok: socialOk, text: socialOk
    ? `Reserved category (${student.category}) matches.`
    : `Not eligible: reserved for ${socialList.join('/')} category students.` });

  if(s.scope === 'International') reasons.push({ ok: true,
    text: `Study destination: ${(s.hostCountries || []).join(', ')}.` });

  let profileOk = true;
  if(s.requires){
    profileOk = s.requires === 'Disability' ? student.disability === 'yes' : student.special === s.requires;
    reasons.push({ ok: profileOk, text: profileOk
      ? `Meets the requirement: ${s.requires}.`
      : `Not eligible: requires ${s.requires === 'Disability' ? 'a benchmark disability' : s.requires}.` });
  }

  // Records imported from APIs (Wikidata/Kaggle) carry no eligibility rules - never auto-match them.
  const fromApi = s.dataSource && s.dataSource !== 'manual';
  if(fromApi) reasons.push({ ok: false, text: `Eligibility rules not available from ${s.dataSource} - check the official page.` });

  const eligible = !fromApi && eduOk && fieldOk && incomeOk && locationOk && percentOk && genderOk && socialOk && profileOk;

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
