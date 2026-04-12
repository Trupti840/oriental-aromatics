"use client";

import { useEffect, useState } from "react";

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
        <h1 className="text-xl font-bold">Oriental</h1>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-oriental-gold">
            Home
          </a>
          <a href="#" className="hover:text-oriental-gold">
            About
          </a>
          <a href="#" className="hover:text-oriental-gold">
            Products
          </a>
          <a href="#" className="hover:text-oriental-gold">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
