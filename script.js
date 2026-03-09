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
    const href = link.getAttribute('href');
    if(href && href !== '#') {
      const t = document.querySelector(href);
      if(t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
    }
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if(window.scrollY >= s.offsetTop - 130) current = s.id; });
  navLinks.forEach(link => { link.style.color = link.getAttribute('href') === '#' + current ? 'var(--orange)' : ''; });
});

// ── STORIES DATABASE (UNIFIED) ──
// Single source of truth for all stories, free and premium
// Each story has metadata for filtering by quiz preferences
window.storiesDatabase = [
  // FREE STORIES
  {
    id: 1,
    title: "Midnight Confessions",
    author: "Sarah Mitchell",
    avatar: "☕",
    excerpt: "The café at midnight held a certain magic. Not the kind you'd find in fairy tales, but something more real—something that lived in the spaces between whispered conversations and the gentle clink of porcelain cups.",
    image: "images/story-1.jpg",
    reads: "2.8k",
    chapters: 4,
    tropes: ['enemies-to-lovers', 'forced-proximity'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
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
  {
    id: 2,
    title: "Garden of Secrets",
    author: "Emma Sterling",
    avatar: "🌹",
    excerpt: "The garden had been her sanctuary for as long as she could remember. Hidden behind wrought-iron gates and climbing ivy, it was a place where the world couldn't find her—where she could be anyone, anything she wanted.",
    image: "images/story-2.jpg",
    reads: "3.4k",
    chapters: 6,
    tropes: ['forbidden-love', 'gothic-paranormal'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>The garden had been her sanctuary for as long as she could remember. Hidden behind wrought-iron gates and climbing ivy, it was a place where the world couldn't find her—where she could be anyone, anything she wanted.</p>

<p>Roses bloomed in impossible colors. Jasmine climbed the stone walls, filling the air with its intoxicating sweetness. She'd spent entire summers here, reading, dreaming, waiting for something she couldn't name.</p>

<p>And then he appeared one twilight evening, slipping through a gap in the gate as if the garden itself had summoned him.</p>

<p>"I didn't know anyone else knew about this place," she said, her heart suddenly racing in a way that had nothing to do with trespassing.</p>

<p>He smiled, and it was dangerous—the kind of smile that promised secrets and consequences and everything she'd been waiting for.</p>

<p>"Maybe I was looking for you," he said simply.</p>

<p>In that moment, beneath the star-laden sky and surrounded by the whispers of the garden, she understood that some places are more than just locations. Some places are destinations of the soul.</p>

<p>And some secrets, once shared, could never be untold.</p>`
  },
  {
    id: 3,
    title: "Sins of the Crown",
    author: "Victoria Blake",
    avatar: "👑",
    excerpt: "She was never meant to catch his eye. A lady-in-waiting with no title, no wealth, no future—until the Duke walked into the ballroom and changed everything with a single glance.",
    image: "images/story-featured.jpg",
    reads: "4.2k",
    chapters: 5,
    tropes: ['regency-nobility', 'forbidden-love'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>The ballroom glittered with a thousand candles, each one reflecting off silk gowns and jeweled tiaras. Margaret stood in the shadows where she belonged, invisible to the glittering world of nobility that danced just beyond her reach.</p>

<p>Then she felt it—the weight of someone's gaze. She looked up to find the Duke of Ashford watching her from across the room, his dark eyes intense and unwavering. When their eyes met, time seemed to stop.</p>

<p>He had everything: wealth, title, power. She had nothing but her pride and her wit. Yet when he crossed the ballroom toward her, she knew that everything was about to change.</p>

<p>"May I have this dance?" he asked, extending his hand as if she were a duchess and not a mere lady-in-waiting.</p>

<p>She shouldn't take it. Court gossip alone would ruin her. But as his hand found the small of her back and he pulled her into the dance, she realized she had already lost her heart to a man she could never have.</p>

<p>Some sins, she thought, were worth the price of damnation.</p>`
  },
  {
    id: 4,
    title: "Trapped Together",
    author: "Sienna Cross",
    avatar: "🔒",
    excerpt: "Snowed in at an isolated cabin, they had nowhere to run from each other—and nowhere to hide from the truth that had always existed between them.",
    image: "images/story-3.jpg",
    reads: "3.8k",
    chapters: 4,
    tropes: ['forced-proximity', 'enemies-to-lovers'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>The cabin door slammed behind them as the blizzard raged outside, blocking any escape. Marcus and Elena stood on opposite sides of the room, trapped together by circumstance and weather.</p>

<p>"This is a nightmare," Elena muttered, rubbing her arms.</p>

<p>"It doesn't have to be," Marcus said quietly, and she heard something dangerous in his voice—something that made her pulse race.</p>

<p>They had spent years avoiding each other, years of cutting remarks and barely concealed tension. But now, with nowhere else to go and the night stretching endlessly before them, the carefully built walls between them began to crumble.</p>

<p>When he reached for her hand, she should have pulled away. Instead, she found herself stepping closer, drawn to him like a moth to flame.</p>

<p>"Marcus..." she whispered, but he silenced her with a kiss that tasted of years of longing and forbidden desire.</p>

<p>The cabin grew warm despite the frozen world outside.</p>`
  },
  {
    id: 5,
    title: "Darkness Consumed",
    author: "Raven Summers",
    avatar: "🖤",
    excerpt: "He was dark, dangerous, and absolutely wrong for her. She loved him anyway—and that was her greatest sin.",
    image: "images/story-4.jpg",
    reads: "5.1k",
    chapters: 7,
    tropes: ['dark-morally-grey', 'forbidden-love'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>Everyone warned her about him. They said he was dangerous, that he trafficked in shadows and sin, that loving him would destroy her. She listened to every warning and ignored them all.</p>

<p>Adrian was a man of untamed power and dark secrets. He dealt in things most people couldn't fathom, moved through worlds that polite society pretended didn't exist. And when he looked at her with those cold, predatory eyes, she saw the beast everyone else saw—and loved it.</p>

<p>"I'm no good for you," he said, his hands gripping her waist as she straddled him. "I'll ruin you."</p>

<p>"Then ruin me," she whispered against his lips.</p>

<p>She knew what she was doing. She knew the price of loving a man like him was selling a piece of her soul. But as he moved inside her, as his hands claimed every inch of her, she realized she'd already signed away her redemption long ago.</p>

<p>Some women wanted a prince. She wanted a king of darkness, and she would have him, consequences be damned.</p>`
  },
  {
    id: 6,
    title: "The Haunting",
    author: "Lily Nocturne",
    avatar: "👻",
    excerpt: "The manor was said to be haunted. She didn't believe in ghosts until she saw him—a man from another time, fading between worlds, and dangerously, impossibly beautiful.",
    image: "images/story-5.jpg",
    reads: "4.6k",
    chapters: 6,
    tropes: ['gothic-paranormal', 'forbidden-love'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>The manor had been empty for forty years. Eleanor bought it for its potential, ignoring the whispered warnings from locals about curses and ghosts and things that walked the halls at midnight.</p>

<p>She first saw him on the grand staircase—a man in 1920s clothing, translucent and glowing faintly in the moonlight. When their eyes met, he became solid, real, dangerous.</p>

<p>"You can see me," he said, wonder and anguish mingling in his voice.</p>

<p>"You're real," she whispered.</p>

<p>"Not anymore. I've been trapped here for seventy years, unable to move on, unable to be seen by the living. Until you." He reached for her face, and his touch was cold but electric. "Please don't send me away."</p>

<p>She should have been terrified. Instead, she found herself reaching back, pulling him closer, kissing a ghost and tasting death and longing and something impossible that made her feel more alive than ever before.</p>

<p>Loving him was mad. But madness had never felt so right.</p>`
  },
  {
    id: 7,
    title: "Blood and Thorns",
    author: "Midnight Vale",
    avatar: "🧛",
    excerpt: "He was a monster—undead, powerful, and bound by ancient curses. She was the hunter sent to destroy him. Fate had other plans.",
    image: "images/story-6.jpg",
    reads: "4.9k",
    chapters: 8,
    tropes: ['gothic-paranormal', 'dark-morally-grey'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>The vampire didn't expect the hunter to be a woman. He also didn't expect her to be the most captivating creature he'd seen in three centuries.</p>

<p>Cassandra came prepared with crosses and holy water, armed with centuries of knowledge about how to kill his kind. But when their eyes met across the darkened ballroom, both of them knew the stakes had changed.</p>

<p>"I should kill you," she said, her hand on the silver dagger at her hip.</p>

<p>"You could try," he replied, moving toward her with predatory grace. "But we both know you won't."</p>

<p>When he bit her neck, it wasn't an attack—it was an invitation. When she pulled him closer instead of pushing him away, it was a surrender. They were supposed to be enemies, locked in an ancient dance of hunter and hunted.</p>

<p>Instead, they became something far more dangerous: lovers who would burn the world to ashes before they let it separate them.</p>`
  },
  {
    id: 8,
    title: "Burning Need",
    author: "Scarlett Monroe",
    avatar: "🔥",
    excerpt: "He was darkness embodied. She craved the heat of his touch. Together, they were a wildfire no one could contain.",
    image: "images/story-featured.jpg",
    reads: "3.9k",
    chapters: 6,
    tropes: ['enemies-to-lovers', 'dark-morally-grey'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>From the moment Marcus stepped into the boardroom, she felt the pull—dangerous, electric, impossible to ignore.</p><p>He was everything wrong for her. Everything dark. Yet when he looked at her with those cold eyes that seemed to see straight through her, she wanted to surrender completely.</p><p>"You shouldn't want this," he growled, pressing her against the glass windows high above the city.</p><p>"I don't care what I should want," she whispered. "I want you."</p><p>Their kiss was violent and consuming, a dangerous dance between light and shadow. She knew loving him would destroy her. She didn't care anymore.</p>`
  },
  {
    id: 9,
    title: "Snow Bound",
    author: "Winter Chase",
    avatar: "❄️",
    excerpt: "Trapped in a remote cabin during a blizzard, they had nowhere to run from each other—and nowhere to hide from their true feelings.",
    image: "images/story-featured.jpg",
    reads: "4.1k",
    chapters: 5,
    tropes: ['forced-proximity', 'regency-nobility'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>Lady Margaret never expected to find herself stranded with the one man she'd spent three seasons avoiding.</p><p>Lord Edmund was all rigid propriety and cutting remarks. Yet here, in this isolated manor with nothing but the blizzard outside, she saw something different in him—a longing that matched her own.</p><p>"Why do you always run from me?" he asked, his voice soft in the firelight.</p><p>"Because you terrify me," she admitted. "Not your title or your fortune. You terrify me because I might actually care about you."</p><p>He took her hand then, and everything changed.</p>`
  },
  {
    id: 10,
    title: "Cage of Fire",
    author: "Blake Hale",
    avatar: "🔒",
    excerpt: "Forced to work together in close quarters, their tension reaches a breaking point—and the only way out is through each other.",
    image: "images/story-featured.jpg",
    reads: "4.3k",
    chapters: 7,
    tropes: ['forced-proximity', 'dark-morally-grey'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>The private yacht was supposed to be their escape. Instead, it became their prison.</p><p>Isolated at sea with the man who made her blood burn, every moment was agony and ecstasy combined. He was ruthless, unapologetic, and utterly addictive.</p><p>"Fight me or surrender," he commanded, pulling her close. "But don't pretend you don't want this."</p><p>She couldn't pretend anymore. When he touched her, nothing else mattered—not morality, not consequences, nothing but the flames consuming them both.</p>`
  },
  {
    id: 11,
    title: "Velvet Darkness",
    author: "Midnight Vale",
    avatar: "🖤",
    excerpt: "She was innocent. He was sin. The moment their worlds collided, they both knew they were doomed.",
    image: "images/story-featured.jpg",
    reads: "3.7k",
    chapters: 5,
    tropes: ['dark-morally-grey', 'enemies-to-lovers'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>Julian had built an empire on ruthlessness. Then he met Isabella—a woman pure enough to make him believe redemption might be possible.</p><p>He tried to push her away. She refused to go.</p><p>"I know what you are," she said, touching his face. "And I love you anyway."</p><p>Those words undid him completely. For the first time in his dark life, he wanted to be better. Not because he deserved it, but because she believed he could be.</p>`
  },
  {
    id: 12,
    title: "Phantom's Claim",
    author: "Lily Nocturne",
    avatar: "👻",
    excerpt: "He haunted her dreams before she ever saw him. When their worlds finally collide, the attraction is instant and overwhelming.",
    image: "images/story-featured.jpg",
    reads: "3.5k",
    chapters: 6,
    tropes: ['gothic-paranormal', 'enemies-to-lovers'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>For months, Eleanor felt his presence in the old manor—a ghost that wasn't quite a ghost, watching her with ancient longing.</p><p>Then one moonlit night, he materialized before her. A man trapped between worlds, beautiful and tragic and utterly impossible.</p><p>"I've been waiting for you," he whispered, his fingers barely touching her cheek. "For a hundred years, I've been waiting."</p><p>She should have been terrified. Instead, she felt the rightness of it—as if their souls had always recognized each other.</p>`
  },
  {
    id: 13,
    title: "Spectral Heat",
    author: "Raven Summers",
    avatar: "🌙",
    excerpt: "A ghost with dangerous intensity. A woman who sees him for who he truly is. A connection that transcends death itself.",
    image: "images/story-featured.jpg",
    reads: "3.8k",
    chapters: 6,
    tropes: ['gothic-paranormal', 'enemies-to-lovers'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>Marcus had been dead for two centuries, yet he'd never felt more alive than when she walked through his manor walls.</p><p>She could see him, touch him—feel him in ways no one else ever could. And he wanted to consume her, to bind her to him eternally.</p><p>"Stay with me," he demanded, his phantom form solidifying against her skin. "Forever."</p><p>"Yes," she breathed, surrendering to the darkness and the desire that burned between them.</p>`
  },
  {
    id: 14,
    title: "Haunted Desire",
    author: "Sienna Cross",
    avatar: "👻",
    excerpt: "Trapped in a haunted manor with a mysterious stranger, she discovers that the greatest danger isn't the ghosts—it's him.",
    image: "images/story-featured.jpg",
    reads: "4.0k",
    chapters: 6,
    tropes: ['gothic-paranormal', 'forced-proximity'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>When the roads became impassable, Marcus offered her shelter in his isolated manor. She didn't know he was neither ghost nor fully human—something caught between worlds.</p><p>But as the storm raged outside and the supernatural forces within the walls grew stronger, she realized the real danger was her own desire for him.</p><p>"What are you?" she whispered as he moved through shadow toward her.</p><p>"Yours," he answered, "if you'll have me."</p>`
  },
  {
    id: 15,
    title: "Forbidden Night",
    author: "Victoria Blake",
    avatar: "🌙",
    excerpt: "In the shadows of haunted walls, their forbidden connection blooms. Love that defies reason. Love that changes everything.",
    image: "images/story-featured.jpg",
    reads: "3.6k",
    chapters: 5,
    tropes: ['gothic-paranormal', 'forbidden-love'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>The manor had always been forbidden. So had Adrian.</p><p>Yet every night, she found herself drawn to him in the darkness, seeking solace in a love that could never be acknowledged.</p><p>"This is madness," she whispered against his chest, even as her arms tightened around him.</p><p>"Yes," he agreed, pressing a kiss to her hair. "Beautiful, perfect madness."</p>`
  },
  {
    id: 16,
    title: "Tangled Royalty",
    author: "Poppy St. Clair",
    avatar: "👑",
    excerpt: "A noble facade hides a dangerous secret. A steamy affair that threatens to tear the kingdom apart.",
    image: "images/story-featured.jpg",
    reads: "4.2k",
    chapters: 7,
    tropes: ['regency-nobility', 'dark-morally-grey'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>The Duke was everything a nobleman should be—charming, powerful, utterly corrupt. And she was the one woman strong enough to match him.</p><p>Their affair was a dangerous game of power and passion, neither willing to surrender control.</p><p>"You complete me," he whispered, though they both knew it was a lie. Completion implied goodness. There was nothing good about what they were.</p><p>But the passion burned like wildfire, consuming everything in its path.</p>`
  },
  {
    id: 17,
    title: "Royal Ruin",
    author: "Blake Hale",
    avatar: "🎭",
    excerpt: "A prince. A commoner. A forbidden love that could topple an empire.",
    image: "images/story-featured.jpg",
    reads: "3.9k",
    chapters: 6,
    tropes: ['regency-nobility', 'dark-morally-grey'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>Prince Adrian was taught from birth that duty came before desire. But when he saw her, every royal principle burned away.</p><p>She was beneath his station and entirely wrong for him—and he wanted to burn the kingdom down just to keep her.</p><p>"Ruin me," she commanded as he pressed her against the palace wall. "Completely."</p><p>He happily obliged.</p>`
  },
  {
    id: 18,
    title: "Forbidden Royalty",
    author: "Iris Nightshade",
    avatar: "❤️",
    excerpt: "She was forbidden by birth. He was forbidden by duty. Together, they were impossible—and absolutely inevitable.",
    image: "images/story-featured.jpg",
    reads: "4.1k",
    chapters: 7,
    tropes: ['regency-nobility', 'forbidden-love'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>Lord Edmund had always done his duty. Until she walked into his life and made him want to throw everything away.</p><p>Their love was forbidden, impossible, utterly dangerous. It would destroy them both if anyone found out.</p><p>But in the darkness, with her body against his, he didn't care about consequences.</p><p>"I love you," he breathed, and meant it with every sinful, traitorous beat of his heart.</p>`
  },
  {
    id: 19,
    title: "Forbidden Flame",
    author: "Scarlett Monroe",
    avatar: "🔥",
    excerpt: "She was his sworn enemy. He consumed her anyway. Enemies shouldn't feel this good.",
    image: "images/story-featured.jpg",
    reads: "3.4k",
    chapters: 5,
    tropes: ['enemies-to-lovers', 'forbidden-love'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>They were enemies by circumstance, rivals by necessity. Yet every time he looked at her, he forgot why they were supposed to hate each other.</p><p>"This is madness," she whispered as his hands found their way under her dress.</p><p>"Yes," he agreed, pressing his mouth to her neck. "Beautiful, forbidden madness."</p><p>She arched into him, surrendering to the fire between them.</p>`
  },
  {
    id: 20,
    title: "Winter's Cage",
    author: "Sienna Cross",
    avatar: "❄️",
    excerpt: "Snowed in together at a remote estate. Forced to face the chemistry they've been denying.",
    image: "images/story-featured.jpg",
    reads: "3.6k",
    chapters: 5,
    tropes: ['forced-proximity', 'regency-nobility'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>Lord Thomas hadn't expected to be stranded with Lady Catherine—the one woman who made him question his carefully controlled life.</p><p>Three days of proximity in a snowbound manor changed everything between them.</p><p>"I've always wanted to do this," he said, finally closing the distance between them.</p><p>When he kissed her, the warmth of it melted away all their carefully constructed walls.</p>`
  },
  {
    id: 21,
    title: "Inferno Rising",
    author: "Blake Hale",
    avatar: "🔥",
    excerpt: "Trapped together in a dangerous situation. The heat between them matches the danger surrounding them.",
    image: "images/story-featured.jpg",
    reads: "3.8k",
    chapters: 6,
    tropes: ['forced-proximity', 'dark-morally-grey'],
    heatLevel: 'hot',
    featured: false,
    isFree: true,
    content: `<p>They were on opposite sides of the law, trapped together in a basement by forces beyond their control.</p><p>Hours of proximity ignited something primal between them. He was everything dangerous. She couldn't get enough.</p><p>"When we get out of this," he growled, pinning her against the wall, "I'm going to make you scream."</p><p>She didn't doubt it for a second.</p>`
  },
  {
    id: 22,
    title: "Shadowed Redemption",
    author: "Midnight Vale",
    avatar: "🖤",
    excerpt: "A criminal with a conscience. A good girl gone bad. Two people with nothing to lose but each other.",
    image: "images/story-featured.jpg",
    reads: "3.5k",
    chapters: 5,
    tropes: ['dark-morally-grey', 'enemies-to-lovers'],
    heatLevel: 'warm',
    featured: false,
    isFree: true,
    content: `<p>She came from money and light. He came from shadows and crime. They should never have met.</p><p>But when she stumbled into his world, seeking refuge from her own painful past, he couldn't push her away.</p><p>"Stay," he whispered, and for the first time in his dangerous life, he meant it.</p><p>She chose him despite everything. Despite the darkness. Despite knowing better.</p>`
  },
  {
    id: 23,
    title: "Tangled Secrets",
    author: "Victoria Blake",
    avatar: "💋",
    excerpt: "In the shadows of high society, their steamy affair blooms. A love that could destroy them both.",
    image: "images/story-featured.jpg",
    reads: "3.7k",
    chapters: 6,
    tropes: ['dark-morally-grey', 'regency-nobility'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>The Duke had a reputation for darkness. The Duchess knew exactly what he was—and wanted him anyway.</p><p>Their marriage was a scandal waiting to happen. Behind closed doors, it was pure sin.</p><p>"People would destroy us if they knew," she breathed as he claimed her in the shadows of the grand hall.</p><p>"Let them try," he growled, lost in her completely.</p>`
  },
  {
    id: 24,
    title: "Noble Transgression",
    author: "Poppy St. Clair",
    avatar: "👑",
    excerpt: "A lord. A governess. A forbidden love that defies every rule of society.",
    image: "images/story-featured.jpg",
    reads: "3.9k",
    chapters: 7,
    tropes: ['regency-nobility', 'forbidden-love'],
    heatLevel: 'steamy',
    featured: false,
    isFree: true,
    content: `<p>Lord Adrian had no business wanting his governess. Every rule of propriety forbade it.</p><p>Yet every night, he found himself drawn to her quarters, seeking solace in her arms.</p><p>"This is impossible," she whispered against his chest, even as her arms tightened around him.</p><p>"Yes," he agreed, "but I'd burn the world down to keep you."</p>`
  },

  // PREMIUM PREVIEW STORIES (showing as cards but locked)
  {
    id: 25,
    title: "The Duke's Afternoon Arrangement",
    author: "Vivienne Blackthorn",
    avatar: "👑",
    excerpt: "Lady Elara had always prided herself on her restraint. Then came the Duke of Ashford, and his rather unconventional proposal — one that would require very little restraint indeed.",
    image: "images/story-featured.jpg",
    reads: "24.3k",
    chapters: 18,
    tropes: ['enemies-to-lovers', 'regency-nobility'],
    heatLevel: 'steamy',
    featured: true,
    isFree: false,
    content: null
  },
  {
    id: 26,
    title: "A Garden for Two",
    author: "Celeste Ashby",
    avatar: "🌿",
    excerpt: "The estate garden was always his. Until she arrived and planted something entirely different.",
    image: "images/story-3.jpg",
    reads: "11.7k",
    chapters: 9,
    tropes: ['forced-proximity', 'regency-nobility'],
    heatLevel: 'warm',
    featured: false,
    isFree: false,
    content: null
  },
  {
    id: 27,
    title: "After the Candles Go Out",
    author: "Margaux Delacroix",
    avatar: "🕯️",
    excerpt: "Midnight confessions in a house that keeps far too many secrets.",
    image: "images/story-4.jpg",
    reads: "8.9k",
    chapters: 5,
    tropes: ['forbidden-love', 'gothic-paranormal'],
    heatLevel: 'steamy',
    featured: false,
    isFree: false,
    content: null
  },
  {
    id: 28,
    title: "Lord Wickham's Cherry Problem",
    author: "Poppy St. Clair",
    avatar: "🍒",
    excerpt: "He had a type. She was decidedly not it. He married her anyway. Now what?",
    image: "images/story-5.jpg",
    reads: "19.1k",
    chapters: 14,
    tropes: ['regency-nobility', 'enemies-to-lovers'],
    heatLevel: 'warm',
    featured: false,
    isFree: false,
    content: null
  },
  {
    id: 29,
    title: "Whispered Confessions",
    author: "Iris Nightshade",
    avatar: "🎭",
    excerpt: "Some secrets are meant to be kept. Others beg to be spilled in the dark of night.",
    image: "images/story-6.jpg",
    reads: "16.4k",
    chapters: 12,
    tropes: ['dark-morally-grey', 'gothic-paranormal'],
    heatLevel: 'steamy',
    featured: false,
    isFree: false,
    content: null
  }
];

// ── FREE STORY RECOMMENDATION ──
// Simple if/then logic: Based on user's quiz selections, return matching free story
// Story 1: Midnight Confessions (enemies-to-lovers, forced-proximity, warm)
// ── FREE STORY RECOMMENDATION (7 TOTAL) ──
// Story 1: Midnight Confessions (enemies-to-lovers, forced-proximity, warm)
// Story 2: Garden of Secrets (forbidden-love, gothic-paranormal, steamy)
// Story 3: Sins of the Crown (regency-nobility, forbidden-love, warm)
// Story 4: Trapped Together (forced-proximity, enemies-to-lovers, steamy)
// Story 5: Darkness Consumed (dark-morally-grey, forbidden-love, hot)
// Story 6: The Haunting (gothic-paranormal, forbidden-love, steamy)
// Story 7: Blood and Thorns (gothic-paranormal, dark-morally-grey, hot)
window.getRecommendedFreeStory = function() {
  const profile = getUserProfile();
  if (!profile || !profile.preferences) {
    // No profile yet - return all free stories
    return window.storiesDatabase.filter(s => s.isFree);
  }

  const userTrope = profile.preferences.favoriteTopology;
  const userHeat = profile.preferences.heatLevel;

  console.log('getRecommendedFreeStory - User preferences:', { trope: userTrope, heat: userHeat });

  // ═══ DYNAMIC MATCHING ═══
  // Find all free stories that have BOTH the selected trope AND heat level
  const matching = window.storiesDatabase.filter(story => {
    return story.isFree &&
           story.tropes &&
           story.tropes.includes(userTrope) &&
           story.heatLevel === userHeat;
  });

  if (matching.length > 0) {
    console.log(`✓ Found ${matching.length} matching stories for ${userTrope} + ${userHeat}:`, matching.map(s => s.title));
    return matching;
  }

  // Fallback: if no exact match, return all free stories
  console.log(`ℹ️ No exact match for ${userTrope} + ${userHeat}, showing all free stories as fallback`);
  return window.storiesDatabase.filter(s => s.isFree);
};

// ── QUIZ MODAL ──
// Global function to open quiz with return page tracking
window.openQuizModal = function(e) {
  if (e) e.preventDefault();
  const quizModal = document.getElementById('tasteTestModal');
  if (quizModal) {
    quizModal.style.display = 'flex';
    // Store the current page as return destination
    window.quizReturnPage = window.location.pathname + window.location.search;
  }
};

// ── QUIZ FUNCTIONS (GLOBAL SCOPE) ──
// These must be defined at global scope, not inside DOMContentLoaded,
// because they're called when setupQuizModalListeners runs (which fires before DOMContentLoaded)

window.nextStep = function(stepNumber) {
  console.log('nextStep called with stepNumber:', stepNumber);
  const modal = document.getElementById('tasteTestModal');
  console.log('Modal found:', !!modal);
  if (!modal) {
    console.warn('Quiz modal not found');
    return;
  }
  const steps = modal.querySelectorAll('.modal-step');
  console.log('Found', steps.length, 'steps');
  steps.forEach(step => {
    console.log('Hiding step:', step.getAttribute('data-step'));
    step.style.display = 'none';
  });
  const targetStep = modal.querySelector(`[data-step="${stepNumber}"]`);
  console.log('Target step found:', !!targetStep, 'for step', stepNumber);
  if (targetStep) {
    console.log('Showing step', stepNumber);
    targetStep.style.display = 'block';
  } else {
    console.warn('Target step not found for data-step=' + stepNumber);
  }
};

window.selectTrope = function(trope) {
  window.selectedTrope = trope;
  window.nextStep(3);
};

window.completeOnboarding = function(heatLevel) {
  console.log('=== QUIZ COMPLETION ===');
  console.log('Heat level selected:', heatLevel);

  // Capture name and email from step 1
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value : '';

  console.log('Form inputs - Name:', name, 'Email:', email);

  // Use provided name or fall back to email-derived name
  const displayName = name || (email ? email.split('@')[0] : 'Tea Lover');

  // Determine avatar based on heat level
  const avatarMap = { 'warm': '☕', 'steamy': '🫖', 'hot': '🌶️' };
  const avatar = avatarMap[heatLevel] || '🫖';

  // Get selected trope from step 2
  const selectedTrope = window.selectedTrope || 'not-specified';
  console.log('Selected trope from step 2:', selectedTrope);

  // Create user profile object
  const userProfile = {
    email: email,
    displayName: displayName,
    memberSince: Date.now(),
    preferences: {
      favoriteTopology: selectedTrope,
      heatLevel: heatLevel
    },
    avatar: avatar,
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

  // Redirect to logged-in home
  console.log('Redirecting to home.html...');
  window.location.href = 'home.html';
};

document.addEventListener('DOMContentLoaded', function() {
  const quizModal = document.getElementById('tasteTestModal');
  const startSippingBtn = document.querySelector('.nav-cta');
  const closeBtn = document.querySelector('.modal-close');

  if (!quizModal) return;

  // Open quiz when "Start Sipping Free" is clicked
  if (startSippingBtn) {
    startSippingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.openQuizModal();
    });
  }

  // Check if URL has ?openQuiz parameter and open modal if so
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('openQuiz')) {
    quizModal.style.display = 'flex';
    // Store the return page if provided
    const returnTo = urlParams.get('returnTo');
    window.quizReturnPage = returnTo || null;
    // Clean up URL to remove the parameter
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Function to close quiz and return to previous page if applicable
  function closeQuizAndReturn() {
    quizModal.style.display = 'none';
    // If there's a return page, redirect to it
    if (window.quizReturnPage) {
      window.location.href = window.quizReturnPage;
    }
  }

  // Close quiz when X button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      closeQuizAndReturn();
    });
  }

  // Close quiz when clicking outside the modal content
  quizModal.addEventListener('click', function(e) {
    if (e.target === quizModal) {
      closeQuizAndReturn();
    }
  });

});

// ── SETUP QUIZ MODAL EVENT LISTENERS ──
// This function attaches event listeners to quiz modal buttons after HTML is loaded
window.setupQuizModalListeners = function() {
  const quizModal = document.getElementById('tasteTestModal');
  if (!quizModal) {
    console.warn('Quiz modal not found for event listener setup');
    return;
  }

  console.log('✓ Quiz modal found, setting up listeners...');

  // Close button
  const closeBtn = quizModal.querySelector('.modal-close');
  console.log('Close button found:', !!closeBtn);
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Close button clicked');
      quizModal.style.display = 'none';
      // If there's a return page, redirect to it
      if (window.quizReturnPage) {
        window.location.href = window.quizReturnPage;
      }
    });
  }

  // Close when clicking outside modal
  quizModal.addEventListener('click', function(e) {
    if (e.target === quizModal) {
      quizModal.style.display = 'none';
      if (window.quizReturnPage) {
        window.location.href = window.quizReturnPage;
      }
    }
  });

  // Next Step buttons (Continue button)
  const nextStepBtns = quizModal.querySelectorAll('[data-action="nextStep"]');
  console.log('Found nextStep buttons:', nextStepBtns.length);
  nextStepBtns.forEach((btn, index) => {
    console.log(`NextStep button ${index}:`, btn, 'data-step:', btn.getAttribute('data-step'));
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('NextStep button clicked, data-step:', this.getAttribute('data-step'));
      const stepNumber = this.getAttribute('data-step');
      if (stepNumber) {
        console.log('Calling nextStep with:', parseInt(stepNumber));
        window.nextStep(parseInt(stepNumber));
      } else {
        console.warn('No step number found on button');
      }
    });
  });

  // Trope selection buttons
  const tropeBtns = quizModal.querySelectorAll('[data-action="selectTrope"]');
  console.log('Found selectTrope buttons:', tropeBtns.length);
  tropeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const trope = this.getAttribute('data-trope');
      console.log('Trope button clicked:', trope);
      if (trope) {
        window.selectTrope(trope);
      }
    });
  });

  // Heat level / Complete onboarding buttons
  const heatBtns = quizModal.querySelectorAll('[data-action="completeOnboarding"]');
  console.log('Found completeOnboarding buttons:', heatBtns.length);
  heatBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const heatLevel = this.getAttribute('data-heat');
      console.log('Heat button clicked:', heatLevel);
      if (heatLevel) {
        window.completeOnboarding(heatLevel);
      }
    });
  });

  console.log('✓ Quiz modal event listeners attached');
};

// ── PERSONALIZED STORIES ──
// Get stories filtered by user preferences
window.getPersonalizedStories = function() {
  const profile = getUserProfile();
  console.log('getPersonalizedStories called. Profile:', profile);

  if (!profile || !profile.preferences) {
    // Return all stories if no preferences
    console.warn('No profile or preferences found, returning all stories');
    return window.storiesDatabase || [];
  }

  const userTrope = profile.preferences.favoriteTopology;
  const userHeat = profile.preferences.heatLevel;
  console.log('User preferences - Trope:', userTrope, 'Heat:', userHeat);

  // Filter stories: must match user's trope AND heat level
  const filtered = window.storiesDatabase.filter(story => {
    const tropeMatch = !userTrope || story.tropes.includes(userTrope);
    const heatMatch = story.heatLevel === userHeat;
    const matches = tropeMatch && heatMatch;
    console.log(`Story "${story.title}" - tropeMatch: ${tropeMatch}, heatMatch: ${heatMatch}, result: ${matches}`);
    return matches;
  });

  console.log('Filtered stories (exact match):', filtered.length, 'stories');
  filtered.forEach(s => console.log(`  - ${s.title} (${s.heatLevel})`));

  // If no exact matches, return stories with matching heat level (broader match)
  if (filtered.length === 0) {
    console.log('No exact matches, falling back to heat level only');
    const heatOnly = window.storiesDatabase.filter(story => story.heatLevel === userHeat);
    console.log('Heat-level-only stories:', heatOnly.length, 'stories');
    return heatOnly;
  }

  return filtered;
};

// Get all stories (for admin/browse all)
window.getAllStories = function() {
  return window.storiesDatabase || [];
};

// Render stories to DOM
window.renderStories = function(stories, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  console.log('renderStories called with', stories.length, 'stories for container:', containerId);
  stories.forEach(s => {
    console.log(`  - ${s.title} (free: ${s.isFree}, heat: ${s.heatLevel}, tropes: ${s.tropes.join(', ')})`);
  });

  container.innerHTML = stories.map((story, index) => {
    const delayClass = index === 0 ? '' : `reveal-delay-${index}`;
    const featuredClass = story.featured ? 'featured' : '';
    // Only show lock badge for non-free stories
    const lockBadge = story.isFree ? '' : '<div class="story-lock"><span class="lock-badge">🔒 Members Only</span></div>';

    // Use gradient placeholder if image fails to load
    const imageElement = `
      <img
        src="${story.image}"
        alt="${story.title}"
        class="story-thumb"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      <div class="story-thumb" style="display:none; background: linear-gradient(135deg, #8B1A2B, #681e2a); height: 280px; align-items: center; justify-content: center; font-size: 64px;">
        ${story.avatar}
      </div>
    `;

    return `
      <div class="story-card ${featuredClass} reveal visible ${delayClass}">
        ${imageElement}
        ${lockBadge}
        <div class="story-meta">
          <div class="story-tags">${story.tropes.map(t => `<span class="tag">${formatTropeName(t)}</span>`).join('')}</div>
          <h3 class="story-title">${story.title}</h3>
          <p class="story-excerpt">${story.excerpt}</p>
          <div class="story-author">
            <div class="author-avatar">${story.avatar}</div>
            <div style="display:flex;flex-direction:column;gap:1px;">
              <span class="author-name">${story.author}</span>
              <span class="author-reads">${story.reads} reads · ${story.chapters} chapters</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-initialize Lucide icons if needed
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
};

// Format trope name for display
function formatTropeName(tropeName) {
  const tropeMap = {
    'enemies-to-lovers': 'Enemies to Lovers',
    'forced-proximity': 'Forced Proximity',
    'dark-morally-grey': 'Dark & Morally Grey',
    'forbidden-love': 'Forbidden Love',
    'regency-nobility': 'Regency & Nobility',
    'gothic-paranormal': 'Gothic & Paranormal'
  };
  return tropeMap[tropeName] || tropeName;
}

// ── READING PANE ──
function openReadingPane(storyId) {
  // Find story in unified database by ID
  const story = window.storiesDatabase.find(s => s.id === parseInt(storyId));
  if (!story || !story.isFree) {
    console.warn('Story not found or not available:', storyId);
    return;
  }

  document.getElementById('story-title').textContent = story.title;
  document.getElementById('story-author').textContent = `By ${story.author}`;
  document.getElementById('story-reads').textContent = story.reads + ' reads';
  document.getElementById('story-chapters').textContent = story.chapters + ' chapters';
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

  // Get free stories from unified database
  const freeStories = window.storiesDatabase.filter(s => s.isFree);

  storyCards.forEach((card, index) => {
    if (freeStories[index]) {
      card.style.cursor = 'pointer';
      const storyId = freeStories[index].id;

      card.addEventListener('click', function() {
        console.log(`Story card clicked: ${storyId}`);
        openReadingPane(storyId);
      });
    }
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

  // AI Generator Link Handler
  const aiGenLink = document.getElementById('ai-generator-link');
  if (aiGenLink) {
    aiGenLink.addEventListener('click', function(e) {
      e.preventDefault();
      openAIGeneratorModal();
    });
  }
});

// AI Generator Modal Functions
function openAIGeneratorModal() {
  const modal = document.getElementById('ai-generator-modal');
  if (modal) {
    console.log('✓ Modal found, displaying');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    console.error('✗ AI Generator modal not found in DOM - check id="ai-generator-modal"');
  }
}

function closeAIGeneratorModal() {
  const modal = document.getElementById('ai-generator-modal');
  if (modal) {
    console.log('✓ Closing modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Handle unlock button click - TODO: integrate with payment system
function handleAIGeneratorUnlock() {
  console.log('🔓 AI Generator unlock button clicked');
  // TODO: Integrate subscription/payment flow here
  // For now, this is a placeholder
}

// Close modal when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
  const aiGenModal = document.getElementById('ai-generator-modal');
  if (aiGenModal) {
    aiGenModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeAIGeneratorModal();
      }
    });
  }
});

// ============================================
// MY LIBRARY FEATURE FUNCTIONS
// ============================================

// Save story to library
function addToLibrary() {
  const currentStory = getCurrentStoryData();
  if (!currentStory || !currentStory.id) {
    showToast('Could not add story. Please try again.');
    return;
  }

  const savedStories = getSavedStories();

  if (savedStories[currentStory.id]) {
    showToast('Story already in your library!');
    return;
  }

  savedStories[currentStory.id] = {
    ...currentStory,
    dateAdded: Date.now()
  };

  localStorage.setItem('savedStories', JSON.stringify(savedStories));

  // Update profile stats
  updateProfileStats();

  showToast(currentStory.title + ' added to your library!');
}

// Get currently displayed story data from reading pane
function getCurrentStoryData() {
  const titleEl = document.getElementById('story-title');
  const authorEl = document.getElementById('story-author');
  const readsEl = document.getElementById('story-reads');
  const chaptersEl = document.getElementById('story-chapters');
  const contentEl = document.getElementById('story-content');

  if (!titleEl || !authorEl) return null;

  const title = titleEl.textContent;
  const author = authorEl.textContent;
  const reads = readsEl.textContent;
  const chapters = chaptersEl.textContent;
  const content = contentEl.innerHTML;

  // Find story ID from stories object
  const storyId = Object.keys(stories).find(id =>
    stories[id].title === title
  );

  return {
    id: storyId,
    title,
    author,
    reads,
    chapters,
    content,
    excerpt: getExcerpt(content),
    tags: getStoryTags(storyId),
    thumbnail: getStoryThumbnail(storyId),
    dateAdded: Date.now()
  };
}

// Get saved stories from localStorage
function getSavedStories() {
  return JSON.parse(localStorage.getItem('savedStories') || '{}');
}

// Remove story from library
function removeFromLibrary(storyId) {
  const savedStories = getSavedStories();
  delete savedStories[storyId];
  localStorage.setItem('savedStories', JSON.stringify(savedStories));

  // Update profile stats
  updateProfileStats();

  displaySavedStories();
}

// Display saved stories on my-library.html
function displaySavedStories() {
  const savedStories = getSavedStories();
  const grid = document.getElementById('saved-stories-grid');
  const emptyState = document.getElementById('stories-empty-state');
  const libraryControls = document.querySelector('.library-controls');

  if (!grid) return;

  if (Object.keys(savedStories).length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    if (libraryControls) libraryControls.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  grid.style.display = 'grid';
  if (libraryControls) libraryControls.style.display = 'block';
  grid.innerHTML = '';

  const sortedStories = sortStories(savedStories);

  sortedStories.forEach(story => {
    const card = createStoryCard(story, true);
    grid.appendChild(card);
  });
}

// Sort stories based on selected option
function sortStories(stories) {
  const sortBy = document.getElementById('sort-by')?.value || 'date-desc';
  const storiesArray = Object.values(stories);

  switch(sortBy) {
    case 'date-desc':
      return storiesArray.sort((a, b) => b.dateAdded - a.dateAdded);
    case 'date-asc':
      return storiesArray.sort((a, b) => a.dateAdded - b.dateAdded);
    case 'title-asc':
      return storiesArray.sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return storiesArray.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return storiesArray;
  }
}

// Create story card HTML
function createStoryCard(story, showRemoveBtn = false) {
  const card = document.createElement('div');
  card.className = 'story-card library-card';
  card.onclick = () => openStoryFromLibrary(story.id);

  const timeAgo = getTimeAgo(story.dateAdded);

  card.innerHTML = `
    <div class="story-thumbnail">${story.thumbnail}</div>
    <div class="story-badge">Saved</div>
    ${showRemoveBtn ? `<button class="remove-btn" onclick="event.stopPropagation(); removeFromLibrary('${story.id}')">×</button>` : ''}
    <div class="story-tags">
      ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <h3 class="story-title">${story.title}</h3>
    <p class="story-excerpt">${story.excerpt}</p>
    <div class="story-meta">
      <span>${story.author}</span>
      <span>${story.reads}</span>
      <span class="date-added">Added ${timeAgo}</span>
    </div>
  `;

  return card;
}

// Open story from library in reading pane
function openStoryFromLibrary(storyId) {
  const savedStories = getSavedStories();
  const story = savedStories[storyId];

  if (!story) return;

  // Populate reading pane with story data
  document.getElementById('story-title').textContent = story.title;
  document.getElementById('story-author').textContent = story.author;
  document.getElementById('story-reads').textContent = story.reads;
  document.getElementById('story-chapters').textContent = story.chapters;
  document.getElementById('story-content').innerHTML = story.content;

  // Show reading pane
  const readingPane = document.getElementById('reading-pane');
  if (readingPane) {
    readingPane.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

// Helper: Get time ago string
function getTimeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

// Helper: Extract excerpt from content
function getExcerpt(content) {
  const text = content.replace(/<[^>]*>/g, '');
  return text.substring(0, 120) + '...';
}

// Helper: Get tags for story
function getStoryTags(storyId) {
  if (storyId === 'midnight-confessions') return ['Romance', 'Sweet'];
  if (storyId === 'garden-of-secrets') return ['Mystery', 'Slow Burn'];
  return [];
}

// Helper: Get thumbnail for story
function getStoryThumbnail(storyId) {
  if (storyId === 'midnight-confessions') return '☕';
  if (storyId === 'garden-of-secrets') return '🌹';
  return '📖';
}

// Initialize My Library page on load
if (window.location.pathname.includes('my-library.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    displaySavedStories();

    const sortBy = document.getElementById('sort-by');
    if (sortBy) {
      sortBy.addEventListener('change', displaySavedStories);
    }
  });
}

// ──────────────────────────────────
// BLOG POST DATA & FUNCTIONS
// ──────────────────────────────────

// Blog posts database
const blogPosts = {
  'founders-journey': {
    id: 'founders-journey',
    category: 'Founder Stories',
    title: 'Welcome to Hot Tea Time: A Founder\'s Journey',
    author: 'Hot Tea Time Team',
    readTime: '5 min read',
    excerpt: 'The story of how Hot Tea Time came to be, from a simple idea to a thriving community of readers and writers who celebrate the power of storytelling and intimate connection.',
    content: `<p>It all started with a simple question: <em>What if there was a place where readers and writers could celebrate stories without judgment?</em></p>
      <p>Hot Tea Time was born from a passion for storytelling—the kind of stories that make your heart race, that explore the complexity of human connection, and that celebrate the power of intimate moments. We wanted to create a space where people could read, write, and connect over the narratives that move them.</p>
      <p>Our founders believed that everyone deserves a platform where their stories matter. Whether you're a voracious reader looking for your next obsession or a writer wanting to share your craft with an appreciative community, Hot Tea Time is here for you.</p>
      <p>Today, we're honored to serve thousands of members worldwide. But this journey is just beginning. We're committed to growing our community responsibly, listening to our members, and building features that enhance your storytelling experience.</p>
      <p>Thank you for being part of the Hot Tea Time family. Together, we're creating something special.</p>`
  },
  'meet-the-women': {
    id: 'meet-the-women',
    category: 'Team Spotlight',
    title: 'Meet the Women Behind the Stories',
    author: 'Hot Tea Time Team',
    readTime: '4 min read',
    excerpt: 'Get to know the passionate women who built this community and their mission to create a safe space for storytelling.',
    content: `<p>Behind every great platform are amazing people. The women who built Hot Tea Time come from diverse backgrounds—publishing, tech, creative writing, and beyond—but we all share one thing: a deep love for storytelling.</p>
      <p><strong>Our Mission</strong> is to create a judgment-free zone where readers and writers can explore their passions without shame. We believe that good stories matter, and that everyone deserves to have their voice heard.</p>
      <p>From our editorial team to our developers, every person at Hot Tea Time is committed to making this platform the best it can be. We listen to our community, we iterate based on your feedback, and we constantly strive to improve.</p>
      <p>We're building this for you. And we're so grateful to be on this journey together.</p>`
  },
  'reader-to-writer': {
    id: 'reader-to-writer',
    category: 'Community Spotlight',
    title: 'From Reader to Writer: Sarah\'s Story',
    author: 'Sarah Mitchell',
    readTime: '6 min read',
    excerpt: 'How one devoted reader found her voice and became an author within the Hot Tea Time community.',
    content: `<p>I never thought of myself as a writer. I was a reader—always had been. I lived through books, especially those intimate stories that explored passion and connection.</p>
      <p>But somewhere along the way, I started imagining my own stories. What if this character made a different choice? What if that scene unfolded differently? The ideas wouldn't leave me alone.</p>
      <p>That's when I discovered Hot Tea Time. And everything changed.</p>
      <p>The community here is unlike anything I've experienced. When I posted my first story—terrified, honestly—the response was overwhelming. Not because everyone loved it, but because people <em>cared</em>. They engaged with my work respectfully. They offered constructive feedback. They cheered me on.</p>
      <p>Now, six months later, I have readers who ask when my next chapter is coming out. I've made friends who are also writers. I'm working on my first full-length novel.</p>
      <p>Hot Tea Time didn't just give me a platform. It gave me permission to be a writer. And for that, I'm forever grateful.</p>`
  },
  'safe-space': {
    id: 'safe-space',
    category: 'Founder Stories',
    title: 'Building a Safe Space for Storytelling',
    author: 'Hot Tea Time Team',
    readTime: '5 min read',
    excerpt: 'Behind the scenes look at how we\'ve created a judgment-free zone where readers and writers can explore passion, intimacy, and creativity together.',
    content: `<p>Creating a "safe space" isn't just a buzzword for us—it's foundational to everything we do.</p>
      <p>When we designed Hot Tea Time, we asked ourselves: What makes people feel comfortable sharing their authentic stories? What protections do writers need? How do we ensure readers can explore content without judgment?</p>
      <p>The answer came down to community standards, transparent moderation, and a genuine commitment to diversity and inclusion.</p>
      <p><strong>Our Community Guidelines</strong> are designed to protect everyone. We don't allow harassment, discrimination, or abuse of any kind. But we also protect creative freedom—because stories are meant to explore difficult themes, raw emotions, and complex relationships.</p>
      <p><strong>Stealth Mode</strong> is one way we protect privacy. Our moderation team is carefully trained to understand context. And we're constantly listening to feedback about how we can do better.</p>
      <p>Building a safe space is ongoing work. But we're committed to it, every single day.</p>`
  },
  'author-spotlight': {
    id: 'author-spotlight',
    category: 'Author Feature',
    title: 'Author Spotlight: Alexandra Blake',
    author: 'Hot Tea Time Team',
    readTime: '7 min read',
    excerpt: 'Interview with one of our most beloved authors about her writing process, inspiration, and building a loyal readership.',
    content: `<p><em>Alexandra Blake has been writing on Hot Tea Time for over a year and has amassed a devoted following. We sat down to talk about her journey, her process, and what drives her creative vision.</em></p>
      <p><strong>How did you start writing on Hot Tea Time?</strong></p>
      <p>"I'd been writing in private for years, sharing stories with close friends. But I never thought about a wider audience. Then a friend suggested Hot Tea Time, and I was hooked immediately by the community vibe."</p>
      <p><strong>Your readers are incredibly engaged. What's your secret?</strong></p>
      <p>"I think it's authenticity. I write stories that matter to me—characters I've fallen in love with, relationships I've explored deeply. My readers can feel that investment. They know I'm not just churning out content; I'm creating worlds I genuinely care about."</p>
      <p><strong>What's been the most rewarding part?</strong></p>
      <p>"The connections. Readers who tell me my stories helped them through hard times, writers who say I inspired them to start their own work. That's everything."</p>`
  },
  'future-vision': {
    id: 'future-vision',
    category: 'Founder Stories',
    title: 'Our Vision for the Future',
    author: 'Hot Tea Time Team',
    readTime: '4 min read',
    excerpt: 'What\'s next for Hot Tea Time? A candid conversation about upcoming features, community growth, and our commitment to creators and readers alike.',
    content: `<p>We're so grateful for where we are today. But we're just getting started.</p>
      <p><strong>What's Coming:</strong></p>
      <ul><li><strong>Enhanced Creator Tools</strong> – Better analytics, more customization options, and tools to help writers grow their audiences</li>
      <li><strong>Community Features</strong> – Group chats, book clubs, author interviews, and exclusive events for our members</li>
      <li><strong>Mobile App</strong> – Read and write on the go with a fully-featured mobile experience</li>
      <li><strong>Creator Support Program</strong> – Ways for successful authors to earn from their work</li></ul>
      <p><strong>Our Commitment:</strong></p>
      <p>We promise to always prioritize our community. We'll keep this a safe, welcoming space. We'll listen to your feedback and iterate accordingly. And we'll never lose sight of why we started this in the first place: to celebrate the power of stories.</p>
      <p>The future of Hot Tea Time is bright. And it's being written by all of you.</p>`
  }
};

// Open blog post in reading pane
function openBlogPost(postId) {
  const post = blogPosts[postId];
  if (!post) return;

  // Populate reading pane with blog content
  document.getElementById('story-title').textContent = post.title;
  document.getElementById('story-author').textContent = `By ${post.author}`;
  document.getElementById('story-reads').textContent = post.readTime;
  document.getElementById('story-chapters').textContent = post.category;
  document.getElementById('story-content').innerHTML = post.content;

  // Show reading pane
  const readingPane = document.getElementById('reading-pane');
  if (readingPane) {
    readingPane.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

// Handle unlock for locked features
function handleUnlockFeature(featureName) {
  // TODO: Integrate with payment/subscription system
  alert(`Unlock ${featureName} - Payment integration coming soon!`);
}

// Handle Asset Marketplace unlock button
function handleAssetMarketplaceUnlock() {
  alert('🔓 Unlock The Asset Marketplace - $4.99/mo\n\nAccess premium creative assets, custom characters, story prompts, and world-building kits from talented creators!');
  // TODO: Integrate with payment/subscription system
}

// Handle The Bindery "Create Your Book" button
function handleCreateBook() {
  alert('📖 Create Your Book\n\nStarting your book creation journey...\n\nPayment and book customization flow coming soon!');
  // TODO: Integrate with book creation/payment system
}

// Handle The Bindery "Purchase Book" button
function handlePurchaseBook(bookTitle) {
  alert(`📕 Purchase: ${bookTitle}\n\nAdding to cart...\n\nPayment integration coming soon!`);
  // TODO: Integrate with shopping cart and payment system
}

// Handle The Boutique "Add to Cart" button
function handleAddToCart(productName) {
  alert(`🛒 ${productName}\n\nAdded to cart!\n\nCheckout coming soon!`);
  // TODO: Integrate with shopping cart system
}

// ── INJECT AI GENERATOR MODAL ON ALL PAGES ──
function ensureAIGeneratorModal() {
  // Check if modal already exists
  if (document.getElementById('ai-generator-modal')) {
    return; // Modal already exists
  }

  // Create modal HTML
  const modalHTML = `
    <div id="ai-generator-modal" class="ai-generator-modal" style="display: none;">
      <div class="ai-gen-overlay"></div>
      <div class="ai-gen-content-minimal">
        <button class="ai-gen-close" onclick="closeAIGeneratorModal()">&times;</button>
        <div class="ai-gen-teaser">
          <div class="ai-gen-icon">🔒</div>
          <h1 class="ai-gen-title">Craft Your Fantasy</h1>
          <p class="ai-gen-description">
            Shape characters, weave tension, ignite passion.<br>
            Your story. Your rules. Your fantasy.
          </p>
          <button class="ai-gen-unlock-btn" onclick="handleAIGeneratorUnlock()">
            Unlock the Inner Circle — $4.99/mo
          </button>
        </div>
      </div>
    </div>
  `;

  // Inject modal at end of body
  const div = document.createElement('div');
  div.innerHTML = modalHTML;
  document.body.appendChild(div.firstElementChild);
}

// Ensure modal exists when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureAIGeneratorModal);
} else {
  ensureAIGeneratorModal();
}

/* ── CHARACTER LIBRARY FUNCTIONS ── */

let currentCharacterIndex = 0;
let currentFilter = 'all';
let filteredCharacters = [];

function setupCharacterCardHover(card) {
  const infoDiv = card.querySelector('.character-info');
  const nameDiv = card.querySelector('.character-name');

  // Wait for next frame to ensure elements are rendered
  requestAnimationFrame(() => {
    // Measure the name height
    const nameHeight = nameDiv.offsetHeight;
    const namePadding = 16; // padding around the name
    const initialMaxHeight = nameHeight + namePadding * 2;

    // Measure the full content height
    const fullHeight = infoDiv.scrollHeight;

    // Set initial max-height
    infoDiv.style.maxHeight = initialMaxHeight + 'px';
    infoDiv.style.overflow = 'hidden';

    // Add hover listeners
    card.addEventListener('mouseenter', () => {
      // On hover, expand to show all content (slide up effect)
      infoDiv.style.maxHeight = fullHeight + 'px';
    });

    card.addEventListener('mouseleave', () => {
      // On leave, collapse back to name only
      infoDiv.style.maxHeight = initialMaxHeight + 'px';
    });
  });
}

function renderCharacterGrid(filter) {
  const grid = document.getElementById('character-grid');
  if (!grid) return;

  // Filter characters
  if (filter === 'all') {
    filteredCharacters = characterLibrary;
  } else {
    filteredCharacters = characterLibrary.filter(char => char.category === filter);
  }

  currentFilter = filter;

  // Clear grid
  grid.innerHTML = '';

  // Render cards
  filteredCharacters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.onclick = () => openCharacterModal(character.id);

    const traits = character.traits
      .map(trait => `<span class="trait-tag">${trait}</span>`)
      .join('');

    const bioPreview = character.bio.substring(0, 100) + '...';

    // Split character name by spaces for multi-line display
    const nameParts = character.name.split(' ');
    const formattedName = nameParts.map(part => `<div class="name-part">${part}</div>`).join('');

    card.innerHTML = `
      <div class="character-portrait" style="background: ${character.gradient};">
        <span class="character-category">${character.category}</span>
      </div>
      <div class="character-info">
        <div class="character-name">${formattedName}</div>
        <p class="character-age-title">${character.age} • ${character.archetype}</p>
        <div class="character-traits">
          ${traits}
        </div>
        <p class="character-bio-preview">${bioPreview}</p>
      </div>
    `;

    grid.appendChild(card);

    // Setup hover animation for this card
    setupCharacterCardHover(card);
  });
}

function openCharacterModal(characterId) {
  const character = characterLibrary.find(c => c.id === characterId);
  if (!character) return;

  const modal = document.getElementById('character-modal');
  if (!modal) return;

  currentCharacterIndex = filteredCharacters.findIndex(c => c.id === characterId);

  // Populate modal with character data
  const portrait = document.getElementById('modal-portrait');
  const name = document.getElementById('modal-name');
  const ageTitle = document.getElementById('modal-age-title');
  const traits = document.getElementById('modal-traits');
  const bio = document.getElementById('modal-bio');
  const interests = document.getElementById('modal-interests');
  const tropes = document.getElementById('modal-tropes');

  portrait.style.background = character.gradient;

  name.textContent = character.name;
  ageTitle.textContent = `${character.age} • ${character.archetype}`;

  traits.innerHTML = character.traits
    .map(trait => `<span class="trait-tag-large">${trait}</span>`)
    .join('');

  bio.textContent = character.bio;

  interests.innerHTML = character.interests
    .map(interest => `<li>${interest}</li>`)
    .join('');

  tropes.innerHTML = character.tropes
    .map(trope => `<span class="trope-tag">${trope}</span>`)
    .join('');

  // Show modal with animation
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  setTimeout(() => modal.style.opacity = '1', 10);
}

function closeCharacterModal() {
  const modal = document.getElementById('character-modal');
  if (!modal) return;

  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

function nextCharacter() {
  currentCharacterIndex = (currentCharacterIndex + 1) % filteredCharacters.length;
  openCharacterModal(filteredCharacters[currentCharacterIndex].id);
}

function previousCharacter() {
  currentCharacterIndex = (currentCharacterIndex - 1 + filteredCharacters.length) % filteredCharacters.length;
  openCharacterModal(filteredCharacters[currentCharacterIndex].id);
}

function setupFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      // Render grid with new filter
      renderCharacterGrid(btn.dataset.filter);
    });
  });
}

// Use character in story - opens AI generator modal with selected character
function useCharacterInStory() {
  const currentCharacterId = filteredCharacters[currentCharacterIndex].id;
  const selectedCharacter = characterLibrary.find(c => c.id === currentCharacterId);

  if (selectedCharacter) {
    // Store the selected character in a global variable for the AI generator to access
    window.selectedCharacterForStory = selectedCharacter;
    console.log('✓ Character selected for story:', selectedCharacter.name);

    // Close the character modal
    closeCharacterModal();

    // Open the AI generator modal
    openAIGeneratorModal();
  }
}

// Save character to library
function saveCharacterToLibrary() {
  if (currentCharacterIndex < 0 || currentCharacterIndex >= filteredCharacters.length) return;

  const character = filteredCharacters[currentCharacterIndex];
  let savedCharacters = JSON.parse(localStorage.getItem('savedCharacters')) || [];

  // Check if character is already saved
  if (savedCharacters.find(c => c.id === character.id)) {
    showToast('This character is already in your library!');
    return;
  }

  // Add character to saved list
  savedCharacters.push(character);
  localStorage.setItem('savedCharacters', JSON.stringify(savedCharacters));

  // Update profile stats
  updateProfileStats();

  console.log('✓ Character saved to library:', character.name);
  showToast(`${character.name} has been added to your library!`);

  closeCharacterModal();
}

// Load saved characters from localStorage
function loadSavedCharacters() {
  const savedCharacters = JSON.parse(localStorage.getItem('savedCharacters')) || [];
  return savedCharacters;
}

// Remove character from library
window.removeCharacterFromLibrary = function(characterId) {
  const savedCharacters = loadSavedCharacters();
  const updatedCharacters = savedCharacters.filter(char => char.id !== characterId);
  localStorage.setItem('savedCharacters', JSON.stringify(updatedCharacters));

  // Update profile stats
  updateProfileStats();

  // Re-render the grid
  renderSavedCharacterGrid();

  // Show toast notification
  showToast('Character removed from library');
};

// Render saved characters in My Library
function renderSavedCharacterGrid() {
  const grid = document.getElementById('saved-characters-grid');
  const emptyState = document.getElementById('characters-empty-state');

  if (!grid) return;

  const savedCharacters = loadSavedCharacters();

  if (savedCharacters.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';
  grid.innerHTML = '';

  // Render each saved character as a card
  savedCharacters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.onclick = () => openCharacterModal(character.id);

    const traits = character.traits
      .map(trait => `<span class="trait-tag">${trait}</span>`)
      .join('');

    const bioPreview = character.bio.substring(0, 100) + '...';

    // Split character name by spaces for multi-line display
    const nameParts = character.name.split(' ');
    const formattedName = nameParts.map(part => `<div class="name-part">${part}</div>`).join('');

    card.innerHTML = `
      <div class="character-portrait" style="background: ${character.gradient};">
        <span class="character-category">${character.category}</span>
        <button class="character-delete-btn" onclick="event.stopPropagation(); removeCharacterFromLibrary(${character.id})" title="Remove from library">×</button>
      </div>
      <div class="character-info">
        <div class="character-name">${formattedName}</div>
        <p class="character-age-title">${character.age} • ${character.archetype}</p>
        <div class="character-traits">
          ${traits}
        </div>
        <p class="character-bio-preview">${bioPreview}</p>
      </div>
    `;

    grid.appendChild(card);
    setupCharacterCardHover(card);
  });
}

// Setup library tabs
// Initialize Stories tab - load and display saved stories
function initializeStoriesTab() {
  const storiesGrid = document.getElementById('saved-stories-grid');
  const storiesEmptyState = document.getElementById('stories-empty-state');
  const libraryControls = document.querySelector('.library-controls');

  if (!storiesGrid) return;

  // Load and display saved stories
  displaySavedStories();

  // Check if there are any saved stories in the grid now
  const hasSavedStories = storiesGrid.children.length > 0;

  if (hasSavedStories) {
    storiesGrid.style.display = 'grid';
    if (storiesEmptyState) storiesEmptyState.style.display = 'none';
    if (libraryControls) libraryControls.style.display = 'block';
  } else {
    storiesGrid.style.display = 'none';
    if (storiesEmptyState) storiesEmptyState.style.display = 'block';
    if (libraryControls) libraryControls.style.display = 'none';
  }
}

// Show toast notification
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  if (!toast || !toastMessage) return;

  // Set the message
  toastMessage.textContent = message;

  // Remove hide class if it exists
  toast.classList.remove('hide');

  // Show the toast
  toast.style.display = 'flex';

  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.style.display = 'none';
    }, 400); // Wait for animation to finish
  }, 3000);
}

function setupLibraryTabs() {
  const tabBtns = document.querySelectorAll('.library-tab-btn');
  const tabContents = document.querySelectorAll('.library-tab-content');

  // Initialize stories tab on first load
  initializeStoriesTab();

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;

      // Remove active from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active to clicked button and corresponding content
      btn.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');

      // If switching to stories tab, check for saved stories
      if (tabName === 'stories') {
        initializeStoriesTab();
      }

      // If switching to characters tab, render saved characters
      if (tabName === 'characters') {
        renderSavedCharacterGrid();
      }
    });
  });

  // Add event listener for sort dropdown
  const sortDropdown = document.getElementById('sort-by');
  if (sortDropdown) {
    sortDropdown.addEventListener('change', () => {
      displaySavedStories();
    });
  }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('character-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeCharacterModal();
      }
    });
  }
});

