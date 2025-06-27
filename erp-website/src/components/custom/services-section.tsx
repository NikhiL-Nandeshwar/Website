'use client'

import {
    FileBarChart2,
    MonitorSmartphone,
    Megaphone,
    CheckCircle2,
} from "lucide-react"

export default function ServicesSection() {
    const columns = [
        {
            title: "Educational ERP",
            icon: FileBarChart2,
            color: "text-blue-700 dark:text-blue-500",
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
        },
        {
            title: "Website Development",
            icon: MonitorSmartphone,
            color: "text-cyan-600 dark:text-cyan-500",
            points: [
                "Responsive Design (Mobile + Desktop)",
                "SEO-Friendly Codebase & Schema Markup",
                "CMS-Driven Portals (WordPress/Headless)",
                "Intuitive UI/UX for Institutions & Startups",
                "SSL, Domain & Secure Hosting Setup",
                "Performance Optimization & CDN Integration",
            ],
        },
        {
            title: "Digital Marketing",
            icon: Megaphone,
            color: "text-yellow-600",
            points: [
                "Search Engine Optimization & Ranking Boost",
                "Google, Meta & Instagram Ad Campaigns",
                "Social Media Management & Post Automation",
                "Email Funnels, Newsletters & Retargeting",
                "Landing Pages with Conversion Tracking",
                "Content Marketing & Brand Identity",
            ],
        },
    ]

    return (
        <section id="services" className="py-7 px-5 bg-white dark:bg-gray-500">
            <div className="container mx-auto px-8 text-center">
                <h2 className="text-4xl font-bold mb-6 dark:text-gray-300">Our Core Services</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    All-in-one digital transformation: Whether you are a school, college, or startup —
                    our ERP systems, websites, and marketing strategies are tailored to scale your impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-9 text-left">
                    {columns.map((col, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-cyan-50 via-slate-50 to-white dark:from-cyan-800 dark:to-gray-600 border border-cyan-100 dark:border-cyan-800 p-6 rounded-2xl shadow hover:shadow-xl transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <col.icon size={24} className={col.color} />
                                <h3 className={`text-xl font-semibold ${col.color}`}>
                                    {col.title}
                                </h3>
                            </div>
                            <ul className="space-y-2 text-[16px] text-gray-700 dark:text-gray-400">
                                {col.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
