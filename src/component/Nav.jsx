import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (sectionId) => {
    setOpen(false);

    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="flex justify-end items-center p-7 fixed top-0 left-0 right-0 z-50 bg-white">

      {/* Menu Icon */}
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <i className="fas fa-list text-black"></i>
      </div>

      {open && (
        <div className="absolute top-3 right-4 bg-white shadow-lg rounded-lg p-5 z-50 flex flex-col gap-4 min-w-[170px] pt-8 navbar">

          {/* Close */}
          <div
            className="absolute top-2 right-2 text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark text-black"></i>
          </div>

          <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-[outfit] text-black text-left">Home</NavLink>

          <button
            onClick={() => handleScroll("about-us")}
           className="font-[outfit] text-black text-left"
          >
            About Us
          </button>

          <button
            onClick={() => handleScroll("services")}
            className="font-[outfit] text-black text-left"
          >
            Services
          </button>

          <button
            onClick={() => handleScroll("faq")}
           className="font-[outfit] text-black text-left"
          >
            FAQ
          </button>
           <NavLink to="/Workshop"  className="font-[outfit] text-black text-left">
            Workshop
          </NavLink>
          <button
            onClick={() => handleScroll("footer")}
             className="font-[outfit] text-black text-left"
          >
            Contact
          </button>

         
        </div>
      )}
    </div>
  );
}

export default Nav;
