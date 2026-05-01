// import React from 'react'
// import { useLocation } from "react-router-dom";
// import { useEffect } from 'react';
// import { motion } from "framer-motion";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
// function About() {

//   const { hash } = useLocation();
//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   return (
//     <div id="about-us" className="flex flex-col md:flex-row justify-between mt-7 ">
//       <div className="mt-10 mb-5 md:w-150 text-5xl font-bold text-gray-400 ml-4">
//         About Us
//       </div>
//       <div className="mt-5 p-3  text-gray-600 sm:mt-1.25 shadow-lg ">
//         <div className="mx-5">
//           <p className="my-2">Rooted in tradition, inspired by culture — our creations are expressions of artistic legacy.</p>
//           <p className="my-3 text-xl font-semibold">Want to shape your own idea?</p>
//           <p>We work hand in hand with you. Come to our workspace to create with us – we'll transform your concept into custom art.</p>
//          <p className="my-3 text-xl font-semibold">Need a break to refuel your imagination?</p>
//          <p  className="my-2">Take a creative pause at our in-house café, where inspiration flows with every refreshing treat.</p>
//         </div>
//          <motion.button
//             onClick={() => setShowForm(true)}
//             className="group self-start md:self-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black border border-black/20 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500 whitespace-nowrap"
//             whileHover={{ scale: 1.02 }}
//           >
//             Start Creating
//             <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
//           </motion.button>
//       </div>
//     </div>
//   )
// }

// export default About
// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";
// import back from "../assets/back.jpg";
// function About() {
//   const { hash } = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   // Animation variants
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };
 
//   // return (
//   //   <div
//   //     id="about-us"
//   //     className="flex flex-col md:flex-row justify-between items-start mt-12 md:mt-20 px-4 md:px-10 gap-8"
//   //   >
//   //     {/* LEFT TITLE */}
//   //     <motion.div
//   //       initial={{ opacity: 0, x: -40 }}
//   //       whileInView={{ opacity: 1, x: 0 }}
//   //       transition={{ duration: 0.7 }}
//   //       viewport={{ once: true }}
//   //       className="md:w-[40%] text-4xl sm:text-4xl md:text-5xl  tracking-wide font-bold  text-gray-400"
//   //     >
//   //       About Us
//   //     </motion.div>

//   //     {/* RIGHT CONTENT */}
//   //     <motion.div
//   //       variants={container}
//   //       initial="hidden"
//   //       whileInView="show"
//   //       viewport={{ once: true }}
//   //       className="md:w-[55%] p-6 md:p-8 text-gray-600 bg-white shadow-md rounded-2xl"
//   //     >
//   //       <motion.p variants={item} className="mb-4 leading-relaxed">
//   //         Rooted in tradition, inspired by culture — our creations are
//   //         expressions of artistic legacy.
//   //       </motion.p>

//   //       <motion.p
//   //         variants={item}
//   //         className="mt-6 text-lg font-medium text-gray-800"
//   //       >
//   //         Want to shape your own idea?
//   //       </motion.p>

//   //       <motion.p variants={item} className="mt-2 leading-relaxed">
//   //         We work hand in hand with you. Visit our workspace and co-create —
//   //         transforming your concept into custom art.
//   //       </motion.p>

//   //       <motion.p
//   //         variants={item}
//   //         className="mt-6 text-lg font-medium text-gray-800"
//   //       >
//   //         Need a break to refuel your imagination?
//   //       </motion.p>

//   //       <motion.p variants={item} className="mt-2 leading-relaxed">
//   //         Take a creative pause at our in-house café, where inspiration flows
//   //         with every refreshing treat.
//   //       </motion.p>

//   //       {/* BUTTON */}
//   //       <motion.button
//   //         variants={item}
//   //         whileHover={{ scale: 1.05 }}
//   //         whileTap={{ scale: 0.97 }}
//   //         className="group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black border border-black/20 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500"
//   //         onClick={() => navigate("/products")}
//   //       >
//   //         View Products
//   //         <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
//   //       </motion.button>
//   //     </motion.div>
//   //   </div>
//   // );
//   return (
//   <section
//     id="about-us"
//     className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
//   >
//     {/* BACKGROUND IMAGE */}
//     <div
//       className="absolute inset-0 bg-cover bg-center scale-105"
//       style={{
//         backgroundImage:`url(${back})`  // 👈 replace with your image
//       }}
//     />

//     {/* DARK OVERLAY (IMPORTANT for text visibility) */}
//     <div className="absolute inset-0 " />

//     {/* CONTENT */}
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="relative z-10 max-w-4xl text-center px-6 text-black"
//     >
//       {/* TITLE */}
//       <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
//         About Us
//       </h2>

//       {/* TEXT */}
//       <p className="mt-6 text-lg md:text-xl leading-relaxed text-black">
//         Rooted in tradition, inspired by culture — our creations are
//         expressions of artistic legacy.
//       </p>

//       <p className="mt-6 text-lg font-medium">
//         Want to shape your own idea?
//       </p>

//       <p className="mt-2 text-black">
//         We work hand in hand with you. Visit our workspace and co-create —
//         transforming your concept into custom art.
//       </p>

//       {/* BUTTON */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         className="mt-10 px-8 py-4 border border-white/40 rounded-full uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
//       >
//         View Products
//       </motion.button>
//     </motion.div>
//   </section>
// );
// }

// export default About;
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function About() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    // ✅ Only py-20, no px (Main handles it), no duplicate py-24
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4">
            Who we are
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
            About<br />Us
          </h2>
        </motion.div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-8 pt-2"
        >
          <p className="text-gray-500 text-base leading-relaxed">
            Rooted in tradition, inspired by culture — our creations are expressions of artistic legacy.
          </p>

          <div className="space-y-6 border-t border-gray-100 pt-6">
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">Want to shape your own idea?</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We work hand in hand with you. Come to our workspace to create with us — we'll transform your concept into custom art.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">Need a break to refuel your imagination?</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Take a creative pause at our in-house café, where inspiration flows with every refreshing treat.
              </p>
            </div>
          </div>

          <Link to="/Products">
            <motion.button
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black border border-black/20 px-7 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-500 mt-2"
              whileHover={{ scale: 1.02 }}
            >
              View Products
              <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}