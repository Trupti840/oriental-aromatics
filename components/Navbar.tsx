"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain contrast-125"
          />

          <h1 className="text-sm md:text-base font-semibold tracking-widest text-black">
            SG FRAGRANCE HOUSE
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10">
          {["Home", "About", "Products", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm tracking-wide text-black hover:text-green-700 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;