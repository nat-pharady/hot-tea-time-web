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

  // ── TASTE TEST MODAL FUNCTIONALITY ──
  const modal = document.getElementById('tasteTestModal');
  const navCtaButton = document.querySelector('.nav-cta');
  let userPreferences = {
    email: '',
    trope: '',
    heatLevel: ''
  };

  // Check if user has already completed onboarding
  if (localStorage.getItem('onboardingComplete') === 'true') {
    updateNavToProfile();
    showLoggedInNav();
    updateLogoLink();
  }

  // Open modal when "Start Sipping Free" button is clicked
  if (navCtaButton && localStorage.getItem('onboardingComplete') !== 'true') {
    navCtaButton.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // Close modal when X is clicked
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function openModal() {
    modal.classList.add('active');
    showStep(1);
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  function showStep(stepNumber) {
    document.querySelectorAll('.modal-step').forEach(step => {
      step.style.display = 'none';
    });
    const targetStep = document.querySelector(`[data-step="${stepNumber}"]`);
    if (targetStep) {
      targetStep.style.display = 'block';
    }
  }

  function nextStep(stepNumber) {
    // Validate email on step 1
    if (stepNumber === 2) {
      const emailInput = document.getElementById('userEmail');
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        emailInput.style.borderColor = '#ff6b6b';
        return;
      }
      userPreferences.email = email;
    }
    showStep(stepNumber);
  }

  function selectTrope(trope) {
    userPreferences.trope = trope;
    nextStep(3);
  }

  function completeOnboarding(heatLevel) {
    userPreferences.heatLevel = heatLevel;

    // Save preferences to localStorage
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    localStorage.setItem('onboardingComplete', 'true');

    // Close modal
    closeModal();

    // Redirect to home page
    window.location.href = 'home.html';
  }

  function updateNavToProfile() {
    if (navCtaButton) {
      navCtaButton.innerHTML = '<span class="profile-icon">👤</span>';
      navCtaButton.style.background = 'transparent';
      navCtaButton.style.padding = '0';
      navCtaButton.style.borderRadius = '50%';
    }
    // Show logged-in nav items
    showLoggedInNav();
  }

  function showLoggedInNav() {
    // Hide public nav items
    const publicNavItems = document.querySelectorAll('.public-nav');
    publicNavItems.forEach(item => item.style.display = 'none');

    // Show old logged-in nav items (for backward compatibility)
    const marketplaceNav = document.getElementById('marketplace-nav');
    const brewNav = document.getElementById('brew-nav');
    if (marketplaceNav) marketplaceNav.style.display = 'block';
    if (brewNav) brewNav.style.display = 'block';

    // Show new logged-in nav items
    const loggedInNavItems = document.querySelectorAll('.logged-in-nav');
    loggedInNavItems.forEach(item => item.style.display = 'block');
  }

  // Update logo link based on login state
  function updateLogoLink() {
    const logoButton = document.querySelector('.hero-nav-title');
    if (logoButton && localStorage.getItem('onboardingComplete') === 'true') {
      logoButton.setAttribute('href', 'home.html');
    }
  }

  function hideLoggedInNav() {
    // Show public nav items
    const publicNavItems = document.querySelectorAll('.public-nav');
    publicNavItems.forEach(item => item.style.display = 'block');

    // Hide old logged-in nav items
    const marketplaceNav = document.getElementById('marketplace-nav');
    const brewNav = document.getElementById('brew-nav');
    if (marketplaceNav) marketplaceNav.style.display = 'none';
    if (brewNav) brewNav.style.display = 'none';

    // Hide new logged-in nav items
    const loggedInNavItems = document.querySelectorAll('.logged-in-nav');
    loggedInNavItems.forEach(item => item.style.display = 'none');
  }

  // ── STEALTH MODE ──
  let stealthMode = false;
  const stealthBtn = document.querySelector('.stealth-btn');
  if (stealthBtn) {
    stealthBtn.addEventListener('click', () => {
      stealthMode = !stealthMode;
      stealthBtn.classList.toggle('active');
      document.body.classList.toggle('stealth-mode');
      if (stealthMode) {
        console.log('Stealth mode activated');
      } else {
        console.log('Stealth mode deactivated');
      }
    });
  }

  // ── AI GENERATOR LOCKED ──
  const aiGeneratorBtn = document.querySelector('.ai-generator-nav');
  if (aiGeneratorBtn) {
    aiGeneratorBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('🔒 AI Generator is a premium feature. Upgrade to access unlimited AI-powered content generation!');
    });
  }

  // Make functions globally accessible
  window.nextStep = nextStep;
  window.selectTrope = selectTrope;
  window.completeOnboarding = completeOnboarding;
