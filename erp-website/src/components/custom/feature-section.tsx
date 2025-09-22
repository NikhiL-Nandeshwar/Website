'use client'

import { ShieldCheck, Zap, Layers3 } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "Built for Fundamentals to Advanced",
        desc: "Our ERP is crafted with India's educational ecosystem in mind — from fee structures to transfer certificates.",
        icon: ShieldCheck,
    },
    {
        title: "Modular & Scalable Architecture",
        desc: "Start small and scale seamlessly. Add new ERP modules or launch your own institutional website as you grow.",
        icon: Layers3,
    },
    {
        title: "Digital Presence & Dedicated Support",
        desc: "From SEO to Ads — we ensure you're visible online. Enjoy quick onboarding, training, and ongoing support.",
        icon: Zap,
    },
]

/**
 * FeaturesSection component – Displays key features with animations and hover effects.
 * Highlights what sets the product or service apart for users.
 */
export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-300 dark:to-gray-400"
        >
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-600"
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Built to Help You Succeed
                </motion.h2>

                <motion.p
                    className="text-gray-600 dark:text-gray-700 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    More than just software — we partner with you to build strong technology foundations.
                    Here&apos;s what makes us stand apart.
                </motion.p>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-100 dark:to-gray-300 border border-teal-500 rounded-2xl p-8 shadow-sm hover:shadow-md transition cursor-pointer"
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
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-900 mb-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-500 hover:after:w-full after:transition-all after:duration-300">
                                {item.title}
                            </h3>
                            <p className="text-base text-gray-600 dark:text-gray-700">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
