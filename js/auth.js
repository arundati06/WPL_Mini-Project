/* ============================================================
   ScholarConnect - Accounts (talks to the Node server in /server)
   Loaded on every page after main.js. Provides window.SC:
     SC.api(path, {method, body})  -> JSON (throws Error with .status/.field)
     SC.me()                       -> current user or null (cached)
     SC.serverAvailable            -> false when the page is opened as a file
   Also: updates the nav (name / Log out / Admin) and syncs saved
   scholarships (heart button) to the account when a student is logged in.
   ============================================================ */
(function(){
  const serverAvailable = location.protocol === 'http:' || location.protocol === 'https:';
  let mePromise = null;

  async function api(path, { method = 'GET', body } = {}){
    if(!serverAvailable){
      const e = new Error('Accounts need the ScholarConnect server. In Terminal: cd server && npm start, then open http://localhost:3000');
      e.status = 0; throw e;
    }
    let res;
    try{
      res = await fetch('/api' + path, {
        method, credentials: 'same-origin',
        headers: body !== undefined ? { 'Content-Type': 'application/json' } : {},
        body: body !== undefined ? JSON.stringify(body) : undefined,
      });
    }catch(_){
      const e = new Error('Cannot reach the server. Is it running? (cd server && npm start)'); e.status = 0; throw e;
    }
    let data = {};
    try{ data = await res.json(); }catch(_){ /* non-JSON */ }
    if(!res.ok){
      const e = new Error(data.error || `Request failed (${res.status})`);
      e.status = res.status; e.field = data.field; e.errors = data.errors; throw e;
    }
    return data;
  }

  function me(force = false){
    if(!serverAvailable) return Promise.resolve(null);
    if(!mePromise || force) mePromise = api('/auth/me').then(d => d.user).catch(() => null);
    return mePromise;
  }

  async function logout(){
    try{ await api('/auth/logout', { method: 'POST', body: {} }); }catch(_){ /* ignore */ }
    try{ localStorage.removeItem(SAVE_KEY); }catch(_){ /* ignore */ }
    location.href = 'index.html';
  }

  function dashboardFor(role){
    return role === 'admin' ? 'admin.html' : role === 'institution' ? 'institutions.html' : 'students.html';
  }

  function escapeHTML(s){
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  /* ---------- Nav: show who is logged in ---------- */
  function updateNav(user){
    const loginLink = document.querySelector('.nav-links a[href="login.html"]');
    if(!loginLink || !user) return;
    const li = loginLink.parentElement;
    const first = escapeHTML(user.name.split(' ')[0]);
    li.innerHTML = `<a href="${dashboardFor(user.role)}" title="${escapeHTML(user.email)}">Hi, ${first}</a>`;
    if(user.role === 'admin'){
      li.insertAdjacentHTML('beforebegin', `<li><a href="admin.html">Admin</a></li>`);
    }
    const out = document.createElement('li');
    out.innerHTML = `<a href="#" id="nav-logout">Log Out</a>`;
    li.after(out);
    out.querySelector('a').addEventListener('click', (e) => { e.preventDefault(); logout(); });
  }

  /* ---------- Saved scholarships: keep the heart button in sync with the account ---------- */
  async function syncSaved(user){
    if(!user || user.role !== 'student' || typeof getSavedIds !== 'function') return;
    try{
      const { ids: serverIds } = await api('/saved');
      const local = getSavedIds();
      const toPush = local.filter(id => !serverIds.includes(id));
      await Promise.all(toPush.map(id => api('/saved/' + id, { method: 'POST', body: {} }).catch(() => null)));
      const merged = [...new Set([...serverIds, ...local])];
      localStorage.setItem(SAVE_KEY, JSON.stringify(merged));
      document.dispatchEvent(new CustomEvent('sc:saved-changed'));
    }catch(_){ /* keep working offline */ }

    // From now on, every heart click also updates the account
    const localToggle = toggleSaved;
    window.toggleSaved = toggleSaved = function(id){
      const nowSaved = localToggle(id);
      api('/saved/' + id, { method: nowSaved ? 'POST' : 'DELETE', body: {} }).catch(() => {
        if(typeof showToast === 'function') showToast('Saved on this device only - could not reach the server.');
      });
      return nowSaved;
    };
  }

  window.SC = { api, me, logout, serverAvailable, dashboardFor, escapeHTML };

  document.addEventListener('DOMContentLoaded', async () => {
    const user = await me();
    updateNav(user);
    syncSaved(user);
    document.dispatchEvent(new CustomEvent('sc:user', { detail: user }));
  });
})();
