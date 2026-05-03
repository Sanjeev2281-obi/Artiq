import { useRef } from "react";

/**
 * MarqueeStrip — FIXED
 * Uses negative margins to break out of any parent container padding/max-width.
 * Works correctly whether placed inside or outside a constrained wrapper.
 */

const DEFAULT_ITEMS = [
  "Artworks & Installations",
  "Custom Commissions",
  "Worldwide Export",
  "Workshops & Programs",
  "Creating Impact with Art",
  "Chennai, India",
];

export default function MarqueeStrip({ items = DEFAULT_ITEMS, speed = 28, dark = false }) {
  const repeated = [...items, ...items, ...items];

  const bg = dark ? "#0a0a0a" : "#f8f8f6";
  const textColor = dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.25)";
  const dotColor = dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";
  const borderColor = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  return (
    <div
      style={{
        /* Break out of ANY parent padding or max-width container */
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        width: "100vw",
        overflow: "hidden",
        borderTop: `0.5px solid ${borderColor}`,
        borderBottom: `0.5px solid ${borderColor}`,
        backgroundColor: bg,
        paddingTop: "14px",
        paddingBottom: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          width: "max-content",
          animation: `artiq-marquee ${speed}s linear infinite`,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "2.5rem",
              fontFamily: "Outfit, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: textColor,
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: dotColor,
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes artiq-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}