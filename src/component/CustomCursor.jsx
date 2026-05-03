import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor
 * - Small filled dot that follows mouse exactly
 * - Larger ring that lerps/lags behind (luxury feel)
 * - Ring scales up on hoverable elements
 * - Hides on touch devices
 * Add <CustomCursor /> once in App.jsx, outside BrowserRouter is fine
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Hide on touch
    if ("ontouchstart" in window) { setHidden(true); return; }

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onEnter = (e) => {
      const el = e.target;
      if (
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.tagName === "IMG" ||
        el.getAttribute("role") === "button" ||
        el.closest("a") ||
        el.closest("button")
      ) setHovered(true);
    };
    const onLeave = () => setHovered(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    // Hide default cursor globally
    document.body.style.cursor = "none";

    const animate = () => {
      // Dot — instant
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      // Ring — lerp (lazy follow)
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.body.style.cursor = "";
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#000",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.05s linear, opacity 0.3s, background-color 0.3s",
          opacity: clicked ? 0.5 : 1,
          mixBlendMode: "difference",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? 56 : 40,
          height: hovered ? 56 : 40,
          marginLeft: hovered ? -8 : 0,
          marginTop: hovered ? -8 : 0,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.35)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), height 0.4s cubic-bezier(0.22,1,0.36,1), margin 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s",
          opacity: clicked ? 0.4 : 0.7,
        }}
      />
    </>
  );
}