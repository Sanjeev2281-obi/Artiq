import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Hero from '../component/Hero'
import About from '../component/About'
import Serives from '../component/Serives'
import Prototype from '../component/Prototype'
import Footer from '../component/Footer'
import Second from '../component/second'
import About2 from '../component/About2'
import FAQ from '../component/FAQ'
import Floatingchatbot from '../component/Flotingchatbot';
function Main() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="font-[Outfit] w-full overflow-x-hidden">

      <Prototype />

      <div className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* Home / Second */}
          <section id="home" className="py-15 border-b border-gray-200">
            <Second />
          </section>

          {/* About Us */}
          <section id="about-us" className="py-20 border-b border-gray-200">
            <About />
          </section>

          {/* Services */}
          <section id="services" className="py-20 border-b border-gray-200">
            <Serives />
          </section>

          {/* About 2 */}
          <section id="about2" className="py-20 border-b border-gray-200">
            <About2 />
          </section>

          {/* FAQ */}
          <section id="faq" className="py-20 border-b border-gray-200">
            <FAQ />
          </section>

        </div>
        <Floatingchatbot />
      </div>

      {/* Footer */}
      <footer id="footer">
        <Footer />
      </footer>

    </div>
  )
}

export default Main;
