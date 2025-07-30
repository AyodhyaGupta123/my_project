import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-green-600 shadow-lg z-50"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-green-400 transition"
        >
          X-mart <span className="text-green-500">Solutions</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg text-gray-300">
          <li>
            <Link
              to="/about"
              className="hover:text-green-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300">
              Services
              <ChevronDown
                size={16}
                className="transition-transform group-hover:rotate-180"
              />
            </button>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-2 w-56 bg-gray-900 text-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link
                  to="/services/app-development"
                  className="block px-4 py-2 hover:bg-green-500 hover:text-black rounded-t-md"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="block px-4 py-2 hover:bg-green-500 hover:text-black"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-ml"
                  className="block px-4 py-2 hover:bg-green-500 hover:text-black"
                >
                  AI / ML
                </Link>
              </li>
              <li>
                <Link
                  to="/services/api-integration"
                  className="block px-4 py-2 hover:bg-green-500 hover:text-black"
                >
                  API Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/redevelop-website"
                  className="block px-4 py-2 hover:bg-green-500 hover:text-black"
                >
                  Re-develop Website
                </Link>
              </li>
              <li>
                <Link
                  to="/services/domain-hosting"
                  className="block px-4 py-2 hover:bg-green-500 hover:text-black rounded-b-md"
                >
                  Domain & Hosting
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/projects"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:inline-block bg-green-600 px-5 py-2 rounded-full text-black font-bold hover:bg-green-500 transition-transform hover:scale-105">
          Try Demo
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-black/95 backdrop-blur-lg overflow-hidden"
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              Contact
            </Link>
          </li>
          <button className="bg-green-600 px-5 py-2 rounded-full text-black font-bold hover:bg-green-500">
            Try Demo
          </button>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
