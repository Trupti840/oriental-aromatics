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
         <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"></div>
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
             A Legacy of Fragrance Excellence Since 1987
           </h1>
 
           {/* Description */}
            <p className="mt-6 text-base md:text-lg text-[#2A2A2A] leading-relaxed">
              Founded by Mukesh Wadera, SG Fragrance House has been crafting premium
              fragrance concentrates, perfume oils, and aroma solutions for over
              three decades, blending traditional expertise with modern innovation.
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
           <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#111111]">
            About SG Fragrance House
           </h2>
           <p className="text-gray-600 leading-relaxed">
            SG Fragrance House is a trusted name in fragrance manufacturing, specializing in high-quality concentrated perfumes, fragrance oils, and aroma solutions. Established in 1987 by Mukesh Wadera, the company has built a strong reputation for quality, consistency, and innovation in the world of perfumery. With decades of experience, we combine the art of traditional fragrance blending with modern techniques to create distinctive and long-lasting scent compositions for clients across diverse industries.
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
            What We Do
           </h2>
            <div className="text-lg text-gray-600 leading-8">
              <p>
                At SG Fragrance House, we develop and manufacture a wide range of
                premium fragrance concentrates tailored to different applications
                and industries.
              </p>

              <ul className="mt-6 space-y-2">
                <li>• Fine Perfume Concentrates</li>
                <li>• Attars & Perfume Oils</li>
                <li>• Cosmetic & Personal Care Fragrances</li>
                <li>• Soap & Detergent Fragrances</li>
                <li>• Home Fragrance Solutions</li>
                <li>• Custom Fragrance Development</li>
              </ul>

              <p className="mt-6">
                We work closely with brands to create signature fragrances that
                leave a lasting impression and strengthen product identity.
              </p>
            </div>
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

        <section className="py-24 px-6 md:px-16 bg-white">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#1B5E20] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Excellence in Every Fragrance
            </h2>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              With decades of expertise and innovative fragrance development,
              SG Fragrance House delivers premium fragrance solutions trusted by
              businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "35+ Years of Expertise",
                desc: "A legacy of excellence in fragrance creation since 1987.",
              },
              {
                title: "Custom Development",
                desc: "Tailor-made fragrance solutions crafted for your brand.",
              },
              {
                title: "Premium Quality",
                desc: "Carefully selected ingredients and rigorous quality control.",
              },
              {
                title: "Industry Solutions",
                desc: "Serving personal care, home care, and industrial sectors.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F6F0] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className="py-24 text-center px-6 bg-[#F5F9F4]">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1B5E20] font-semibold">
            Get In Touch
          </p>

          <h3 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Create Your Signature Fragrance
          </h3>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Partner with SG Fragrance House to develop premium fragrance
            solutions tailored to your business and customers.
          </p>

          <button
            className="mt-10 px-10 py-4 bg-[#1B5E20] text-white rounded-full shadow-lg hover:bg-[#154518] transition-all"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </section>
       <Footer />
     </div>
   );
 }