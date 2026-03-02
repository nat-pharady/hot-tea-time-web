import { motion } from "motion/react";
import heroImage from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <header className="relative h-screen bg-dark-grey text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Hot Tea Time Club"
          className="w-full h-full object-cover object-[70%_top] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-14">
        <h1 className="text-[13vw] md:text-[8vw] font-light leading-[0.9] tracking-tighter mb-10">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              The Tea Has
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              <em className="italic">Never Been</em>
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              This Hot.
            </motion.span>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
          <a href="#join" className="px-8 py-4 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all w-fit">
            Start Sipping Free
          </a>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base font-light leading-relaxed opacity-70 max-w-xs"
          >
            Premium fiction for those who like their stories steeped to perfection. Romance, tension, and all the delicious details.
          </motion.p>
        </div>
      </div>
    </header>
  );
}
