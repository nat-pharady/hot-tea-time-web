import { motion } from "motion/react";

const projects = [
  {
    title: "Ottografie",
    subtitle: "Seamless Photographic Journey",
    image: "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    video: "https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee",
  },
  {
    title: "Amaterasu",
    subtitle: "Frontier Health Innovation",
    image: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
    video: "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
  },
  {
    title: "Columbia Pictures",
    subtitle: "Celebrating a Century of Cinema",
    image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
  },
  {
    title: "Cambium",
    subtitle: "Pioneering Sustainable Solutions",
    image: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
    video: "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 md:py-48 px-8 md:px-14 bg-white text-dark-grey">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-24">
        <div className="mb-12 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Featured Projects</span>
          </div>
          <h2 className="text-[16vw] md:text-[10vw] font-light leading-none tracking-tighter">Work</h2>
        </div>
        <div className="max-w-xs md:mt-32">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`md:col-span-6 group cursor-pointer ${
              index === 0 ? "md:col-start-2 md:col-span-6" : 
              index === 1 ? "md:col-start-9 md:col-span-4 md:mt-64" :
              index === 2 ? "md:col-start-6 md:col-span-5 md:mt-32" :
              "md:col-start-2 md:col-span-3 md:-mt-24"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <video
                src={project.video}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-1">{project.title}</h3>
              <p className="text-sm md:text-base font-light opacity-60">{project.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 flex justify-center">
        <a href="/work" className="group flex items-center gap-4 border-b border-dark-grey/20 pb-2 hover:border-dark-grey transition-colors">
          <div className="relative w-10 h-10 rounded-full border border-dark-grey flex items-center justify-center overflow-hidden">
            <motion.div className="absolute inset-0 bg-dark-grey scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
            <svg viewBox="0 0 11 10" fill="none" className="w-3 h-3 relative z-10 group-hover:text-white transition-colors">
              <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-lg font-light">Browse all work</span>
        </a>
      </div>
    </section>
  );
}
