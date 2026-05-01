"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const categories = [
  {
    id: "fine-fragrances",
    title: "Fine Fragrances",
    desc: "Luxury perfumes crafted with premium ingredients.",
    image: "/images/products/frangrance_product.png",
  },
  {
    id: "air-care",
    title: "Air Care",
    desc: "Refreshing air solutions to elevate your space.",
    image: "/images/products/aircare_product.jpg",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    desc: "Daily essentials with signature fragrance touch.",
    image: "/images/products/personal_product.jpg",
  },
  {
    id: "home-care",
    title: "Home Care",
    desc: "Smart cleaning with premium fragrance blends.",
    image: "/images/products/homecare_product.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight"
          >
            Our Collection
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Crafted elegance. Designed to elevate your senses.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <Card3D key={cat.id} cat={cat} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Card3D({ cat, index }) {
  const [flipped, setFlipped] = useState(false);
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    if (flipped) return;

    const rect = tiltRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    tiltRef.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const resetTilt = () => {
    tiltRef.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative h-[420px] perspective"
    >
      {/* OUTER → TILT */}
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="w-full h-full transition-transform duration-300 ease-out"
      >
        {/* INNER → FLIP */}
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{ transformOrigin: "center" }}
        >
          {/* FRONT */}
          <div className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl">
            <img src={cat.image} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-3xl font-semibold">{cat.title}</h2>

              <button
                onClick={() => setFlipped(true)}
                className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-green-200 transition"
              >
                Explore →
              </button>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-3xl shadow-2xl flex flex-col justify-center items-center p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>

            <p className="text-gray-600 mb-6">{cat.desc}</p>

            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-800 transition">
              View Products
            </button>

            <button
              onClick={() => setFlipped(false)}
              className="mt-4 text-sm text-gray-500 underline"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
