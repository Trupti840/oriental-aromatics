"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// import Hero from "@/components/Hero";
// import StorySection from "@/components/StorySection";
// import ProductGrid from "@/components/ProductGrid";
// import CreativitySection from "@/components/CreativitySection";
// import SustainabilitySection from "@/components/SustainabilitySection";
// import CardsSection from "@/components/CardsSection";
// import ContactForm from "@/components/ContactForm";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <StorySection
//         title="Fragrance"
//         description="Premium fragrance compounds that evoke emotion and create unforgettable sensory experiences across personal care, home care, and fine fragrance categories."
//         image="/images/fragrance.jpg"
//       />
//       <StorySection
//         title="Flavour"
//         description="Exceptional natural and synthetic flavours crafted for the food and beverage industry, delivering authentic taste profiles with consistency and quality."
//         image="/images/flavour.jpg"
//         reverse
//       />
//       <StorySection
//         title="Aroma Chemicals"
//         description="High-purity aroma chemicals manufactured to the highest global standards, serving as the foundation for exceptional fragrance and flavour creations."
//         image="/images/aroma-chemicals.jpg"
//       />
//       <StorySection
//         title="Camphor"
//         description="Premium synthetic and natural camphor products for pharmaceutical, industrial, and consumer applications, meeting the most stringent quality requirements."
//         image="/images/camphor.jpg"
//         reverse
//       />
//       <ProductGrid />
//       <CreativitySection />
//       <SustainabilitySection />
//       <CardsSection />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// }
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="explore-section1">
        <StorySection
          title="Fragrance"
          description="Crafted to inspire emotion and elevate everyday experiences, our premium fragrance compounds combine innovation with artistry to deliver long-lasting, memorable scents."
          image="/images/fragrance.jpg"
        />
      </div>
      <ProductGrid />
      <WhatsAppFloat />

      {/* etc... */}
      <Footer />
    </div>
  );
}
