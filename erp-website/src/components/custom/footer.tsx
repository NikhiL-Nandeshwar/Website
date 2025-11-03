'use client'

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"

export default function Footer() {
  const socialIcons = [
    { icon: Twitter, color: "text-cyan-600 dark:text-cyan-400" },
    { icon: Facebook, color: "text-blue-600 dark:text-blue-400" },
    { icon: Instagram, color: "text-rose-600 dark:text-rose-400" },
    { icon: Linkedin, color: "text-sky-700 dark:text-sky-400" },
  ]

  return (
    <footer
      id="footer"
      className="bg-[#eaeef4] dark:bg-gray-900 px-8 pt-12 pb-8 border-t border-gray-300 dark:border-gray-700 text-sm"
    >
      <div className="max-w-screen-xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-[15px]">
        
        {/* Social Presence */}
        <div>
          <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Social Presence
          </h3>
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Let’s grow together! Follow us for updates and insights across platforms.
          </p>

          <div className="flex gap-4 mt-2">
            {socialIcons.map(({ icon: Icon, color }, i) => (
              <div key={i} className="relative group">
                <button
                  className={`cursor-not-allowed ${color} opacity-70 hover:opacity-100 transition`}
                >
                  <Icon className="w-5 h-5" />
                </button>

                {/* Custom tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-cyan-700 rounded-md shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Quick Links
          </h4>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Services</a></li>
            <li><a href="#features" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Contact
          </h4>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" />
              <a
                href="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-700 dark:hover:text-cyan-400 transition"
              >
                Kolhapur, Maharashtra, India
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5" />
              <a href="tel:+919561280631" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition">
                +91 95612 80631
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5" />
              <a href="tel:+919075105105" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition">
                +91 90751 05105
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5" />
              <a
                href="mailto:nexspire-technologies@outlook.com"
                className="hover:text-cyan-700 dark:hover:text-cyan-400 transition"
              >
                nexspire-technologies@outlook.com
              </a>
            </li>
          </ul>
        </div>

        {/* Offerings */}
        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Offerings
          </h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Educational ERP Solutions</li>
            <li>Society & Apartment Management Software</li>
            <li>Website Development</li>
            <li>Digital Marketing & SEO</li>
            <li>CRM Integrations</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-10 border-t border-cyan-700 pt-4 text-center text-base text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="text-cyan-600 dark:text-cyan-400 font-medium">NexSpire Technologies</span>. All rights reserved.
      </div>
    </footer>
  )
}
