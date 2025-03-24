"use client";

import { motion } from "motion/react";

export default function LandingPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/runners.jpg')", // Replace with your image path
        }}
      ></div>

      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white"
      >
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
          Explore our commynity and club lets get started!
        </motion.p>
      </motion.div>
    </main>
  );
}
