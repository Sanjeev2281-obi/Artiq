import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

function Services() {
  const services = [
    "We create premium interior and exterior artworks like decors, murals, relief, sculptures and pottery.",
    "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life – and beyond.",
    "We also offer creative workshops, certified capstone programs and exciting collaboration opportunities for artists and art lovers alike.",
    "From our studio to the world - we export custom and curated art pieces worldwide with trusted export logistics and premium care. Wherever you are, Artiq brings soulful creations to your doorstep."
  ];

  return (
    <div id="services" className="mt-[30px] px-6 md:px-16">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        custom={0}
        className="md:flex md:items-start md:justify-between"
      >
        {/* Left - Heading */}
        <div className="w-full md:w-[40%]">
          <p className="text-5xl font-bold text-gray-400 flex">What We</p>
          <p className="ml-0 md:ml-[190px] text-gray-400 mt-2">Offer</p>
        </div>

        {/* Desktop Content */}
        <div className="hidden md:block w-full md:w-[55%] max-w-xl">
          {services.map((text, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-4 rounded-xl mt-4 hover:scale-105 hover:shadow-lg transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
              custom={index * 0.3 + 0.2}
            >
              <p className="mt-2 text-gray-700">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile View - Vertical Line */}
      <div className="relative md:hidden mt-10">
        {/* Vertical Line */}
        <motion.div
          className="absolute left-3 top-0 w-[2px] bg-gray-300"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>

        <div className="ml-10 space-y-10">
          {services.map((text, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
              custom={index * 0.3 + 0.2}
            >
              {/* Dot - now black */}
              <motion.div
                className="absolute -left-[37px] w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.2, duration: 0.4 }}
              ></motion.div>

              {/* Text */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <p className="text-gray-700">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
