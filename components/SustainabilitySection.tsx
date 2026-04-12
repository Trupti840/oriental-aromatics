"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sustainability" ref={ref} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black text-oriental-dark">
            Sustainability
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Committed to responsible manufacturing practices, environmental
            stewardship, and sustainable sourcing. Building a greener future
            through innovation and responsibility.
          </p>
          <div className="flex space-x-6">
            <div className="w-3 h-3 bg-oriental-gold rounded-full animate-pulse" />
            <div
              className="w-3 h-3 bg-oriental-gold rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-3 h-3 bg-oriental-gold rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 bg-gradient-to-r from-oriental-gold/20 to-transparent rounded-3xl p-12"
        >
          <div className="absolute inset-0 bg-oriental-gold/5 rounded-3xl" />
          <div className="relative z-10 space-y-4">
            <h3 className="text-3xl font-bold text-oriental-dark">
              Green Chemistry
            </h3>
            <p className="text-lg text-gray-700">
              Sustainable processes from raw materials to finished products
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
