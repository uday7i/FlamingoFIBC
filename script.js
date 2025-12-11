// script.js - basic animations and interactions

// Year auto-fill
document.addEventListener('DOMContentLoaded', function(){
  const yrs = [ 'year','year2','year3','year4','year5','year6' ];
  const y = new Date().getFullYear();
  yrs.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // Nav toggle for mobile - supports multiple pages
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      // find nearest nav
      const parent = btn.parentElement;
      const nav = parent.querySelector('.main-nav');
      if(nav){
        if(nav.style.display === 'flex' || nav.style.display === 'block'){
          nav.style.display = 'none';
        } else {
          nav.style.display = 'block';
        }
      }
    });
  });

  // Smooth scroll for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // Contact form (client-side only)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic validation done by required attributes. Show success message (simulate send)
      const msg = document.getElementById('formMsg');
      msg.textContent = 'Thank you — your message has been recorded. Flamingo team will contact you soon.';
      contactForm.reset();
    });
  }

  const resetBtn = document.getElementById('resetForm');
  if(resetBtn){
    resetBtn.addEventListener('click', ()=>{
      const form = document.getElementById('contactForm');
      if(form) form.reset();
      const msg = document.getElementById('formMsg');
      if(msg) msg.textContent = '';
    });
  }

  // Subtle reveal on scroll for cards
  const reveal = (entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;
        obs.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(reveal, {threshold:0.12});
  document.querySelectorAll('.card, .product-card, .proc, .bag').forEach(el=>{
    el.style.transform = 'translateY(16px)';
    el.style.opacity = 0;
    el.style.transition = 'all 520ms cubic-bezier(.2,.9,.2,1)';
    observer.observe(el);
  });

});
