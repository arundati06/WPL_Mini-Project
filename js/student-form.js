/* ============================================================
   ScholarConnect - Student eligibility form logic
   Populates dependent dropdowns, validates the form inline, runs
   the eligibility engine, and renders scored recommendations.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('eligibility-form');
  const resultsEl = document.getElementById('results');

  /* Populate state + field dropdowns from the dataset */
  const allStates = (typeof INDIAN_STATES !== 'undefined') ? INDIAN_STATES
    : [...new Set(SCHOLARSHIPS.flatMap(s => s.states).filter(s => s !== 'All India'))].sort();
  const stateOptions = `<option value="">Select</option>` + allStates.map(s => `<option>${s}</option>`).join('');
  document.getElementById('p-state').innerHTML = stateOptions;
  document.getElementById('o-domicile').innerHTML = `<option value="">Same as state above</option>` + allStates.map(s => `<option>${s}</option>`).join('');

  const allFields = [...new Set(SCHOLARSHIPS.flatMap(s => s.fields).filter(f => f !== 'All Fields'))].sort();
  document.getElementById('a-field').innerHTML = `<option value="">Select</option>` + allFields.map(f => `<option>${f}</option>`).join('');

  /* ---------- Validation ---------- */
  function setError(fieldEl, hasError){
    const wrapper = fieldEl.closest('.field');
    if(!wrapper) return;
    wrapper.classList.toggle('error', hasError);
  }

  function validatePercentRange(input){
    const v = Number(input.value);
    return input.value !== '' && v >= 0 && v <= 100;
  }

  function validateForm(){
    let valid = true;

    // Standard required text/select/number fields
    form.querySelectorAll('input[required], select[required]').forEach(el => {
      const ok = el.value !== null && el.value.trim() !== '';
      setError(el, !ok);
      if(!ok) valid = false;
    });

    // Age sanity
    const age = document.getElementById('p-age');
    if(age.value && (Number(age.value) < 10 || Number(age.value) > 80)){
      setError(age, true); valid = false;
    }

    // CGPA/percentage range
    const score = document.getElementById('a-score');
    if(!validatePercentRange(score)){
      setError(score, true); valid = false;
    }

    // Income non-negative
    const income = document.getElementById('f-income');
    if(income.value === '' || Number(income.value) < 0){
      setError(income, true); valid = false;
    }

    // Radio group: financial assistance
    const assistChecked = form.querySelector('input[name="f-assist"]:checked');
    const assistWrapper = document.querySelector('input[name="f-assist"]').closest('.field');
    assistWrapper.classList.toggle('error', !assistChecked);
    if(!assistChecked) valid = false;

    return valid;
  }

  // Clear a field's error as soon as the user fixes it
  form.addEventListener('input', (e) => {
    if(e.target.matches('input, select')) setError(e.target, false);
  });
  form.addEventListener('change', (e) => {
    if(e.target.matches('input[type="radio"]')){
      e.target.closest('.field').classList.remove('error');
    }
  });

  /* ---------- Submit ---------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateForm()){
      const firstError = form.querySelector('.field.error');
      if(firstError) firstError.scrollIntoView({ behavior:'smooth', block:'center' });
      showToast('Please fix the highlighted fields.');
      return;
    }

    const student = {
      name: document.getElementById('p-name').value.trim(),
      gender: document.getElementById('p-gender').value,
      category: document.getElementById('p-category').value,
      state: document.getElementById('p-state').value,
      educationLevel: document.getElementById('a-level').value,
      field: document.getElementById('a-field').value,
      percentage: Number(document.getElementById('a-score').value),
      income: Number(document.getElementById('f-income').value),
      firstGenLearner: document.getElementById('o-firstgen').value,
      disability: document.getElementById('o-disability').value,
      sportsAchievement: document.getElementById('o-sports').value,
      academicAchievement: document.getElementById('o-academic').value,
      extracurricular: document.getElementById('o-extra').value,
      special: document.getElementById('o-special').value,
    };

    const results = runEligibilityEngine(student);
    renderResults(student, results);
    saveProfile();
  });

  /* ---------- Account: save the profile / pre-fill it ---------- */
  const v = (id) => document.getElementById(id).value.trim();
  async function saveProfile(){
    const user = await SC.me();
    if(!user || user.role !== 'student') return;
    try{
      await SC.api('/profile', { method: 'PUT', body: {
        name: v('p-name'), age: v('p-age'), gender: v('p-gender'), state: v('p-state'), city: v('p-city'),
        domicile: v('o-domicile'), category: v('p-category'), level: v('a-level'), institute: v('a-institute'),
        course: v('a-course'), field: v('a-field'), year: v('a-year'), score: v('a-score'), income: v('f-income'),
        incomeBracket: v('f-incomecat'), assist: (form.querySelector('input[name="f-assist"]:checked') || {}).value,
        firstGen: v('o-firstgen'), disability: v('o-disability'), sports: v('o-sports'), academic: v('o-academic'),
        extra: v('o-extra'), govt: v('o-govt'), special: v('o-special'),
      }});
      showToast('Profile saved to your account - see your matches on the dashboard.');
    }catch(err){
      showToast('Could not save your profile: ' + err.message);
    }
  }

  SC.me().then(async (user) => {
    if(!user || user.role !== 'student') return;
    const set = (id, val) => { const el = document.getElementById(id); if(el && val !== null && val !== undefined) el.value = val; };
    try{
      const { profile: p } = await SC.api('/profile');
      if(!p){ set('p-name', user.name); if(user.educationLevel) set('a-level', user.educationLevel); return; }
      const yn = (b) => (Number(b) ? 'yes' : 'no');
      set('p-name', p.full_name); set('p-age', p.age); set('p-gender', p.gender); set('p-state', p.state); set('p-city', p.city);
      set('p-category', p.social_category); set('a-level', p.education_level); set('a-institute', p.institute_name);
      set('a-course', p.course); set('a-field', p.field_of_study); set('a-year', p.year_of_study);
      set('a-score', Number(p.percentage)); set('f-income', Math.round(Number(p.annual_family_income)));
      set('f-incomecat', p.income_bracket); set('o-domicile', p.domicile_state === p.state ? '' : p.domicile_state);
      set('o-firstgen', yn(p.first_gen_learner)); set('o-disability', yn(p.has_disability)); set('o-sports', yn(p.sports_achievement));
      set('o-academic', yn(p.academic_achievement)); set('o-extra', yn(p.extracurricular)); set('o-govt', yn(p.parent_govt_employee));
      set('o-special', p.special_category || '');
      const r = form.querySelector(`input[name="f-assist"][value="${yn(p.needs_financial_aid)}"]`); if(r) r.checked = true;
      showToast('Loaded your saved profile.');
    }catch(_){ /* not critical */ }
  });

  function renderResults(student, results){
    const eligible = results.filter(r => r.eligible);
    const notEligible = results.filter(r => !r.eligible).sort((a,b) => b.score - a.score).slice(0, 4);

    resultsEl.style.display = 'block';
    resultsEl.innerHTML = `
      <div class="match-summary fade-in">
        <div>
          <h3>Scholarships You May Be Eligible For</h3>
          <p>We found ${eligible.length} scholarship${eligible.length === 1 ? '' : 's'} matching ${student.name || 'your'} profile out of ${SCHOLARSHIPS.length} listed.</p>
        </div>
        <a href="#eligibility-form" class="btn btn-onNavy btn-sm">Edit Answers</a>
      </div>
      <div class="card-grid" id="eligible-grid"></div>
      ${notEligible.length ? `
        <div class="section-head" style="margin-top:48px;">
          <span class="eyebrow">Close, but not quite</span>
          <h2 style="font-size:1.4rem;">Scholarships you didn't qualify for - and why</h2>
        </div>
        <div id="not-eligible-list"></div>
      ` : ''}
    `;

    const grid = document.getElementById('eligible-grid');
    if(eligible.length === 0){
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1;">
          <h3>No scholarships currently match your selected criteria.</h3>
          <p>Try adjusting your income, field of study, or location details above, or browse the full directory.</p>
          <a class="btn btn-primary" href="scholarships.html">Browse All Scholarships</a>
        </div>`;
    } else {
      grid.innerHTML = eligible.map(r => matchCardHTML(r)).join('');
      wireCardEvents(grid, SCHOLARSHIPS);
      grid.querySelectorAll('[data-view-full]').forEach(btn => {
        btn.addEventListener('click', () => {
          const s = SCHOLARSHIPS.find(x => x.id === Number(btn.dataset.viewFull));
          if(s) openModal(s);
        });
      });
    }

    if(notEligible.length){
      const list = document.getElementById('not-eligible-list');
      list.innerHTML = notEligible.map(r => `
        <div class="sch-card" style="border-left-color:var(--red);margin-bottom:14px;">
          <div class="sch-card-top">
            <span class="category">${r.scholarship.category}</span>
            <span class="match-badge">${r.score}% Match</span>
          </div>
          <h3>${r.scholarship.name}</h3>
          <p class="provider">${r.scholarship.provider}</p>
          ${r.reasons.filter(x => !x.ok).map(x => `<div class="match-reason no">${x.text}</div>`).join('')}
        </div>
      `).join('');
    }

    resultsEl.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  function matchCardHTML(r){
    const s = r.scholarship;
    const status = getDeadlineStatus(s.deadline);
    return `
      <article class="sch-card fade-in" data-id="${s.id}">
        <div class="sch-card-top">
          <span class="category">${s.category}</span>
          <span class="match-badge">${r.score}% · ${matchLabel(r.score)}</span>
        </div>
        <h3>${s.name}</h3>
        <p class="provider">${s.provider}</p>
        <div class="amount">${formatScholarshipAmount(s)}</div>
        <span class="deadline-pill ${status.className}">${status.icon} ${status.label}</span>
        ${r.reasons.filter(x => x.ok).slice(0,2).map(x => `<div class="match-reason ok">${x.text}</div>`).join('')}
        <div class="card-actions">
          <button class="btn btn-primary btn-sm" type="button" data-view-full="${s.id}">View Details</button>
          <button class="save-btn" type="button" aria-pressed="${isSaved(s.id)}" aria-label="Save ${s.name}" data-save-id="${s.id}">${isSaved(s.id) ? '♥' : '♡'}</button>
        </div>
      </article>
    `;
  }
});
