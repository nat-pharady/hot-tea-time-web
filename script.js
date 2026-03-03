  // Initialize Lucide icons
  function initLucideIcons() {
    if(window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
      console.log('Lucide icons initialized');
    } else {
      console.warn('Lucide library not found, retrying...');
      setTimeout(initLucideIcons, 500);
    }
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLucideIcons);
  } else {
    initLucideIcons();
  }

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold:0.08, rootMargin:'0px 0px -36px 0px' });
  revealEls.forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const t = document.querySelector(link.getAttribute('href'));
      if(t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if(window.scrollY >= s.offsetTop - 130) current = s.id; });
    navLinks.forEach(link => { link.style.color = link.getAttribute('href') === '#' + current ? 'var(--orange)' : ''; });
  });
