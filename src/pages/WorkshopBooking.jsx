// import React, { useState } from "react";
// import p8 from "../assets/work.jpg"; // optional local image
// import { Button } from "rizzui";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import main from '../assets/main.png';
// import { motion } from "framer-motion";
// import Footer from "../component/Footer.jsx";
// import popup from '../assets/popup.png';
// import { NavLink } from "react-router-dom";
// import potteryVideo from '../assets/pottery_workshop.MOV'; 
// // optional local video
// const GOOGLE_FORM_ACTION_URL =
//   "https://docs.google.com/forms/d/e/1FAIpQLScasBBDQWsrM2Dk1y1-hpNg_Jv670v7S_t0PYVP9lMZFZwbIw/formResponse";

// const entry_name_id = "entry.1187927462";
// const entry_email_id = "entry.1791608995";
// const entry_phone_id = "entry.844258481";
// const entry_address_id = "entry.1377402859";

// const RAZORPAY_KEY = "rzp_test_XXXXXXXXXXXXXXXX"; 

// const WorkshopBooking = () => {
//   const [showForm, setShowForm] = useState();
//   const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [paymentId, setPaymentId] = useState("");

//   const workshop = {
//     title: "Working in Wall Decors",
//     price: 499,
//     content: `Learn the art of wall decor with hands-on techniques.
//       This workshop covers painting, stenciling, and decorative wall accents.
//       Perfect for beginners and enthusiasts alike.`,
//   };
//   const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
// });

// const fadeUpView = (delay = 0) => ({
//   initial: { opacity: 0, y: 40 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.2 },
//   transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
// });


//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const submitToGoogleForm = (paymentId) => {
//     const fd = new FormData();
//     fd.append(entry_name_id, form.name);
//     fd.append(entry_email_id, form.email);
//     fd.append(entry_phone_id, form.phone);
//     fd.append(entry_address_id, form.address);
//     return fetch(GOOGLE_FORM_ACTION_URL, { method: "POST", body: fd, mode: "no-cors" });
//   };

//   const handlePayment = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.phone) {
//       return alert("Please fill all required fields.");
//     }

//     setLoading(true);
//     const amount = workshop.price * 100;

//     const options = {
//       key: RAZORPAY_KEY,
//       amount,
//       currency: "INR",
//       name: "Artiq Workshop",
//       description: workshop.title,
//       prefill: { name: form.name, email: form.email, contact: form.phone },
//       handler: function (response) {
//         const pid = response.razorpay_payment_id;
//         submitToGoogleForm(pid).finally(() => {
//           setPaymentId(pid);
//           setSuccess(true);
//           setLoading(false);
//         });
//       },
//       theme: { color: "#000000" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const Cards = [
//     {
//       side: "left",
//       bg: "white",
//       text: "black",
//       title: "Art of Pottery",
//       content:
//         "Unlock your creativity as you shape clay into beautiful vessels and sculptures. Our expert instructors will guide you step-by-step through molding, shaping, and finishing techniques. Each session is designed to boost your confidence, spark your imagination, and give you a hands-on experience of traditional and modern pottery. Perfect for beginners and art enthusiasts alike!",
//       image: "https://m.media-amazon.com/images/I/61hV8lwDOsL.jpg",
//     },
//     {
// side: "right",
//       bg: "black",
//       text: "white",
//       title: "Sculpted Dreams",
//       content:
//         "Learn the art of designing and crafting 3D Plaster of Paris (POP) wall decors. In this workshop, you’ll explore techniques to make elegant wall panels, motifs, and textured patterns that elevate your home or office space. Guided by experienced instructors, you’ll discover creative ways to design, sculpt, and finish POP art pieces that reflect your style. No prior experience required.",
//       image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BvdHRlcnktMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==",
//     },

//   ];

//   return (
//     <div className=" font-[Outfit]">
//       <div className="mt-24 px-4 md:px-20 font-[Outfit]">
//         <NavLink to="/" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} >
//         <img
//                    src={popup}
//                    alt="Main Top"
//                    className="fixed top-2 left-2 w-26 h-25 rounded-full  z-50"
//                    draggable={false}
//                  />
//                  </NavLink>

