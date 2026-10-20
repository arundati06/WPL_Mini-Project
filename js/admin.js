/* ============================================================
   ScholarConnect - Admin page: manage registered users and
   institution submissions (data from the MySQL accounts tables).
   ============================================================ */
document.addEventListener('sc:user', async (ev) => {
  const user = ev.detail;
  const locked = document.getElementById('admin-locked-msg');
  if(!SC.serverAvailable){ locked.textContent = 'Open this page through the server: http://localhost:3000/admin.html'; return; }
  if(!user){ locked.textContent = 'Please log in with an admin account.'; return; }
  if(user.role !== 'admin'){ locked.textContent = 'Your account is not an admin account.'; return; }

  document.getElementById('admin-locked').style.display = 'none';
  document.getElementById('admin-app').style.display = 'block';
  const esc = SC.escapeHTML;
  const fmt = (d) => d ? new Date(d.replace(' ', 'T')).toLocaleString('en-IN', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }) : '-';

  async function loadStats(){
    const s = await SC.api('/admin/stats');
    const tile = (num, label) => `<div class="stat"><span class="num">${num}</span><span class="label">${label}</span></div>`;
    document.getElementById('admin-stats').innerHTML =
      tile(s.users, 'Registered users') + tile(s.students, 'Students') + tile(s.institutions, 'Institutions') +
      tile(s.new_this_week, 'New this week') + tile(s.profiles, 'Saved profiles') + tile(s.pending_submissions, 'Pending submissions');
  }

  async function loadUsers(){
    const qs = new URLSearchParams({ q: document.getElementById('u-search').value, role: document.getElementById('u-role').value });
    const { users } = await SC.api('/admin/users?' + qs);
    const table = document.getElementById('u-table');
    if(!users.length){ table.innerHTML = '<tbody><tr><td>No users found.</td></tr></tbody>'; return; }
    table.innerHTML = `<thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Registered</th><th>Last login</th><th>Status</th><th>Actions</th></tr></thead><tbody>` +
      users.map(u => {
        const self = u.user_id === user.id;
        return `<tr data-id="${u.user_id}">
          <td>${esc(u.full_name)}${u.institution_name ? `<br><small>${esc(u.institution_name)}</small>` : ''}</td>
          <td>${esc(u.email)}${u.phone ? `<br><small>${esc(u.phone)}</small>` : ''}</td>
          <td>${esc(u.role)}${u.role === 'student' ? `<br><small>${u.has_profile ? 'profile saved' : 'no profile yet'} · ${u.saved_count} saved</small>` : ''}</td>
          <td>${fmt(u.created_at)}</td>
          <td>${fmt(u.last_login_at)}<br><small>${u.login_count} logins</small></td>
          <td><span class="status-pill ${u.is_active ? 'status-approved' : 'status-rejected'}">${u.is_active ? 'Active' : 'Deactivated'}</span></td>
          <td class="actions">${self ? '<small>you</small>' : `
            <button class="btn btn-ghost btn-sm" data-act="toggle" data-active="${u.is_active ? 0 : 1}">${u.is_active ? 'Deactivate' : 'Activate'}</button>
            <button class="btn btn-ghost btn-sm" data-act="password">Reset password</button>
            <button class="btn btn-ghost btn-sm danger" data-act="delete">Delete</button>`}</td>
        </tr>`;
      }).join('') + '</tbody>';
  }

  async function loadSubmissions(){
    const { submissions } = await SC.api('/admin/submissions');
    const table = document.getElementById('s-table');
    if(!submissions.length){ table.innerHTML = '<tbody><tr><td>No submissions yet.</td></tr></tbody>'; return; }
    table.innerHTML = `<thead><tr><th>Scholarship</th><th>Institution</th><th>Amount · Awards</th><th>Deadline</th><th>Criteria</th><th>Status</th><th>Review</th></tr></thead><tbody>` +
      submissions.map(s => `<tr data-sid="${s.submission_id}" data-iid="${s.institution_id}">
        <td><strong>${esc(s.name)}</strong><br><small>${esc(s.description).slice(0, 140)}</small></td>
        <td>${esc(s.institution_name)}<br><small>${esc(s.email)}</small><br>
            <button class="btn btn-ghost btn-sm" data-act="verify" data-verified="${s.is_verified ? 0 : 1}">${s.is_verified ? 'Verified ✓ (undo)' : 'Verify institution'}</button></td>
        <td>${formatAmount(Math.round(Number(s.amount_inr)))} · ${s.num_awards}</td>
        <td>${formatDate(s.deadline)}</td>
        <td><small>${esc(s.education_level)} · ${esc(s.fields)}<br>Min ${Number(s.min_percentage)}% · income ≤ ${formatAmount(Math.round(Number(s.max_income_inr)))}</small></td>
        <td><span class="status-pill status-${s.status.toLowerCase()}">${s.status}</span>${s.reviewer_note ? `<br><small>${esc(s.reviewer_note)}</small>` : ''}</td>
        <td class="actions">
          <button class="btn btn-ghost btn-sm" data-act="Approved">Approve</button>
          <button class="btn btn-ghost btn-sm danger" data-act="Rejected">Reject</button>
        </td></tr>`).join('') + '</tbody>';
  }

  async function run(fn, okMsg){
    try{ await fn(); if(okMsg) showToast(okMsg); await Promise.all([loadStats(), loadUsers(), loadSubmissions()]); }
    catch(err){ showToast(err.message); }
  }

  document.getElementById('u-table').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-act]'); if(!btn) return;
    const id = btn.closest('tr').dataset.id;
    const name = btn.closest('tr').children[0].textContent.trim();
    if(btn.dataset.act === 'toggle'){
      run(() => SC.api('/admin/users/' + id, { method: 'PATCH', body: { isActive: btn.dataset.active === '1' } }), 'Updated.');
    }else if(btn.dataset.act === 'password'){
      const pw = prompt(`New password for ${name} (at least 8 characters):`);
      if(pw) run(() => SC.api(`/admin/users/${id}/password`, { method: 'POST', body: { password: pw } }), 'Password changed - tell the user their new password.');
    }else if(btn.dataset.act === 'delete'){
      if(confirm(`Delete ${name}'s account permanently? Their profile and saved items are deleted too.`)){
        run(() => SC.api('/admin/users/' + id, { method: 'DELETE' }), 'Account deleted.');
      }
    }
  });

  document.getElementById('s-table').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-act]'); if(!btn) return;
    const row = btn.closest('tr');
    if(btn.dataset.act === 'verify'){
      run(() => SC.api(`/admin/institutions/${row.dataset.iid}/verify`, { method: 'PATCH', body: { verified: btn.dataset.verified === '1' } }), 'Institution updated.');
      return;
    }
    const note = prompt(`${btn.dataset.act === 'Approved' ? 'Approve' : 'Reject'} this submission. Optional note for the institution:`, '');
    if(note === null) return;
    run(() => SC.api('/admin/submissions/' + row.dataset.sid, { method: 'PATCH', body: { status: btn.dataset.act, note } }), 'Submission ' + btn.dataset.act.toLowerCase() + '.');
  });

  let t;
  document.getElementById('u-search').addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => run(loadUsers), 250); });
  document.getElementById('u-role').addEventListener('change', () => run(loadUsers));

  run(async () => {});
});
