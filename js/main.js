/* ===================== Shanti Health Care — main.js ===================== */

/* >>> IMPORTANT: replace this with the clinic's real Gmail address <<<
   Every booking submitted on the website will be emailed to this address
   via FormSubmit (a free form-to-email service, no backend required).
   The FIRST time a booking is submitted, FormSubmit sends a one-time
   "activate your form" email to this address — open it and click Activate,
   otherwise future emails won't arrive. */
const CLINIC_EMAIL = "shantihealthcare.sunsari@gmail.com";

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

      const serviceName = (SERVICE_NAMES[service] && SERVICE_NAMES[service][lang]) || service;

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = lang === 'np' ? 'पठाउँदै...' : 'Sending...';

      // Save to the real backend (Supabase) so it shows up in the admin
      // dashboard from any device, not just the visitor's own browser.
      let saved = false;
      try{
        await backendCall('booking-create', { name, phone, age, service, serviceName, date, time, message });
        saved = true;
      }catch(err){
        console.error('Booking could not be saved to the backend:', err);
      }

      // Also email the clinic via FormSubmit, as a backup notification.
      // Not awaited — this can be slow, and the booking is already safely
      // stored in the backend by this point, so it shouldn't hold up the UI.
      fetch(`https://formsubmit.co/ajax/${CLINIC_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          _subject: `New Appointment Booking - ${name}`,
          "Patient Name": name,
          "Phone": phone,
          "Age": age || '-',
          "Service": serviceName,
          "Preferred Date": date,
          "Preferred Time": time || '-',
          "Message": message || '-',
          "Submitted At": new Date().toISOString()
        })
      }).catch(err => console.warn('Email delivery failed:', err));

      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      if(!saved){
        alert(lang === 'np'
          ? 'बुकिङ पठाउन सकिएन। कृपया इन्टरनेट जडान जाँच गरी फेरि प्रयास गर्नुहोस्।'
          : 'Could not submit your booking. Please check your internet connection and try again.');
        return;
      }

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
