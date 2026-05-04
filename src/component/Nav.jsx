// import React, { useState } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { ChevronDown, ShoppingBag, User, Search, Menu, Grid, List, X } from 'lucide-react';
// import Workspace from "../pages/Workspace";
// import popup from '../assets/popup.png';
// function Nav() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//  const closeMenu = () => setOpen(false);

//   const handleScroll = (sectionId) => {
//     setOpen(false);

//     if (location.pathname === "/") {
//       document.getElementById(sectionId)?.scrollIntoView({
//         behavior: "smooth",
//       });
//     } else {
//       navigate("/", { state: { scrollTo: sectionId } });
//     }
//   };

//   return (
//     <div>
//         <img
//                   src={popup}
//                   alt="Main Top"
//                   className="fixed top-2 left-2 w-26 h-25 rounded-full  z-5000"
//                   draggable={false}
//                 />
//     <div className="flex justify-end items-center p-7 fixed top-0 left-0 right-0 z-50 bg-white">

//       {/* Menu Icon */}
//       <div
//         className="text-2xl cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <Menu size={24} />
//       </div>

//       {open && (
//         <div className="absolute top-3 right-4 bg-white shadow-lg rounded-lg p-5 z-50 flex flex-col gap-4 min-w-42.5 pt-8 navbar">

//           {/* Close */}
//           <div
//             className="absolute top-2 right-2 text-xl cursor-pointer"
//             onClick={() => setOpen(false)}
//           >
//             <i className="fa-solid fa-xmark text-black"></i>
//           </div>

//           <NavLink to="/" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-[outfit] text-black text-left">Home</NavLink>

//           <button
//             onClick={() => { closeMenu(); handleScroll("about-us"); }} 
//            className="font-[outfit] text-black text-left"
//           >
//             About Us
//           </button>

//           <button
//             onClick={() => { closeMenu(); handleScroll("services"); }}
//             className="font-[outfit] text-black text-left"
//           >
//             Services
//           </button>

         
//            <NavLink to="/Workshop"  onClick={() =>  {closeMenu();window.scrollTo({ top: 0, behavior: "smooth" });}} className="font-[outfit] text-black text-left">
//             Events
//           </NavLink>
//            <NavLink to="/Products"  onClick={() =>  {closeMenu();window.scrollTo({ top: 0, behavior: "smooth" });}} className="font-[outfit] text-black text-left">
//             Products
//           </NavLink>
//            <NavLink to="/Workspace"  onClick={() =>  {closeMenu();window.scrollTo({ top: 0, behavior: "smooth" });}} className="font-[outfit] text-black text-left">
//             Workspace
//           </NavLink>
      
//           <button
//             onClick={() => { closeMenu(); handleScroll("footer"); }}
//              className="font-[outfit] text-black text-left"
//           >
//             Contact
//           </button>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default Nav;
import { useState } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import popup from "../assets/popup.png";

/**
 * Nav — upgraded from original
 * Changes vs old Nav:
 * - Full-screen overlay menu (luxury standard) instead of small dropdown box
 * - Staggered link reveal animation on open
 * - Privacy Policy + Terms of Use links in menu footer
 * - Thin top border on nav for editorial feel
 * - Menu links are larger and more spaced (Gucci/Loewe style)
 */
function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const handleScroll = (sectionId) => {
    setOpen(false);
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const navLinks = [
    { label: "Home", action: () => { closeMenu(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "About Us", action: () => handleScroll("about-us") },
    { label: "Services", action: () => handleScroll("services") },
    { label: "Events", action: () => { closeMenu(); navigate("/Workshop"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "Products", action: () => { closeMenu(); navigate("/Products"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "Workspace", action: () => { closeMenu(); navigate("/Workspace"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "Contact", action: () => handleScroll("footer") },
  ];

  return (
    <>
      {/* ── NAV BAR ── */}
      <div
        className="flex justify-between items-center px-6 md:px-12 py-5 fixed top-0 left-0 right-0 z-500"
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: open ? "none" : "0.5px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
     
  <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
               <img src={popup} alt="Logo" className="fixed top-0 left-1 w-23 h-23 rounded-full z-50" draggable={false} />
             </NavLink>
        {/* Right side — menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-black"
          style={{ cursor: "none" }} // uses custom cursor
          aria-label="Toggle menu"
        >
          {!open && (
            <span
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.4)",
                marginRight: "8px",
              }}
            >
              Menu
            </span>
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="x"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── FULL SCREEN OVERLAY MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 499,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "clamp(1.5rem, 8vw, 8rem)",
              paddingRight: "clamp(1.5rem, 8vw, 8rem)",
            }}
          >
            {/* Links */}
            <nav style={{ marginTop: "2rem" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <button
                    onClick={link.action}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      color: "#000",
                      padding: "0.8rem 0",
                      background: "none",
                      border: "none",
                      cursor: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.3)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer of menu — legal links + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "2rem" }}>
                <Link
                  to="/privacy-policy"
                  onClick={closeMenu}
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.3)",
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  onClick={closeMenu}
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.3)",
                    textDecoration: "none",
                  }}
                >
                  Terms of Use
                </Link>
              </div>

              <span
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.2)",
                }}
              >
                Chennai, India · ARTIQORA Pvt. Ltd.
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;