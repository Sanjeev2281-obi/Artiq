import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';

import main from '../assets/main.png'   
function Nav() {
    const [open, setOpen] = useState(false);
    const navi = useNavigate();

    return (
        <div className="flex justify-end items-center p-7  fixed top-0 left-0 right-0 z-50 bg-white ">
            <div className="flex text-2xl font-bold cursor-pointer " onClick={() => setOpen(!open)}>
               <i className="fas fa-list text-black"></i>
            </div>

            {open && (
                <div className="absolute top-3 right-4 bg-white shadow-lg text-white rounded-lg p-5 z-50 flex flex-col gap-4 font-medium min-w-[170px]  items-start pt-8">

                    <div
                        className="absolute top-2 right-2 text-xl text-white cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                         <i className="fa-solid fa-xmark text-black"></i>
                    </div>
                    <NavLink to="/" className="font-[outfit] text-black" onClick={() => setOpen(false)}>Home</NavLink>
                    <a href="#about-us" className="font-[outfit] text-black" onClick={() => setOpen(false)}>About Us</a>
                    <a href="" className="font-[outfit] text-black" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#services" className="font-[outfit] text-black" onClick={() => setOpen(false)}>Services</a>
                    <a href="#Artist" className="font-[outfit] text-black" onClick={() => setOpen(false)}>Artists</a>
                   
                   
                    <a  href="#footer" className="font-[outfit] text-black" onClick={() => setOpen(false)}>Contact</a>
                     
                    </div>

            )}
        </div>
    )
}

export default Nav