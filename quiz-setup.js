// ═══════════════════════════════════════════════════════════════════════════════
// QUIZ SYSTEM - Clean rebuild
// This file handles the entire quiz: HTML creation, event handling, profile creation
// ═══════════════════════════════════════════════════════════════════════════════

const QUIZ_HTML = `
<!-- TASTE TEST MODAL -->
<div id="tasteTestModal" class="modal-overlay">
  <div class="modal-container">
    <button id="quiz-close-btn" class="modal-close" type="button">&times;</button>

    <!-- Step 1: Name & Email -->
    <div class="modal-step" data-step="1">
      <div class="modal-header">
        <div class="modal-eyebrow">The Taste Test</div>
        <h2 class="modal-title">Let's Find Your <em>Perfect Pour</em></h2>
        <p class="modal-subtitle">First, let's get to know you.</p>
      </div>
      <div class="modal-body">
        <input type="text" id="userName" class="modal-input" placeholder="What should we call you?" autocomplete="name" style="margin-bottom: 16px;" />
        <input type="email" id="userEmail" class="modal-input" placeholder="your@email.com" autocomplete="email" />
        <button id="quiz-step1-continue" class="modal-btn" type="button">Continue</button>
      </div>
    </div>

    <!-- Step 2: Trope -->
    <div class="modal-step" data-step="2" style="display:none;">
      <div class="modal-header">
        <div class="modal-eyebrow">Step 2 of 3</div>
        <h2 class="modal-title">Choose Your <em>Trope</em></h2>
        <p class="modal-subtitle">What makes your heart race?</p>
      </div>
      <div class="modal-body">
        <div class="trope-grid">
          <button class="trope-card" data-trope="enemies-to-lovers" type="button">
            <div class="trope-icon">⚔️</div>
            <div class="trope-name">Enemies to Lovers</div>
          </button>
          <button class="trope-card" data-trope="forced-proximity" type="button">
            <div class="trope-icon">🔒</div>
            <div class="trope-name">Forced Proximity</div>
          </button>
          <button class="trope-card" data-trope="dark-morally-grey" type="button">
            <div class="trope-icon">🖤</div>
            <div class="trope-name">Dark & Morally Grey</div>
          </button>
          <button class="trope-card" data-trope="forbidden-love" type="button">
            <div class="trope-icon">💔</div>
            <div class="trope-name">Forbidden Love</div>
          </button>
          <button class="trope-card" data-trope="regency-nobility" type="button">
            <div class="trope-icon">👑</div>
            <div class="trope-name">Regency & Nobility</div>
          </button>
          <button class="trope-card" data-trope="gothic-paranormal" type="button">
            <div class="trope-icon">🧛</div>
            <div class="trope-name">Gothic & Paranormal</div>
          </button>
        </div>
      </div>
    </div>

    <!-- Step 3: Heat Level -->
    <div class="modal-step" data-step="3" style="display:none;">
      <div class="modal-header">
        <div class="modal-eyebrow">Final Step</div>
        <h2 class="modal-title">Select Your <em>Heat Level</em></h2>
        <p class="modal-subtitle">How spicy do you like it?</p>
      </div>
      <div class="modal-body">
        <div class="heat-grid">
          <button class="heat-card" data-heat="warm" type="button">
            <img src="images/author-icons/mouth.png" alt="warm" class="heat-icon" style="width: 72px; height: 72px; object-fit: contain; margin-bottom: -12px;">
            <div class="heat-name">Warm</div>
            <div class="heat-desc">Cozy & sweet</div>
          </button>
          <button class="heat-card" data-heat="steamy" type="button">
            <img src="images/author-icons/candle.png" alt="steamy" class="heat-icon" style="width: 72px; height: 72px; object-fit: contain; margin-bottom: -12px; transform: translateY(-8px);">
            <div class="heat-name">Steamy</div>
            <div class="heat-desc">A little daring</div>
          </button>
          <button class="heat-card" data-heat="hot" type="button">
            <img src="images/author-icons/chili.png" alt="hot" class="heat-icon" style="width: 72px; height: 72px; object-fit: contain; margin-bottom: -12px;">
            <div class="heat-name">Hot</div>
            <div class="heat-desc">Turn up the heat</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// ── Initialize Quiz ──
function initializeQuiz() {
  const container = document.getElementById('quiz-modal-container');
  if (!container) {
    console.warn('quiz-modal-container not found');
    return;
  }

  // Inject quiz HTML
  container.innerHTML = QUIZ_HTML;
  console.log('✓ Quiz HTML injected');

  // Get references to modal and buttons
  const modal = document.getElementById('tasteTestModal');
  const closeBtn = document.getElementById('quiz-close-btn');
  const continueBtn = document.getElementById('quiz-step1-continue');
  const tropeButtons = document.querySelectorAll('.trope-card');
  const heatButtons = document.querySelectorAll('.heat-card');
  const overlay = modal;

  // ── Event Handlers ──

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Close when clicking overlay
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      modal.style.display = 'none';
    }
  });

  // Continue button (Step 1 → Step 2)
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      console.log('Continue button clicked');
      goToStep(2);
    });
  }

  // Trope buttons (Step 2 → Step 3)
  tropeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const trope = btn.getAttribute('data-trope');
      console.log('Trope selected:', trope);
      window.selectedTrope = trope;
      goToStep(3);
    });
  });

  // Heat level buttons (Complete quiz)
  heatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const heatLevel = btn.getAttribute('data-heat');
      console.log('Heat level selected:', heatLevel);
      completeQuiz(heatLevel);
    });
  });

  console.log('✓ All quiz event listeners attached');
}

// ── Step Navigation ──
function goToStep(stepNumber) {
  console.log('Going to step:', stepNumber);
  const modal = document.getElementById('tasteTestModal');
  if (!modal) return;

  // Hide all steps
  const allSteps = modal.querySelectorAll('.modal-step');
  allSteps.forEach(step => {
    step.style.display = 'none';
  });

  // Show target step
  const targetStep = modal.querySelector(`[data-step="${stepNumber}"]`);
  if (targetStep) {
    targetStep.style.display = 'block';
    console.log('✓ Step', stepNumber, 'shown');
  } else {
    console.warn('Step', stepNumber, 'not found');
  }
}

// ── Complete Quiz ──
function completeQuiz(heatLevel) {
  console.log('=== QUIZ COMPLETION ===');
  console.log('Heat level selected:', heatLevel);

  // Get form values
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value : '';

  console.log('Form inputs - Name:', name, 'Email:', email);

  // Validate
  if (!name || !email) {
    alert('Please enter your name and email');
    return;
  }

  // Avatar map
  const avatarMap = {
    'warm': '☕',
    'steamy': '🫖',
    'hot': '🌶️'
  };

  // Get selected trope from step 2
  const selectedTrope = window.selectedTrope || 'not-specified';
  console.log('Selected trope from step 2:', selectedTrope);

  // Create profile
  const userProfile = {
    email: email,
    displayName: name,
    memberSince: Date.now(),
    preferences: {
      favoriteTopology: selectedTrope,
      heatLevel: heatLevel
    },
    avatar: avatarMap[heatLevel] || '🫖',
    membershipTier: 'free',
    stats: {
      storiesSaved: 0,
      charactersCollected: 0,
      readingStreak: 0
    }
  };

  console.log('✓ User profile created:', userProfile);

  // Save to localStorage
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  localStorage.setItem('isLoggedIn', 'true');

  // Verify it was saved
  const savedProfile = localStorage.getItem('userProfile');
  const savedLoggedIn = localStorage.getItem('isLoggedIn');
  console.log('✓ Saved to localStorage - isLoggedIn:', savedLoggedIn);
  console.log('✓ Saved profile:', JSON.parse(savedProfile));

  // Redirect to home
  console.log('Redirecting to home.html...');
  window.location.href = 'home.html';
}

// ── Open Quiz Modal ──
window.openQuizModal = function(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('tasteTestModal');
  if (modal) {
    modal.style.display = 'flex';
    window.quizReturnPage = window.location.pathname + window.location.search;
  }
};

// ── Auto-initialize on DOM ready ──
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
  initializeQuiz();
}
