"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface StorySectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const StorySection = ({
  title,
  description,
  image,
  reverse = false,
}: StorySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className={`section-padding ${reverse ? "flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24" : "flex flex-col lg:flex-row items-center gap-12 lg:gap-24"}`}
    >
      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2 h-96 lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 lg:pr-12"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-oriental-dark leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          {description}
        </p>
        <motion.div
          className="w-24 h-1 bg-oriental-gold rounded-full"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </section>
  );
};

export default StorySection;
