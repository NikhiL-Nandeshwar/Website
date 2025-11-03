'use client'

import {
    FileBarChart2,
    MonitorSmartphone,
    Megaphone,
    CheckCircle2,
    MessageCircle
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaWhatsapp } from "react-icons/fa"

export default function ServicesSection() {
    const columns = [
        {
            title: "Educational ERP",
            icon: FileBarChart2,
            color: "text-blue-700 dark:text-blue-400",
            points: [
                "Admission, Examination & Attendance Management",
                "Smart Academic Timetables & Custom Report Cards",
                "Fee Collection, Leave & Payroll Management",
                "SMS/Email Communication Integrations",
                "Library, Hostel & Transport Modules",
                "Teacher, Student & Parent Portals",
                "Role-Based Dashboards & Analytics",
                "Custom Permissions & Dashboards",
            ],
            msg: "Hi! I’m interested in Educational ERP solutions by NexSpire.",
        },
        {
            title: "Website Development",
            icon: MonitorSmartphone,
            color: "text-cyan-600 dark:text-cyan-400",
            points: [
                "Responsive Design (Mobile + Desktop)",
                "SEO-Friendly Codebase & Schema Markup",
                "CMS-Driven Portals (WordPress/Headless)",
                "Intuitive UI/UX for Institutions & Startups",
                "SSL, Domain & Secure Hosting Setup",
                "Performance Optimization & CDN Integration",
            ],
            msg: "Hi! I’m interested in Website Development by NexSpire.",
        },
        {
            title: "Digital Marketing",
            icon: Megaphone,
            color: "text-yellow-600 dark:text-yellow-400",
            points: [
                "Search Engine Optimization & Ranking Boost",
                "Google, Meta & Instagram Ad Campaigns",
                "Social Media Management & Post Automation",
                "Email Funnels, Newsletters & Retargeting",
                "Landing Pages with Conversion Tracking",
                "Content Marketing & Brand Identity",
            ],
            msg: "Hi! I’d like to know more about your Digital Marketing services.",
        },
    ]

    const whatsappNumber = "919561280631" // change to your WhatsApp number (without +)

    return (
        <section id="services" className="py-28 px-5 bg-stone-100 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    Our Core Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    All-in-one digital transformation: Whether you&apos;re a school, college, or startup — our ERP systems, websites, and marketing strategies are tailored to scale your impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {columns.map((col, idx) => (
                        <Card
                            key={idx}
                            className="bg-gradient-to-br from-cyan-50 via-slate-50 to-white dark:from-cyan-900 dark:to-gray-700 border dark:border-cyan-700 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300"
                        >
                            <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                <col.icon size={24} className={col.color} />
                                <CardTitle className={`text-xl font-semibold ${col.color}`}>
                                    {col.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-2 text-[16px] text-gray-700 dark:text-gray-300 mt-2">
                                    {col.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 mt-1" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* WhatsApp button */}
                                <div className="mt-6 flex justify-start border-green-950">
                                    <Link
                                        href={`https://wa.me/919561280631?text=${encodeURIComponent(
                                            `Hi NexSpire, I'm interested in your ${col.title} service. Can you share more details?`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-green-300 dark:border-green-600 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-white text-sm font-medium transition-all duration-200 shadow-md dark:bg-gray-600 dark:hover:bg-gray-500"
                                    >
                                        <FaWhatsapp className='text-green-500' size={20} />
                                        <span className="text-green-500">Contact for more details</span>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
