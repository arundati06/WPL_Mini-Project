/* ============================================================
   ScholarConnect - Institution form logic
   Validates required fields, email, phone, URL and numeric
   ranges, then shows a demo success panel (no real backend).
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('institution-form');
  const successPanel = document.getElementById('success-panel');

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[6-9]\d{9}$/;
  const urlRe = /^https?:\/\/.+\..+/;

  function setError(el, hasError){
    const wrapper = el.closest('.field');
    if(wrapper) wrapper.classList.toggle('error', hasError);
  }

  function validate(){
    let valid = true;

    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(el => {
      const ok = el.value.trim() !== '';
      setError(el, !ok);
      if(!ok) valid = false;
    });

    const email = document.getElementById('i-email');
    if(email.value && !emailRe.test(email.value)){ setError(email, true); valid = false; }

    const phone = document.getElementById('i-phone');
    if(phone.value && !phoneRe.test(phone.value.replace(/\s/g,''))){ setError(phone, true); valid = false; }

    const website = document.getElementById('i-website');
    if(website.value && !urlRe.test(website.value)){ setError(website, true); valid = false; }

    const link = document.getElementById('s-link');
    if(link.value && !urlRe.test(link.value)){ setError(link, true); valid = false; }

    const minScore = document.getElementById('s-minscore');
    if(minScore.value !== '' && (Number(minScore.value) < 0 || Number(minScore.value) > 100)){ setError(minScore, true); valid = false; }

    const amount = document.getElementById('s-amount');
    if(amount.value !== '' && Number(amount.value) < 0){ setError(amount, true); valid = false; }

    const maxIncome = document.getElementById('s-maxincome');
    if(maxIncome.value !== '' && Number(maxIncome.value) < 0){ setError(maxIncome, true); valid = false; }

    const recipients = document.getElementById('s-recipients');
    if(recipients.value !== '' && Number(recipients.value) < 1){ setError(recipients, true); valid = false; }

    const pw = document.getElementById('i-password');
    const cf = document.getElementById('i-confirm');
    if(!loggedInInstitution){
      if(pw.value.length < 8){ setError(pw, true); valid = false; }
      if(cf.value !== pw.value || !cf.value){ setError(cf, true); valid = false; }
    }

    const deadline = document.getElementById('s-deadline');
    if(deadline.value){
      const chosen = new Date(deadline.value);
      const today = new Date(); today.setHours(0,0,0,0);
      if(chosen < today){ setError(deadline, true); valid = false; }
    }

    return valid;
  }

  form.addEventListener('input', (e) => {
    if(e.target.matches('input, select, textarea')) setError(e.target, false);
  });

  /* Logged in as an institution? Then only the scholarship part is needed. */
  let loggedInInstitution = false;
  SC.me().then(user => {
    if(user && user.role === 'institution'){
      loggedInInstitution = true;
      const instSection = document.getElementById('i-name').closest('.form-section');
      instSection.style.display = 'none';
      instSection.querySelectorAll('[required]').forEach(el => el.removeAttribute('required'));
      showToast(`Logged in as ${user.name} - just add the scholarship details.`);
    }
  });

  const val = (id) => document.getElementById(id).value.trim();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if(!validate()){
      const firstError = form.querySelector('.field.error');
      if(firstError) firstError.scrollIntoView({ behavior:'smooth', block:'center' });
      showToast('Please fix the highlighted fields.');
      return;
    }
    const scholarship = {
      schName: val('s-name'), amount: val('s-amount'), recipients: val('s-recipients'), deadline: val('s-deadline'),
      level: val('s-level'), fields: val('s-fields'), minScore: val('s-minscore'), maxIncome: val('s-maxincome'),
      location: val('s-location'), other: val('s-other'), docs: val('s-docs'), link: val('s-link'), description: val('s-desc'),
    };
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Submitting…';
    try{
      if(loggedInInstitution){
        await SC.api('/institution/submissions', { method: 'POST', body: scholarship });
      }else{
        await SC.api('/auth/register-institution', { method: 'POST', body: {
          instName: val('i-name'), instType: val('i-type'), website: val('i-website'), address: val('i-address'),
          city: val('i-city'), state: val('i-state'), contact: val('i-contact'), email: val('i-email'),
          phone: val('i-phone').replace(/\s/g, ''), password: document.getElementById('i-password').value,
          ...scholarship,
        }});
      }
      form.style.display = 'none';
      successPanel.style.display = 'block';
      successPanel.scrollIntoView({ behavior:'smooth', block:'start' });
    }catch(err){
      if(err.field === 'email') setError(document.getElementById('i-email'), true);
      showToast(err.message);
      btn.disabled = false; btn.textContent = 'Submit Scholarship';
    }
  });
});
