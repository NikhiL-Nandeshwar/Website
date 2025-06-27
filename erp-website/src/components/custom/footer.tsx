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
        <footer id="footer" className="bg-[#eaeef4] dark:bg-cyan-800 pt-5 pb-4 border-t border-gray-300 dark:border-cyan-800 px-8 text-sm dark:text-gray-300">
            <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-5">
                {/* Brand Info */}
                <div>
                    <h3 className="text-base font-semibold text-cyan-600 mb-2">Social Presence</h3>
                    <p className="mb-3 leading-relaxed">
                        Let’s grow together!! Catch all our updates on your favorite platforms
                    </p>
                    <div className="flex space-x-2">
                        <a href="#"><Twitter className="w-5 h-5 hover:text-cyan-700 text-cyan-500" /></a>
                        <a href="#"><Facebook className="w-5 h-5 hover:text-blue-700 text-blue-600" /></a>
                        <a href="#"><Instagram className="w-5 h-5 hover:text-rose-700 text-rose-600" /></a>
                        <a href="#"><Linkedin className="w-5 h-5 hover:text-sky-800 text-sky-700" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-base font-semibold text-cyan-600 mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-cyan-600">Home</a></li>
                        <li><a href="#about" className="hover:text-cyan-600">About</a></li>
                        <li><a href="#services" className="hover:text-cyan-600">Services</a></li>
                        <li><a href="#features" className="hover:text-cyan-600">Features</a></li>
                        <li><a href="#" className="hover:text-cyan-600">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-base font-semibold text-cyan-600 mb-2">Contact</h4>
                    <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5" />
                            <a
                                href="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-700 transition"
                            >
                                Kolhapur, India
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
                                href="mailto:support@democompany.in"
                                className="hover:text-cyan-700 transition"
                            >
                                support@democompany.in
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Offerings */}
                <div>
                    <h4 className="text-base font-semibold text-cyan-600 mb-2">Offerings</h4>
                    <ul className="space-y-1">
                        <li>ERP Solutions</li>
                        <li>Website Development</li>
                        <li>Marketing & SEO</li>
                        <li>CRM Integrations</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center text-xs text-gray-500 dark:text-gray-300 mt-6 border-t border-teal-600 pt-3">
                © {new Date().getFullYear()} Demo Company. All rights reserved.
            </div>
        </footer>
    )
}