//         <motion.div
//   className="flex flex-col items-center mb-8"
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
// >
//   <p className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black text-center">
//     Workshop
//   </p>
//   <motion.div
//     className="h-[1.6px] bg-black rounded-full mt-3"
//     initial={{ width: 0 }}
//     animate={{ width: "100px" }}
//     transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//   />
// </motion.div>

//         {/* Zig-Zag Cards */}
//         <div className="space-y-20">
//           {Cards.map((card, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: card.side === "left" ? -60 : 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.7, delay: i * 0.2 }}
//               className="flex flex-col md:flex-row w-full px-4 items-center justify-between gap-6"
//             >
//               {card.side === "left" && (
//                 <>
//                   <div
//                     className={`w-full md:w-[45%] p-8 rounded-2xl shadow-lg bg-${card.bg} text-${card.text} hover:scale-105 hover:transition-transform duration-400`}
//                   >
//                     <h2 className="text-3xl font-bold mb-3 leading-tight">{card.title}</h2>
//                     <p className="text-[16px] text-gray-600">{card.content}</p>
//                   </div>
//                   <img
//                     src={card.image}
//                     alt="Card visual"
//                     className="w-full md:w-[38%] h-auto rounded-2xl shadow-lg object-cover"
//                   />
//                 </>
//               )}
//               {card.side === "right" && (
//                 <>
//                   <img
//                     src={card.image}
//                     alt="Card visual"
//                     className="w-full md:w-[38%] h-auto rounded-2xl shadow-lg object-cover"
//                   />
//                   <div
//                     className={`w-full md:w-[45%] p-8 rounded-2xl shadow-xl bg-${card.bg} text-${card.text}`}
//                   >
//                     <h2 className="text-3xl font-bold mb-3 leading-tight">{card.title}</h2>
//                     <p className="text-[16px] text-gray-300">{card.content}</p>
//                   </div>
//                 </>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Workshop Booking Form */}
//         {/* <p className="font-bold text-4xl mt-15 ml-1">Workshop Booking</p> */}
//         <motion.div
//   className="flex flex-col mt-15 ml-1 mb-2"
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.5 }}
//   transition={{ duration: 0.6 }}
// >
//   <p className="font-bold text-4xl">Workshop Booking</p>
//   <motion.div
//     className="h-[1.5px] bg-black rounded-full mt-3"
//     initial={{ width: 0 }}
//     whileInView={{ width: "160px" }}
//     viewport={{ once: true, amount: 0.5 }}
//     transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
//   />
// </motion.div>


//         <div className="mt-16 flex justify-center px-4 md:px-0">
//           {!showForm ? (
//             <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-2xl overflow-hidden">

//               {/* Left Image - only for md+ */}
//               <img
//                 src={p8} // Replace with your card image
//                 alt="Workshop"
//                 className="w-full md:w-1/2 h-auto object-cover"
//               />

//               {/* Right Content */}
//               <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
//                 <div className="space-y-3">
//                   <p className="mt-2">
//                     Work with your hands, your heart, and your imagination!
//                   </p>
//                   <p>
//                     Our immersive workshops are designed for everyone - from curious beginners to serious creators who want to elevate their craft.
//                   </p>
//                   <p className="font-semibold text-xl mt-3">
//                     Wants to take it further?
//                   </p>
//                   <p>
//                     Join our capstone Art courses - short yet transformative experiences designed to refine your technique and showcase your individual style.
//                   </p>
//                   <p>
//                     Every step of your learning ends with recognition — certificates are awarded for all workshops and capstone programs.
//                   </p>
//                   <div className="mt-6">
                   
//   <Button
//     className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900"
//   >
//     <span>Book Workshop</span>
//     <ArrowRightIcon className="h-4 w-4" />
//   </Button>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // Booking Form
//             <div className="w-full max-w-xl mx-auto bg-white shadow-2xl p-6 md:p-10 rounded-2xl">
//               {!success ? (
//                 <form
//                   onSubmit={handlePayment}
//                   noValidate
//                   className="flex flex-col gap-4 text-gray-700"
//                 >
//                   {/* Header */}
//                   <div className="flex justify-between items-center mb-2">
//                     <h2 className="text-2xl font-semibold text-gray-800">
//                       Workshop Booking
//                     </h2>
//                     <a href="https://docs.google.com/forms/d/1hpMaftAXmNKewk6cv1ke-YV4r-GOxIGs2vrcZXTxsKM/viewform?usp=header"><button
//                       type="button"
//                       //onClick={() => setShowForm(true)}
//                       className="text-gray-500 hover:text-gray-800 text-xl"
//                     >
//                       ✕
//                     </button>
//                     </a>
//                   </div>

