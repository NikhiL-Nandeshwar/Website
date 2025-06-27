'use client'

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="py-10 px-5 bg-white">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row gap-10 items-start">               
                    {/* Left Image */}
                    <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/system.png"
                                alt="ERP Setup Demo"
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 p-3">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                            Transforming Education & Business Through Technology
                        </h3>
                        <p className="text-gray-600 mb-4">
                            At <span className="font-semibold text-cyan-600">Demo Company</span>, we’re on a mission to simplify digital transformation for schools, educational institutes and businesses. Our team blends innovation, functionality, and user-first thinking to deliver results that matter.
                        </p>
                        <p className="text-gray-600 mb-4">
                            From helping a small school digitize its entire academic workflow to enabling a startup’s online growth — we build solutions that are reliable, scalable, and tailored to your vision.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our core expertise lies in crafting full-featured Educational ERP systems, building modern websites, and executing digital marketing strategies that drive measurable growth. We aim to be a one-stop tech partner you can count on.
                        </p>
                        <ul className="space-y-3 font-medium text-gray-700">
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
