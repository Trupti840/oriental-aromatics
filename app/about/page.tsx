"use client";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
//  import FeaturesSection from "@/components/FeaturesSection";
 import { motion, useScroll, useTransform } from "framer-motion";
 import { useRef } from "react";
 import Image from "next/image";
 export default function AboutPage() {
   const ref = useRef(null);
   // Smooth parallax (reduced for better UX)
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["start end", "end start"],
   });
   const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);
   return (
     <div className="bg-white text-black overflow-hidden" id="about">
       <Navbar />
       {/* HERO SECTION */}
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
             We Create Sensory Stories
           </h1>
 
           {/* Description */}
           <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
             Blending science, creativity, and innovation
             <br className="hidden md:block" />
             to craft unforgettable fragrance and flavour experiences.
           </p>
         </motion.div>
       </div>
     </section>
       {/* SECTION 1 */}
       <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-20">
         <motion.div
           className="overflow-hidden rounded-2xl"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
         >
           <img
             src="/images/fragrance.jpg"
             className="w-full h-[400px] object-cover"
           />
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, x: 60 }}
           whileInView={{ opacity: 1, x: 0 }}
         >
           <h2 className="text-3xl md:text-4xl font-bold mb-6">
             Crafted with Passion
           </h2>
           <p className="text-gray-600 leading-relaxed">
             We blend innovation with artistry to create fragrances and flavours
             that connect deeply with human emotions. Every product is a result
             of precision, creativity, and years of expertise.
           </p>
         </motion.div>
       </section>
 
       {/* SECTION 2 */}
       <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-20 bg-gray-50">
         <motion.div
           className="order-2 md:order-1"
           initial={{ opacity: 0, x: -60 }}
           whileInView={{ opacity: 1, x: 0 }}
         >
           <h2 className="text-3xl md:text-4xl font-bold mb-6">
             Who We Are
           </h2>
           <p className="text-gray-600 leading-relaxed">
             Established since 2021, SG Fregrances, is a renowned manufacturer
               house in the line of perfumery and aromatic oils. Through
               innovative research, technology, development and collaboration, SG
               Fregrances has consistently delivered subtle fragrances for a
               gamut of industries across the world. Their expertise in aroma
               technology is reflected in the innovative and wide product variety
               and an ever growing market of loyal customers around the world.
           </p>
         </motion.div>
 
         <motion.div
           className="overflow-hidden rounded-2xl order-1 md:order-2"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
         >
           <img
             src="/images/hero2.jpg"
             className="w-full h-[400px] object-cover"
           />
         </motion.div>
       </section>
       {/* CTA */}
       <section className="py-20 text-center px-6">
         <motion.h3
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-3xl md:text-4xl font-bold"
         >
           Let's Build Something Amazing Together
         </motion.h3>
         <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           className="mt-8 px-8 py-4 bg-green-600 text-black rounded-full"
         >
           Contact Us
         </motion.button>
       </section>
       <Footer />
     </div>
   );
 }