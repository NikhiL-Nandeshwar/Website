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
    {
      icon: Twitter,
      href: "https://x.com/nexspire_tech",
      color: "text-cyan-600 dark:text-cyan-400",
      label: "X",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/17V1UieToF",
      color: "text-blue-600 dark:text-blue-400",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nexspire.technologies",
      color: "text-rose-600 dark:text-rose-400",
      label: "Instagram",
    },
    // {
    //   icon: Linkedin,
    //   href: "https://www.linkedin.com/company/nexspire-technologies", 
    //   color: "text-sky-700 dark:text-sky-400",
    //   label: "LinkedIn",
    // },
  ]


  return (
    <footer
      id="footer"
      className="bg-[#eaeef4] dark:bg-gray-900 px-8 pt-12 pb-8 border-t border-gray-300 dark:border-gray-700 text-sm"
    >
      <div className="max-w-screen-xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-[15px] text-center md:text-left">

        {/* Social Presence */}
        <div>
          <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Social Presence
          </h3>
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Let’s grow together! Follow us for updates and insights across platforms.
          </p>

          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            {socialIcons.map(({ icon: Icon, color, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${color} opacity-80 hover:opacity-100 transition`}
              >
                <Icon className="w-5 h-5" />
              </a>
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
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Contact
          </h4>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 justify-center md:justify-start">
            <li className="flex items-start gap-1.5 justify-center md:justify-start">
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
            <li className="flex items-start gap-1.5 justify-center md:justify-start">
              <Phone className="w-4 h-4 mt-0.5" />
              <a href="tel:+917666259073" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition">
                +91 76662 59073
              </a>
            </li>
            <li className="flex items-start gap-1.5 justify-center md:justify-start">
              <Phone className="w-4 h-4 mt-0.5" />
              <a href="tel:+917276722610" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition">
                +91 72767 22610
              </a>
            </li>
            <li className="flex items-start gap-1.5 justify-center md:justify-start">
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
            <li>Society & Apartment Management Software</li>
            <li>Business Software Solutions</li>
            <li>Website Development</li>
            <li>Digital Marketing & SEO</li>
            {/* <li>CRM Integrations</li> */}
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-10 border-t border-cyan-700 pt-4 text-center text-base text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="text-cyan-600 dark:text-cyan-400 font-medium">Nexspire Technologies</span>. All rights reserved.
      </div>
    </footer>
  )
}
