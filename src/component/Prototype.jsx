import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import signature from '../assets/img.jpeg'; 
import main from '../assets/main.png';
import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.jpeg';
import pro3 from '../assets/pro3.jpeg';
import pro4 from '../assets/pro4.jpeg';
import pro5 from '../assets/pro5.jpeg';
import pro6 from '../assets/pro6.jpeg';
import pro7 from '../assets/pro7.jpeg';
import pro8 from '../assets/pro8.jpeg';
const prototypes = [pro1, pro2, pro6, pro4, pro5, pro3, pro7, pro8];

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
  window.scrollTo(0, 0);
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
      className="w-90 h-[350px] shadow-lg flex-shrink-0 transition hover:scale-105 duration-300 px-6 py-3 rounded-[40px]"
      draggable={false}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    />
  );
}
