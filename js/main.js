/* ===================== Shanti Health Care — main.js ===================== */

/* >>> IMPORTANT: replace this with the clinic's real Gmail address <<<
   Every booking submitted on the website will be emailed to this address
   via FormSubmit (a free form-to-email service, no backend required).
   The FIRST time a booking is submitted, FormSubmit sends a one-time
   "activate your form" email to this address — open it and click Activate,
   otherwise future emails won't arrive. */
const CLINIC_EMAIL = "shantihealthcare.sunsari@gmail.com";

const BOOKINGS_KEY = "shc_bookings";

function getBookings(){
  try{ return JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || []; }
  catch(e){ return []; }
}
function saveBookings(list){
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
}
function addBooking(entry){
  const list = getBookings();
  list.unshift(entry);
  saveBookings(list);
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header scroll shadow ---- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if(header) header.classList.toggle('scrolled', window.scrollY > 10);
    const topBtn = document.querySelector('.fab.top');
    if(topBtn) topBtn.classList.toggle('show', window.scrollY > 500);
  };
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* ---- Mobile nav ---- */
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');
  if(hamburger && mainNav){
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    }));
  }

  /* ---- Scroll to top ---- */
  const topBtn = document.querySelector('.fab.top');
  if(topBtn){
    topBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  }

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal, .service-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---- Set min date for booking date field = today ---- */
  const dateInput = document.getElementById('bk-date');
  if(dateInput){
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  /* ---- Booking form ---- */
  const form = document.getElementById('booking-form');
  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const lang = getLang();

      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const age = form.age.value.trim();
      const service = form.service.value;
      const date = form.date.value;
      const time = form.time.value;
      const message = form.message.value.trim();

      if(!name || !phone || !service || !date){
        shakeInvalid(form);
        return;
      }

      const entry = {
        id: 'BK' + Date.now().toString(36).toUpperCase(),
        name, phone, age, service,
        serviceName: (SERVICE_NAMES[service] && SERVICE_NAMES[service][lang]) || service,
        date, time, message,
        submittedAt: new Date().toISOString()
      };

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = lang === 'np' ? 'पठाउँदै...' : 'Sending...';

      // Save locally so the admin dashboard can list it
      addBooking(entry);

      // Try to email the clinic via FormSubmit (static-site friendly, no backend)
      try{
        await fetch(`https://formsubmit.co/ajax/${CLINIC_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type':'application/json', 'Accept':'application/json' },
          body: JSON.stringify({
            _subject: `New Appointment Booking - ${entry.name}`,
            "Booking ID": entry.id,
            "Patient Name": entry.name,
            "Phone": entry.phone,
            "Age": entry.age || '-',
            "Service": entry.serviceName,
            "Preferred Date": entry.date,
            "Preferred Time": entry.time || '-',
            "Message": entry.message || '-',
            "Submitted At": entry.submittedAt
          })
        });
      }catch(err){
        // Silent fail is fine — booking is already saved locally for the admin panel.
        console.warn('Email delivery failed (booking still saved):', err);
      }

      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      form.reset();
      if(dateInput){ const today = new Date().toISOString().split('T')[0]; dateInput.setAttribute('min', today); }
      showToast();
    });
  }

  function shakeInvalid(form){
    form.querySelectorAll('[required]').forEach(field => {
      if(!field.value){
        field.style.borderColor = 'var(--red)';
        field.addEventListener('input', function clearErr(){
          field.style.borderColor = '';
          field.removeEventListener('input', clearErr);
        });
      }
    });
    form.scrollIntoView({ behavior:'smooth', block:'center' });
  }

  function showToast(){
    const toast = document.getElementById('toast');
    if(!toast) return;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 5500);
  }

  const toastClose = document.querySelector('.toast-dismiss');
  if(toastClose){
    toastClose.addEventListener('click', () => document.getElementById('toast').classList.remove('show'));
  }

  /* ---- Avoid FAB stack overlapping footer links ---- */
  const footerEl = document.querySelector('.site-footer');
  const fabStack = document.querySelector('.fab-stack');
  if(footerEl && fabStack){
    const footerIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => fabStack.classList.toggle('above-footer', entry.isIntersecting));
    }, { threshold: 0.05 });
    footerIo.observe(footerEl);
  }

  /* ---- Active nav link highlight ---- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('nav.main-nav a[href^="#"]');
  const navIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`nav.main-nav a[href="#${id}"]`);
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => navIo.observe(s));

});
