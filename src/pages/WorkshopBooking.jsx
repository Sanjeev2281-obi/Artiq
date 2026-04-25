import React, { useState } from "react";
import p8 from "../assets/work.jpg"; // optional local image
import { Button } from "rizzui";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import main from '../assets/main.png';
import { motion } from "framer-motion";
import Footer from "../component/Footer.jsx";
import popup from '../assets/popup.png';
import { NavLink } from "react-router-dom";
// import potteryVideo from '../assets/pottery_workshop.MOV'; 
// optional local video
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScasBBDQWsrM2Dk1y1-hpNg_Jv670v7S_t0PYVP9lMZFZwbIw/formResponse";

const entry_name_id = "entry.1187927462";
const entry_email_id = "entry.1791608995";
const entry_phone_id = "entry.844258481";
const entry_address_id = "entry.1377402859";

const RAZORPAY_KEY = "rzp_test_XXXXXXXXXXXXXXXX"; 

const WorkshopBooking = () => {
  const [showForm, setShowForm] = useState();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  const workshop = {
    title: "Working in Wall Decors",
    price: 499,
    content: `Learn the art of wall decor with hands-on techniques.
      This workshop covers painting, stenciling, and decorative wall accents.
      Perfect for beginners and enthusiasts alike.`,
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitToGoogleForm = (paymentId) => {
    const fd = new FormData();
    fd.append(entry_name_id, form.name);
    fd.append(entry_email_id, form.email);
    fd.append(entry_phone_id, form.phone);
    fd.append(entry_address_id, form.address);
    return fetch(GOOGLE_FORM_ACTION_URL, { method: "POST", body: fd, mode: "no-cors" });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      return alert("Please fill all required fields.");
    }

    setLoading(true);
    const amount = workshop.price * 100;

    const options = {
      key: RAZORPAY_KEY,
      amount,
      currency: "INR",
      name: "Artiq Workshop",
      description: workshop.title,
      prefill: { name: form.name, email: form.email, contact: form.phone },
      handler: function (response) {
        const pid = response.razorpay_payment_id;
        submitToGoogleForm(pid).finally(() => {
          setPaymentId(pid);
          setSuccess(true);
          setLoading(false);
        });
      },
      theme: { color: "#000000" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const Cards = [
    {
      side: "left",
      bg: "white",
      text: "black",
      title: "Art of Pottery",
      content:
        "Unlock your creativity as you shape clay into beautiful vessels and sculptures. Our expert instructors will guide you step-by-step through molding, shaping, and finishing techniques. Each session is designed to boost your confidence, spark your imagination, and give you a hands-on experience of traditional and modern pottery. Perfect for beginners and art enthusiasts alike!",
      image: "https://m.media-amazon.com/images/I/61hV8lwDOsL.jpg",
    },
    {
side: "right",
      bg: "black",
      text: "white",
      title: "Sculpted Dreams",
      content:
        "Learn the art of designing and crafting 3D Plaster of Paris (POP) wall decors. In this workshop, you’ll explore techniques to make elegant wall panels, motifs, and textured patterns that elevate your home or office space. Guided by experienced instructors, you’ll discover creative ways to design, sculpt, and finish POP art pieces that reflect your style. No prior experience required.",
      image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BvdHRlcnktMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==",
    },

  ];

  return (
    <div className=" font-[Outfit]">
      <div className="mt-24 px-4 md:px-20 font-[Outfit]">
        <NavLink to="/" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }} >
        <img
                   src={popup}
                   alt="Main Top"
                   className="fixed top-2 left-2 w-26 h-25 rounded-full  z-50"
                   draggable={false}
                 />
                 </NavLink>

        <motion.div
  className="flex flex-col items-center mb-8"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <p className="text-4xl md:text-5xl font-bold text-center text-gray-900">
    Workshop
  </p>
  <motion.div
    className="h-[1.6px] bg-black rounded-full mt-3"
    initial={{ width: 0 }}
    animate={{ width: "100px" }}
    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
  />
</motion.div>

        {/* Zig-Zag Cards */}
        <div className="space-y-20">
          {Cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: card.side === "left" ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex flex-col md:flex-row w-full px-4 items-center justify-between gap-6"
            >
              {card.side === "left" && (
                <>
                  <div
                    className={`w-full md:w-[45%] p-8 rounded-2xl shadow-lg bg-${card.bg} text-${card.text} hover:scale-105 hover:transition-transform duration-400`}
                  >
                    <h2 className="text-3xl font-bold mb-3 leading-tight">{card.title}</h2>
                    <p className="text-[16px] text-gray-600">{card.content}</p>
                  </div>
                  <img
                    src={card.image}
                    alt="Card visual"
                    className="w-full md:w-[38%] h-auto rounded-2xl shadow-lg object-cover"
                  />
                </>
              )}
              {card.side === "right" && (
                <>
                  <img
                    src={card.image}
                    alt="Card visual"
                    className="w-full md:w-[38%] h-auto rounded-2xl shadow-lg object-cover"
                  />
                  <div
                    className={`w-full md:w-[45%] p-8 rounded-2xl shadow-xl bg-${card.bg} text-${card.text}`}
                  >
                    <h2 className="text-3xl font-bold mb-3 leading-tight">{card.title}</h2>
                    <p className="text-[16px] text-gray-300">{card.content}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Workshop Booking Form */}
        {/* <p className="font-bold text-4xl mt-15 ml-1">Workshop Booking</p> */}
        <motion.div
  className="flex flex-col mt-15 ml-1 mb-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6 }}
>
  <p className="font-bold text-4xl">Workshop Booking</p>
  <motion.div
    className="h-[1.5px] bg-black rounded-full mt-3"
    initial={{ width: 0 }}
    whileInView={{ width: "160px" }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
  />
</motion.div>


        <div className="mt-16 flex justify-center px-4 md:px-0">
          {!showForm ? (
            <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-2xl overflow-hidden">

              {/* Left Image - only for md+ */}
              <img
                src={p8} // Replace with your card image
                alt="Workshop"
                className="w-full md:w-1/2 h-auto object-cover"
              />

              {/* Right Content */}
              <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
                <div className="space-y-3">
                  <p className="mt-2">
                    Work with your hands, your heart, and your imagination!
                  </p>
                  <p>
                    Our immersive workshops are designed for everyone - from curious beginners to serious creators who want to elevate their craft.
                  </p>
                  <p className="font-semibold text-xl mt-3">
                    Wants to take it further?
                  </p>
                  <p>
                    Join our capstone Art courses - short yet transformative experiences designed to refine your technique and showcase your individual style.
                  </p>
                  <p>
                    Every step of your learning ends with recognition — certificates are awarded for all workshops and capstone programs.
                  </p>
                  <div className="mt-6">
                   
  <Button
    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900"
  >
    <span>Book Workshop</span>
    <ArrowRightIcon className="h-4 w-4" />
  </Button>

                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Booking Form
            <div className="w-full max-w-xl mx-auto bg-white shadow-2xl p-6 md:p-10 rounded-2xl">
              {!success ? (
                <form
                  onSubmit={handlePayment}
                  noValidate
                  className="flex flex-col gap-4 text-gray-700"
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Workshop Booking
                    </h2>
                    <a href="https://docs.google.com/forms/d/1hpMaftAXmNKewk6cv1ke-YV4r-GOxIGs2vrcZXTxsKM/viewform?usp=header"><button
                      type="button"
                      //onClick={() => setShowForm(true)}
                      className="text-gray-500 hover:text-gray-800 text-xl"
                    >
                      ✕
                    </button>
                    </a>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="font-medium">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label className="font-medium">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-1">
                    <label className="font-medium">Address (optional)</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      rows={3}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition-all disabled:opacity-60"
                  >
                    {loading ? "Processing..." : `Pay ₹${workshop.price}`}
                  </button>
                </form>
              ) : (
                /* SUCCESS UI */
                <div className="text-center p-4">
                  <h2 className="text-2xl font-bold text-green-600 mb-2">
                    🎉 Payment Successful!
                  </h2>
                  <p className="text-gray-700 mb-1">
                    Thank you for booking <b>{workshop.title}</b>
                  </p>
                  <p className="text-gray-800 mb-4">
                    Payment ID: <b>{paymentId}</b>
                  </p>
                  <p className="text-gray-600">
                    Please take a screenshot for acknowledgment.
                  </p>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setSuccess(false);
                      setForm({ name: "", email: "", phone: "", address: "" });
                      setPaymentId("");
                    }}
                    className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                  >
                    Book Another Workshop
                  </button>
                </div>
              )}
            </div>

          )}
        </div>
      </div>
      {/* Pottery Workshop Video Section */}
{/* Pottery Workshop Video Section (UPGRADED) */}
<div className="w-full mt-10 mb-24 flex flex-col items-center text-center px-4">

  <motion.h2
    className="text-3xl md:text-5xl font-bold mb-3"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Pottery Workshop Experience
  </motion.h2>

  <p className="text-gray-600 max-w-2xl mb-8">
    Watch real artisans shape clay into beautiful pottery pieces.
    A calm, creative, hands-on learning experience.
  </p>

  {/* VIDEO WRAPPER */}
  <motion.div
    className="relative w-full md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden shadow-2xl group"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >

    <video
        src="https://res.cloudinary.com/dqwvi8qi5/video/upload/v1777092571/pottery_workshop_yepvya_tpfnjd.mp4"
      autoPlay
      muted
      loop
      playsInline
       preload="none"
      className="
        w-full 
       h-[400px] md:h-[420px] lg:h-[340px] xl:h-[530px]
        object-cover
         object-center
    transform-gpu
        group-hover:scale-105 transition-transform duration-700
      "
    />

    {/* GLASS OVERLAY */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col justify-end p-6">

      <div className="text-white text-left">
        <h3 className="text-xl md:text-3xl font-semibold">
          Live Pottery Creation
        </h3>
        <p className="text-sm md:text-base opacity-90 mt-1">
          From raw clay → handcrafted art
        </p>

        {/* CTA */}
        <button className="mt-4 px-5 py-2 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition">
          Join Workshop Now
        </button>
      </div>

    </div>

  </motion.div>
</div>
  <Footer />
    </div>
  );
};

export default WorkshopBooking;
