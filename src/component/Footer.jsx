import React from 'react';
import img from '../assets/in.png';
import what from '../assets/what.webp'; 
import email from '../assets/e3.jpg';
import { useState } from 'react';
export default function Footer() {

   const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id="footer" className="bg-black text-white py-16 px-8  mt-[50px] " >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

       
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4 text-gray-300">Feel free to reach out for custom artworks, collaborations or any queries.</p>
          <div className="space-y-4 text-gray-400">
            <p><strong>Email:</strong> artiqstudio@gmail.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Chennai, India</p>
          </div>
          <div className="flex mt-7 ">
             <a href="https://www.instagram.com/artiq_studio_/"><img className="w-10 mt-0.5"src={img} alt="" /></a>
             <a href="http://wa.me/9003106936" ><img className="w-16 -mt-2.5" src={what} alt="" /></a>
             <a href="" className="w-12 -mt-1"><img src={email} alt="" /></a>
   
          </div>
        </div>

        <div>
         
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none "
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none "
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:outline-none "
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white hover:bg-gray-300 cursor-pointer text-black font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}
