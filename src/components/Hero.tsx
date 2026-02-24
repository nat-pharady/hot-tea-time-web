import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="relative h-[175vh] md:h-[136vw] bg-dark-grey text-white overflow-hidden">
      <div className="relative z-10 px-8 pt-32 md:px-14 md:pt-48">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-light leading-relaxed mb-12"
          >
            Global digital design studio partnering with brands and businesses that create exceptional experiences where people live, work, and unwind.
          </motion.p>
        </div>

        <h1 className="text-[16vw] md:text-[17vw] font-light leading-[0.9] tracking-tighter -ml-2 mb-20">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Digital
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Design
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Experience
            </motion.span>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl font-light leading-relaxed mb-8"
            >
              We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.
            </motion.p>
            <a href="/studio" className="inline-block border-b border-white/40 pb-1 text-lg hover:border-white transition-colors">
              The Studio
            </a>
          </div>

          <div className="hidden md:flex gap-12 text-sm font-light opacity-60">
            <ul className="space-y-2">
              <li><a href="/work">Work</a></li>
              <li><a href="/studio">Studio</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="mailto:hello@exoape.com">hello@exoape.com</a></li>
              <li><a href="tel:+31772086200">+31 772 086 200</a></li>
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="Venice Grand Canal"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="absolute bottom-10 right-10 text-sm font-light opacity-40 hidden md:block">
        Scroll to explore
      </div>
    </header>
  );
}