//                   {/* Name */}
//                   <div className="flex flex-col gap-1">
//                     <label className="font-medium">Full Name</label>
//                     <input
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       placeholder="Enter your full name"
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="flex flex-col gap-1">
//                     <label className="font-medium">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="Enter your email"
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div className="flex flex-col gap-1">
//                     <label className="font-medium">Phone Number</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       placeholder="Enter your phone number"
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>

//                   {/* Address */}
//                   <div className="flex flex-col gap-1">
//                     <label className="font-medium">Address (optional)</label>
//                     <textarea
//                       name="address"
//                       value={form.address}
//                       onChange={handleChange}
//                       placeholder="Your address"
//                       rows={3}
//                       className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>

//                   {/* Button */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition-all disabled:opacity-60"
//                   >
//                     {loading ? "Processing..." : `Pay ₹${workshop.price}`}
//                   </button>
//                 </form>
//               ) : (
//                 /* SUCCESS UI */
//                 <div className="text-center p-4">
//                   <h2 className="text-2xl font-bold text-green-600 mb-2">
//                     🎉 Payment Successful!
//                   </h2>
//                   <p className="text-gray-700 mb-1">
//                     Thank you for booking <b>{workshop.title}</b>
//                   </p>
//                   <p className="text-gray-800 mb-4">
//                     Payment ID: <b>{paymentId}</b>
//                   </p>
//                   <p className="text-gray-600">
//                     Please take a screenshot for acknowledgment.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setShowForm(false);
//                       setSuccess(false);
//                       setForm({ name: "", email: "", phone: "", address: "" });
//                       setPaymentId("");
//                     }}
//                     className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
//                   >
//                     Book Another Workshop
//                   </button>
//                 </div>
//               )}
//             </div>

//           )}
//         </div>
//       </div>
//       {/* Pottery Workshop Video Section */}
// {/* Pottery Workshop Video Section (UPGRADED) */}
// <div className="w-full mt-10 mb-24 flex flex-col items-center text-center px-4">

//   <motion.h2
//     className="text-3xl md:text-5xl font-bold mb-3"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//   >
//     Pottery Workshop Experience
//   </motion.h2>

//   <p className="text-gray-600 max-w-2xl mb-8">
//     Watch real artisans shape clay into beautiful pottery pieces.
//     A calm, creative, hands-on learning experience.
//   </p>

//   {/* VIDEO WRAPPER */}
//   <motion.div
//     className="relative w-full md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden shadow-2xl group"
//     initial={{ opacity: 0, scale: 0.95 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6 }}
//   >

//     <video
//         src={potteryVideo}//"https://res.cloudinary.com/dqwvi8qi5/video/upload/v1777092571/pottery_workshop_yepvya_tpfnjd.mp4"
//       autoPlay
//       muted
//       loop
//       playsInline
//        preload="none"
//       className="
//         w-full 
//        h-[400px] md:h-[420px] lg:h-[340px] xl:h-[530px]
//         object-cover
//          object-center
//     transform-gpu
//         group-hover:scale-105 transition-transform duration-700
//       "
//     />

//     {/* GLASS OVERLAY */}
//     <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col justify-end p-6">

//       <div className="text-white text-left">
//         <h3 className="text-xl md:text-3xl font-semibold">
//           Live Pottery Creation
//         </h3>
//         <p className="text-sm md:text-base opacity-90 mt-1">
//           From raw clay → handcrafted art
//         </p>

//         {/* CTA */}
//         <button className="mt-4 px-5 py-2 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition">
//           Join Workshop Now
//         </button>
//       </div>

//     </div>

