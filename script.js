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

// ── READING PANE ──
const stories = {
  'midnight-confessions': {
    title: 'Midnight Confessions',
    author: 'Sarah Mitchell',
    reads: '2.8k reads',
    chapters: '4 chapters',
    content: `<p>The café at midnight held a certain magic. Not the kind you'd find in fairy tales, but something more real—something that lived in the spaces between whispered conversations and the gentle clink of porcelain cups.</p>

<p>She had come here a thousand times, always at the same table, always ordering the same chamomile tea. The ritual had become as much a part of her as breathing. Until he walked in.</p>

<p>He didn't look like he belonged in a place like this. His leather jacket was too worn, his expression too guarded, his presence too commanding for the soft amber lighting and classical music that drifted through the speakers. Yet somehow, he fit perfectly.</p>

<p>"Is this seat taken?" His voice was rough velvet, the kind that made you want to lean in closer just to hear him better.</p>

<p>She should have said yes. Should have told him the seat was reserved, that she preferred her solitude, that there were three other empty tables. But the way he looked at her—like she was the most interesting thing he'd ever seen—made her do something unexpected.</p>

<p>"No," she whispered. "Please."</p>

<p>That night, they talked until the café closed. About books they'd read, cities they'd visited, dreams they'd abandoned, fears they'd never named. By the time he walked her to the door, she knew she'd never drink tea alone again.</p>

<p>"Same time tomorrow?" he asked, his hand barely brushing hers.</p>

<p>She didn't answer with words. She simply smiled, and in that moment, he understood everything he needed to know.</p>

<p>The café at midnight had found its magic at last. And this time, it was shared.</p>`
  },
  'garden-of-secrets': {
    title: 'Garden of Secrets',
    author: 'Emma Sterling',
    reads: '3.4k reads',
    chapters: '6 chapters',
    content: `<p>The garden had been her sanctuary for as long as she could remember. Hidden behind wrought-iron gates and climbing ivy, it was a place where the world couldn't find her—where she could be anyone, anything she wanted.</p>

<p>Roses bloomed in impossible colors. Jasmine climbed the stone walls, filling the air with its intoxicating sweetness. She'd spent entire summers here, reading, dreaming, waiting for something she couldn't name.</p>

<p>And then he appeared one twilight evening, slipping through a gap in the gate as if the garden itself had summoned him.</p>

<p>"I didn't know anyone else knew about this place," she said, her heart suddenly racing in a way that had nothing to do with trespassing.</p>

<p>He smiled, and it was dangerous—the kind of smile that promised secrets and consequences and everything she'd been waiting for.</p>

<p>"Maybe I was looking for you," he said simply.</p>

<p>In that moment, beneath the star-laden sky and surrounded by the whispers of the garden, she understood that some places are more than just locations. Some places are destinations of the soul.</p>

<p>And some secrets, once shared, could never be untold.</p>`
  }
};

function openReadingPane(storyId) {
  const story = stories[storyId];
  if (!story) return;

  document.getElementById('story-title').textContent = story.title;
  document.getElementById('story-author').textContent = `By ${story.author}`;
  document.getElementById('story-reads').textContent = story.reads;
  document.getElementById('story-chapters').textContent = story.chapters;
  document.getElementById('story-content').innerHTML = story.content;

  document.getElementById('reading-pane').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeReadingPane() {
  document.getElementById('reading-pane').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close reading pane when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
  const readingPane = document.getElementById('reading-pane');
  console.log('DOMContentLoaded fired. Reading pane element:', readingPane);

  if (readingPane) {
    readingPane.addEventListener('click', function(e) {
      if (e.target === readingPane || e.target.classList.contains('reading-pane-overlay')) {
        closeReadingPane();
      }
    });
  }

  // Add click handlers to free story cards
  const storyCards = document.querySelectorAll('.story-card');
  console.log('Found story cards:', storyCards.length);

  storyCards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    const storyIds = ['midnight-confessions', 'garden-of-secrets'];
    console.log(`Attaching listener to card ${index}:`, card);

    card.addEventListener('click', function(e) {
      console.log(`Card ${index} clicked!`);
      if (storyIds[index]) {
        console.log(`Opening story: ${storyIds[index]}`);
        openReadingPane(storyIds[index]);
      }
    });
  });
});

