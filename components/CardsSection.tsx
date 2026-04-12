"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Investor Relations",
    desc: "Latest financial reports and investor information",
    image: "/images/investors.jpg",
    href: "#investors",
  },
  {
    title: "Careers",
    desc: "Join our team of passionate innovators",
    image: "/images/careers.jpg",
    href: "#careers",
  },
  {
    title: "CSR",
    desc: "Corporate social responsibility initiatives",
    image: "/images/csr.jpg",
    href: "#csr",
  },
];

const CardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="section-padding py-24 bg-gradient-to-b from-white to-oriental-cream"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative h-80 rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="relative h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-oriental-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
