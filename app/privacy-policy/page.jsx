import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 md:px-16 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-6">
            At SG Fragrance House, we respect your privacy and are committed to
            protecting your personal information.
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information such as your name, email
                address, phone number, and message when you fill out our contact
                form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to respond to inquiries, provide
                customer support, and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                3. Data Protection
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal data from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell or share your personal information with third
                parties except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                5. Cookies
              </h2>
              <p>
                Our website may use cookies to enhance user experience and
                analyze website traffic.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal
                information by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at sgfragrance@hotmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
