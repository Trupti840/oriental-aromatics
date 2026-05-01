import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-[#e5e5e5] pt-10 pb-0 px-4 md:px-8 lg:px-16">
      <div className="w-full pl-0 pr-[20px] md:pr-[40px] grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs md:text-sm">
                SG
              </span>
            </div>
            <h3 className="text-lg font-bold">SG FRAGRANCE HOUSE</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Premium fragrances crafted to elevate your identity and leave a
            lasting impression.
          </p>

          <div className="flex space-x-2">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-green-700">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/" className="hover:text-green-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-green-700 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#explore-section"
                className="hover:text-green-700 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-green-700 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-green-700">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms" className="hover:text-green-700">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-green-700">
            Our Products
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="#" className="hover:text-green-700 transition-colors">
                Fine Fragrances
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-700 transition-colors">
                Air Care
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-700 transition-colors">
                Personal Care
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-700 transition-colors">
                Home Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-green-700">
            Contact
          </h4>

          <div className="space-y-3 text-gray-600 text-sm">
            <div className="flex items-start space-x-2 transition-colors">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span className="hover:text-green-700">
                381/A NARROTTAM WADI, ROOM N: 14-A, 1ST FLOOR KALBADEVI ROAD,
                MUMBAI-400002, MAHARASHTRA, CODE: 27
              </span>
            </div>

            <div className="flex items-center space-x-2 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="hover:text-green-700">+91 8080113377</span>
            </div>

            <div className="flex items-center space-x-2 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="hover:text-green-700">
                sgfragrance@hotmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4 pb-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} SG Fragrance House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
