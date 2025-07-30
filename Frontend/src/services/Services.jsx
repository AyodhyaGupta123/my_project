import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        alt="Web Development"
        className="w-16 h-16"
      />
    ),
    title: "Web Development",
    desc: "Modern, scalable websites tailored to your goals.",
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
        alt="Mobile Apps"
        className="w-16 h-16"
      />
    ),
    title: "Mobile Apps",
    desc: "iOS & Android apps with beautiful, functional design.",
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
        alt="AI ML"
        className="w-16 h-16"
      />
    ),
    title: "AI / ML",
    desc: "Leverage AI to automate, predict and grow smarter.",
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
        alt="Branding"
        className="w-16 h-16"
      />
    ),
    title: "Branding & UI/UX",
    desc: "Visually striking design that connects and converts.",
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
        alt="API Integration"
        className="w-16 h-16"
      />
    ),
    title: "API Integration",
    desc: "Seamless integrations with third-party services & APIs.",
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png"
        alt="Hosting"
        className="w-16 h-16"
      />
    ),
    title: "Domain & Hosting",
    desc: "Fast & secure hosting solutions with full domain support.",
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6 md:px-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative rounded-xl shadow-lg overflow-hidden 
              bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700
              hover:border-green-500 hover:shadow-green-400/40 hover:scale-105 transition-all duration-300"
            >
              {/* Gradient overlay animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-green-500/20 via-transparent to-green-400/20 animate-pulse"></div>

              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
