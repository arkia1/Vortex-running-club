"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
        isScrolled
          ? "bg-gray-800/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap gap-8 text-white justify-center md:justify-center">
          <li>
            <Link href="/" className="hover:scale-105 transition-transform">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:scale-105 transition-transform"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              href="#blogs"
              className="hover:scale-105 transition-transform"
            >
              Blogs
            </Link>
          </li> */}
          <li>
            <Link
              href="#contact"
              className="hover:scale-105 transition-transform"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
