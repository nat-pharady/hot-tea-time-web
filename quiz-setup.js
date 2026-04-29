// HTT Quiz Modal - Complete Setup
// This opens the htt-quiz modal from the index.html "Start Sipping Free" button

const htt_QS = [
  { id: "gender", label: "About You", text: "How do you identify?", hint: null, multi: false, opts: [{ i: "♀", t: "Female" }, { i: "♂", t: "Male" }, { i: "✦", t: "Non-binary" }] },
  { id: "attract", label: "Your Desire", text: "Who do you want to fall for?", hint: null, multi: false, opts: [{ i: "♀", t: "A woman" }, { i: "♂", t: "A man" }, { i: "✦", t: "Non-binary" }, { i: "♾", t: "Open to anything" }] },
  { id: "pov", label: "Perspective", text: "How do you want to live the story?", hint: null, multi: false, opts: [{ i: "👁", t: "First person — I am the protagonist", s: "You are inside the story" }, { i: "📖", t: "Third person — I watch it unfold", s: "Protagonist is she/he/they" }] },
  { id: "setting", label: "Your World", text: "Where does your story take place?", hint: "Choose as many as you like", multi: true, opts: [{ i: "🧛", t: "Vampire Courts", s: "gothic castles & eternal night" }, { i: "🧚", t: "Faerie Realm", s: "ancient magic & wild enchantment" }, { i: "🏰", t: "Regency England", s: "ballrooms & candlelit estates" }, { i: "⚔", t: "Dark Fantasy Kingdom", s: "war, power & forbidden magic" }, { i: "🏔", t: "Highland Scotland", s: "misty moors & ancient clans" }, { i: "🏙", t: "Modern City", s: "boardrooms, nightclubs, penthouses" }, { i: "🌊", t: "Small Coastal Town", s: "secrets & slow burn" }] },
  { id: "trope", label: "Your Craving", text: "Which tropes make your heart race?", hint: "Choose all that call to you", multi: true, opts: [{ i: "⚔", t: "Enemies to Lovers" }, { i: "🚫", t: "Forbidden Romance" }, { i: "🎭", t: "Fake Dating" }, { i: "🔒", t: "Forced Proximity" }, { i: "🔄", t: "Second Chance" }, { i: "⭐", t: "Fated Mates" }, { i: "🛡", t: "Dark Protector" }, { i: "🩹", t: "Wounded Hero" }] },
  { id: "taste", label: "Your Taste", text: "Which archetypes speak to your desires?", hint: "Choose all that resonate", multi: true, opts: [{ i: "🌸", t: "The Bloom", s: "soft romance, emotional safety" }, { i: "♾", t: "The Eternal", s: "obsessive, soul-deep loyalty" }, { i: "🌹", t: "The Thorn", s: "surrender, yielding control" }, { i: "👑", t: "The Root", s: "dominant, predatory authority" }, { i: "💫", t: "The Dream", s: "intellectual, psychological pull" }, { i: "✨", t: "The Muse", s: "playful wit, sharp banter" }] },
  { id: "temp", label: "Temperature", text: "How hot do you take your tea?", hint: "Select one or more", multi: true, opts: [{ i: "🧊", t: "Iced", s: "emotional tension only" }, { i: "❄️", t: "Warm", s: "tender touches" }, { i: "🍵", t: "Steeping", s: "heavy chemistry" }, { i: "♨️", t: "Boiling", s: "intense passion" }, { i: "🔥", t: "Scorching", s: "visceral, raw" }] }
];

// Quiz state
let htt_cur = -1;
let htt_answers = {};
let htt_selections = [];
let htt_transitioning = false;

// Function to open quiz modal from index.html
function openQuizModal(event) {
  event.preventDefault();
  console.log("Opening HTT Quiz Modal...");
  
  // Show quiz background and nav
  document.getElementById("htt-quiz-bg").style.display = "block";
  document.getElementById("htt-quiz-nav").style.display = "flex";
  document.getElementById("htt-quiz-close").style.display = "block";
  
  // Hide scrolling
  document.body.style.overflow = "hidden";
  
  // Show age gate
  document.getElementById("htt-quiz-ageGate").style.display = "flex";
  
  // Setup age gate if not already done
  htt_setupAgeGate();
}

// Function to close quiz modal
function htt_closeQuiz() {
  console.log("Closing HTT Quiz Modal...");
  document.getElementById("htt-quiz-bg").style.display = "none";
  document.getElementById("htt-quiz-nav").style.display = "none";
  document.getElementById("htt-quiz-ageGate").style.display = "none";
  document.getElementById("htt-quiz-section").classList.remove("show");
  document.getElementById("htt-quiz-transSection").classList.remove("show");
  document.getElementById("htt-quiz-close").style.display = "none";
  document.body.style.overflow = "auto";
  
  // Reset state
  htt_cur = -1;
  htt_answers = {};
  htt_selections = [];
  htt_transitioning = false;
}

