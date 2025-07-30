import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "X-mart Solutions built our e-commerce platform and we doubled our sales in 3 months!",
    company: "ShopMart",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    review:
      "Amazing UI and secure backend. Their cloud ERP system changed our workflow completely!",
    company: "TechCorp",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Lee",
    review:
      "The AI chatbot they built improved our customer service efficiency by 70%.",
    company: "HelpDeskPro",
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          What <span className="text-green-400">Clients Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        >
          We pride ourselves on delivering world-class solutions that drive real business results.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-green-500/30 transition-all group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-green-500 text-3xl opacity-20 group-hover:opacity-40 transition">
                ❝
              </div>

              {/* Review Text */}
              <p className="text-gray-300 italic mb-6">
                "{t.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-400 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <span className="text-green-400 text-sm">{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