/* ═════════════════════════════════════════════════════════════════════════════
   STEALTH MODE - CORPORATE DISGUISE
   Transform Hot Tea Time into a plain spreadsheet/document interface
   ═════════════════════════════════════════════════════════════════════════════ */

// Store original title for restoration
let originalPageTitle = document.title;

// Generic corporate titles for stealth mode
const stealthTitles = ['Document.pdf', 'Spreadsheet', 'Report.xlsx', 'Data.txt'];
let currentStealthTitle = 'Document.pdf';

// Initialize stealth mode on page load (check localStorage)
function initStealthMode() {
  const isStealthEnabled = localStorage.getItem('stealthModeEnabled') === 'true';
  const stealthBtn = document.querySelector('.stealth-btn');

  if (isStealthEnabled) {
    document.body.classList.add('stealth-mode');
    if (stealthBtn) stealthBtn.classList.add('active');

    // Apply stealth transformations
    applyStealthTransformations();

    console.log('✓ Stealth Mode ENABLED (from localStorage)');
  }
}

// Apply all stealth transformations
function applyStealthTransformations() {
  // Change tab title
  changeTabTitle(true);

  // Hide nav and show toolbar
  updateNavigation(true);
}

// Restore all transformations
function restoreFromStealth() {
  // Restore tab title
  changeTabTitle(false);

  // Restore nav
  updateNavigation(false);
}

