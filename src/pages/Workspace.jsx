import React from "react";
import studioImg1 from "../assets/s1.jpg";
import studioImg2 from "../assets/s2.jpg";
import main from '../assets/main.png';
import popup from '../assets/popup.png';
import Footer from "../component/Footer";
const Workspace = () => {
  return (
    <div>
    <div className="min-h-screen bg-[#fafafa] pt-28 px-6 md:px-16">
       <img
                  src={popup}
                  alt="Main Top"
                  className="fixed top-2 left-2 w-26 h-25 rounded-full  z-50"
                  draggable={false}
                />
      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-32">

        {/* Image */}
       <div className="w-full max-w-xl mx-auto">
  <img
    src={studioImg1}
    alt="ARTIQ Studio Entrance"
    className="
      w-full
      aspect-4/3
      object-cover
      rounded-2xl
      shadow-xl
      transition
      duration-500
      hover:scale-105
      max-h-105
      md:max-h-95
      lg:max-h-105
    "
  />
</div>

        {/* Content */}
        <div className="space-y-6">
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Studio Space
          </p>

          <h2 className="text-4xl font-semibold leading-tight">
            A Space Designed for Creativity
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our studio is thoughtfully designed to offer a calm, aesthetic
            environment where ideas flow freely. Every corner reflects a balance
            between nature, art, and functionality.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you’re working solo or with a group, the space adapts to your
            creative rhythm and supports focused exploration.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Content */}
        <div className="space-y-6 md:order-1 order-2">
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Community & Events
          </p>

          <h2 className="text-4xl font-semibold leading-tight">
            Where Artists Connect & Collaborate
          </h2>

          <p className="text-gray-600 leading-relaxed">
            ARTIQ is more than a studio — it’s a growing creative community.
            Through workshops, structured classes, and meet-ups, we bring
            artists together to learn, share, and evolve.
          </p>

          <p className="text-gray-600 leading-relaxed">
            This space encourages collaboration, conversation, and meaningful
            connections that extend beyond the canvas.
          </p>
        </div>

        {/* Image */}
       <div className="w-full max-w-xl mx-auto aspect-[4/4] overflow-hidden rounded-2xl shadow-xl">
  <img
    src={studioImg2}
    alt="ARTIQ Community Space"
    className="
      w-full
      h-full
      object-cover
      object-top
      transition
      duration-500
      hover:scale-105
    "
  />
</div>

      </div>    
    </div>
    <Footer />
    </div>
  );
};

export default Workspace;