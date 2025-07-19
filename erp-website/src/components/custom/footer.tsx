// components/Footer.tsx
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter
} from "lucide-react"

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#eaeef4] dark:bg-cyan-800 px-9 py-4 border-t border-gray-300 dark:border-cyan-700 text-sm dark:text-gray-300">
            <div className="max-w-screen-xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-[17px]">
                
                {/* Social Presence */}
                <div>
                    <h3 className="font-semibold text-cyan-600 mb-2">Social Presence</h3>
                    <p className="mb-3 leading-relaxed">
                        Let’s grow together! Follow us for updates and insights across platforms.
                    </p>
                    <div className="flex gap-3">
                        <a href="#" aria-label="Twitter">
                            <Twitter className="w-5 h-5 text-cyan-500 hover:text-cyan-700 transition" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-700 transition" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram className="w-5 h-5 text-rose-600 hover:text-rose-700 transition" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5 text-sky-700 dark:text-sky-500 hover:text-sky-800 transition" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-cyan-600 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-cyan-600 transition">About</a></li>
                        <li><a href="#services" className="hover:text-cyan-600 transition">Services</a></li>
                        <li><a href="#features" className="hover:text-cyan-600 transition">Features</a></li>
                        <li><a href="#" className="hover:text-cyan-600 transition">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5" />
                            <a
                                href="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-700 transition"
                            >
                                Maharashtra, India
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="w-4 h-4 mt-0.5" />
                            <a
                                href="tel:+919000000000"
                                className="hover:text-cyan-700 transition"
                            >
                                +91 90000 00000
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail className="w-4 h-4 mt-0.5" />
                            <a
                                href="mailto:support@nexspire.in"
                                className="hover:text-cyan-700 transition"
                            >
                                support@nexspire.in
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Offerings */}
                <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">Offerings</h4>
                    <ul className="space-y-1">
                        <li>ERP Solutions</li>
                        <li>Website Development</li>
                        <li>Marketing & SEO</li>
                        <li>CRM Integrations</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-base text-gray-500 dark:text-gray-300 mt-10 border-t pt-4 border-teal-600">
                © {new Date().getFullYear()} NexSpire Technologies. All rights reserved.
            </div>
        </footer>
    )
}
