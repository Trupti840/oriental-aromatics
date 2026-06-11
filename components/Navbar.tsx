"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "800"],
});


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
          <img src="/images/logo.png" alt="logo" className="w-12 h-12 md:w-14 md:h-14 object-contain"/>
          <h1 className={`${cinzel.className} text-lg md:text-2xl font-bold tracking-[0.12em] text-[#111111]`}>
            SG FRAGRANCE HOUSE
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {[
            { name: "HOME", href: "/" },
            { name: "ABOUT", href: "/about" },
            { name: "PRODUCTS", href: "/products" },
            { name: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[13px] font-medium tracking-[0.12em] text-[#111111] transition-all duration-300 hover:text-[#C9A227] after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
