import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // smooth stagger for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

function Services() {
  const services = [
    "We create premium interior and exterior artworks like decors, murals, relief, sculptures and pottery.",
    "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life – and beyond.",
    "We also offer creative workshops, certified capstone programs and exciting collaboration opportunities for artists and art lovers alike.",
    "From our studio to the world - we export custom and curated art pieces worldwide with trusted export logistics and premium care. Wherever you are, Artiq brings soulful creations to your doorstep."
  ];

  return (
    <section id="services" className="mt-16 px-6 md:px-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-300">What We</h2>
        <h2 className="text-5xl font-bold text-gray-400 mt-2">Offer</h2>
      </motion.div>

      {/* Services Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((text, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-400 cursor-default"
            variants={cardVariants}
          >
            <p className="text-black-400 text-lg md:text-base">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
