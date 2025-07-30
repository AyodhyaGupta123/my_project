import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const text = `Hello X-mart Solutions,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    const phoneNumber = "+919682780369"; 

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-center overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          Get in <span className="text-green-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg"
        >
          Have a project in mind? Let's discuss how we can work together and build something great.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-green-400 text-lg font-semibold"
        >
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-400" /> +91 9682780369
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-400" /> support@xmartdev.com
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleWhatsApp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="relative col-span-1">
            <FaUser className="absolute left-4 top-4 text-green-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="relative col-span-1">
            <FaEnvelope className="absolute left-4 top-4 text-green-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="relative col-span-1 md:col-span-2">
            <FaPhoneAlt className="absolute left-4 top-4 text-green-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="relative col-span-1 md:col-span-2">
            <FaCommentDots className="absolute left-4 top-4 text-green-400" />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/40">
              Send via WhatsApp 🚀
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