// Change browser tab title
function changeTabTitle(enable) {
  if (enable) {
    originalPageTitle = document.title;
    document.title = currentStealthTitle;
  } else {
    document.title = originalPageTitle;
  }
}

// Handle navigation bar transformation
function updateNavigation(enable) {
  const navLinks = document.querySelector('.nav-links');
  const heroNav = document.querySelector('.hero-nav');

  if (enable) {
    if (navLinks) {
      navLinks.style.display = 'none';
      navLinks.dataset.originalDisplay = navLinks.style.display;
    }
  } else {
    if (navLinks) {
      navLinks.style.display = '';
    }
  }
}

// Toggle stealth mode on button click
function toggleStealthMode() {
  const body = document.body;
  const btn = document.querySelector('.stealth-btn');

  body.classList.toggle('stealth-mode');

  if (body.classList.contains('stealth-mode')) {
    localStorage.setItem('stealthModeEnabled', 'true');
    if (btn) btn.classList.add('active');

    // Apply transformations
    applyStealthTransformations();

    console.log('✓ Stealth Mode ENABLED - Corporate Disguise Active');
  } else {
    localStorage.setItem('stealthModeEnabled', 'false');
    if (btn) btn.classList.remove('active');

    // Restore everything
    restoreFromStealth();

    console.log('✓ Stealth Mode DISABLED');
  }
}