// ── PREMIUM STORY PREVIEWS ──
const premiumStories = {
  'the-arrangement': {
    title: 'The Arrangement',
    author: 'Alexandra Blake',
    reads: '3.2k reads',
    content: `<p>The library was silent at midnight, save for the soft rustle of turning pages and the pounding of her heart. She wasn't supposed to be here—none of the library staff came back this late, and certainly not to the restricted archives. But he was waiting, as he always was, between the stacks of leather-bound volumes that smelled of aged paper and secrets.</p>

<p>"You came," he whispered, his voice like warm silk in the darkness. His hand found hers in the shadows, fingers intertwining with a familiarity that made her breath catch. The arrangement between them was supposed to be professional, detached. But nothing about this felt calculated anymore. Everything felt like inevitability.</p>

<p>He pulled her closer, the edge of a mahogany desk pressing against her back as he cornered her between shelves of literature that had survived centuries. His lips found her neck, and she gasped—a sound swallowed by the vast emptiness of the library, by the weight of all those stories bearing witness to theirs. His hands traced the familiar paths they'd learned in darkness, mapping her body like she was the only geography that mattered.</p>

<p>"Tell me to stop," he murmured against her skin, but they both knew she wouldn't. Neither of them could stop this anymore, no matter what the arrangement had promised. The dam was breaking, and neither of them was willing to save themselves from the flood that`
  },
  'midnight-sins': {
    title: 'Midnight Sins',
    author: 'Scarlett Kess',
    reads: '5.8k reads',
    content: `<p>When midnight came, all the rules dissolved. That was their unspoken agreement—at twelve o'clock, the masks came off, and the power dynamic they'd maintained so carefully throughout the day inverted completely. She sat across from him in the penthouse, the city lights a glittering testament to his empire spread below them, and watched as he slowly loosened his tie.</p>

<p>"Your turn," she commanded, her voice steady despite the anticipation coiling through her veins. He smiled—that dangerous, knowing smile that made her pulse quicken. He always obeyed her after midnight. He always surrendered his control to her, and the transformation from commanding CEO to willing subject never failed to intoxicate her with power.</p>

<p>She moved across the space between them like a predator, her fingers trailing down his chest as she straddled him. His hands immediately went to her hips, but she shook her head. "Hands," she instructed, and he laced them behind his head, eyes dark with desire and submission. The secrets they kept at midnight burned hotter than anything daylight could tolerate. Here, in the darkness and silence, she could take what she wanted from him without apology. And he wanted to give it all to her—wanted to surrender every`
  },
  'crown-jewel': {
    title: 'Crown Jewel',
    author: 'Raven Cross',
    reads: '7.1k reads',
    content: `<p>She was exactly the kind of forbidden that a man in his position shouldn't want. An artist, struggling and beautiful, with paint forever staining her fingers and ideals too pure for the cutthroat world he dominated. He'd seen her in a gallery opening, all passion and authenticity, and something primal in him had awakened. She was trouble. She was everything he couldn't have. He had to have her.</p>

<p>The penthouse was a shrine to wealth and control, but when she was here, it felt like sacred ground. He watched her from the shadows of his bedroom doorway as she moved through his private suite, barefoot and tangled in his silk sheets, her dark hair cascading over the pillows. She was studying him with those artist's eyes, cataloging him like he was something worth immortalizing. He'd never felt so exposed. He'd never felt more alive.</p>

<p>"You shouldn't be here," he said, even as he crossed the distance between them, even as his hands found her bare shoulders. "People will talk." She pulled him down to her, her fingers threading through his hair with a possessiveness that made him ache. "Let them," she whispered against his mouth, and then she was kissing him like she was trying to consume him, trying to claim a man worth billions like he was the only treasure that`
  },
  'inferno': {
    title: 'Inferno',
    author: 'Jasmine Hart',
    reads: '6.4k reads',
    content: `<p>Gasoline and fire had nothing on the combustion between them. One look across the crowded room and her resolve ignited—every promise she'd made to herself about staying away from him burned to ash. He saw her and his jaw tightened, eyes darkening to something dangerous and wanting, and then he was moving through the crowd like gravity itself bent to pull him toward her.</p>

<p>"You shouldn't have come," he said, backing her against the brick wall of the hotel corridor. His voice was all gravel and threat, but his hands on her waist were trembling. She'd broken him down with a single appearance. That knowledge was more intoxicating than any drug. She reached for him, but he caught her wrist, pinning it above her head. "Careful," he warned, "I'm not in the mood to be gentle tonight."</p>

<p>She smiled—wild and reckless. "Good." When he kissed her, it tasted like desperation and promise, like every boundary she'd built against him crumbling. His other hand skimmed up her ribs, igniting nerve endings and memories of the last time, and the time before that. They were a wildfire that couldn't be contained, and every time they tried to stay apart, the flames only burned hotter. His mouth moved to her throat, and she arched into him, her resolve shattering into a million burning`
  },
  'velvet-lies': {
    title: 'Velvet Lies',
    author: 'Seraphine Rose',
    reads: '8.2k reads',
    content: `<p>They existed in a world built on carefully constructed deceptions. She told him she didn't love him. He told her he could live without her. Every lie tasted sweeter than the truth ever could. In his bedroom, with the evening light casting shadows across satin sheets, she whispered denials against his skin while her body betrayed every word she spoke.</p>

<p>"You should leave," she said, even as her hands pulled him deeper, even as she wrapped her legs around him and held on like she'd never let go. He knew every one of her lies by heart now—knew which ones meant yes, which meant take me harder, which meant I'm terrified of how much I need you. The truth would destroy everything—their careers, their reputations, the carefully maintained distance between their two worlds. So they kept lying, over and over again, in the dark where nobody could witness their honesty.</p>

<p>He cupped her face, forcing her to meet his eyes. "I don't care about you," she whispered, and he knew she meant the opposite. He kissed her like it was a prayer, like it was absolution, like the lie she'd just told might actually set them free. But as he buried himself inside her and she cried out his name, they both knew the truth would`
  },
  'city-nights': {
    title: 'City Nights',
    author: 'Nova Sterling',
    reads: '4.9k reads',
    content: `<p>The rooftop was their kingdom for the night. Twenty stories above the sprawling city, with nothing but stars and electricity and the hum of a million lives happening below them, they existed in a bubble of perfect isolation. She'd never seen him before tonight—picked him up at a bar with the kind of recklessness that made her feel alive—but the way he looked at her made it feel like he'd been waiting for her forever.</p>

<p>"Tell me something true," he whispered, his fingers trailing down her spine as they lay tangled on the rooftop bar's cushioned lounger. She wanted to give him truths, but they felt too heavy, too real. Instead, she kissed him again, tasting the whiskey and promise on his lips. The city lights reflected in his eyes like he contained entire constellations, and she realized she didn't need truth—she needed this. Just this moment, suspended between sky and ground, where they could be anyone to anyone.</p>

<p>His hands found her breasts, and she gasped into the night air. A helicopter passed overhead, close enough that the rotors made the world vibrate, and she didn't care if anyone saw. Let the whole city watch. Let them see her surrender to this stranger who somehow felt like her soulmate. His mouth followed the path of his hands, leaving fire in its wake, and when he`
  },
  'power-and-desire': {
    title: 'Power and Desire',
    author: 'Dominique Vale',
    reads: '9.1k reads',
    content: `<p>In the boardroom, she was untouchable. Brilliant. Ruthless. She'd clawed her way to the top and refused to let any man—especially him—make her feel small. But at night, behind the floor-to-ceiling windows of his penthouse, all her power melted away and reformed into something else entirely. Something that belonged only to him.</p>

<p>He had her pressed against the glass, sixty stories up, with the entire city spread below them like a kingdom laid at their feet. "Who's in charge now?" he whispered, his voice dark and possessive as one hand gripped her hip and the other wound through her hair. She wanted to fight him, wanted to maintain her armor, but her body was already responding to his touch, already surrendering to the intoxicating shift in power dynamics.</p>

<p>"Not you," she breathed, but they both knew she was lying. In this space, with his hands on her and his breath hot against her neck, he had all the control. She'd given it to him willingly, secretly, every single time they ended up here. The door was locked, the city was their witness, and as he pulled her away from the window to his bed, she realized she'd never felt more powerful than in her complete surrender to`
  },
  'behind-the-mask': {
    title: 'Behind the Mask',
    author: 'Isabelle Noir',
    reads: '7.3k reads',
    content: `<p>At the masquerade, no one knew who anyone really was. The beauty of it was the anonymity, the freedom to be someone entirely different for one perfect night. She wore midnight blue silk and a mask of silver filigree, and she danced with strangers like she was conducting a symphony of seduction. Then she saw him—masked in black, watching her with an intensity that cut through the chaos of music and bodies and desire.</p>

<p>He claimed her hand and pulled her into the shadows of the grand ballroom, where the music was muted and the moonlight filtered through tall windows like liquid silver. "I know who you are," he said, and the statement hung between them, charged with meaning neither fully understood. Did it matter? In this moment, with the mask still between them and the rest of the world masked and oblivious, they could be whoever they wanted to be.</p>

<p>She reached for his mask, but he caught her wrist. "Not yet," he murmured, and then he was kissing her through the silk and lace and mystery, his hands tracing the curves of her body like he was learning her by touch alone. The truth could come later. Right now, there was only this—the electric brush of fabric, the racing of her heart, the desperate hunger of his mouth as he pulled her closer and whispered forbidden`
  },
  'moonlit-curse': {
    title: 'Moonlit Curse',
    author: 'Lilith Kane',
    reads: '5.6k reads',
    content: `<p>She didn't believe in curses until she met him under the full moon. Everything changed after that first night—the way she felt, the way she wanted, the way the world tilted on its axis whenever he was near. By the time she discovered what he really was, it was too late. The curse had taken hold, and she realized with crushing certainty that she didn't want to escape it.</p>

<p>He held her in the moonlight, his eyes reflecting that pale glow like he was made of starlight and darkness. "I should leave," he whispered against her hair, and she knew he meant it, knew he was trying to protect her from whatever darkness lived in his veins. But she tightened her arms around him, refusing to let go. "Don't," she pleaded, and the word carried the weight of all her acceptance—of him, of what he was, of everything this would cost her.</p>

<p>Under the moon's watchful gaze, he made love to her with a tenderness that contradicted the danger thrumming beneath his skin. His hands were gentle despite their strength, his kisses reverent despite the hunger she felt radiating from him. She was cursed now too, bound to him by something far stronger than logic or survival instinct. When he looked into her eyes and she saw the ancient sorrow there, she understood: he couldn't leave her because she'd already`
  },
  'castle-of-fire': {
    title: 'Castle of Fire',
    author: 'Arabella Crown',
    reads: '10.2k reads',
    content: `<p>She was a political pawn, groomed since birth to marry a duke and cement an alliance. Instead, she found herself in his chambers—not the duke's, but his, the mysterious nobleman who'd appeared at court like a dark promise. He'd warned her from the beginning: he was dangerous. He was not the future that had been arranged for her. But danger had never felt so inevitable, so right.</p>

<p>The candlelight threw dancing shadows across his face as he removed each piece of her ceremonial gown with deliberate slowness. "You could still walk away," he said, but his hands never stopped their work, never broke contact with her skin. She knew he meant it. He was giving her an out, a final choice. But she'd made her choice the moment she'd seen him, and nothing—not duty, not duty, not kingdom—would change her mind.</p>

<p>When he entered her, it felt like the culmination of every rebellion she'd ever harbored, every moment she'd chafed against the constraints of her gilded cage. This was power—not the fragile political kind, but the raw, primal power of choosing her own destiny, of burning down everything she was supposed to be in favor of everything she wanted to become. As he moved inside her and they created their own heat in the darkness, she realized she wasn't his pawn. She was his`
  },
  'locked-away': {
    title: 'Locked Away',
    author: 'Eloise Winters',
    reads: '6.8k reads',
    content: `<p>The penthouse was a cage—a beautiful, luxurious cage, but a prison nonetheless. He kept her in this tower of glass and steel, with one key and no choice but to surrender completely. She should have felt trapped. Instead, she felt more free than she ever had in her old life of obligations and expectations. Here, there was only him and her and the carefully constructed boundaries that somehow felt like liberation.</p>

<p>He was possessive in a way that used to terrify her. His hands always knew where she was, always found her, always needed to touch her like he was reassuring himself of her existence. "You're mine," he'd whisper, and instead of feeling owned, she felt claimed—cherished and protected and held so completely that the rest of the world couldn't touch her. The key hung around his neck, and sometimes she found herself wanting to touch it, wanting to ask him to use it, wanting to show him that she'd never leave.</p>

<p>When he made love to her, it was with the desperation of a man who knew she was his only anchor to humanity. His hands trembled as they explored her body, his mouth finding the places that made her cry out his name. She'd given up her freedom, yes, but in exchange, she'd received something far more valuable: absolute certainty. In this locked-away world, she was everything. She was`
  },
  'petals-and-wine': {
    title: 'Petals and Wine',
    author: 'Maude Sinclair',
    reads: '5.2k reads',
    content: `<p>He courted her like it was an art form. Roses appeared at her door with handwritten notes. Wine that cost more than her monthly rent was decanted at dinner. He orchestrated every moment of their courtship with the precision of a maestro conducting a symphony, and she found herself completely enchanted by his deliberate, passionate approach to seduction.</p>

<p>In his study, surrounded by leather-bound books and the smell of aged wine, he finally let his careful composure crack. His hands shook as he unbuttoned her dress, and she realized this refined man who'd been so patient, so controlled, was desperate—desperate for her, desperate to finally have her, desperate to move past the carefully choreographed dance they'd been performing.</p>

<p>"I've been waiting for you for so long," he whispered, and the confession undid her completely. This wasn't about conquest for him. This was about devotion, about years of wanting, about a love so patient and profound that it made her knees weak. As he carried her to the velvet chaise and finally, finally made love to her with all the restraint shattered, she surrendered entirely. His roses had promised romance, but his body promised forever, and`
  },
  'island-paradise': {
    title: 'Island Paradise',
    author: 'Tropical Blue',
    reads: '7.1k reads',
    content: `<p>Stranded wasn't the word she would have chosen—not after the first twenty-four hours, anyway. The island was paradise, and he was the only other person on it, and somehow that felt like the most dangerous combination of fate and circumstance imaginable. They'd survived the wreck, found the cabin, taken stock of their survival chances. Then night had fallen, and every survival plan they'd made dissolved into something primal and inevitable.</p>

<p>He couldn't stop touching her, like he was afraid if he let go, she'd disappear like all the other people they'd known, like the life they'd left behind. She understood because she felt it too—this feverish urgency, this desperate hunger to affirm that they were alive, that this was real, that they'd been given this impossible gift of isolation and each other.</p>

<p>On the sand under stars that seemed brighter than she'd ever seen them, he kissed her like she was water and he was dying of thirst. His hands mapped the landscape of her body with reverent urgency, and she arched into him, gasping his name into the tropical night. Was this obsession or salvation? Madness or destiny? She didn't care anymore. Stranded with him felt less like a curse and more like`
  }
};

