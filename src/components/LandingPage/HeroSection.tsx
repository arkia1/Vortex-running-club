"use client";

import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/runners.jpg')", // Replace with your image path
        }}
      ></div>

      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-center text-white"
      >
        <motion.img src="/vortex-w.png" alt="Vortex Logo" initial={{ opacity: 0, y: 20 }} animate={{opacity:1, y: 0}} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="w-34 h-34 mb-4 rotate-180 mx-auto"/>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl font-bold"
        >
          Welcome to the <span className="text-blue-400">Vortex</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg mt-4"
        >
          Explore our community and club lets get started!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