// Initialize stealth mode when DOM is ready
document.addEventListener('DOMContentLoaded', initStealthMode);

/* ═══════════════════════════════════════════════════════════════════
   USER PROFILE SYSTEM
   ═══════════════════════════════════════════════════════════════════ */

// Get user profile from localStorage
function getUserProfile() {
  const profileJSON = localStorage.getItem('userProfile');

  // Handle existing users without profiles (migration)
  if (!profileJSON) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      // Create minimal profile for existing user
      const migrationProfile = {
        email: 'user@hotteatime.com',
        displayName: 'Tea Enthusiast',
        memberSince: Date.now(),
        preferences: { favoriteTopology: 'not-specified', heatLevel: 'steamy' },
        avatar: '🫖',
        membershipTier: 'free',
        stats: {
          storiesSaved: Object.keys(getSavedStories()).length,
          charactersCollected: loadSavedCharacters().length,
          readingStreak: 0
        }
      };
      localStorage.setItem('userProfile', JSON.stringify(migrationProfile));
      return migrationProfile;
    }
    return null;
  }

  return JSON.parse(profileJSON);
}

// Update profile stats (called when saving stories/characters)
function updateProfileStats() {
  const profile = getUserProfile();
  if (!profile) return;

  const savedStories = getSavedStories();
  const savedCharacters = loadSavedCharacters();

  profile.stats.storiesSaved = Object.keys(savedStories).length;
  profile.stats.charactersCollected = savedCharacters.length;

  localStorage.setItem('userProfile', JSON.stringify(profile));
}


// Placeholder modals for future features
function openProfileSettings(event) {
  event.preventDefault();
  alert('Profile Settings\n\nCustomize your Hot Tea Time experience.\n\nFeature coming soon!');
}

function openPreferences(event) {
  event.preventDefault();
  const profile = getUserProfile();
  if (!profile) return;
  alert(`Preferences\n\nTrope: ${profile.preferences.favoriteTopology}\nHeat Level: ${profile.preferences.heatLevel}\n\nEditor coming soon!`);
}
