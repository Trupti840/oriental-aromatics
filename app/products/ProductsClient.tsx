"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const sections = [
  {
    id: "fine-fragrances",
    title: "Fine Fragrances",
    image: "/images/products/frangrance_product.png",
    desc: "Our fine fragrances embody the art of perfumery—crafted for elegance, long-lasting performance, and unforgettable impressions.",
    items: ["Spray Perfumes", "Roll-ons / Attars", "Body Mists"],
  },
  {
    id: "air-care",
    title: "Air Care",
    image: "/images/aircare.jpg",
    desc: "Transform your surroundings with fragrances designed to create a soothing and refreshing ambiance.",
    items: ["Candles", "Reed Diffusers", "Incense Sticks", "Bakhoor"],
  },
  {
    id: "personal-care",
    title: "Personal Care",
    image: "/images/personalcare.jpg",
    desc: "Gentle yet luxurious products crafted for daily self-care with a signature fragrance touch.",
    items: ["Cosmetics", "Skin Care", "Hair Care", "Beauty Soaps"],
  },
  {
    id: "home-care",
    title: "Home Care",
    image: "/images/homecare.jpg",
    desc: "Make everyday cleaning refreshing with products that combine performance and fragrance.",
    items: ["Laundry Care", "Floor Cleaners", "Bathroom Care", "Handwash"],
  },
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (!section) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(section);

      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      el.classList.add("active-section");

      setTimeout(() => {
        el.classList.remove("active-section");
      }, 2000);
    }, 400);

    return () => clearTimeout(timer);
  }, [section]);

  return (
    <div className="bg-gradient-to-br from-[#f7fdf9] via-white to-[#eef7f1] min-h-screen">
      <Navbar />

      <main className="pt-28 pb-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900"
          >
            Our Products
          </motion.h1>

          <p className="mt-6 text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Discover a curated collection designed to elevate your everyday
            lifestyle with elegance, fragrance, and purpose.
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.id}
              id={sec.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
                <img
                  src={sec.image}
                  className="w-full h-[380px] md:h-[480px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                  <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                    {sec.title}
                  </h2>

                  <p className="max-w-xl text-gray-200 mb-6 leading-relaxed">
                    {sec.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {sec.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -inset-1 bg-green-300/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}