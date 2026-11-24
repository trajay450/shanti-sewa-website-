/* ===================== Shanti Health Care — admin.js ===================== */
/* Bookings are stored in a real shared database (Supabase), behind the
   booking-admin Edge Function. The admin password is checked server-side —
   it is never sent to or stored on the page itself — and every dashboard
   action (list/delete/clear) requires the session token issued at login. */
const TOKEN_KEY = "shc_admin_token";

let adminToken = null;
let cachedBookings = [];

document.addEventListener('DOMContentLoaded', () => {
  const loginWrap = document.getElementById('login-wrap');
  const dashWrap = document.getElementById('dash-wrap');
  const loginForm = document.getElementById('login-form');
  const loginCard = document.querySelector('.login-card');
  const errBox = document.getElementById('login-err');
  const pwToggle = document.getElementById('pw-toggle');
  const pwInput = document.getElementById('admin-pw-input');
  const searchInput = document.getElementById('search-input');

  function showLogin(){
    dashWrap.style.display = 'none';
    loginWrap.style.display = 'flex';
  }

  function showDashboard(){
    loginWrap.style.display = 'none';
    dashWrap.style.display = 'block';
    refreshBookings();
  }

  function setSubmitLoading(isLoading){
    const btn = loginForm ? loginForm.querySelector('button[type="submit"]') : null;
    if(!btn) return;
    btn.disabled = isLoading;
  }

  async function refreshBookings(filter){
    try{
      const data = await backendCall('booking-admin', { action: 'list', token: adminToken });
      cachedBookings = data.bookings || [];
      renderDashboard(typeof filter === 'string' ? filter : (searchInput ? searchInput.value : ''));
    }catch(err){
      console.error('Could not load bookings:', err);
      // Session likely expired or invalid — send back to the login screen.
      adminToken = null;
      sessionStorage.removeItem(TOKEN_KEY);
      showLogin();
    }
  }

  const storedToken = sessionStorage.getItem(TOKEN_KEY);
  if(storedToken){
    adminToken = storedToken;
    showDashboard();
  }

  if(pwToggle && pwInput){
    pwToggle.addEventListener('click', () => {
      const isPw = pwInput.type === 'password';
      pwInput.type = isPw ? 'text' : 'password';
      pwToggle.querySelector('.eye-open').style.display = isPw ? 'none' : 'block';
      pwToggle.querySelector('.eye-closed').style.display = isPw ? 'block' : 'none';
    });
  }

  if(loginForm){
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('admin-id-input').value.trim();
      const pw = pwInput.value;
      setSubmitLoading(true);
      try{
        const data = await backendCall('booking-admin', { action: 'login', adminId: id, password: pw });
        adminToken = data.token;
        sessionStorage.setItem(TOKEN_KEY, adminToken);
        errBox.style.display = 'none';
        showDashboard();
      }catch(err){
        errBox.style.display = 'flex';
        loginCard.classList.remove('shake');
        void loginCard.offsetWidth;
        loginCard.classList.add('shake');
      }finally{
        setSubmitLoading(false);
      }
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn){
    logoutBtn.addEventListener('click', () => {
      adminToken = null;
      sessionStorage.removeItem(TOKEN_KEY);
      showLogin();
      loginForm.reset();
    });
  }

  if(searchInput){
    searchInput.addEventListener('input', () => renderDashboard(searchInput.value));
  }

  const clearAllBtn = document.getElementById('clear-all-btn');
  if(clearAllBtn){
    clearAllBtn.addEventListener('click', async () => {
      const lang = getLang();
      if(!confirm(I18N[lang].confirm_clear)) return;
      try{
        await backendCall('booking-admin', { action: 'clearAll', token: adminToken });
        cachedBookings = [];
        renderDashboard();
      }catch(err){
        alert(lang === 'np' ? 'मेटाउन सकिएन। फेरि प्रयास गर्नुहोस्।' : 'Could not clear bookings. Please try again.');
      }
    });
  }

  const exportBtn = document.getElementById('export-csv-btn');
  if(exportBtn){
    exportBtn.addEventListener('click', exportCSV);
  }

  window.addEventListener('shc:lang-changed', () => renderDashboard(searchInput ? searchInput.value : ''));
});

