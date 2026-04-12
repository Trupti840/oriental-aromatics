"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    title: "Fragrance",
    description:
      "Premium fragrance compounds for personal care, home care and fine fragrances.",
    image: "/images/fragrance.jpg",
  },
  {
    title: "Flavour",
    description:
      "Natural and synthetic flavours for food and beverage applications.",
    image: "/images/flavour.jpg",
  },
  {
    title: "Aroma Chemicals",
    description:
      "High purity aroma chemicals manufactured to global standards.",
    image: "/images/aroma-chemicals.jpg",
  },
  {
    title: "Camphor",
    description:
      "Synthetic and natural camphor for pharmaceutical and industrial use.",
    image: "/images/camphor.jpg",
  },
];

const ProductGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="products"
      className="section-padding bg-gradient-to-b from-oriental-cream to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-oriental-dark mb-6">
            Our Products
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            World-class aroma and flavour solutions crafted with precision and
            passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-2/3">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-3xl md:text-4xl font-black text-white group-hover:text-oriental-gold transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/90 mt-2 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
