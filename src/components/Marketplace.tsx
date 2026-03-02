import { motion } from "motion/react";

const bulletPoints = [
  "Write any story — solo or collaborative. Share it when you're ready, or never. It's entirely your call.",
  "List your scenarios, characters, or full stories in the Marketplace for other members to purchase with Hearts.",
  "Every time your work finds an audience, your Heart balance grows. Spend them on more of what you love.",
];

const listings = [
  {
    title: "The Governess's Dilemma",
    author: "@viviennewrites",
    genre: "Romance",
    hearts: 8,
    color: "bg-[#bc3215]",
  },
  {
    title: "Midnight in the Orangery",
    author: "@celesteafterdark",
    genre: "Mystery",
    hearts: 5,
    color: "bg-[#383773]",
  },
  {
    title: "The Colonel's Letters",
    author: "@margauxroses",
    genre: "Drama",
    hearts: 12,
    color: "bg-[#d4501e]",
  },
  {
    title: "Three Cherries, No Waiting",
    author: "@poppyspillstea",
    genre: "Comedy",
    hearts: 6,
    color: "bg-[#7c6a4d]",
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-10 md:py-16 px-8 md:px-14 bg-dark-grey text-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">The Marketplace</span>
          </div>
          <h2 className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter">
            Your Stories.
            <br />
            Your Rules.
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-70">
            Write a story you're proud of? Keep it entirely to yourself, or list it in the Marketplace for others to discover. When readers spend Hearts on your work, you earn too.
          </p>
        </div>
      </div>

      {/* Bullet points */}
      <div className="mb-16">
        {bulletPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-6 py-8 border-t border-white/10">
              <span className="text-sm font-light opacity-40 mt-1">0{index + 1}</span>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-70 max-w-2xl">
                {point}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-white/10" />
      </div>

      {/* Sample listings */}
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-widest opacity-40 mb-10">
          Now Trending
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${listing.color} p-6 transition-colors`}
            >
              <div className="flex items-center gap-1.5 mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-50">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-sm font-light opacity-50">{listing.hearts} Hearts</span>
              </div>
              <h4 className="text-lg font-light tracking-tight mb-2 group-hover:opacity-100 transition-opacity">
                {listing.title}
              </h4>
              <p className="text-xs font-light opacity-40 mb-1">{listing.author}</p>
              <span className="text-[10px] uppercase tracking-widest opacity-30">{listing.genre}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a href="#marketplace" className="group flex items-center gap-4 border-b border-white/20 pb-2 hover:border-white transition-colors">
          <div className="relative w-10 h-10 rounded-full border border-white flex items-center justify-center overflow-hidden">
            <motion.div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 relative z-10 group-hover:text-dark-grey transition-colors">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg font-light">Start Writing</span>
        </a>
      </div>
    </section>
  );
}
