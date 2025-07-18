'use client'

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="py-12 bg-white dark:bg-gray-700">
            <div className="max-w-screen-xl mx-auto md:px-10 px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left Image */}
                    <div className="md:w-1/2 w-full flex justify-center md:block">
                        <div className="rounded-lg overflow-hidden shadow-lg max-w-lg max-h-full">
                            <Image
                                src="/system.png"
                                alt="ERP Setup"
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">About Us</h2>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            Transforming Education & Business Through Technology
                        </h3>
                        <p className="text-gray-600 mb-4 dark:text-cyan-400">
                            At <span className="font-semibold text-cyan-600 dark:text-gray-100">NexSpire</span>, we’re on a mission to simplify digital transformation for schools, educational institutes and businesses. Our team blends innovation, functionality, and user-first thinking to deliver results that matter.
                        </p>
                        <p className="text-gray-600 mb-4 dark:text-cyan-400">
                            From helping a small school digitize its entire academic workflow to enabling a startup’s online growth — we build solutions that are reliable, scalable, and tailored to your vision.
                        </p>
                        <p className="text-gray-600 mb-6 dark:text-cyan-400">
                            Our core expertise lies in crafting full-featured Educational ERP systems, building modern websites, and executing digital marketing strategies that drive measurable growth.
                        </p>
                        <ul className="space-y-3 font-medium text-gray-700 dark:text-cyan-300">
                            {[
                                "All-in-one Educational ERP: Admissions, academics, finance, biometrics, reports & more.",
                                "Custom websites designed for performance, usability, and scalability.",
                                "SEO, branding, and advertising strategies that boost visibility & leads.",
                                "Dedicated support and custom feature development on demand.",
                            ].map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 mt-1" size={18} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
