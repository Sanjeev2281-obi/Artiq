import React from "react";
import studioImg1 from "../assets/s1.jpg";
import studioImg2 from "../assets/s2.jpg";
import popup from "../assets/popup.png";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const Workspace = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-[#fafafa] pt-28 px-6 md:px-16 font-[Outfit]"
      >
        {/* Floating Image */}
        <img
          src={popup}
          alt="Decoration"
          className="fixed top-2 left-2 w-20 h-20 rounded-full z-50"
          draggable={false}
        />

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-32"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full max-w-xl mx-auto"
          >
           
  <img
    src={studioImg1}
    alt="ARTIQ Studio Entrance"
    className="
      w-full
      aspect-4/3
      object-cover
      rounded-2xl
      shadow-xl
      transition
      duration-500
      hover:scale-105
      max-h-105
      md:max-h-95
      lg:max-h-105
    "
  />


          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="uppercase tracking-widest text-sm text-gray-500">
              Studio Space
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              A Space Designed for Creativity
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our studio is thoughtfully designed to offer a calm, aesthetic
              environment where ideas flow freely. Every corner reflects a
              balance between nature, art, and functionality.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you’re working solo or with a group, the space adapts to
              your creative rhythm and supports focused exploration.
            </p>
          </motion.div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:order-1 order-2"
          >
            <p className="uppercase tracking-widest text-sm text-gray-500">
              Community & Events
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Where Artists Connect & Collaborate
            </h2>

            <p className="text-gray-600 leading-relaxed">
              ARTIQ is more than a studio — it’s a growing creative community.
              Through workshops, structured classes, and meet-ups, we bring
              artists together to learn, share, and evolve.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This space encourages collaboration, conversation, and meaningful
              connections that extend beyond the canvas.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl mx-auto aspect-4/4 overflow-hidden rounded-2xl shadow-xl md:order-2 order-1"
          >
           <img
    src={studioImg2}
    alt="ARTIQ Community Space"
    className="
      w-full
      h-full
      object-cover
      object-top
      transition
      duration-500
      hover:scale-105
    "
  />

          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Workspace;