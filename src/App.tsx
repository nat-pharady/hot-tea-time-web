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
import Marketplace from "./components/Marketplace";
import BrewYourOwn from "./components/BrewYourOwn";
import Membership from "./components/Membership";
import Newsletter from "./components/Newsletter";
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
      <Marketplace />
      <BrewYourOwn />
      <Membership />
      <Newsletter />
      <Footer />
    </main>
  );
}

