'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IntroSection() {
    return (
        <section id="intro"
             className="bg-gradient-to-r from-cyan-50 to-white dark:from-gray-600 dark:to-gray-700 py-16 px-4">
            <div className="container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-400 mb-6">
                        Powering <span className="text-cyan-600">Institutions</span>,<br />
                        Accelerating <span className="text-cyan-600">Digital Growth</span>
                    </h1>
                    <p className="text-gray-600 dark:text-cyan-600 text-base md:text-lg mb-6 max-w-lg">
                        Build smarter systems with our all-in-one solutions: Educational ERP, custom web portals, and digital marketing strategies — tailored to grow schools, colleges, and businesses in today’s fast-paced world.
                    </p>
                    <Link href="#about">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white dark:text-gray-300 px-6 py-2 text-sm md:text-base">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/intro-img.svg"
                        alt="Smart Digital ERP"
                        width={550}
                        height={550}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
