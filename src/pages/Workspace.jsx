import React from "react";
import studioImg1 from "../assets/s1.jpg";
import studioImg2 from "../assets/s2.jpg";
import popup from "../assets/popup.png";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
});

const Workspace = () => {
  return (
    <>
      <div className="min-h-screen bg-white font-[Outfit]">
        {/* Floating logo */}
        <div className="px-10 mt-[140px] mb-1 flex justify-between items-center border-b border-gray-100 ">
        <h1 className="text-4xl font-light tracking-tight text-gray-800">WorkSpace</h1>
       <button
       onClick={() => navigate('/')}
       className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors "
        >
  Home <span className="mx-2 text-[10px]">▶</span>
  <span className="text-gray-900">Workspace</span>
</button>
      </div>
        
        {/* ── HERO LABEL ── */}
        <motion.div
          {...fadeUp(0)}
          className="pt-18 px-6 md:px-20 lg:px-32"
        >
          <p className="text-[13px] uppercase tracking-[0.3em] text-black/40 mb-3">
            The Studio
          </p>
          <div className="w-full h-px bg-black/10 mb-7 " />
        </motion.div>

        {/* ── SECTION 1 ── */}
        <section className="px-6 md:px-20 lg:px-32 mb-40">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-16 items-end">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={studioImg1}
                alt="ARTIQ Studio"
                className="w-full h-[500px] object-cover transition-all duration-700"
                draggable={false}
              />
              {/* Subtle index label on image */}
              <span className="absolute top-5 left-5 text-[10px] tracking-[0.25em] uppercase text-white/60">
                
              </span>
            </motion.div>

            {/* Text */}
            <div className="flex flex-col justify-end pb-2 space-y-8">
              <motion.h2
                {...fadeUp(0.15)}
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-black"
              >
                Art Studio<br />& Creative<br />Community
              </motion.h2>

              <motion.div {...fadeUp(0.28)} className="w-8 h-px bg-black" />

              <motion.p
                {...fadeUp(0.35)}
                className="text-[15px] text-black/50 leading-relaxed max-w-xs"
              >
                A calm, thoughtfully designed environment where ideas flow
                freely — balancing nature, art, and functionality.
              </motion.p>

              <motion.p
                {...fadeUp(0.42)}
                className="text-[15px] text-black/50 leading-relaxed max-w-xs"
              >
                Whether solo or collaborative, the space adapts to your
                creative rhythm.
              </motion.p>

              <motion.p
                {...fadeUp(0.5)}
                className="text-[10px] uppercase tracking-[0.3em] text-black/25"
              >
                Chennai, India
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH DIVIDER ── */}
        <motion.div
          {...fadeUpView(0)}
          className="px-6 md:px-20 lg:px-32 mb-40"
        >
          <div className="w-full h-px bg-black/8" />
        </motion.div>

        {/* ── SECTION 2 ── */}
        <section className="px-6 md:px-20 lg:px-32 mb-40">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-16 items-end">

            {/* Text — left on desktop */}
            <div className="flex flex-col justify-end pb-2 space-y-8 order-2 md:order-1">
              <motion.p
                {...fadeUpView(0)}
                className="text-[10px] uppercase tracking-[0.3em] text-black/30"
              >
                Community & Events
              </motion.p>

              <motion.h2
                {...fadeUpView(0.1)}
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-black"
              >
                Where Artists<br />Connect &<br />Collaborate
              </motion.h2>

              <motion.div {...fadeUpView(0.2)} className="w-8 h-px bg-black" />

              <motion.p
                {...fadeUpView(0.28)}
                className="text-[15px] text-black/50 leading-relaxed max-w-xs"
              >
                <span className="font-bold">ARTIQ</span> is more than a studio — it's a growing creative community.
                Through workshops, classes, and meet-ups, we bring artists
                together to learn, share, and evolve.
              </motion.p>

              <motion.p
                {...fadeUpView(0.35)}
                className="text-[15px] text-black/50 leading-relaxed max-w-xs"
              >
                This space encourages collaboration, conversation, and
                meaningful connections that extend beyond the canvas.
              </motion.p>

              <motion.a
                {...fadeUpView(0.42)}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black border border-black/20 px-6 py-3 rounded-full w-fit hover:bg-black hover:text-white transition-all duration-400 group"
                 href="https://wa.me/916369692363" // replace with your number
  target="_blank"
  rel="noopener noreferrer"
              >
              Get in Touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </div>

            {/* Image — right on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl order-1 md:order-2"
            >
              <img
                src={studioImg2}
                alt="ARTIQ Community"
               className="w-full h-[550px] object-cover object-top transition-all duration-700"
                draggable={false}
              />
              <span className="absolute top-5 left-5 text-[10px] tracking-[0.25em] uppercase text-white/60">
               
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <motion.section
          {...fadeUpView(0)}
          className="px-6 md:px-20 lg:px-32 mb-32 max-w-7xl mx-auto"
        >
          <div className="w-full h-px bg-black/8 mb-20" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black/15 leading-snug tracking-tight max-w-3xl">
            "A space where stillness<br />meets creation."
          </p>
        </motion.section>
      </div>

      <div className="font-[Outfit]">
        <Footer />
      </div>
    </>
  );
};

export default Workspace;


// import React from "react";
// import studioImg1 from "../assets/s1.jpg";
// import studioImg2 from "../assets/s2.jpg";
// import popup from "../assets/popup.png";
// import Footer from "../component/Footer";
// import { motion } from "framer-motion";

// const Workspace = () => {
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="min-h-screen bg-[#fafafa] pt-28 px-6 md:px-16 font-[Outfit]"
//       >
//         {/* Floating Image */}
//         <img
//           src={popup}
//           alt="Decoration"
//           className="fixed top-2 left-2 w-20 h-20 rounded-full z-50"
//           draggable={false}
//         />

//         {/* SECTION 1 */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-32"
//         >
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             className="w-full max-w-xl mx-auto"
//           >
           
//   <img
//     src={studioImg1}
//     alt="ARTIQ Studio Entrance"
//     className="
//       w-full
//       aspect-4/3
//       object-cover
//       rounded-2xl
//       shadow-xl
//       transition
//       duration-500
//       hover:scale-105
//       max-h-105
//       md:max-h-95
//       lg:max-h-105
//     "
//   />


//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <p className="uppercase tracking-widest text-sm text-gray-500">
//               Studio Space
//             </p>

//             <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
//              Art Studio and Creative Community

//             </h2>

//             <p className="text-gray-600 leading-relaxed">
//               Our studio is thoughtfully designed to offer a calm, aesthetic
//               environment where ideas flow freely. Every corner reflects a
//               balance between nature, art, and functionality.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               Whether you’re working solo or with a group, the space adapts to
//               your creative rhythm and supports focused exploration.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* SECTION 2 */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center"
//         >
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6 md:order-1 order-2"
//           >
//             <p className="uppercase tracking-widest text-sm text-gray-500">
//               Community & Events
//             </p>

//             <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
//               Where Artists Connect & Collaborate
//             </h2>

//             <p className="text-gray-600 leading-relaxed">
//               ARTIQ is more than a studio — it’s a growing creative community.
//               Through workshops, structured classes, and meet-ups, we bring
//               artists together to learn, share, and evolve.
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               This space encourages collaboration, conversation, and meaningful
//               connections that extend beyond the canvas.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
              
// Whether you’re looking to book the studio space or collaborate, we’d love to hear from you.
//             </p>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="w-full max-w-xl mx-auto aspect-4/4 overflow-hidden rounded-2xl shadow-xl md:order-2 order-1"
//           >
//            <img
//     src={studioImg2}
//     alt="ARTIQ Community Space"
//     className="
//       w-full
//       h-full
//       object-cover
//       object-top
//       transition
//       duration-500
//       hover:scale-105
//     "
//   />

//           </motion.div>
//         </motion.div>
//       </motion.div>
//       <div className="font-[outfit]"><Footer /></div>
      
//     </>
//   );
// };

// export default Workspace;