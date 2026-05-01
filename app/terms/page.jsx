import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 md:px-16 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 mb-6">
            By accessing and using our website, you agree to the following terms
            and conditions.
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                1. Use of Website
              </h2>
              <p>
                You agree to use this website for lawful purposes only and not
                to engage in any activity that disrupts or interferes with the
                website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                2. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, and
                branding, is the property of SG Fragrance House and may not be
                used without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                3. Product Information
              </h2>
              <p>
                We strive to ensure product details are accurate, but we do not
                guarantee completeness or reliability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                We are not responsible for any damages arising from the use of
                our website or products.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these terms at any time without
                prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                6. Contact
              </h2>
              <p>
                For any questions regarding these terms, please contact us at
                sgfragrance@hotmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