// Age gate logic
function htt_setupAgeGate() {
  var today = new Date();
  var maxD = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  document.getElementById("htt-quiz-dobInput").max = maxD.toISOString().split("T")[0];
  
  function check() {
    var ok = document.getElementById("htt-quiz-ageConsent").checked && 
             document.getElementById("htt-quiz-explicitConsent").checked && 
             document.getElementById("htt-quiz-dobInput").value;
    document.getElementById("htt-quiz-ageBtn").disabled = !ok;
  }
  
  ["htt-quiz-dobInput", "htt-quiz-ageConsent", "htt-quiz-explicitConsent"].forEach(function(id) {
    var el = document.getElementById(id);
    el.addEventListener("change", check);
    el.addEventListener("input", check);
  });
  
  document.getElementById("htt-quiz-ageBtn").addEventListener("click", function() {
    var dobStr = document.getElementById("htt-quiz-dobInput").value;
    if (!dobStr) return;
    
    var parts = dobStr.split("-");
    var dobY = parseInt(parts[0], 10), dobM = parseInt(parts[1], 10) - 1, dobD = parseInt(parts[2], 10);
    var now = new Date();
    var age = now.getFullYear() - dobY;
    var mDiff = now.getMonth() - dobM;
    if (mDiff < 0 || (mDiff === 0 && now.getDate() < dobD)) age--;
    
    if (age < 18) {
      document.getElementById("htt-quiz-ageErr").style.display = "block";
      return;
    }
    
    document.getElementById("htt-quiz-ageErr").style.display = "none";
    document.getElementById("htt-quiz-ageGate").style.display = "none";
    document.getElementById("htt-quiz-section").classList.add("show");
    htt_showIntro();
  });
}

// Helper functions
function htt_setBg(k) {
  document.querySelectorAll(".htt-quiz-bw").forEach(function(l) {
    l.classList.remove("on");
  });
  var t = document.getElementById("bg-" + k);
  if (t) t.classList.add("on");
}

function htt_updProg() {
  var r = document.getElementById("prail");
  if (htt_cur < 0 || htt_cur >= htt_QS.length) {
    r.classList.remove("show");
    return;
  }
  r.classList.add("show");
  r.innerHTML = htt_QS.map(function(_, i) {
    return '<div class="htt-quiz-dot ' + (i < htt_cur ? 'done' : i === htt_cur ? 'active' : '') + '"></div>';
  }).join('');
}

function htt_render(html) {
  document.getElementById("qapp").innerHTML = html;
}

function htt_updateNextBtn() {
  var nb = document.getElementById('nb2');
  if (nb) nb.disabled = htt_selections.length === 0;
}

function htt_showIntro() {
  htt_cur = -1;
  htt_setBg("intro");
  document.getElementById("prail").classList.remove("show");
  htt_render('<div class="htt-quiz-intro"><div class="htt-quiz-iey">The Taste Test</div><h1 class="htt-quiz-ititle">How do you <span class="ac">take</span> your tea?</h1><p>Seven questions. At the end we\'ll know exactly how you like your stories steeped — and unlock your 7-day Premium trial to match.</p><button class="htt-quiz-gbtn" id="sBtn">Begin the Taste Test</button></div>');
  document.getElementById("sBtn").addEventListener("click", htt_startQuiz);
}

function htt_showQ() {
  var q = htt_QS[htt_cur], isM = q.multi, tc = q.opts.length >= 4;
  var oh = q.opts.map(function(o, i) {
    return '<button class="htt-quiz-opt' + (htt_selections.indexOf(o.t) > -1 ? ' sel' : '') + '" data-i="' + i + '"><span class="htt-quiz-oic">' + o.i + '</span><span>' + o.t + (o.s ? '<span class="htt-quiz-osub">' + o.s + '</span>' : '') + '</span></button>';
  }).join('');
  
  htt_render('<div class="htt-quiz-qw" id="qw"><div class="htt-quiz-ql">' + q.label + '</div><div class="htt-quiz-qt">' + q.text + '</div>' + (q.hint ? '<div class="htt-quiz-qh">' + q.hint + '</div>' : '<div class="htt-quiz-qsp"></div>') + '<div class="htt-quiz-opts' + (tc ? ' tc' : '') + '" id="ob">' + oh + '</div><div class="htt-quiz-qnav"><button class="htt-quiz-nb" id="bb"' + (htt_cur === 0 ? ' disabled' : '') + '>← Back</button><span class="htt-quiz-qcnt">' + (htt_cur + 1) + ' / ' + htt_QS.length + '</span><button class="htt-quiz-nb pri" id="nb2"' + (htt_selections.length === 0 ? ' disabled' : '') + '>' + (htt_cur === htt_QS.length - 1 ? 'Steep Profile →' : 'Next →') + '</button></div></div>');
  
  document.querySelectorAll("#ob .htt-quiz-opt").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var o = htt_QS[htt_cur].opts[parseInt(this.dataset.i)];
      if (isM) {
        var ix = htt_selections.indexOf(o.t);
        if (ix > -1) {
          htt_selections.splice(ix, 1);
          this.classList.remove('sel');
        } else {
          htt_selections.push(o.t);
          this.classList.add('sel');
        }
        htt_updateNextBtn();
      } else {
        htt_selections = [o.t];
        var self = this;
        document.querySelectorAll('#ob .htt-quiz-opt').forEach(function(b) {
          b.classList.remove('sel');
        });
        self.classList.add('sel');
        htt_updateNextBtn();
        setTimeout(htt_goNext, 380);
      }
    });
  });
  
  document.getElementById("bb").addEventListener("click", htt_goBack);
  document.getElementById("nb2").addEventListener("click", htt_goNext);
  htt_setBg(htt_cur);
  htt_updProg();
}

