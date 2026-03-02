import { motion } from "motion/react";
import { useEffect, useState } from "react";

function SteamLine({ delay, x }: { delay: number; x: number }) {
  return (
    <motion.path
      d={`M${x},60 Q${x - 8},40 ${x + 4},25 Q${x + 12},10 ${x},0`}
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 1],
        opacity: [0, 0.6, 0],
        y: [0, -10, -20],
      }}
      transition={{
        duration: 2.4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (progress === 100) {
          document.body.style.overflow = "auto";
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0e13] text-[#e4e0db]"
      style={{ pointerEvents: progress === 100 ? "none" : "all" }}
    >
      <div className="flex flex-col items-center">
        {/* Steam lines */}
        <motion.svg
          viewBox="0 0 60 60"
          className="w-16 h-16 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 15 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <SteamLine delay={0} x={15} />
          <SteamLine delay={0.5} x={30} />
          <SteamLine delay={1.0} x={45} />
        </motion.svg>

        {/* Brand text */}
        <motion.h1
          className="text-3xl md:text-5xl font-light tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: progress > 5 ? 1 : 0,
            y: progress > 5 ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hot Tea Time
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xs md:text-sm font-light tracking-widest uppercase opacity-50 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 55 ? 0.5 : 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Stories. Exceptional Taste.
        </motion.p>
      </div>
    </motion.div>
  );
}
