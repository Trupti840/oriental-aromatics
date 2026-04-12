"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "919999999999"; // replace
  const message = "Hi, I need info";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      {/* FLOAT BUTTON (Toggle Icon) */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 hover:scale-110 transition"
      >
        {open ? <IoClose size={28} /> : <FaWhatsapp size={28} />}
      </div>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-xl p-4 z-50 animate-fadeIn">
          <p className="text-gray-800 font-medium mb-3">👋 Chat with Aromas</p>

          <button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Start Chat
          </button>
        </div>
      )}
    </>
  );
}
