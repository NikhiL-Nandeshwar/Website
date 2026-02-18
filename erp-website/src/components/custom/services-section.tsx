"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  FileBarChart2,
  IdCard,
  Megaphone,
  MonitorSmartphone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Apartment Management Software",
    icon: Building2,
    color: "text-emerald-600 dark:text-emerald-300",
    points: [
      "Monthly maintenance, billing, and payment tracking",
      "Resident portals with notices and document sharing",
      "Role-based access for committee and admin teams",
    ],
  },
  {
    title: "Business ERP Solutions",
    icon: FileBarChart2,
    color: "text-sky-600 dark:text-sky-300",
    points: [
      "Sales, accounts, and workflow automation modules",
      "Reports and dashboards for faster decisions",
      "Custom integrations based on your operation model",
    ],
  },
  {
    title: "Website Design and Development",
    icon: MonitorSmartphone,
    color: "text-cyan-600 dark:text-cyan-300",
    points: [
      "Premium UI and responsive builds across devices",
      "SEO-ready pages with strong performance fundamentals",
      "Landing pages built for trust and lead conversion",
    ],
  },
  {
    title: "Digital Business Cards",
    icon: IdCard,
    color: "text-indigo-600 dark:text-indigo-300",
    points: [
      "Professional digital business card delivered as a PDF",
      "Clickable links for email, mobile number, and other contact actions",
      "Easy to share on WhatsApp, email, and social media",
      "Brand-matched design with editable business details",
    ],
  },
  {
    title: "Social Media Bundles",
    icon: Megaphone,
    color: "text-amber-600 dark:text-amber-300",
    points: [
      "Ready-made posts for upcoming festivals and events for the next 1 year",
      "Customized posts with your brand logo and identity",
      "Account management with audience growth strategy",
      "Ad support and campaign optimization add-ons",
    ],
  },
  {
    title: "Digital Promotion",
    icon: Megaphone,
    color: "text-rose-600 dark:text-rose-300",
    points: [
      "Instagram and Facebook account setup and management",
      "Search Engine Optimization (SEO) for better visibility",
      "Google, Meta, and Instagram ads campaign management",
      "Monthly reporting, optimization, and growth planning",
    ],
  },
];

const whatsappNumber = "917666259073";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="section-shell">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300 mb-3">
            Services
          </p>
          <h2 className="section-title text-slate-900 dark:text-slate-50">
            Complete Digital Services Under One Team
          </h2>
          <p className="section-lead mt-4">
            We handle product, design, and growth execution so your business can
            launch faster with a stronger brand presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: idx * 0.07 }}
            >
              <Card className="group relative overflow-hidden glass-card rounded-2xl border-cyan-100/70 dark:border-cyan-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(8,145,178,0.55)] hover:border-cyan-300/80 dark:hover:border-cyan-700/70">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent dark:via-cyan-100/12 opacity-0 blur-sm transition-all duration-700 ease-out group-hover:left-[125%] group-hover:opacity-100"
                />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg p-2 bg-cyan-50 dark:bg-cyan-950/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_20px_-14px_rgba(8,145,178,0.65)]">
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2.5 text-sm md:text-[15px] text-slate-700 dark:text-slate-200">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hi Nexspire team, I am interested in ${service.title}. Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 text-emerald-700 dark:text-emerald-300 text-sm font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-colors"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Request details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
