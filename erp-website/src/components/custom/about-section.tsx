'use client'

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-700">
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
                        <h2 className="text-4xl font-bold mb-4 dark:text-gray-200">About Us</h2>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            Simplifying Operations for Institutions, Societies & Businesses
                        </h3>

                        <p className="text-gray-600 mb-4 dark:text-cyan-400">
                            At <span className="font-semibold text-cyan-600 dark:text-gray-100">Nexspire Technologies</span>, we empower organizations through digital innovation. 
                            Whether it’s managing apartments, a housing society, or a growing business — 
                            our solutions streamline workflows, improve transparency, and enhance decision-making.
                        </p>

                        <p className="text-gray-600 mb-4 dark:text-cyan-400">
                            We specialize in creating powerful, easy-to-use systems — from modern Society Management Software
                            to business ERP softwares — 
                            all tailored to meet real-world needs with efficiency and scalability.
                        </p>

                        <p className="text-gray-600 mb-6 dark:text-cyan-400">
                            Our approach blends smart technology with clean design and practical functionality, 
                            helping clients reduce manual work and focus on growth.
                        </p>

                        <ul className="space-y-3 font-medium text-gray-700 dark:text-cyan-300">
                            {[
                                "Business ERP software covering automation part of business requirements.",
                                "Society/Apartment Management Software for maintenance, billing & member management.",
                                "Custom business websites built for performance and brand identity.",
                                "SEO, social media & digital marketing strategies for measurable growth.",
                                "Reliable support with flexible, custom feature development.",
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
