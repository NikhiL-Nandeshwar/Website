"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBubble() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        } transition-all duration-300 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium px-3 py-1 rounded-lg shadow-md`}
      >
        Chat with us
      </span>

      <Link
        href="https://wa.me/917666259073?text=Hi%20Nexspire%20team.%20I%20want%20details%20about%20your%20services."
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-11 h-11 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        <FaWhatsapp color="white" size={24} />
      </Link>
    </div>
  );
}
