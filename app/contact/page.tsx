import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-center mb-8">
            We would love to hear from you! Please fill out the form below to
            get in touch.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
