import { motion } from "motion/react";

export default function Showreel() {
  return (
    <section className="relative h-[100vh] md:h-[200vh] bg-light-grey text-dark-grey overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-8">
        <div className="flex items-center gap-2 mb-8">
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">Work in motion</span>
        </div>

        <h2 className="text-[20vw] md:text-[12vw] font-light leading-none tracking-tighter mb-12">
          Play Reel
        </h2>

        <p className="max-w-xs text-sm md:text-base font-light leading-relaxed mb-12">
          Our work is best experienced in motion. Don’t forget to put on your headphones.
        </p>

        <div className="w-20 h-20 rounded-full border border-dark-grey/20 flex items-center justify-center">
          <svg viewBox="0 0 86 86" fill="none" className="w-10 h-10">
            <circle opacity="0.4" cx="43" cy="43" r="41" stroke="currentColor" />
            <path d="M41 38V48L49.1818 43L41 38Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] opacity-30">
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
