// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
// export default function Footer() {
//   const [state, handleSubmit] = useForm("xqagoqqb");

//   if (state.succeeded) {
//     return (
//       <div className="bg-black text-white py-20 text-center">
//         <h2 className="text-3xl font-semibold">✅ Message Sent Successfully!</h2>
//         <p className="text-gray-300 mt-2">Thank you for contacting Artiq. We’ll reply soon.</p>
//       </div>
//     );
//   }
//   return (
//     <div id="footer" className="bg-[#212121] text-white py-20 px-8 mt-12.5    ">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//           <p className="mb-4 text-gray-300">
//             Feel free to reach out for custom artworks, collaborations or any queries
//           </p>
//           <div className="space-y-4 text-gray-400">
//             <p><strong>Email:</strong> info@artiqora.co</p>
//             <p><strong>Phone:</strong> +91 6369692363</p>
//             <p><strong>Location:</strong> Chennai, India</p>
//           </div>
//           <div className="flex mt-7 space-x-6">
//             <a
//               href="https://www.instagram.com/arti_qora/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110"
//             >
//               <FaInstagram size={30} />
//             </a>
//             <a
//               href="http://wa.me/916369692363"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110"
//             >
//               <FaWhatsapp size={30} />
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:info@artiqora.co"
//               className="text-white hover:text-gray-300 duration-300  transition-transform hover:scale-110"
//             >
//               <FaEnvelope size={30} />
//             </a>
//           </div>

//         </div>

//         {/* RIGHT SIDE — CONTACT FORM */}
//         <div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name" 
//               placeholder="Your Name"
//               className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none"
//               required
//             />

//             <input
//               type="email"
//               name="email" 
//               placeholder="Your Email"
//               className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none"
//               required
//             />
//             <ValidationError prefix="Email" field="email" errors={state.errors} />

//             <textarea
//               name="message" 
//               placeholder="Your Message"
//               rows="5"
//               className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none"
//               required
//             ></textarea>
//             <ValidationError prefix="Message" field="message" errors={state.errors} />

//             <button
//               type="submit"
//               disabled={state.submitting}
//               className="bg-white hover:bg-gray-300 cursor-pointer text-black font-semibold py-2 px-6 rounded-md transition duration-300"
//             >
//               {state.submitting ? "Sending..." : "Send Message"}
//             </button>
//             <div className="absolute left-1/2 transform -translate-x-1/2 mt-8">
//               <p className="text-xs text-gray-400  text-center leading-relaxed">
//   © 2025 Artiqora. All rights reserved. <br className="sm:hidden" />
//   <span className="mx-1 hidden sm:inline">|</span>
//   Privacy Policy
//   <span className="mx-1">|</span>
//   Terms of Use
// </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [state, handleSubmit] = useForm("xqagoqqb");
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="footer" className="bg-black text-white px-8 py-20 mt-20">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT — BRAND */}
        <div>
          <h2 className="text-3xl font-medium mb-4">Artiq</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Creating meaningful art experiences through workshops, custom designs,
            and creative collaborations.
          </p>

          {/* SOCIALS */}
          <div className="flex mt-6 space-x-5">
            <a href="https://www.instagram.com/arti_qora/" target="_blank">
              <FaInstagram size={20} className="hover:scale-110 transition" />
            </a>
            <a href="http://wa.me/916369692363" target="_blank">
              <FaWhatsapp size={20} className="hover:scale-110 transition" />
            </a>
            <a href="mailto:info@artiqora.co">
              <FaEnvelope size={20} className="hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* MIDDLE — NAVIGATION */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">

          <div className="space-y-2">
            <p className="text-white mb-2">Company</p>
            <p className="hover:text-white cursor-pointer">About</p>
            <p className="hover:text-white cursor-pointer">Services</p>
            <p className="hover:text-white cursor-pointer">FAQ</p>
          </div>

          <div className="space-y-2">
            <p className="text-white mb-2">Explore</p>
            <p className="hover:text-white cursor-pointer">Workshop</p>
            <p className="hover:text-white cursor-pointer">Workspace</p>
            <p className="hover:text-white cursor-pointer">Events</p>
          </div>

        </div>

        {/* RIGHT — CONTACT */}
        <div>
          <h3 className="text-lg mb-4">Get in touch</h3>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Let’s Connect
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 mt-4">

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-gray-900 border border-gray-700 p-2 text-sm rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-gray-900 border border-gray-700 p-2 text-sm rounded"
                required
              />
              <ValidationError field="email" errors={state.errors} />

              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 p-2 text-sm rounded"
                required
              />
              <ValidationError field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-white text-black px-5 py-2 text-sm rounded hover:bg-gray-300 transition"
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>

            </form>
          )}
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-xs">
        © 2026 Artiqora — All rights reserved
      </div>

    </div>
  );
}