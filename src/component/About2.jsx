import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PremiumSections() {
  return (
    <div id="Artist"className="px-6 md:px-16 py-10 space-y-20">

      {/* Workshop */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        <div className="relative">
          <span className="absolute left-[-15px] top-0 h-full w-[3px] bg-linear-to-b from-gray-500 to-transparent rounded-full"></span>
          <h2 className="text-5xl font-bold text-gray-400">Workshop</h2>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-2xl">
          <p className="mt-2">
            Work with your hands, your heart and your imagination!
          </p>
          <p className="mt-2">
            Our immersive workshops are designed for everyone - from curious beginners to serious creators who want to elevate their craft.
          </p>
          <p className="font-semibold text-xl mt-3">
            Wants to take it further?
          </p>
          <p className="mt-2">
            Join our capstone Art courses - short yet transformative experience designed to refine your technique and showcase your individual style.
          </p>
          <p className="mt-2">
            Every step of your learning ends with recognition — certificates are awarded for all workshops and capstone programs.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.2}
      >
        <div className="relative">
          <span className="absolute left-[-15px] top-0 h-full w-[3px] bg-linear-to-b from-gray-500 to-transparent rounded-full"></span>
          <h2 className="text-5xl font-bold text-gray-400">Collaborations</h2>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-2xl">
          <p className="my-3 font-semibold text-xl text-gray-800">
            Are you an artist with a unique vision?
          </p>
          <p className="text-gray-700">
            Let's create something beautiful together. Whether you're an artist,
            designer, architect, business or a creative soul with a wild idea – 
            we're here to join hands.
          </p>
        </div>
      </motion.div>

      {/* Artist */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.4}
      >
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-2xl">
          <p className="text-gray-700 my-2">
            Born into a family of artists and artisans, I've been practicing art
            since childhood. With over 20 years of experience, my journey is
            deeply rooted in tradition and evolved through exploration.
          </p>
          <p className="text-gray-700 my-2">
            We are more than just a studio – a community of creators,
            collaborators, and dreamers who believe that art is for everyone,
            everywhere.
          </p>
        </div>
        <div className="relative">
          <span className="absolute left-[-15px] top-0 h-full w-[3px] bg-linear-to-b from-gray-500 to-transparent rounded-full"></span>
          <h2 className="text-5xl font-bold text-gray-400">Artist</h2>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.6}
      >
        <div className="relative">
          <span className="absolute left-[-15px] top-0 h-full w-[3px] bg-linear-to-b from-gray-500 to-transparent rounded-full"></span>
          <h2 className="text-5xl font-bold text-gray-400">Disclaimer</h2>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-2xl">
          <p className="text-gray-700 my-2">All artworks are handcrafted.</p>
          <p className="text-gray-700 my-2">
            Designs shown are for reference and can be customised based on request.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
