"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 bg-white/5">
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
        <div className="absolute inset-0 bg-white/5"></div>
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[0.95]" style={{ fontFamily: "Times New Roman, serif" }}>
            Crafting Sensory <br /> Experiences
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-[#2A2A2A] leading-relaxed max-w-xl mx-auto md:mx-0" style={{ fontFamily: "Times New Roman, serif" }}>
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
              className="px-8 py-4 bg-[#1B5E20] text-white rounded-full font-medium shadow-lg hover:bg-[#154518] hover:-translate-y-1 transition-all duration-300">
              Explore Collection
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;