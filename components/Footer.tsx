import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-oriental-dark text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-oriental-gold rounded-full flex items-center justify-center">
              <span className="text-oriental-dark font-bold text-lg">SG</span>
            </div>
            <h3 className="text-2xl font-display font-bold">
              SG FRAGRANCE HOUSE
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
            Creators of exceptional fragrances, flavours, and aroma chemicals
            that inspire emotions and sensory delight.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-oriental-gold hover:text-oriental-dark transition-all"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-oriental-gold hover:text-oriental-dark transition-all"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-oriental-gold hover:text-oriental-dark transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl">
            <Mail className="w-6 h-6" />
            <span className="text-lg">sgfragrance@hotmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
