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

// ── QUIZ MODAL ──
document.addEventListener('DOMContentLoaded', function() {
  const quizModal = document.getElementById('tasteTestModal');
  const startSippingBtn = document.querySelector('.nav-cta');
  const closeBtn = document.querySelector('.modal-close');

  if (!quizModal || !startSippingBtn) return;

  // Open quiz when "Start Sipping Free" is clicked
  startSippingBtn.addEventListener('click', function(e) {
    e.preventDefault();
    quizModal.style.display = 'flex';
  });

  // Close quiz when X button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      quizModal.style.display = 'none';
    });
  }

  // Close quiz when clicking outside the modal content
  quizModal.addEventListener('click', function(e) {
    if (e.target === quizModal) {
      quizModal.style.display = 'none';
    }
  });

  // Make these functions globally available for inline onclick handlers
  window.nextStep = function(stepNumber) {
    const steps = quizModal.querySelectorAll('.modal-step');
    steps.forEach(step => step.style.display = 'none');
    const targetStep = quizModal.querySelector(`[data-step="${stepNumber}"]`);
    if (targetStep) {
      targetStep.style.display = 'block';
    }
  };

  window.selectTrope = function(trope) {
    window.nextStep(3);
  };

  window.completeOnboarding = function(heatLevel) {
    console.log('Quiz completed with heat level:', heatLevel);
    // Redirect to home page
    window.location.href = 'home.html';
  };
});
