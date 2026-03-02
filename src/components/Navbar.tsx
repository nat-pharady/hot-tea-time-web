import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-14 md:py-10 pointer-events-none">
      <a href="/" className="pointer-events-auto">
        <div className="flex flex-col">
          <svg viewBox="0 0 40 36" fill="none" className="w-8 h-8 md:w-10 md:h-10 text-white">
            {/* Steam lines */}
            <path d="M12 8C12 6 14 4 14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M17 7C17 5 19 3 19 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M22 8C22 6 24 4 24 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Teapot body */}
            <path d="M6 16C6 12 10 10 17 10C24 10 28 12 28 16V22C28 28 24 32 17 32C10 32 6 28 6 22V16Z" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Spout */}
            <path d="M6 18C6 18 2 17 1 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Handle */}
            <path d="M28 16C32 16 34 19 34 22C34 25 32 28 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Lid */}
            <path d="M11 10.5C11 10.5 14 9 17 9C20 9 23 10.5 23 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="17" cy="7.5" r="1" fill="currentColor" />
          </svg>
        </div>
      </a>

      <div className="hidden md:flex items-center gap-8 pointer-events-auto">
        {["How It Works", "Features", "Stories", "Membership", "Marketplace"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm font-light tracking-wide text-white hover:opacity-60 transition-opacity"
          >
            {item}
          </a>
        ))}
        <a
          href="#join"
          className="text-sm font-medium tracking-wide text-white border border-white/60 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Join the Club
        </a>
      </div>

      <button className="md:hidden flex items-center gap-2 pointer-events-auto">
        <span className="text-sm font-light text-white">Menu</span>
        <div className="w-6 h-4 flex flex-col justify-between">
          <span className="w-full h-[1px] bg-white" />
          <span className="w-full h-[1px] bg-white" />
          <span className="w-full h-[1px] bg-white" />
        </div>
      </button>
    </nav>
  );
}
