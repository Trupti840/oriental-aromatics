"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Luxury fragrance"
          className="w-full h-full object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center ml-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight text-center">
            Crafting Sensory <br /> Experiences
          </h1>

          {/* Short Description */}
          <p className="mt-5 text-lg text-gray-700 leading-relaxed text-center">
            Fragrances, flavours, and aroma chemicals designed to inspire
            <br/>emotions and elevate everyday experiences.
          </p>

          {/* Centered Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                const section = document.getElementById("explore-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 hover:scale-105 transition-all duration-300"
            >
              Explore Collection
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;