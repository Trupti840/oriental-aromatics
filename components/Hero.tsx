"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image (replace later with video if needed) */}
      <div className="absolute inset-0">
        <img
          src="/public/images/hero.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display font-bold leading-tight">
            Crafting Sensory <br /> Experiences
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Fragrances, flavours, and aroma chemicals designed to inspire
            emotions and elevate everyday experiences.
          </p>

          <button className="mt-8 px-8 py-4 bg-oriental-gold text-black font-semibold rounded-full hover:scale-105 transition-all">
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
