'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IntroSection() {
    return (
        <section
            id="intro"
            className="bg-gradient-to-r from-cyan-50 to-white dark:from-gray-600 dark:to-gray-700 py-20"
        >
            <div className="max-w-screen-xl mx-auto px-5 sm:px-6 md:px-9 flex flex-col-reverse md:flex-row items-center gap-10">
                
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-200 mb-6">
                        Powering <span className="text-cyan-600">Institutions</span>,<br />
                        Accelerating <span className="text-cyan-600">Digital Growth</span>
                    </h1>

                    <p className="text-gray-600 dark:text-cyan-100 text-base sm:text-lg mb-6 max-w-xl mx-auto md:mx-0">
                        Build smarter systems with our all-in-one solutions: Educational ERP, custom web portals, and digital marketing strategies — tailored to grow schools, colleges, educational institutes, and businesses in today’s fast-paced world.
                    </p>

                    <Link href="#about">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white dark:text-gray-200 px-6 py-2 text-sm sm:text-base">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/intro-img.svg"
                        alt="Smart Digital ERP"
                        width={500}
                        height={500}
                        className="object-contain max-w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
