import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PageLoader
 * - Shows on first site load only (sessionStorage flag)
 * - "ARTIQ" letter-by-letter reveal, then full wipe out
 * - After dismiss, sets sessionStorage so it never shows again this session
 * Add <PageLoader /> in App.jsx above <Nav />
 */
export default function PageLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("artiq_loaded");
    if (!seen) {
      setShow(true);
      sessionStorage.setItem("artiq_loaded", "1");
      // Auto-dismiss after animation completes
      const t = setTimeout(() => setShow(false), 2800);
      return () => clearTimeout(t);
    }
  }, []);

  const letters = "ARTIQ".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Letters */}
          <div style={{ display: "flex", gap: "0.15em" }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.3em",
                  color: "#000",
                }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.3)",
            }}
          >
            Creating impact with art
          </motion.p>

          {/* Loading bar */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "1.5px",
              backgroundColor: "#000",
              width: "0%",
            }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}