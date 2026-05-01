"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
