import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8 relative">
      {/* Top Section */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-between justify-between md:text-left px-6">
        {/* Brand Info */}
        <div className="flex flex-col mx-auto">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            X-IT <span className="text-white">Solutions</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Building next-gen websites, mobile apps,
            <br /> AI, and e-commerce solutions to help <br /> your business
            grow digitally.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6 text-lg">
            <a
              href="https://facebook.com"
              className="p-2 rounded-full transition"
              style={{ backgroundColor: "#1877F2", color: "white" }}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 rounded-full transition"
              style={{ backgroundColor: "#1DA1F2", color: "white" }}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="p-2 rounded-full transition"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                color: "white",
              }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 rounded-full transition"
              style={{ backgroundColor: "#0A66C2", color: "white" }}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              className="p-2 rounded-full transition"
              style={{ backgroundColor: "#24292e", color: "white" }}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col mx-auto">
          <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-green-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="flex flex-col mx-auto">
          <h3 className="text-lg font-semibold text-white mb-5">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a href="#terms" className="hover:text-green-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-green-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#refund" className="hover:text-green-400 transition">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6"></div>

      {/* Bottom Section */}
      <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} X-mart Solutions. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
