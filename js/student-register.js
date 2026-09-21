/* ============================================================
   ScholarConnect - Student account registration logic
   Validates required fields, email, phone, password match and
   length, then shows a demo success panel (no real backend).
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('student-register-form');
  const successPanel = document.getElementById('success-panel');

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[6-9]\d{9}$/;

  function setError(el, hasError){
    const wrapper = el.closest('.field');
    if(wrapper) wrapper.classList.toggle('error', hasError);
  }

  function validate(){
    let valid = true;

    form.querySelectorAll('input[required], select[required]').forEach(el => {
      if(el.type === 'checkbox'){
        setError(el, !el.checked);
        if(!el.checked) valid = false;
        return;
      }
      const ok = el.value.trim() !== '';
      setError(el, !ok);
      if(!ok) valid = false;
    });

    const email = document.getElementById('r-email');
    if(email.value && !emailRe.test(email.value)){ setError(email, true); valid = false; }

    const phone = document.getElementById('r-phone');
    if(phone.value && !phoneRe.test(phone.value.replace(/\s/g,''))){ setError(phone, true); valid = false; }

    const password = document.getElementById('r-password');
    if(password.value && password.value.length < 8){ setError(password, true); valid = false; }

    const confirm = document.getElementById('r-confirm');
    if(confirm.value !== password.value || confirm.value === ''){ setError(confirm, true); valid = false; }

    return valid;
  }

  form.addEventListener('input', (e) => {
    if(e.target.matches('input, select')) setError(e.target, false);
  });
  form.addEventListener('change', (e) => {
    if(e.target.matches('input[type="checkbox"]')) setError(e.target, false);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validate()){
      const firstError = form.querySelector('.field.error');
      if(firstError) firstError.scrollIntoView({ behavior:'smooth', block:'center' });
      showToast('Please fix the highlighted fields.');
      return;
    }
    form.style.display = 'none';
    successPanel.style.display = 'block';
    successPanel.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});
