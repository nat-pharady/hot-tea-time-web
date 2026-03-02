import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="py-10 md:py-16 px-8 md:px-14 bg-white text-dark-grey">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">Every Thursday</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter mb-8"
        >
          The Weekly Spill
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl font-light leading-relaxed opacity-70 mb-12"
        >
          New stories, platform updates, and the occasional scandalous recommendation — delivered every Thursday like clockwork, and just as irresistible.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-6 py-4 border border-dark-grey/20 bg-transparent text-dark-grey font-light text-base placeholder:opacity-40 focus:outline-none focus:border-dark-grey transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-dark-grey text-white font-light text-base hover:bg-dark-grey/90 transition-colors"
          >
            Subscribe
          </button>
        </motion.form>

        <p className="text-xs font-light opacity-40">
          No spam. Unsubscribe anytime. Your secrets are safe with us.
        </p>
      </div>
    </section>
  );
}
