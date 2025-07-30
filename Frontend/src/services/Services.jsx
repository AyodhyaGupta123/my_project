import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaChartLine, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-green-500 text-4xl" />,
    title: "Web Development",
    desc: "Modern, scalable websites tailored to your goals.",
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-4xl" />,
    title: "Mobile Apps",
    desc: "iOS & Android apps with beautiful, functional design.",
  },
  {
    icon: <FaChartLine className="text-green-500 text-4xl" />,
    title: "SEO & Marketing",
    desc: "Rank higher. Get found. Grow organic traffic.",
  },
  {
    icon: <FaPalette className="text-green-500 text-4xl" />,
    title: "Branding & UI/UX",
    desc: "Visually striking design that connects and converts.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-center py-20 overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-white"
        >
          Our <span className="text-green-500">Services</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        >
          Everything you need to scale your digital presence — from first design to final launch.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-zinc-900 p-8 rounded-xl shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all cursor-pointer overflow-hidden"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-all"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
