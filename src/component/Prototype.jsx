import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import signature from '../assets/img.jpeg'; 
import main from '../assets/main.png';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';
import p10 from '../assets/p10.jpeg';
import p11 from '../assets/p11.jpeg';
import p12 from '../assets/p12.jpeg';
import p13 from '../assets/p13.jpeg';
import p14 from '../assets/p14.jpeg';
import p15 from '../assets/p15.jpeg';
import p16 from '../assets/p16.jpeg';

const prototypes = [p2,p7,p6,p8,p5,p4,p11,p9,p10,p1,p12,p13,p14,p15,p16];

export default function AnimatedIntro() {
  const [showSignature, setShowSignature] = useState(true);
  const scrollRef = useRef(null);

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignature(false);
        window.scrollTo(0, 0);
    }, 2200); 
    return () => clearTimeout(timer);
  }, []);

 

  useEffect(() => {
    if (!showSignature) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 0.5;
        }
      }, 30); 
      return () => clearInterval(interval);
    }
  }, [showSignature]);

 

  return (
    <>
      <AnimatePresence>
        {showSignature && (
          <motion.div
            className="w-full h-screen bg-white fixed top-0 left-0 flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={main}
              alt="Main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="w-170 h-auto object-contain "
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSignature && (
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden pt-10">
         
          <img
            src={main}
            alt="Main Top"
            className="top-4 left-4 w-24 h-auto z-100 fixed"
            draggable={false}
          />

          
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto w-full h-auto px-10  mt-20 scrollbar-hide"
          >
            {prototypes.map((src, index) => (
              <ZoomImage key={index} src={src} index={index}  />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ZoomImage({ src, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40% 0px' });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={`Prototype ${index + 1}`}
      className=" w-100 h-100 object-cover shadow-lg flex-shrink-0 transition hover:scale-105 duration-300 px-6 py-3 rounded-[40px]"

      draggable={false}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    />
  );
}
