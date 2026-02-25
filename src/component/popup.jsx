import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import WorkshopBooking from '../pages/WorkshopBooking';
export default function Popup() {
  return (
    
    <NavLink to="/Workshop"><a
  className="
    fixed bottom-6 left-6 z-50
    flex items-center gap-2
    bg-black text-white
    px-5 py-3
    rounded-full
    shadow-2xl
    hover:bg-gray-900
    hover:scale-105
    transition-all duration-300
  "
>
  <span className="font-medium">Book Workshop</span>
  <ArrowRightIcon className="h-4 w-4" />
</a></NavLink>
  )
}
