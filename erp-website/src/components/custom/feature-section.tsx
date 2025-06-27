'use client'

import { ShieldCheck, Zap, Layers3 } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "Built for fundamentals to advanced",
        desc: "Our ERP and solutions are crafted with Indian core education system in mind — from fee structures till the time of leaving certificates.",
        icon: ShieldCheck,
    },
    {
        title: "Modular, Scalable Architecture and Smart Website",
        desc: "Start small and grow big — New features along with well designed own website.",
        icon: Layers3,
    },
    {
        title: "Digital Presence and Quick Support",
        desc: "From Instagram to Google Ads — We help you build a strong online presence, Also get prompt onboarding, training, and dedicated support.",
        icon: Zap,
    },
]

export default function FeaturesSection() {
    return (
        <section id="features" className="py-10 bg-gradient-to-b from-white to-gray-50 px-5">
            <div className="container mx-auto px-8 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Built to Help You Succeed
                </motion.h2>

                <motion.p
                    className="text-gray-600 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    More than just software — we partner with you to build technology foundations that last. Here is what sets us apart.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white border border-teal-500 rounded-2xl p-8 shadow-sm cursor-pointer transition hover:shadow-lg 
                                        hover:bg-cyan-50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                rotateX: -3,
                                rotateY: 2,
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 150, damping: 8 },
                            }}

                            transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <item.icon className="text-teal-600 mb-4" size={30} />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
