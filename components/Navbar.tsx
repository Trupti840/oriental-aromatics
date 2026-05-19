"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain contrast-125"
          />

          <h1 className="text-sm md:text-base font-semibold tracking-widest text-black">
            SG FRAGRANCE HOUSE
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-sm text-black hover:text-green-700">
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-black hover:text-green-700"
          >
            About
          </Link>

          <Link
            href="/products"
            className="text-sm text-black hover:text-green-700"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="text-sm text-black hover:text-green-700"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
