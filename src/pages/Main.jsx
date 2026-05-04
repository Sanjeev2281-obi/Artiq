// // 
// import React, { useEffect } from 'react'
// import { useLocation } from "react-router-dom";

// import Prototype from '../component/Prototype'
// import Second from '../component/second'
// import About from '../component/About'
// import Serives from '../component/Serives'
// import About2 from '../component/About2'
// import FAQ from '../component/FAQ'
// import Footer from '../component/Footer'
// import Floatingchatbot from '../component/Flotingchatbot';

// function Main() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const section = document.getElementById(location.state.scrollTo);
//       section?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   return (
//     <div className="font-[Outfit] w-full overflow-x-hidden bg-[#f8f8f6] relative">

//       {/* 🌟 PREMIUM BACKGROUND */}
//       <div className="fixed inset-0 -z-10 opacity-40 
//         bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.04),transparent_40%)]" 
//       />

//       {/* HERO / PROTOTYPE */}
//       <Prototype />
//     <section id="home" className="py-10 md:mt-[-120px] md:px-[30px] lg:px-[40px]">
//          <Second />
//   </section>
//       {/* CONTENT WRAPPER */}
//       <div className="relative z-10 mt-[-60px] bg-gradient-to-b from-transparent to-[#f8f8f6] pt-20">

//         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-20 md:space-y-24">

 

//   <section id="about-us" className="py-16 md:py-20 ">
//     <About />
//   </section>

//   <section id="services" className="py-16 md:py-20">
//     <Serives />
//   </section>

//   <section id="about2" className="py-16 md:py-20">
//     <About2 />
//   </section>

//   <section id="faq" className="py-16 md:py-20">
//     <FAQ />
//   </section>

// </div>
//       </div>

//       {/* FLOATING */}
//       <Floatingchatbot />

//       {/* FOOTER */}
//       <footer id="footer" className="mt-20">
//         <Footer />
//       </footer>

//     </div>
//   )
// }

// // export default Main;
// import React, { useEffect } from 'react'
// import { useLocation } from "react-router-dom";
// import Prototype from '../component/Prototype'
// import Second from '../component/second'
// import About from '../component/About'
// import Serives from '../component/Serives'
// import About2 from '../component/About2'
// import FAQ from '../component/FAQ'
// import Footer from '../component/Footer'
// import Floatingchatbot from '../component/Flotingchatbot';

// function Main() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const section = document.getElementById(location.state.scrollTo);
//       section?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   return (
//     <div className="font-[Outfit] w-full overflow-x-hidden bg-[#f8f8f6] relative">

//       {/* Background */}
//       <div className="fixed inset-0 -z-10 opacity-40 
//         bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04),transparent_40%),
//             radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.04),transparent_40%)]" 
//       />

//       {/* Hero */}
//       <Prototype />

//       {/* Second */}
//       <section id="home" className="md:mt-[-120px] md:px-[30px] lg:px-[40px]">
//         <Second />
//       </section>

//       {/* Main content — NO extra py here, components handle their own */}
//       <div className="relative z-10 mt-[-60px] bg-gradient-to-b from-transparent to-[#f8f8f6]">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 divide-y divide-gray-100">

//           <section id="about-us">
//             <About />
//           </section>

//           <section id="services">
//             <Serives />
//           </section>

//           <section id="about2">
//             <About2 />
//           </section>

//           <section id="faq">
//             <FAQ />
//           </section>

//         </div>
//       </div>

//       <Floatingchatbot />

//       <footer id="footer">
//         <Footer />
//       </footer>

//     </div>
//   );
// }

// export default Main;
import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Prototype from '../component/Prototype'
import Second from '../component/second'
import About from '../component/About'
import Serives from '../component/Serives'
import About2 from '../component/About2'
import FAQ from '../component/FAQ'
import Footer from '../component/Footer'
import Floatingchatbot from '../component/Flotingchatbot';
import MarqueeStrip from '../component/MarqueeStrip'
function Main() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="font-[Outfit] w-full overflow-x-hidden bg-[#f8f8f6] relative">

      <div className="fixed inset-0 -z-10 opacity-40 
        bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04),transparent_40%),
            radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.04),transparent_40%)]" 
      />

      
      <Prototype />
     
      {/* Second — sits just below hero, no section wrapper needed */}
      <div id="home" className="px-6 md:px-12 lg:px-20">
        <Second />
      </div>
      <MarqueeStrip />
      {/* All main sections — ONE px source, divide-y for visual separation */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#f8f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 divide-y divide-gray-100">

          <section id="about-us">
            <About />
          </section>

          <section id="services">
            <Serives />
          </section>
          <MarqueeStrip dark />
          <section id="about2">
            <About2 />
          </section>

          <section id="faq">
            <FAQ />
          </section>

        </div>
      </div>

      <Floatingchatbot />

      <footer id="footer">
        <Footer />
      </footer>
 
    </div>
  );
}

export default Main;