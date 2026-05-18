import { useEffect } from "react";


export function useContentProtection() {
  useEffect(() => {
  
    const handleContextMenu = (e) => e.preventDefault();

   
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