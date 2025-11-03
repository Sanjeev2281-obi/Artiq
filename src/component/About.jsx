import React from 'react'

function About() {
  return (
    <div id="about-us" className="flex flex-col md:flex-row justify-between mt-7 ">
      <div className="mt-[40px] mb-[20px] md:w-[600px] text-5xl font-bold text-gray-400 ml-4">
        About Us
      </div>
      <div className="mt-[20px]   text-gray-600 sm:mt-[5px] shadow-lg ">
        <div className="mx-5">
          <p className="my-2">Rooted in tradition, inspired by culture — our creations are expressions of artistic legacy.</p>
          <p className="my-3 text-xl font-semibold">Want to shape your own idea?</p>
          <p>We work hand in hand with you. Come to our workspace to create with us – we'll transform your concept into custom art.</p>
         <p className="my-3 text-xl font-semibold">Need a break to refuel your imagination?</p>
         <p  className="my-2">Take a creative pause at our in-house café, where inspiration flows with every refreshing treat.</p>
        </div>
      </div>
    </div>
  )
}

export default About