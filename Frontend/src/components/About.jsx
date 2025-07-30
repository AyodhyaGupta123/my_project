import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          About <span className="text-green-500">Us</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg"
        >
          At{" "}
          <span className="text-green-400 font-semibold">
            X-mart Solutions
          </span>
          , we specialize in creating modern web, mobile, and cloud-based
          applications. Our team of experienced developers and designers help
          businesses scale with secure, high-performance, and user-friendly
          solutions that stand out.
        </motion.p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto px-4">
          {[
            {
              title: "10+ Years Experience",
              desc: "Trusted by leading businesses worldwide.",
            },
            {
              title: "50+ Successful Projects",
              desc: "From startups to enterprise-grade solutions.",
            },
            {
              title: "Expert Team",
              desc: "Designers, Developers & Cloud Architects.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
