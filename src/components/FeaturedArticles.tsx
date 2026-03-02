import { motion } from "motion/react";

function BookCover({ title, author, tags, accent }: { title: string; author: string; tags: string; accent: string }) {
  return (
    <div className={`w-full h-full flex flex-col justify-between p-6 md:p-8 ${accent}`}>
      <div>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-50 mb-1">{tags}</p>
        <div className="w-8 h-[1px] bg-current opacity-30 mt-3" />
      </div>
      <div>
        <h4 className="text-lg md:text-2xl font-light leading-tight tracking-tight mb-3">{title}</h4>
        <p className="text-[10px] md:text-xs font-light opacity-50">{author}</p>
      </div>
    </div>
  );
}

export default function FeaturedArticles() {
  return (
    <section id="stories" className="py-10 md:py-16 px-8 md:px-14 bg-white text-dark-grey overflow-hidden">
      <div className="relative h-[60vh] md:h-[80vh] mb-16">
        {/* Center — main featured cover */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] md:w-[22vw] aspect-[3/4] z-10 shadow-2xl"
        >
          <BookCover
            title="The Duke's Afternoon Arrangement"
            author="Vivienne Blackthorn"
            tags="Romance · Serial · Slow Burn"
            accent="bg-[#bc3215] text-[#f5d5c8]"
          />
        </motion.div>

        {/* Top left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-[8%] top-[15%] w-[30vw] md:w-[18vw] aspect-[3/4] shadow-xl"
        >
          <BookCover
            title="A Garden for Two"
            author="Celeste Ashby"
            tags="Tension · Rivals"
            accent="bg-[#383773] text-[#c8c7e8]"
          />
        </motion.div>

        {/* Top right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-[12%] top-[8%] w-[22vw] md:w-[14vw] aspect-[3/4] shadow-xl"
        >
          <BookCover
            title="After the Candles Go Out"
            author="Margaux Delacroix"
            tags="Late Night · Forbidden"
            accent="bg-[#d4501e] text-[#fbe4d8]"
          />
        </motion.div>

        {/* Bottom right */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-[8%] bottom-[10%] w-[30vw] md:w-[18vw] aspect-[3/4] shadow-xl"
        >
          <BookCover
            title="Lord Wickham's Cherry Problem"
            author="Poppy St. Clair"
            tags="Comedy · Regency"
            accent="bg-[#7c6a4d] text-[#e8ddd0]"
          />
        </motion.div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">On the Menu Today</span>
        </div>

        <h2 className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter mb-12">
          Fresh Pours <br /> & Slow Burns
        </h2>

        <p className="max-w-md mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
          Stories steeped to perfection. Discover serialised fiction, one-shots, and collaborative adventures — all waiting for you.
        </p>

        <div className="flex justify-center">
          <a href="#stories" className="group flex items-center gap-4 border-b border-dark-grey/20 pb-2 hover:border-dark-grey transition-colors">
            <div className="relative w-10 h-10 rounded-full border border-dark-grey flex items-center justify-center overflow-hidden">
              <motion.div className="absolute inset-0 bg-dark-grey scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              <svg viewBox="0 0 11 10" fill="none" className="w-3 h-3 relative z-10 group-hover:text-white transition-colors">
                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg font-light">Browse All Stories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