function htt_doTrans(cb) {
  if (htt_transitioning) return;
  htt_transitioning = true;
  var w = document.getElementById("qw");
  if (w) w.classList.add("leaving");
  var f = document.createElement("div");
  f.className = "htt-quiz-flash";
  document.body.appendChild(f);
  setTimeout(function() {
    f.remove();
  }, 1100);
  setTimeout(function() {
    cb();
    htt_transitioning = false;
  }, 500);
}

function htt_goNext() {
  if (!htt_selections.length || htt_transitioning) return;
  htt_answers[htt_QS[htt_cur].id] = htt_selections.slice();
  htt_doTrans(function() {
    htt_cur++;
    htt_selections = [];
    if (htt_cur >= htt_QS.length) {
      htt_showTrans();
    } else {
      htt_showQ();
    }
  });
}

function htt_goBack() {
  if (htt_cur === 0 || htt_transitioning) return;
  htt_doTrans(function() {
    htt_cur--;
    htt_selections = (htt_answers[htt_QS[htt_cur].id] || []).slice();
    htt_showQ();
  });
}

function htt_startQuiz() {
  htt_cur = 0;
  htt_answers = {};
  htt_selections = [];
  htt_doTrans(htt_showQ);
}

function htt_showTrans() {
  htt_setBg("transition");
  document.getElementById("prail").classList.remove("show");
  document.getElementById("htt-quiz-section").classList.remove("show");
  document.getElementById("htt-quiz-transSection").classList.add("show");
  
  var all = [].concat(
    htt_answers.setting || [],
    htt_answers.trope || [],
    htt_answers.taste || [],
    htt_answers.temp || []
  );
  
  document.getElementById("profileChips").innerHTML = all.map(function(t) {
    return '<span class="htt-quiz-chip">' + t + '</span>';
  }).join('');
  
  // Save profile to localStorage
  try {
    localStorage.setItem("htt_profile", JSON.stringify(htt_answers));
  } catch (e) {}
}

// "Open Story Builder" button
document.addEventListener("DOMContentLoaded", function() {
  var toBuilderBtn = document.getElementById("toBuilderBtn");
  if (toBuilderBtn) {
    toBuilderBtn.addEventListener("click", function() {
      try {
        localStorage.setItem("htt_profile", JSON.stringify(htt_answers));
        localStorage.setItem("htt_trial_active", "true");
      } catch (e) {}
      alert("✦ Profile saved! In production this navigates to the Story Builder. Paste your profile into the builder artifact to continue.");
      htt_closeQuiz();
    });
  }
  
  // Setup close button
  var closeBtn = document.getElementById("htt-quiz-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", htt_closeQuiz);
  }
});

// Particles function
function htt_makeParticles() {
  var c = document.getElementById("pts");
  for (var i = 0; i < 30; i++) {
    var d = document.createElement("div");
    d.className = "htt-quiz-p";
    var sz = Math.random() * 3.5 + 1.5, isG = Math.random() > 0.5;
    var col = isG ? "rgba(248,220,118," + (0.3 + Math.random() * 0.4) + ")" : "rgba(247,244,234," + (0.15 + Math.random() * 0.2) + ")";
    d.style.cssText = "width:" + sz + "px;height:" + sz + "px;left:" + (Math.random() * 100) + "%;background:" + col + ";box-shadow:0 0 " + (sz * 2) + "px " + col + ";animation-duration:" + (9 + Math.random() * 14) + "s;animation-delay:" + (Math.random() * 12) + "s";
    c.appendChild(d);
  }
}

// Initialize particles when modal opens
document.addEventListener("DOMContentLoaded", function() {
  // Call makeParticles once on load
  htt_makeParticles();
});