//   </motion.div>
// </div>
// <motion.section
//           {...fadeUpView(0)}
//           className="px-6 md:px-20 lg:px-32 mb-32 max-w-7xl mx-auto"
//         >
//           <div className="w-full h-px bg-black/8 mb-20" />
//           <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black/15 leading-snug tracking-tight max-w-3xl">
//             "A space where stillness<br />meets creation."
//           </p>
//         </motion.section>
//   <Footer />
//     </div>
//   );
// };

// export default WorkshopBooking;



import React, { useState, useRef, useEffect } from "react";
import p8 from "../assets/work.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Footer from "../component/Footer.jsx";
import { NavLink } from "react-router-dom";
import potteryVideo from '../assets/pottery_workshop.MOV';

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScasBBDQWsrM2Dk1y1-hpNg_Jv670v7S_t0PYVP9lMZFZwbIw/formResponse";

const entry_name_id = "entry.1187927462";
const entry_email_id = "entry.1791608995";
const entry_phone_id = "entry.844258481";
const entry_address_id = "entry.1377402859";

const RAZORPAY_KEY = "rzp_test_XXXXXXXXXXXXXXXX";

/* ─── Floating particles ─── */
const Particles = () => {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-black/5"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -80, 0], x: [0, (Math.random() * 40 - 20), 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* ─── Ticker marquee ─── */
const Marquee = () => {
  const items = ["Pottery", "Wall Decor", "Sculpting", "POP Art", "Clay Work", "Creative Arts", "Handcraft", "Workshops"];
  return (
    <div className="overflow-hidden border-y border-black/8 py-4 my-16 bg-white/60 backdrop-blur-sm">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs uppercase tracking-[0.3em] text-black/30 font-light inline-flex items-center gap-12">
            {item}
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Animated counter ─── */
const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-light tracking-tight text-black">{count}+</p>
      <p className="text-xs uppercase tracking-[0.25em] text-black/40 mt-2">{label}</p>
    </div>
  );
};

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
const WorkshopBooking = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
 const bookingOpen = false;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const workshop = { title: "Working in Wall Decors", price: 499 };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitToGoogleForm = () => {
    const fd = new FormData();
    fd.append(entry_name_id, form.name);
    fd.append(entry_email_id, form.email);
    fd.append(entry_phone_id, form.phone);
    fd.append(entry_address_id, form.address);
    return fetch(GOOGLE_FORM_ACTION_URL, { method: "POST", body: fd, mode: "no-cors" });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return alert("Please fill all required fields.");
    setLoading(true);
    const options = {
      key: RAZORPAY_KEY,
      amount: workshop.price * 100,
      currency: "INR",
      name: "Artiq Workshop",
      description: workshop.title,
      prefill: { name: form.name, email: form.email, contact: form.phone },
      handler: (response) => {
        const pid = response.razorpay_payment_id;
        submitToGoogleForm().finally(() => { setPaymentId(pid); setSuccess(true); setLoading(false); });
      },
      theme: { color: "#000000" },
    };
    new window.Razorpay(options).open();
  };

  const Cards = [
    {
      num: "01", side: "left",
      title: "Art of Pottery",
      tag: "Hands-on · Beginner Friendly",
      content: "Unlock your creativity as you shape clay into beautiful vessels and sculptures. Expert instructors guide you through molding, shaping, and finishing — igniting confidence and imagination in every session.",
      image: "https://m.media-amazon.com/images/I/61hV8lwDOsL.jpg",
      accent: "#F5F0EB",
    },
    {
      num: "02", side: "right",
      title: "Sculpted Dreams",
      tag: "3D Design · POP Art",
      content: "Learn the art of designing and crafting 3D Plaster of Paris wall decors. Explore elegant wall panels, motifs, and textured patterns that transform any space — guided by experienced artisans.",
      image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BvdHRlcnktMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==",
      accent: "#EDEAE6",
    },
  ];

  return (
    <div className="font-[Outfit] bg-[#FAFAF8] min-h-screen relative overflow-x-hidden">
      <Particles />

      {/* LOGO */}
      

      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* orbiting rings */}
        <motion.div
          className="absolute w-[680px] h-[680px] rounded-full border border-black/5"
          style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[480px] h-[480px] rounded-full border border-black/5"
          style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />

        {/* pill label */}
        <motion.div
          className="mb-8 px-4 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-black/50">Artiq Studio </span>
        </motion.div>

        {/* giant heading */}
        <motion.div className="text-center relative z-10 px-4" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(1rem,7vw,6rem)] font-light tracking-[-0.04em] text-black leading-[0.88] mb-6"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Experiences<span className="italic font-extralight"></span>
            </motion.h1>
          </div>

          <motion.p
            className="text-[15px] text-black/45 max-w-sm mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Where craft meets creativity. Hands-on experiences designed to awaken the artist in you.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <a  href="tel:+916369692363">
              <motion.button
                
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] bg-black text-white px-8 py-4 rounded-full"
                whileHover={{ scale: 1.03, backgroundColor: "#222" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
            >
              Reserve Your Spot
              <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            </a>
            <button className="text-xs uppercase tracking-[0.25em] text-black/40 hover:text-black transition-colors duration-300 border-b border-black/10 pb-0.5">
              See Programs
            </button>
          </motion.div>
        </motion.div>

        {/* scroll bar */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent to-black/25"
            animate={{ scaleY: [0, 1, 0], originY: "0%" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[10px] uppercase tracking-[0.3em] text-black/25">Scroll</span>
        </motion.div>
      </section>

      {/* ══ MARQUEE ══ */}
      <Marquee />

      {/* ══ STATS ══ */}
      

      {/* ══ WORKSHOP CARDS ══ */}
      <section className="px-4 md:px-12 lg:px-20 mb-32 max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-black/30 mb-3">Our Programs</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">Featured Workshops</h2>
        </motion.div>

        <div className="space-y-8">
          {Cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ background: card.accent }}
            >
              <div className={`flex flex-col ${card.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} min-h-[360px]`}>
                {/* Text */}
                <div className="flex-1 p-10 md:p-14 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-xs font-light text-black/30 tracking-[0.2em]">{card.num}</span>
                      <div className="h-px flex-1 bg-black/10" />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-black/40 border border-black/10 rounded-full px-3 py-1">{card.tag}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-black mb-5 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[15px] text-black/50 leading-relaxed max-w-md">{card.content}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black">
                    <span>Learn More</span>
                    <motion.div animate={{ x: hoveredCard === i ? 6 : 0 }} transition={{ duration: 0.3 }}>
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </motion.div>
                  </div>
                </div>
                {/* Image */}
                <div className="w-full md:w-[42%] relative overflow-hidden min-h-[260px]">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover absolute inset-0"
                    animate={{ scale: hoveredCard === i ? 1.06 : 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ VIDEO ══ */}
     <section className="px-4 md:px-12 mb-32 max-w-7xl mx-auto">
        <motion.div
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/30 mb-3">In Action</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black leading-tight">
              Pottery<br /><span className="italic font-extralight">Workshop</span>
            </h2>
          </div>
          <p className="text-[15px] text-black/45 max-w-xs leading-relaxed">
            Watch real artisans shape clay into beautiful pottery. Calm, creative, hands-on.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            src={potteryVideo}
            autoPlay muted loop playsInline preload="none"
            className="w-full h-[420px] md:h-[560px] lg:h-[640px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2">Live Creation</p>
              <h3 className="text-2xl md:text-4xl font-light tracking-tight">From raw clay → handcrafted art</h3>
            </div>
            <motion.button
             
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black bg-white px-6 py-3 rounded-full hover:bg-white/90 transition-colors duration-300 self-start md:self-auto whitespace-nowrap"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join Workshop <ArrowRightIcon className="h-3.5 w-3.5" />
            </motion.button>
          </div>
   
          {/* spinning badge */}
          
        </motion.div>
        
      </section>

      {/* ══ BOOKING ══ */}
      <section  className="relative px-4 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="w-full h-px bg-black/8 mb-20" />
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-black/30 mb-3">Reserve</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">Workshop Booking</h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl overflow-hidden bg-[#F0EDE8] flex flex-col md:flex-row min-h-[420px]"
            >
              <div className="w-full md:w-[45%] relative overflow-hidden min-h-[280px]">
                <img src={p8} alt="Workshop" className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-black/10" />
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-black/70">· Hot</span>
                </motion.div>
              </div>

              <div className="flex-1 p-10 md:p-14 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-black">
                    Craft something<br /><span className="italic">beautiful today.</span>
                  </h3>
                  <p className="text-[15px] text-black/50 leading-relaxed">
                    Immersive workshops for everyone — curious beginners to seasoned creators. Every session ends with something you made with your own hands.
                  </p>
                  <p className="text-[15px] text-black/50 leading-relaxed">
                    Certificates awarded for all workshops and capstone programs.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button
                   
                    onClick={() =>{ if (!bookingOpen) return; setShowForm(true)}}
                    className="group inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] bg-black text-white px-8 py-4 rounded-full"
                    whileHover={{ scale: 1.02, backgroundColor: "#222" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Update you soon
                    <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <button className="inline-flex items-center justify-center text-xs uppercase tracking-[0.25em] text-black/50 border border-black/15 px-8 py-4 rounded-full hover:border-black/40 hover:text-black transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg mx-auto"
            >
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="formInner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-black/5"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-black/35 mb-1">Step 01</p>
                        <h3 className="text-2xl font-light tracking-tight">Your Details</h3>
                      </div>
                      <button
                        onClick={() => setShowForm(false)}
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-all"
                      >
                        ✕
                      </button>
                    </div>

                    <form onSubmit={handlePayment} noValidate className="space-y-5">
                      {[
                        { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
                        { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
                        { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                      ].map((field, i) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 + 0.2 }}
                          className="flex flex-col gap-1.5"
                        >
                          <label className="text-[11px] uppercase tracking-[0.2em] text-black/40">{field.label}</label>
                          <input
                            name={field.name}
                            type={field.type}
                            value={form[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full border-b border-black/10 bg-transparent py-3 text-[15px] text-black placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors duration-300"
                          />
                        </motion.div>
                      ))}

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.44 }}
                        className="flex flex-col gap-1.5"
                      >
                        <label className="text-[11px] uppercase tracking-[0.2em] text-black/40">
                          Address <span className="normal-case tracking-normal text-black/25">(optional)</span>
                        </label>
                        <textarea
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          placeholder="Your address"
                          rows={2}
                          className="w-full border-b border-black/10 bg-transparent py-3 text-[15px] text-black placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors duration-300 resize-none"
                        />
                      </motion.div>

                      <motion.div
                        className="pt-4 flex items-center justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                      >
                        <span className="text-xs text-black/30">
                          Workshop · <span className="text-black font-medium">₹{workshop.price}</span>
                        </span>
                        <motion.button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] bg-black text-white px-7 py-3.5 rounded-full disabled:opacity-50 transition-all duration-400"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {loading ? (
                            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                              Processing…
                            </motion.span>
                          ) : (
                            <>Pay ₹{workshop.price} <ArrowRightIcon className="h-3.5 w-3.5" /></>
                          )}
                        </motion.button>
                      </motion.div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-12 border border-black/5 text-center"
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    >
                      <span className="text-white text-xl">✓</span>
                    </motion.div>
                    <h3 className="text-2xl font-light tracking-tight mb-2">You're booked!</h3>
                    <p className="text-[15px] text-black/50 mb-1">Payment ID: <span className="text-black font-medium text-sm">{paymentId}</span></p>
                    <p className="text-[13px] text-black/35 mb-8">Screenshot this for your records.</p>
                    <button
                      onClick={() => { setShowForm(false); setSuccess(false); setForm({ name: "", email: "", phone: "", address: "" }); setPaymentId(""); }}
                      className="text-xs uppercase tracking-[0.25em] text-black/40 border-b border-black/15 pb-0.5 hover:text-black transition-colors"
                    >
                      Book Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ══ QUOTE ══ */}
      <motion.section
        className="px-6 md:px-20 lg:px-32 mb-32 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1 }}
      >
        <div className="w-full h-px bg-black/8 mb-20" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-black/12 leading-snug tracking-tight max-w-2xl">
            "A space where<br />
            <span className="italic">stillness</span><br />
            meets creation."
          </p>
          <a  href="tel:+916369692363">
          <motion.button
            
            className="group self-start md:self-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black border border-black/20 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500 whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
          >
            Start Creating
            <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default WorkshopBooking;