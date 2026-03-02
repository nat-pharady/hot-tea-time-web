import { motion } from "motion/react";

const features = [
  "Write a story tailored specifically for someone you know — or someone you'd like to.",
  "Each story gets a unique personal subdomain, delivered as a link.",
  "Recipients open it to find a beautifully presented story written just for them.",
  "Anonymous sending available. Plausible deniability included at no extra charge.",
];

export default function BrewYourOwn() {
  return (
    <section className="py-10 md:py-16 px-8 md:px-14 bg-white text-dark-grey">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] font-medium uppercase tracking-widest bg-dark-grey text-white px-3 py-1 rounded-full">
              Coming Soon
            </span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Phase Two</span>
          </div>
          <h2 className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter">
            Brew Your
            <br />
            Own Scandal
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Send a personalised story to anyone in the world. Every Scandal Story gets its own custom link — a little gift that arrives wrapped in delicious mischief.
          </p>
        </div>
      </div>

      {/* Feature list */}
      <div className="mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-6 py-8 border-t border-dark-grey/10">
              <span className="text-sm font-light opacity-30 mt-1">0{index + 1}</span>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-70 max-w-2xl">
                {feature}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-dark-grey/10" />
      </div>

      {/* Demo preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto text-center mb-16"
      >
        <p className="text-xs font-medium uppercase tracking-widest opacity-30 mb-6">Preview</p>
        <div className="border border-dark-grey/10 p-8 md:p-12">
          <p className="text-sm font-light tracking-widest uppercase opacity-40 mb-4">
            mandy.spillthetea.news
          </p>
          <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
            "A Story Just for You, Mandy."
          </h3>
          <p className="text-base font-light opacity-60 leading-relaxed">
            Someone thought of you. They wrote something down. You probably should open it.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-sm font-light opacity-50 mb-6">
          Be the first to know when Brew Your Own launches.
        </p>
        <div className="flex justify-center">
          <a href="#" className="group flex items-center gap-4 border-b border-dark-grey/20 pb-2 hover:border-dark-grey transition-colors">
            <div className="relative w-10 h-10 rounded-full border border-dark-grey flex items-center justify-center overflow-hidden">
              <motion.div className="absolute inset-0 bg-dark-grey scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 relative z-10 group-hover:text-white transition-colors">
                <path d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-lg font-light">Notify Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
