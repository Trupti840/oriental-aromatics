"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // if you're using Next.js

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Image
  src="/images/logo.png"  // correct path
  alt="Logo"
  width={40}
  height={40}
/>
          <h1 className="text-xl font-bold">SG FRAGRANCE HOUSE</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-oriental-gold">Home</a>
          <a href="#" className="hover:text-oriental-gold">About</a>
          <a href="#" className="hover:text-oriental-gold">Products</a>
          <a href="#" className="hover:text-oriental-gold">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;