import { motion } from "motion/react";

const features = [
  {
    title: "The Stealth Toggle",
    tag: "Incognito Mode",
    description:
      "One tap transforms your lush, beautiful reading experience into a convincingly boring Microsoft Excel spreadsheet. Nosy colleagues will see nothing but pivot tables. Your secret is perfectly safe.",
  },
  {
    title: "Join an Adventure",
    tag: "Multiplayer",
    description:
      "Spot an open public story that catches your eye? Spend a few Hearts and jump into the next chapter alongside other readers. Collaborative storytelling has never been quite this compelling.",
  },
  {
    title: "The Ink",
    tag: "Visualise Your Scene",
    description:
      "At any moment in a story, spend a single Heart to conjure an AI-generated image of exactly what's unfolding. Scenes rendered in seconds. Imagination, illustrated.",
  },
  {
    title: "The Taste Test",
    tag: "Personalised Discovery",
    description:
      "Our onboarding quiz asks exactly the right questions to learn what you like. From cosy fluff to something considerably more adventurous — we calibrate your feed so everything feels personal from the very first sip.",
  },
];

export default function Showreel() {
  return (
    <section id="features" className="py-10 md:py-16 px-8 md:px-14 bg-dark-grey text-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">What's in the Cup</span>
          </div>
          <h2 className="text-[7vw] md:text-[6vw] font-light leading-none tracking-tighter">
            Features
            <br />
            Worth Spilling
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-70">
            This is not a chatbot. It is a fully immersive story platform — and it comes with a few rather clever tricks up its sleeve.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-widest opacity-50">
                {feature.tag}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              {feature.title}
            </h3>
            <div className="w-full h-[1px] bg-white/20 mb-6" />
            <p className="text-base md:text-lg font-light leading-relaxed opacity-60 max-w-md">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
