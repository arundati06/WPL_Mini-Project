/* ============================================================
   ScholarConnect - Scholarships page logic
   Populates filter dropdowns from the dataset, applies search +
   filters client-side, and keeps the saved-scholarships panel
   in sync with localStorage.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const resultsGrid = document.getElementById('results-grid');
  const savedGrid = document.getElementById('saved-grid');
  const resultCount = document.getElementById('result-count');
  const savedCount = document.getElementById('saved-count');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const catStrip = document.getElementById('category-strip');
  const clearBtn = document.getElementById('clear-filters');
  const basisChips = document.querySelectorAll('#f-basis .chip');

  const els = {
    level: document.getElementById('f-level'),
    field: document.getElementById('f-field'),
    location: document.getElementById('f-location'),
    income: document.getElementById('f-income'),
    amount: document.getElementById('f-amount'),
    deadline: document.getElementById('f-deadline'),
    gender: document.getElementById('f-gender'),
    type: document.getElementById('f-type'),
  };

  let activeCategory = '';
  let activeBasis = null; // 'merit' | 'need' | null

  /* Populate field & location dropdowns from data */
  const allFields = [...new Set(SCHOLARSHIPS.flatMap(s => s.fields).filter(f => f !== 'All Fields'))].sort();
  allFields.forEach(f => els.field.insertAdjacentHTML('beforeend', `<option>${f}</option>`));

  const allStates = [...new Set(SCHOLARSHIPS.flatMap(s => s.states).filter(s => s !== 'All India'))].sort();
  allStates.forEach(s => els.location.insertAdjacentHTML('beforeend', `<option>${s}</option>`));

  /* Category strip */
  catStrip.innerHTML = ['All', ...CATEGORIES].map(c =>
    `<button class="cat-pill" type="button" data-cat="${c === 'All' ? '' : c}" aria-pressed="${c === 'All' ? 'true' : 'false'}">${c}</button>`
  ).join('');

  catStrip.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat]');
    if(!btn) return;
    activeCategory = btn.dataset.cat;
    catStrip.querySelectorAll('.cat-pill').forEach(p => p.setAttribute('aria-pressed', p === btn ? 'true' : 'false'));
    applyFilters();
  });

  basisChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.dataset.basis;
      activeBasis = activeBasis === val ? null : val;
      basisChips.forEach(c => c.setAttribute('aria-pressed', c.dataset.basis === activeBasis ? 'true' : 'false'));
      applyFilters();
    });
  });

  function matchesBasis(s){
    if(!activeBasis) return true;
    if(activeBasis === 'merit') return s.category === 'Merit' || s.minimumPercentage >= 65;
    if(activeBasis === 'need') return s.category === 'Financial Need' || s.maxIncome <= 500000;
    return true;
  }

  function applyFilters(){
    const q = searchInput.value.trim().toLowerCase();
    const level = els.level.value;
    const field = els.field.value;
    const location = els.location.value;
    const income = els.income.value ? Number(els.income.value) : null;
    const minAmount = Number(els.amount.value || 0);
    const deadlineWithin = els.deadline.value ? Number(els.deadline.value) : null;
    const gender = els.gender.value;
    const type = els.type.value;

    const today = new Date(); today.setHours(0,0,0,0);

    const filtered = SCHOLARSHIPS.filter(s => {
      if(q){
        const haystack = `${s.name} ${s.provider} ${s.description} ${s.category}`.toLowerCase();
        if(!haystack.includes(q)) return false;
      }
      if(activeCategory && s.category !== activeCategory) return false;
      if(level && !s.educationLevel.includes(level)) return false;
      if(field && !(s.fields.includes(field) || s.fields.includes('All Fields'))) return false;
      if(location && !(s.states.includes(location) || s.states.includes('All India'))) return false;
      if(income !== null && s.maxIncome > income) return false;
      if(s.amount < minAmount) return false;
      if(deadlineWithin !== null){
        const diffDays = Math.ceil((new Date(s.deadline) - today) / (1000*60*60*24));
        if(diffDays < 0 || diffDays > deadlineWithin) return false;
      }
      if(gender && s.gender !== gender) return false;
      if(type && s.type !== type) return false;
      if(!matchesBasis(s)) return false;
      return true;
    });

    renderCards(resultsGrid, filtered);
    resultCount.textContent = filtered.length === SCHOLARSHIPS.length
      ? `Showing all ${filtered.length} scholarships`
      : `Showing ${filtered.length} of ${SCHOLARSHIPS.length} scholarships`;
  }

  function renderSaved(){
    const ids = getSavedIds();
    const saved = SCHOLARSHIPS.filter(s => ids.includes(s.id));
    savedCount.textContent = saved.length;
    if(saved.length === 0){
      savedGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><h3>No saved scholarships yet.</h3><p>Tap the heart icon on any scholarship card to save it here.</p></div>`;
      return;
    }
    renderCards(savedGrid, saved);
  }

  searchBtn.addEventListener('click', applyFilters);
  searchInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') applyFilters(); });
  Object.values(els).forEach(el => el.addEventListener('change', applyFilters));

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    Object.values(els).forEach(el => el.value = '');
    activeCategory = '';
    activeBasis = null;
    catStrip.querySelectorAll('.cat-pill').forEach(p => p.setAttribute('aria-pressed', p.dataset.cat === '' ? 'true' : 'false'));
    basisChips.forEach(c => c.setAttribute('aria-pressed', 'false'));
    applyFilters();
  });

  document.addEventListener('sc:saved-changed', renderSaved);

  wireCardEvents(resultsGrid, SCHOLARSHIPS);
  wireCardEvents(savedGrid, SCHOLARSHIPS);

  applyFilters();
  renderSaved();
});
