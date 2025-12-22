'use client'

import Link from "next/link"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppBubble() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span
        className={`${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        } transition-all duration-300 bg-gray-700 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-lg shadow-md`}
      >
        Chat with us 💬
      </span>

      {/* WhatsApp Floating Bubble */}
      <Link
        href="https://wa.me/917666259073?text=Hi%20Nexspire%20Team!%20I%27d%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-11 h-11 bg-green-500 hover:bg-green-600 
                   dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-full shadow-lg 
                   transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        <FaWhatsapp color="white" size={25} />
      </Link>
    </div>
  )
}
