import { motion } from "motion/react";

const planFeatures = [
  "Unlimited text story access",
  "25 monthly Hearts for premium features",
  "Incognito Mode — one tap to spreadsheet view",
  "The Taste Test — fully personalised discovery",
  "Join an Adventure — multiplayer storytelling",
  "The Ink — AI image generation (1 Heart per image)",
  "Access the Marketplace — buy & sell stories",
  "Write & share your own stories with the community",
];

const heartUses = [
  { action: "Visualise any scene with AI — The Ink", cost: "1 Heart" },
  { action: "Jump into a live public story — Join an Adventure", cost: "Hearts" },
  { action: "Buy stories & scenarios in the Marketplace", cost: "Hearts" },
  { action: "AI video & GIF generation — coming in Phase 2", cost: "5 Hearts" },
];

export default function Membership() {
  return (
    <section id="membership" className="py-10 md:py-16 px-8 md:px-14 bg-dark-grey text-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Membership</span>
          </div>
          <h2 className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter">
            How Hot Do
            <br />
            You Like It?
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-70">
            One simple subscription. One very well-stocked cup. Plus a little currency for when you want something extra.
          </p>
        </div>
      </div>

      {/* Pricing card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto mb-16"
      >
        <div className="bg-[#bc3215] p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest opacity-40 mb-2">The Inner Circle</p>
              <h3 className="text-4xl md:text-5xl font-light tracking-tight">Hot</h3>
              <p className="text-sm font-light opacity-50 mt-2">For the serious sipper</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <span className="text-4xl md:text-5xl font-light">$4.99</span>
              <span className="text-lg font-light opacity-50"> / month</span>
              <p className="text-sm font-light opacity-40 mt-1">Includes 25 Hearts every month</p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/20 mb-8" />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {planFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 mt-1.5 shrink-0">
                  <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" className="opacity-40" />
                </svg>
                <span className="text-base font-light opacity-70">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <a href="#" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-dark-grey font-light text-lg overflow-hidden transition-colors hover:bg-white/90">
              Pour Me In — $4.99/mo
            </a>
          </div>
        </div>
      </motion.div>

      {/* Heart top-ups */}
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest opacity-40 mb-10 text-center">
          Heart Top-Up Packs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#bc3215] p-6 text-center transition-colors"
          >
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-2xl font-light">60 Hearts</span>
            </div>
            <p className="text-lg font-light opacity-80">$5.00</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#bc3215] p-6 text-center transition-colors relative"
          >
            <span className="absolute top-3 right-3 text-[10px] font-medium uppercase tracking-widest opacity-50">Best Value</span>
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-2xl font-light">140 Hearts</span>
            </div>
            <p className="text-lg font-light opacity-80">$10.00</p>
          </motion.div>
        </div>

        {/* What can Hearts do */}
        <p className="text-xs font-medium uppercase tracking-widest opacity-40 mb-8 text-center">
          What Can Hearts Do?
        </p>
        <div className="space-y-0">
          {heartUses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center justify-between py-4 border-t border-white/10"
            >
              <span className="text-base font-light opacity-60">{item.action}</span>
              <span className="text-sm font-light opacity-40 shrink-0 ml-4">{item.cost}</span>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
