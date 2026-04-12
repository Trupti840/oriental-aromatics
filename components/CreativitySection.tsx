"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CreativitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="section-padding py-32 bg-gradient-to-br from-oriental-cream to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-oriental-dark mb-8 leading-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          CREATIVITY
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Where science meets art to create sensory experiences that captivate
          and inspire
        </motion.p>
      </div>
    </section>
  );
};

export default CreativitySection;
