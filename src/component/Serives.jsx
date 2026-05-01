// import React from "react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   },
// };

// function Services() {
//   const services = [
//     "We create premium interior and exterior artworks like decors, murals, relief, sculptures and pottery.",
//     "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life – and beyond.",
//     "We also offer creative workshops, certified capstone programs and exciting collaboration opportunities for artists and art lovers alike.",
//     "From our studio to the world - we export custom and curated art pieces worldwide with trusted export logistics and premium care. Wherever you are, Artiq brings soulful creations to your doorstep."
//   ];

//   return (
//     <section id="services" className="mt-16 px-6 md:px-16">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-center md:text-left mb-12"
//       >
//         <h2 className="text-5xl font-bold text-gray-300">What We</h2>
//         <h2 className="text-5xl font-bold text-gray-400 mt-2">Offer</h2>
//       </motion.div>

//       {/* Services Cards */}
      
//       <motion.div
//   variants={{
//     hidden: {},
//     show: {
//       transition: { staggerChildren: 0.15 },
//     },
//   }}
//   initial="hidden"
//   whileInView="show"
//   viewport={{ once: true }}
//   className="grid grid-cols-1 md:grid-cols-2 gap-8"
// >
//   {services.map((text, index) => (
//     <motion.div
//       key={index}
//       variants={{
//         hidden: { opacity: 0, y: 50, scale: 0.95 },
//         show: { opacity: 1, y: 0, scale: 1 },
//       }}
//       transition={{ duration: 0.6 }}
//       className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition hover:scale-[1.02]"
//     >
//       <p className="text-gray-700">{text}</p>
//     </motion.div>
//   ))}
// </motion.div>
//     </section>
//   );
// }

// export default Services;
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Artworks & Installations",
    desc: "We create premium interior and exterior artworks — decors, murals, relief, sculptures and pottery.",
  },
  {
    number: "02",
    title: "Custom Commissions",
    desc: "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life — and beyond.",
  },
  {
    number: "03",
    title: "Workshops & Programs",
    desc: "Creative workshops, certified capstone programs and collaboration opportunities for artists and art lovers alike.",
  },
  {
    number: "04",
    title: "Worldwide Export",
    desc: "From our studio to the world — we export custom and curated art pieces with trusted logistics and premium care.",
  },
];

export default function Services() {
  return (
    <section id="services" className=" bg-transparent px-6 md:px-16 py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4">
            What we do
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
            What We<br />Offer
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-10 group hover:bg-gray-900 transition-colors duration-500"
            >
              <p className="text-xs text-gray-300 tracking-widest mb-6 group-hover:text-gray-600 transition-colors duration-500">
                {s.number}
              </p>
              <h3 className="text-base font-medium text-gray-800 mb-3 group-hover:text-white transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}