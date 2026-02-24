import { motion } from "motion/react";

export default function FeaturedArticles() {
  return (
    <section className="py-24 md:py-48 px-8 md:px-14 bg-dark-grey text-white overflow-hidden">
      <div className="relative h-[60vh] md:h-[80vh] mb-24">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] md:w-[25vw] aspect-[3/4] z-10"
        >
          <img
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt="Article 1"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-[10%] top-[20%] w-[30vw] md:w-[20vw] aspect-video"
        >
          <video
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-[15%] top-[10%] w-[20vw] md:w-[12vw] aspect-[2/3]"
        >
          <img
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt="Article 3"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-[15%] bottom-[10%] w-[30vw] md:w-[22vw] aspect-video"
        >
          <img
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt="Article 4"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-[10%] bottom-[15%] w-[30vw] md:w-[20vw] aspect-square"
        >
          <video
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">In the media</span>
        </div>

        <h2 className="text-[16vw] md:text-[10vw] font-light leading-none tracking-tighter mb-12">
          Spread <br /> the News
        </h2>

        <p className="max-w-md mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
          Find out more about our work on these leading design and technology platforms.
        </p>

        <div className="flex justify-center">
          <a href="/news" className="group flex items-center gap-4 border-b border-white/20 pb-2 hover:border-white transition-colors">
            <div className="relative w-10 h-10 rounded-full border border-white flex items-center justify-center overflow-hidden">
              <motion.div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              <svg viewBox="0 0 11 10" fill="none" className="w-3 h-3 relative z-10 group-hover:text-dark-grey transition-colors">
                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg font-light">Browse all news</span>
          </a>
        </div>
      </div>
    </section>
  );
}
