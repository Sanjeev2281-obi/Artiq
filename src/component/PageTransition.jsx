import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

/**
 * PageTransition — FIXED
 * Removed y-axis animation that was causing the white gap under nav.
 * Pure opacity fade only — no layout shift.
 */
export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ willChange: "opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}