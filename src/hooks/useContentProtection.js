import { useEffect } from "react";

/**
 * useContentProtection
 * Drop this hook into App.jsx — protects the entire site.
 * - Disables right-click
 * - Disables text selection
 * - Disables image drag
 * - Blocks Ctrl+S, Ctrl+U, Ctrl+A, Ctrl+C, F12, Ctrl+Shift+I/J/C
 */
export function useContentProtection() {
  useEffect(() => {
    // ── Disable right-click ──
    const handleContextMenu = (e) => e.preventDefault();

    // ── Disable keyboard shortcuts ──
    const handleKeyDown = (e) => {
      const blocked =
        e.key === "F12" ||
        (e.ctrlKey && ["s", "u", "a", "c", "p"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["s", "u", "a", "c", "p"].includes(e.key.toLowerCase())) || // Mac CMD
        (e.metaKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase()));

      if (blocked) e.preventDefault();
    };

    // ── Disable text selection via CSS ──
    const style = document.createElement("style");
    style.id = "artiq-protect";
    style.innerHTML = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
      }
      input, textarea {
        -webkit-user-select: text !important;
        user-select: text !important;
      }
      img {
        pointer-events: none !important;
        -webkit-user-drag: none !important;
        user-drag: none !important;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.getElementById("artiq-protect")?.remove();
    };
  }, []);
}