function openPremiumPreview(storyId) {
  const story = premiumStories[storyId];
  if (!story) return;

  document.getElementById('premium-story-title').textContent = story.title;
  document.getElementById('premium-story-author').textContent = `By ${story.author}`;
  document.getElementById('premium-story-reads').textContent = story.reads;
  document.getElementById('premium-story-content').innerHTML = story.content;

  document.getElementById('premium-preview').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePremiumPreview() {
  document.getElementById('premium-preview').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function handleUnlockClick() {
  console.log('Unlock clicked - redirect to subscription or payment');
  // TODO: Implement subscription/payment flow
}

// Handle clicks on premium story cards
document.addEventListener('DOMContentLoaded', function() {
  const premiumPreview = document.getElementById('premium-preview');
  if (premiumPreview) {
    premiumPreview.addEventListener('click', function(e) {
      if (e.target === premiumPreview || e.target.classList.contains('premium-preview-overlay')) {
        closePremiumPreview();
      }
    });
  }

  // Add click handlers to premium story cards
  const premiumStoryIds = [
    'the-arrangement', 'midnight-sins', 'crown-jewel', 'inferno',
    'velvet-lies', 'city-nights', 'power-and-desire', 'behind-the-mask',
    'moonlit-curse', 'castle-of-fire', 'locked-away', 'petals-and-wine', 'island-paradise'
  ];

  document.querySelectorAll('.premium-story-card').forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      if (premiumStoryIds[index]) {
        openPremiumPreview(premiumStoryIds[index]);
      }
    });
  });
});
