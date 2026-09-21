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

  /* ---------- Forgot password (demo) ---------- */
  document.querySelectorAll('.forgot-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast("Password reset isn't available in this demo.");
    });
  });

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

  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateLogin(studentForm)){
      showToast('Please fix the highlighted fields.');
      return;
    }
    showSuccess('student');
  });

  institutionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateLogin(institutionForm)){
      showToast('Please fix the highlighted fields.');
      return;
    }
    showSuccess('institution');
  });
});
