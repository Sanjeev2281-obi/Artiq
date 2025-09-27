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
      <div className="px-[20px] md:px-[40px]">
        <div><Second /></div>
        <div><About /></div>

        <div><Serives /></div>
       
        <div><About2 /></div>
       
        
      </div>
    <div><Footer /></div>
        

       
         
    </div >
  )
}

export default Main