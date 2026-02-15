import React, { useState } from "react";
import { Bot, X } from "lucide-react";
import ArtiqBot from "./ArtiqBot";

export default function Floatingchatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Robot Button */}
      {!open && (
        <button
  onClick={() => setOpen(true)}
  className="group fixed bottom-6 right-6 z-50 
  flex items-center gap-2
  bg-black text-white px-4 py-3 
  rounded-full shadow-2xl 
  transition hover:scale-105"
>
  {/* Hover Label */}
  <span
    className="hidden md:inline 
    text-xs font-medium whitespace-nowrap
    bg-white/10 px-3 py-1 rounded-full
    opacity-0 -translate-x-2
    group-hover:opacity-100 
    group-hover:translate-x-0
    transition-all duration-300"
  >
    san · Artiq Assistant
  </span>

  {/* Robot Icon */}
  <Bot size={22} />
</button>
       
      )}
      
      {/* Chatbot Box */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-80 md:w-96
          bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl 
          border border-gray-200 animate-slideUp"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h3 className="font-semibold text-lg">Artiq Assistant</h3>
              <p className="text-xs text-gray-500">
                Premium décor guidance
              </p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Bot Content */}
          <div className="p-4 h-80 overflow-y-auto">
            <ArtiqBot />
          </div>
        </div>
      )}
    </>
  );
}
