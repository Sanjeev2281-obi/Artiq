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
// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
    
//     title: "Artworks & Installations",
//     desc: "We create handcrafted premium interior and exterior artworks — decors, murals, relief, sculptures and pottery.",
//   },
//   {
//     title: "Custom Commissions",
//     desc: "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life — and beyond.",
//   },
//   {
   
//     title: "Workshops & Programs",
//     desc: "Creative workshops, certified capstone programs and collaboration opportunities for artists and art lovers alike.",
//   },
  
// ];

// export default function Services() {
//   return (
//     <section id="services" className=" bg-transparent px-6 md:px-16 py-24 bg-gray-50/60">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4">
//             What we do
//           </p>
//           <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
//             What We<br />Offer
//           </h2>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
//           {services.map((s, i) => (
//             <motion.div
//               key={s.number}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="bg-white p-10 group hover:bg-gray-900 transition-colors duration-500"
//             >
              
//               <h3 className="text-base font-medium text-gray-800 mb-3 group-hover:text-white transition-colors duration-500">
//                 {s.title}
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
//                 {s.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Artworks & Installations",
    desc: "We create handcrafted premium interior and exterior artworks — decors, murals, relief, sculptures and pottery.",
  },
  {
    title: "Custom Commissions",
    desc: "From elegant decor pieces to large-scale custom installations, we help you bring your vision to life — and beyond.",
  },
  {
    title: "Global Export",
    desc: "From our studio to the world — we export custom and curated art pieces with trusted logistics and premium care.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="px-10 md:px-20 py-28 bg-[#f8f8f7] font-[Outfit]">
      
      {/* Heading */}
      
      {/* Content Layout */}
      <div className="grid md:grid-cols-2 gap-20">
        
        {/* Left Big Statement */}
        <div className="flex flex-col justify-between">
   
   <h1 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
          What We <br /> Offer
        </h1>

  <div className="mt-20 hidden md:block h-[1px] w-20 bg-gray-300" />
</div>

        {/* Right Services */}
        <div className="flex flex-col gap-16">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-3 group-hover:tracking-wide transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                  <div className="mt-4 h-[1px] w-0 bg-gray-800 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-28 border-t border-gray-200" />
    </section>
  );
}