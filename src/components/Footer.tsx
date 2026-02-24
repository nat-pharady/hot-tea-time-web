import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-story text-sand py-24 md:py-48 px-8 md:px-14 overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-6">
          <h2 className="text-[16vw] md:text-[10vw] font-light leading-none tracking-tighter mb-12">
            Our <br /> Story
          </h2>
          <p className="max-w-md text-lg md:text-xl font-light leading-relaxed opacity-80">
            The story behind Exo Ape is one of exploration, creativity and curiosity.
          </p>
        </div>

        <div className="md:col-span-12 h-[1px] bg-sand/20 my-12" />

        <div className="md:col-span-3 space-y-8">
          <h3 className="text-sm font-medium uppercase tracking-wider opacity-40">Address</h3>
          <address className="not-italic text-lg font-light space-y-2 opacity-80">
            <p>Willem II Singel 8</p>
            <p>6041 HS, Roermond</p>
            <p>Netherlands</p>
          </address>
        </div>

        <div className="md:col-span-2 space-y-8">
          <h3 className="text-sm font-medium uppercase tracking-wider opacity-40">Sitemap</h3>
          <ul className="text-lg font-light space-y-2 opacity-80">
            <li><a href="/work" className="hover:opacity-100">Work</a></li>
            <li><a href="/studio" className="hover:opacity-100">Studio</a></li>
            <li><a href="/news" className="hover:opacity-100">News</a></li>
            <li><a href="/contact" className="hover:opacity-100">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-8">
          <h3 className="text-sm font-medium uppercase tracking-wider opacity-40">Socials</h3>
          <ul className="text-lg font-light space-y-2 opacity-80">
            <li><a href="#" className="hover:opacity-100">Instagram</a></li>
            <li><a href="#" className="hover:opacity-100">Behance</a></li>
            <li><a href="#" className="hover:opacity-100">Dribbble</a></li>
            <li><a href="#" className="hover:opacity-100">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[80vw] md:w-[50vw] h-full pointer-events-none opacity-20">
        <video
          src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </footer>
  );
}
