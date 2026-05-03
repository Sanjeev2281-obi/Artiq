// import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "Artist",
    label: "Experience",
    title: "Workshop",
    blocks: [
      {
        heading: null,
        body: "Work with your hands, your heart and your imagination. Our immersive workshops are designed for everyone — from curious beginners to serious creators who want to elevate their craft.",
      },
      {
        heading: "Want to take it further?",
        body: "Join our capstone Art courses — short yet transformative experiences designed to refine your technique and showcase your individual style. Every step of your learning ends with recognition — certificates are awarded for all workshops and capstone programs.",
      },
    ],
  },
  {
    id: "collaborations",
    label: "Partnership",
    title: "Collaborations",
    blocks: [
      {
        heading: "Are you an artist with a unique vision?",
        body: "Let's create something beautiful together. Whether you're an artist, designer, architect, business, or a creative soul with a wild idea — we're here to join hands.",
      },
    ],
  },
  
];

export default function PremiumSections() {
  return (
    <div className="px-6 md:px-16 py-24 space-y-0 divide-y divide-gray-100 max-w-6xl mx-auto">
      {sections.map((sec, i) => (
        <motion.div
  key={sec.id}
  id={sec.id}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-y-10 md:gap-x-28 py-20"
>
  {/* Left */}
  <div className="space-y-3">
    <p className="text-xs tracking-[0.25em] text-gray-400 uppercase">
      {sec.label}
    </p>
    <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
      {sec.title}
    </h2>
  </div>

  {/* Right */}
  <div className="space-y-6 max-w-xl mt-4 md:mt-8">
    {sec.blocks.map((block, j) => (
      <div key={j}>
        {block.heading && (
          <p className="text-sm font-medium text-gray-800 mb-2">
            {block.heading}
          </p>
        )}
        <p className="text-sm text-gray-500 leading-relaxed">
          {block.body}
        </p>
      </div>
    ))}
  </div>
</motion.div>
      ))}
    </div>
  );
}