import React from 'react'
import Img from '../assets/img.jpeg'

function Hero() {
    return (
        <div className="flex flex-col items-center  py-8 bg-black">
            <img
                src={Img}
                alt=""
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg object-cover"
            />
            <p
                className="flex-col p-2 text-[15px] md:text-[16px] -ml-17.5 "
            >
               Artiq Studio <br />
               <span className="flex -ml-12.5 mt-1">Creating impact with Art</span>
            </p>
        </div>
    )
}

export default Hero