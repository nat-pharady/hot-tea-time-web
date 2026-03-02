import { motion } from "motion/react";
import tasteTestImage from "../assets/taste-test-2.jpg";
import step2Image from "../assets/step-2.jpg";
import step3Image from "../assets/step-3.jpg";

const steps = [
  {
    numeral: "I",
    title: "Take the Taste Test",
    tag: "Take the Test",
    description:
      "Answer a few delightfully pointed questions about your preferences. We'll calibrate your palate and tailor everything accordingly. No judgement. Only good taste.",
    image: tasteTestImage,
  },
  {
    numeral: "II",
    title: "Settle Into Your Chair",
    tag: "Settle into the Chair",
    description:
      "Discover stories, jump into live adventures, and lose track of time entirely. New chapters drop daily — always warm, never stale.",
    image: step2Image,
  },
  {
    numeral: "III",
    title: "Pour Your Own",
    tag: "Pour Your Own",
    description:
      "Write your own stories, keep them private or share them with the community. If others love what you brew, list it in the Marketplace and earn Hearts.",
    image: step3Image,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="how-it-works" className="py-10 md:py-16 px-8 md:px-14 bg-white text-dark-grey">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">The Ritual</span>
          </div>
          <h2 className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter">
            How One
            <br />
            Indulges
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Three effortless steps stand between you and the finest reading experience you've ever had the pleasure of not admitting to your book club.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.numeral}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-sm md:text-base font-light uppercase tracking-widest opacity-70 mb-3">
                  Step {step.numeral}
                </span>
                <h3 className="text-3xl md:text-5xl font-light tracking-tight">
                  {step.tag}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
