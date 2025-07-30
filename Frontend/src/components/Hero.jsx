import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1650&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90"></div>

      {/* Background animated glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        {/* Top Badge */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm border px-4 py-1 rounded-full text-green-400 border-green-500 inline-block mb-6 tracking-wide shadow-md shadow-green-500/20 bg-black/30 backdrop-blur-sm"
        >
          🚀 One-Stop Digital Solutions for Businesses
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg"
        >
          We Build{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            Websites, <span className="text-cyan-400">Apps & Brands</span>
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          From design to deployment, we help startups and businesses launch
          high-performing websites, mobile apps, and marketing campaigns — all
          under one roof.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-300">
            Get Free Proposal
          </button>
          <button className="border border-gray-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 bg-black/30 backdrop-blur-sm">
            Explore Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
