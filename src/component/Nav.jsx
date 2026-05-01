import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ShoppingBag, User, Search, Menu, Grid, List, X } from 'lucide-react';
import Workspace from "../pages/Workspace";
import popup from '../assets/popup.png';
function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 const closeMenu = () => setOpen(false);

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
    <div>
        <img
                  src={popup}
                  alt="Main Top"
                  className="fixed top-2 left-2 w-26 h-25 rounded-full  z-5000"
                  draggable={false}
                />
    <div className="flex justify-end items-center p-7 fixed top-0 left-0 right-0 z-50 bg-white">

      {/* Menu Icon */}
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Menu size={24} />
      </div>

      {open && (
        <div className="absolute top-3 right-4 bg-white shadow-lg rounded-lg p-5 z-50 flex flex-col gap-4 min-w-42.5 pt-8 navbar">

          {/* Close */}
          <div
            className="absolute top-2 right-2 text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark text-black"></i>
          </div>

          <NavLink to="/" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-[outfit] text-black text-left">Home</NavLink>

          <button
            onClick={() => { closeMenu(); handleScroll("about-us"); }} 
           className="font-[outfit] text-black text-left"
          >
            About Us
          </button>

          <button
            onClick={() => { closeMenu(); handleScroll("services"); }}
            className="font-[outfit] text-black text-left"
          >
            Services
          </button>

         
           <NavLink to="/Workshop"  onClick={() =>  {closeMenu();window.scrollTo({ top: 0, behavior: "smooth" });}} className="font-[outfit] text-black text-left">
            Events
          </NavLink>
           <NavLink to="/Products"  onClick={() =>  {closeMenu();window.scrollTo({ top: 0, behavior: "smooth" });}} className="font-[outfit] text-black text-left">
            Products
          </NavLink>
           <NavLink to="/Workspace"  onClick={() =>  {closeMenu();window.scrollTo({ top: 0, behavior: "smooth" });}} className="font-[outfit] text-black text-left">
            Workspace
          </NavLink>
      
          <button
            onClick={() => { closeMenu(); handleScroll("footer"); }}
             className="font-[outfit] text-black text-left"
          >
            Contact
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Nav;