function fmtDate(iso){
  try{
    const d = new Date(iso);
    return d.toLocaleString(undefined, { year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
  }catch(e){ return iso; }
}

function renderDashboard(filter){
  const lang = getLang();
  const dict = I18N[lang];
  const bookings = cachedBookings;
  const q = (filter || '').toLowerCase().trim();
  const filtered = q
    ? bookings.filter(b => (b.name||'').toLowerCase().includes(q) || (b.phone||'').toLowerCase().includes(q))
    : bookings;

  const totalEl = document.getElementById('stat-total');
  const todayEl = document.getElementById('stat-today');
  const weekEl = document.getElementById('stat-week');
  const svcEl = document.getElementById('stat-services');

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const weekAgo = new Date(now.getTime() - 7*24*60*60*1000);

  if(totalEl) totalEl.textContent = bookings.length;
  if(todayEl) todayEl.textContent = bookings.filter(b => (b.submittedAt||'').split('T')[0] === todayStr).length;
  if(weekEl) weekEl.textContent = bookings.filter(b => new Date(b.submittedAt) >= weekAgo).length;
  if(svcEl) svcEl.textContent = Object.keys(SERVICE_NAMES).length;

  renderServiceBreakdown(bookings, lang);

  const tbody = document.getElementById('bookings-tbody');
  const emptyState = document.getElementById('empty-state');
  const tableWrap = document.getElementById('table-wrap-el');
  if(!tbody) return;

  tbody.innerHTML = '';

  if(filtered.length === 0){
    if(tableWrap) tableWrap.style.display = 'none';
    if(emptyState) emptyState.style.display = 'block';
    return;
  }
  if(tableWrap) tableWrap.style.display = 'block';
  if(emptyState) emptyState.style.display = 'none';

  filtered.forEach(b => {
    const tr = document.createElement('tr');
    const svcLabel = (SERVICE_NAMES[b.service] && SERVICE_NAMES[b.service][lang]) || b.serviceName || b.service;
    tr.innerHTML = `
      <td><strong>${escapeHtml(b.name)}</strong>${b.age ? `<div style="color:var(--text-muted);font-size:.74rem;">${lang==='np'?'उमेर':'Age'}: ${escapeHtml(b.age)}</div>` : ''}</td>
      <td><a href="tel:${escapeHtml(b.phone)}">${escapeHtml(b.phone)}</a></td>
      <td><span class="pill">${escapeHtml(svcLabel)}</span></td>
      <td>${escapeHtml(b.date || '-')}</td>
      <td>${escapeHtml(b.time || '-')}</td>
      <td style="max-width:220px;white-space:normal;">${escapeHtml(b.message || '-')}</td>
      <td>${fmtDate(b.submittedAt)}</td>
      <td><button class="row-del" data-id="${b.id}" title="${dict.confirm_del}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
          </button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.row-del').forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang2 = getLang();
      if(!confirm(I18N[lang2].confirm_del)) return;
      const id = btn.getAttribute('data-id');
      try{
        await backendCall('booking-admin', { action: 'delete', token: adminToken, id });
        cachedBookings = cachedBookings.filter(b => b.id !== id);
        renderDashboard(document.getElementById('search-input').value);
      }catch(err){
        alert(lang2 === 'np' ? 'मेटाउन सकिएन। फेरि प्रयास गर्नुहोस्।' : 'Could not delete this booking. Please try again.');
      }
    });
  });
}

function renderServiceBreakdown(bookings, lang){
  const container = document.getElementById('service-breakdown');
  if(!container) return;

  const counts = {};
  Object.keys(SERVICE_NAMES).forEach(key => { counts[key] = 0; });
  bookings.forEach(b => {
    const key = SERVICE_NAMES[b.service] ? b.service : 'other';
    counts[key] = (counts[key] || 0) + 1;
  });

  const total = bookings.length;
  container.innerHTML = Object.keys(SERVICE_NAMES).map(key => {
    const label = SERVICE_NAMES[key][lang] || SERVICE_NAMES[key].en;
    const count = counts[key] || 0;
    const pct = total ? Math.round((count / total) * 100) : 0;
    return `
      <div class="hmis-bar-item">
        <div class="hmis-bar-top"><span>${escapeHtml(label)}</span><span>${count}</span></div>
        <div class="hmis-bar-track"><div class="hmis-bar-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join('');
}

function escapeHtml(str){
  if(str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function exportCSV(){
  const bookings = cachedBookings;
  if(bookings.length === 0){ alert('No bookings to export.'); return; }
  const headers = ['Booking ID','Name','Phone','Age','Service','Preferred Date','Preferred Time','Message','Submitted At'];
  const rows = bookings.map(b => [
    b.id, b.name, b.phone, b.age || '', b.serviceName || b.service, b.date || '', b.time || '', (b.message||'').replace(/\n/g,' '), b.submittedAt
  ]);
  const csv = [headers, ...rows]
    .map(r => r.map(v => `"${String(v||'').replace(/"/g,'""')}"`).join(','))
    .join('\n');
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shanti-bookings-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Re-render table text when language toggles (names of services, headers handled via data-i18n already)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => window.dispatchEvent(new Event('shc:lang-changed')), 0);
    });
  });
});
