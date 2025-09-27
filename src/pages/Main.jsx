import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Serives from '../component/Serives'
import Prototype from '../component/Prototype'
import Footer from '../component/footer'
import Second from '../component/second'
import About2 from '../component/About2'


function Main() {
  return (
    <div className=" font-[Outfit] w-full overflow-x-hidden" >

      <div><Prototype /></div>
      <div className="bg-white text-gray-800">
      
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

      
          <section className="py-15 border-b border-gray-200">
            <Second />
          </section>

          {/* About Us */}
          <section className="py-20 border-b border-gray-200">
            <About />
          </section>

          {/* Services */}
          <section className="py-20 border-b border-gray-200">
            <Serives />
          </section>
          <section className="py-20 border-b border-gray-200">
            <About2 />
          </section>
          {/* Premium Sections */}
         
        </div>
      </div>
      <div><Footer /></div>




    </div >
  )
}

export default Main