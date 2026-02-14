import React from 'react'
export default function Second() {
  return (
    <div className="flex flex-col top-3 md:flex-row justify-between gap-6 md:gap-12 px-6 md:px-12 lg:px-20 mt-0 md:mt-20 lg:mt-32
">
      
      {/* Left section */}
      <div className="max-w-md">
        <p className="font-bold text-2xl md:text-3xl">ARTIQ</p>

        <p className="text-sm md:text-base text-gray-600">
          Art studio
        </p>

        <p className="text-sm md:text-base text-gray-600">
          Creating impact with art
        </p>
      </div>

      {/* Right section */}
      <div className="max-w-xl">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          At Artiq, we don't just make art - we shape emotions, stories and dreams into soulful creations that live in your surroundings. Whether it's your cozy home, a vibrant office or a grand public space - we believe art should belong everywhere.
        </p>
      </div>

    </div>
  );
}

