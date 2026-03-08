import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Art & Installations",
    text: "We create premium interior and exterior artworks like decors, murals, relief, sculptures and pottery.",
  },
  {
    num: "02",
    title: "Custom Commissions",
    text: "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life – and beyond.",
  },
  {
    num: "03",
    title: "Workshops & Programs",
    text: "We offer creative workshops, certified capstone programs and exciting collaboration opportunities for artists and art lovers alike.",
  },
  {
    num: "04",
    title: "Worldwide Export",
    text: "From our studio to the world — we export custom and curated art pieces worldwide with trusted logistics and premium care.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#fafafa] px-6 md:px-16 py-24 font-[Outfit]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            What We <span className="text-gray-300">Offer</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ backgroundColor: "#f0f0f0" }}
              className="bg-[#fafafa] p-10 md:p-12 flex flex-col justify-between min-h-56 cursor-default group transition-colors duration-300"
            >
              {/* Top row */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs text-gray-300 tracking-widest font-light">
                  {item.num}
                </span>
                {/* Animated arrow */}
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </div>

              {/* Bottom content */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.text}
                </p>
              </div>

              {/* Hover underline */}
              <motion.div
                className="mt-8 h-px bg-gray-900 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;