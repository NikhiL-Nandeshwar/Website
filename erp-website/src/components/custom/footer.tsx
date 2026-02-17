"use client";

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const socialIcons = [
  {
    icon: Twitter,
    href: "https://x.com/nexspire_tech",
    label: "X",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/17V1UieToF",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nexspire.technologies",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-12 border-t border-cyan-100 dark:border-cyan-900/50 bg-white/75 dark:bg-slate-950/70 backdrop-blur-md"
    >
      <div className="section-shell py-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4 text-sm md:text-[15px]">
        <div>
          <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 text-lg">
            Social Presence
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Follow Nexspire for launches, product updates, and practical growth
            insights.
          </p>
          <div className="flex gap-4 mt-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 text-lg">
            Quick Links
          </h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            <li><a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Services</a></li>
            <li><a href="#features" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Why Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 text-lg">
            Contact
          </h4>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <a
                href="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                Kolhapur, Maharashtra, India
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <a href="tel:+917666259073" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                +91 76662 59073
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <a href="tel:+917276722610" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                +91 72767 22610
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <a
                href="mailto:support@nexspiretechnologies.in"
                className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                support@nexspiretechnologies.in
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 text-lg">
            Offerings
          </h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            <li>Society and Apartment Management Software</li>
            <li>Business ERP Solutions</li>
            <li>Website Design and Development</li>
            <li>Digital Business Cards</li>
            <li>Social Media Bundles and Marketing</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cyan-100 dark:border-cyan-900/50 py-4 text-center text-sm text-slate-600 dark:text-slate-400">
        Copyright {new Date().getFullYear()}{" "}
        <span className="text-cyan-700 dark:text-cyan-300 font-medium">
          Nexspire Technologies
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
