import React from "react";

import { useForm, ValidationError } from "@formspree/react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  const [state, handleSubmit] = useForm("xqagoqqb");

  if (state.succeeded) {
    return (
      <div className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">✅ Message Sent Successfully!</h2>
        <p className="text-gray-300 mt-2">Thank you for contacting Artiq. We’ll reply soon.</p>
      </div>
    );
  }

  return (
    <div id="footer" className="bg-black text-white py-16 px-8 mt-[50px] rounded-[100px] ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
      
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4 text-gray-300">
            Feel free to reach out for custom artworks, collaborations or any queries
          </p>
          <div className="space-y-4 text-gray-400">
            <p><strong>Email:</strong> info@artiqora.co</p>
            <p><strong>Phone:</strong> +91 6369692363</p>
            <p><strong>Location:</strong> Chennai, India</p>
          </div>
          <div className="flex mt-7 space-x-6">
            <a
              href="https://www.instagram.com/arti_qora/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="http://wa.me/919003106936"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110"
            >
              <FaWhatsapp size={30} />
            </a>

            {/* Email */}
            <a
              href="mailto:info@artiqora.co"
              className="text-white hover:text-gray-300 duration-300  transition-transform hover:scale-110"
            >
              <FaEnvelope size={30} />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name" 
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none"
              required
            />

            <input
              type="email"
              name="email" 
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message" 
              placeholder="Your Message"
              rows="5"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-white hover:bg-gray-300 cursor-pointer text-black font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
