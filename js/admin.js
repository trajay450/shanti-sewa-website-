/* ===================== Shanti Health Care — admin.js ===================== */
/* NOTE: This is a simple client-side gate suitable for a low-budget static
   site (no backend/server). It is NOT strong security — anyone who views
   the page source can see the credentials. Do not use it to protect
   sensitive medical records; it only guards the appointment-request list
   collected from the public booking form. */
const ADMIN_ID = "ADMIN450";
const ADMIN_PASSWORD = "ADMIN450";
const SESSION_KEY = "shc_admin_session";

document.addEventListener('DOMContentLoaded', () => {
  const loginWrap = document.getElementById('login-wrap');
  const dashWrap = document.getElementById('dash-wrap');
  const loginForm = document.getElementById('login-form');
  const loginCard = document.querySelector('.login-card');
  const errBox = document.getElementById('login-err');
  const pwToggle = document.getElementById('pw-toggle');
  const pwInput = document.getElementById('admin-pw-input');

  function showDashboard(){
    loginWrap.style.display = 'none';
    dashWrap.style.display = 'block';
    renderDashboard();
  }

  if(sessionStorage.getItem(SESSION_KEY) === 'true'){
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
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('admin-id-input').value.trim();
      const pw = pwInput.value;
      if(id === ADMIN_ID && pw === ADMIN_PASSWORD){
        sessionStorage.setItem(SESSION_KEY, 'true');
        showDashboard();
      } else {
        errBox.style.display = 'flex';
        loginCard.classList.remove('shake');
        void loginCard.offsetWidth;
        loginCard.classList.add('shake');
      }
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn){
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(SESSION_KEY);
      dashWrap.style.display = 'none';
      loginWrap.style.display = 'flex';
      loginForm.reset();
    });
  }

  const searchInput = document.getElementById('search-input');
  if(searchInput){
    searchInput.addEventListener('input', () => renderDashboard(searchInput.value));
  }

  const clearAllBtn = document.getElementById('clear-all-btn');
  if(clearAllBtn){
    clearAllBtn.addEventListener('click', () => {
      const lang = getLang();
      if(confirm(I18N[lang].confirm_clear)){
        saveBookings([]);
        renderDashboard();
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
  const bookings = getBookings();
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
    btn.addEventListener('click', () => {
      const lang2 = getLang();
      if(confirm(I18N[lang2].confirm_del)){
        const id = btn.getAttribute('data-id');
        const list = getBookings().filter(b => b.id !== id);
        saveBookings(list);
        renderDashboard(document.getElementById('search-input').value);
      }
    });
  });
}

function escapeHtml(str){
  if(str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function exportCSV(){
  const bookings = getBookings();
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
