import React from 'react';
import popup from '../assets/popup.png';
export default function EventsTitle() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .slide-up {
          animation: slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .expand-line {
          animation: expandLine 1s 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: left;
        }
        @keyframes slideUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      <div className="inline-flex flex-col items-start mt-27">
         <img
                           src={popup}
                           alt="Main Top"
                           className="fixed top-2 left-2 w-26 h-25 rounded-full  z-50"
                           draggable={false}
                         />
        <div className="overflow-hidden">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight   tracking-tight  text-black slide-up"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Events
          </h1>
        </div>
        <div className="w-full h-0.5 bg-black expand-line mt-2" />
        
        <p className="fade-in mt-4 text-xs tracking-widest uppercase text-gray-400"
          style={{ letterSpacing: '0.25em' }}>
          Will be announced soon.
        </p>
      </div>
    </>
  );
}