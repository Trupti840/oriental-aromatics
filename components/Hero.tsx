"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Desktop Image */}
        <Image
          src="/images/hero.jpg"
          alt="Luxury fragrance"
          fill
          priority
          className="hidden md:block object-cover"
        />

        {/* Mobile Image */}
        <Image
          src="/images/hero-mob.png"
          alt="Luxury fragrance mobile"
          fill
          priority
          className="block md:hidden object-cover"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center md:ml-20 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            Crafting Sensory <br /> Experiences
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            Fragrances, flavours, and aroma chemicals designed to inspire
            <br className="hidden md:block" />
            emotions and elevate everyday experiences.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                const section = document.getElementById("explore-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-800 hover:scale-105 transition-all duration-300"
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