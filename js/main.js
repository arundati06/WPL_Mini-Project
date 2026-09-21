/* ============================================================
   ScholarConnect - Shared UI behaviors
   Used on every page: nav toggle, deadline status, scholarship
   card rendering, save/bookmark (localStorage), modal, toast.
   ============================================================ */

/* ---------- Mobile navigation ---------- */
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    document.body.classList.remove('nav-open');
  }));
}

/* ---------- Footer year ---------- */
function initFooterYear(){
  const el = document.getElementById('year');
  if(el) el.textContent = new Date().getFullYear();
}

/* ---------- Deadline status ---------- */
// Returns { label, className } based on days remaining until deadline.
function getDeadlineStatus(deadlineStr){
  const today = new Date();
  today.setHours(0,0,0,0);
  const deadline = new Date(deadlineStr);
  const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

  if(diffDays < 0){
    return { label: 'Deadline Passed', className: 'deadline-urgent', icon: '🔴' };
  }
  if(diffDays <= 14){
    return { label: `Deadline Soon · ${diffDays}d left`, className: 'deadline-urgent', icon: '🔴' };
  }
  if(diffDays <= 30){
    return { label: `Deadline Approaching · ${diffDays}d left`, className: 'deadline-soon', icon: '🟠' };
  }
  return { label: 'Applications Open', className: 'deadline-open', icon: '🟢' };
}

function formatDate(d){
  return new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}

function formatAmount(n){
  return '₹' + n.toLocaleString('en-IN');
}

/* ---------- Saved scholarships (localStorage) ---------- */
const SAVE_KEY = 'sc_saved_scholarships';

function getSavedIds(){
  try{
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || [];
  }catch(e){ return []; }
}

function toggleSaved(id){
  let saved = getSavedIds();
  if(saved.includes(id)){
    saved = saved.filter(x => x !== id);
  } else {
    saved.push(id);
  }
  localStorage.setItem(SAVE_KEY, JSON.stringify(saved));
  return saved.includes(id);
}

function isSaved(id){
  return getSavedIds().includes(id);
}

/* ---------- Scholarship card markup ---------- */
function scholarshipCardHTML(s){
  const status = getDeadlineStatus(s.deadline);
  const saved = isSaved(s.id);
  return `
    <article class="sch-card fade-in" data-id="${s.id}">
      <div class="sch-card-top">
        <span class="category">${s.category}</span>
        <button class="save-btn" type="button" aria-pressed="${saved}" aria-label="Save ${s.name}" data-save-id="${s.id}">
          ${saved ? '♥' : '♡'}
        </button>
      </div>
      <h3>${s.name}</h3>
      <p class="provider">${s.provider}</p>
      <div class="amount">${formatAmount(s.amount)}</div>
      <div class="meta-row">
        <span>${s.educationLevel.join(', ')}</span>
        <span>${s.fields[0]}${s.fields.length > 1 ? ' +' + (s.fields.length - 1) : ''}</span>
        <span>${s.states[0]}${s.states.length > 1 ? ' +' + (s.states.length - 1) : ''}</span>
      </div>
      <span class="deadline-pill ${status.className}">${status.icon} ${status.label}</span>
      <p class="desc">${s.description}</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm" type="button" data-view-id="${s.id}">View Details</button>
        <a class="btn btn-ghost btn-sm" href="student-form.html">Check Eligibility</a>
      </div>
    </article>
  `;
}

function renderCards(container, list){
  if(!container) return;
  if(list.length === 0){
    container.innerHTML = `
      <div class="empty-state">
        <h3>No scholarships currently match your selected criteria.</h3>
        <p>Try changing your filters or complete the eligibility form for personalized recommendations.</p>
        <a class="btn btn-primary" href="student-form.html">Go to Eligibility Form</a>
      </div>`;
    return;
  }
  container.innerHTML = list.map(scholarshipCardHTML).join('');
}

/* ---------- Modal (scholarship details) ---------- */
function ensureModal(){
  if(document.getElementById('sc-modal')) return;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'sc-modal';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" type="button" aria-label="Close details">&times;</button>
      <div id="modal-body"></div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay) closeModal();
  });
  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  });
}

function openModal(s){
  ensureModal();
  const status = getDeadlineStatus(s.deadline);
  const saved = isSaved(s.id);
  document.getElementById('modal-body').innerHTML = `
    <span class="category">${s.category}</span>
    <h2 id="modal-title" style="margin-top:12px;">${s.name}</h2>
    <p class="provider" style="margin-top:-6px;">${s.provider}</p>
    <div class="amount">${formatAmount(s.amount)}</div>
    <span class="deadline-pill ${status.className}">${status.icon} ${status.label} · ${formatDate(s.deadline)}</span>
    <div class="modal-grid">
      <div class="modal-field"><span class="k">Education Level</span><span class="v">${s.educationLevel.join(', ')}</span></div>
      <div class="modal-field"><span class="k">Field of Study</span><span class="v">${s.fields.join(', ')}</span></div>
      <div class="modal-field"><span class="k">Location</span><span class="v">${s.states.join(', ')}</span></div>
      <div class="modal-field"><span class="k">Income Criteria</span><span class="v">Up to ${formatAmount(s.maxIncome)}/yr</span></div>
      <div class="modal-field"><span class="k">Minimum Academic Score</span><span class="v">${s.minimumPercentage}%</span></div>
      <div class="modal-field"><span class="k">Gender Eligibility</span><span class="v">${s.gender}</span></div>
    </div>
    <p>${s.description}</p>
    <h3 style="font-size:0.95rem;">Required Documents</h3>
    <ul class="modal-docs">${s.documents.map(d => `<li>${d}</li>`).join('')}</ul>
    <h3 style="font-size:0.95rem;">Application Process</h3>
    <p>${s.process}</p>
    <p class="hint" style="font-size:0.8rem;color:var(--ink-500);">Official application link: <em>example-application-portal.demo</em> (placeholder - no live application is submitted from this demo).</p>
    <div class="modal-actions">
      <a class="btn btn-primary" href="student-form.html">Check Eligibility</a>
      <button class="btn btn-ghost" type="button" data-save-id="${s.id}" aria-pressed="${saved}">${saved ? 'Saved ♥' : 'Save ♡'}</button>
    </div>
  `;
  document.getElementById('sc-modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  document.querySelector('#modal-body [data-save-id]').addEventListener('click', (e) => {
    const nowSaved = toggleSaved(s.id);
    e.target.textContent = nowSaved ? 'Saved ♥' : 'Save ♡';
    e.target.setAttribute('aria-pressed', nowSaved);
    document.dispatchEvent(new CustomEvent('sc:saved-changed'));
  });
}

function closeModal(){
  const overlay = document.getElementById('sc-modal');
  if(overlay){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* Delegate view/save clicks from any card grid on the page */
function wireCardEvents(container, dataset){
  if(!container) return;
  container.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('[data-view-id]');
    const saveBtn = e.target.closest('[data-save-id]');
    if(viewBtn){
      const s = dataset.find(x => x.id === Number(viewBtn.dataset.viewId));
      if(s) openModal(s);
    } else if(saveBtn){
      const id = Number(saveBtn.dataset.saveId);
      const nowSaved = toggleSaved(id);
      saveBtn.textContent = nowSaved ? '♥' : '♡';
      saveBtn.setAttribute('aria-pressed', nowSaved);
      document.dispatchEvent(new CustomEvent('sc:saved-changed'));
    }
  });
}

/* ---------- Toast ---------- */
function showToast(message){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFooterYear();
});
