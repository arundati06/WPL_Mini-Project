/* ============================================================
   ScholarConnect - Login page logic
   Toggles between the student and institution login forms and
   runs basic validation before showing a demo success panel.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const tabsWrap = document.getElementById('login-tabs');
  const studentForm = document.getElementById('student-login-form');
  const institutionForm = document.getElementById('institution-login-form');
  const successPanel = document.getElementById('login-success');
  const successHeading = document.getElementById('login-success-heading');
  const successCta = document.getElementById('login-success-cta');

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(el, hasError){
    const wrapper = el.closest('.field');
    if(wrapper) wrapper.classList.toggle('error', hasError);
  }

  /* ---------- Tab switching ---------- */
  tabsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-tab]');
    if(!btn) return;
    const isStudent = btn.dataset.tab === 'student';
    tabsWrap.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c === btn ? 'true' : 'false'));
    studentForm.style.display = isStudent ? 'block' : 'none';
    institutionForm.style.display = isStudent ? 'none' : 'block';
  });

  /* ---------- Forgot password ---------- */
  document.querySelectorAll('.forgot-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Please contact the site admin to reset your password.');
    });
  });

  /* Already logged in? Go straight to the dashboard. */
  SC.me().then(user => { if(user) location.href = SC.dashboardFor(user.role); });

  /* Show a message inside a form */
  function formMessage(form, text){
    let el = form.querySelector('.form-error');
    if(!el){
      el = document.createElement('p');
      el.className = 'form-error';
      el.setAttribute('role', 'alert');
      form.querySelector('button[type="submit"]').before(el);
    }
    el.textContent = text || '';
    el.style.display = text ? 'block' : 'none';
  }

  /* ---------- Shared validation ---------- */
  function validateLogin(form){
    let valid = true;
    form.querySelectorAll('input[required]').forEach(el => {
      const ok = el.value.trim() !== '';
      setError(el, !ok);
      if(!ok) valid = false;
    });
    const email = form.querySelector('input[type="email"]');
    if(email && email.value && !emailRe.test(email.value)){ setError(email, true); valid = false; }
    return valid;
  }

  [studentForm, institutionForm].forEach(form => {
    form.addEventListener('input', (e) => {
      if(e.target.matches('input')) setError(e.target, false);
    });
  });

  function showSuccess(role){
    tabsWrap.style.display = 'none';
    studentForm.style.display = 'none';
    institutionForm.style.display = 'none';
    successPanel.style.display = 'block';
    if(role === 'student'){
      successHeading.textContent = 'Signed in successfully.';
      successCta.textContent = 'Go to My Dashboard';
      successCta.href = 'students.html';
    } else {
      successHeading.textContent = 'Signed in successfully.';
      successCta.textContent = 'Go to Institution Dashboard';
      successCta.href = 'institutions.html';
    }
    successPanel.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  async function doLogin(form, role, emailId, pwId){
    formMessage(form, '');
    if(!validateLogin(form)){
      showToast('Please fix the highlighted fields.');
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Logging in…';
    try{
      const { user } = await SC.api('/auth/login', { method: 'POST', body: {
        email: document.getElementById(emailId).value.trim(),
        password: document.getElementById(pwId).value,
        role,
      }});
      showSuccess(user.role === 'institution' ? 'institution' : 'student');
      successHeading.textContent = `Welcome back, ${user.name.split(' ')[0]}.`;
      successCta.href = SC.dashboardFor(user.role);
      if(user.role === 'admin') successCta.textContent = 'Go to Admin Dashboard';
      setTimeout(() => { location.href = SC.dashboardFor(user.role); }, 900);
    }catch(err){
      formMessage(form, err.message);
      btn.disabled = false; btn.textContent = 'Log In';
    }
  }

  studentForm.addEventListener('submit', (e) => { e.preventDefault(); doLogin(studentForm, 'student', 'sl-email', 'sl-password'); });
  institutionForm.addEventListener('submit', (e) => { e.preventDefault(); doLogin(institutionForm, 'institution', 'il-email', 'il-password'); });
});
