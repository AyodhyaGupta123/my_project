import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    image:
      "https://img.freepik.com/free-photo/online-shopping-concept_23-2148687785.jpg?w=900",
    desc: "A scalable, secure, and feature-rich online shopping platform with payment gateways and user analytics.",
  },
  {
    title: "AI Chatbot & Automation",
    category: "AI Solutions",
    image:
      "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124662.jpg?w=900",
    desc: "AI-powered chatbot with NLP to automate customer support and enhance user experience.",
  },
  {
    title: "Web App for Businesses",
    category: "Web Development",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901776.jpg?w=900",
    desc: "Modern, scalable web applications designed for startups and enterprises.",
  },
  {
    title: "Mobile App Solutions",
    category: "App Development",
    image:
      "https://img.freepik.com/free-photo/phone-with-colorful-app-icons_1232-1056.jpg?w=900",
    desc: "Native & cross-platform mobile applications with intuitive UI/UX.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
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
          Our <span className="text-green-400">Projects</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          From idea to deployment, we craft solutions for every digital
          challenge.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-green-500/30 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-green-500/80 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Details */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
