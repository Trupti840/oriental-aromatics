 "use client";
 
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 
 export default function FAQPage() {
   return (
     <div className="flex flex-col min-h-screen">
       <Navbar />
 
       <main className="flex-grow px-6 md:px-16 py-24 bg-white">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black">
             Frequently Asked Questions
           </h1>
 
           <p className="text-gray-600 mb-10">
             Find answers to common questions about our products, services, and processes.
           </p>
 
           <div className="space-y-8 text-gray-700 leading-relaxed">
 
             <section>
               <h2 className="text-xl font-semibold text-green-700 mb-2">
                 What industries do you serve?
               </h2>
               <p>
                 We cater to fine fragrance, air care, personal care, home care,
                 wellness, and incense industries.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-green-700 mb-2">
                 Do you offer customized fragrances?
               </h2>
               <p>
                 Yes, all our fragrances are tailored based on your product
                 application, target market, and olfactive brief.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-green-700 mb-2">
                 Can we receive fragrance samples before placing a bulk order?
               </h2>
               <p>
                 Absolutely. We offer standard, category-based samples to help
                 you evaluate before making a decision.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-green-700 mb-2">
                 Are your fragrances IFRA compliant?
               </h2>
               <p>
                 Yes, we ensure compliance with IFRA and other regulatory
                 standards as per client requirements.
               </p>
             </section>
 
             <section>
               <h2 className="text-xl font-semibold text-green-700 mb-2">
                 Do you export internationally?
               </h2>
               <p>
                 Yes, we serve a wide range of global clients and have extensive
                 experience in fulfilling international fragrance requirements.
               </p>
             </section>
 
           </div>
         </div>
       </main>
 
       <Footer />
     </div>
   );
 }