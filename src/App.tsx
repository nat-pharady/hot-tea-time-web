/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Showreel from "./components/Showreel";
import FeaturedArticles from "./components/FeaturedArticles";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-white selection:bg-dark-grey selection:text-white">
      <Preloader />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Showreel />
      <FeaturedArticles />
      <Footer />
    </main>
  );
}

