import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import main from "../assets/main.png";

export default function AnimatedIntro({ setShowSignature }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setShowSignature(false);
      }, 1000);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="w-full h-screen bg-white fixed top-0 left-0 flex items-center justify-center z-[999]"
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
            className="w-200 h-auto"
            draggable={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}