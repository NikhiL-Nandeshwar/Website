"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import Image from "next/image"
import ToggleTheme from "../theme/toggle-theme"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
                scrolled
                    ? "bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-gray-100"
                    : "bg-transparent text-cyan-700 dark:text-cyan-400"
            )}
        >
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl md:text-3xl font-bold tracking-tight">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    Demo Company
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center font-medium">
                    <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
                    <Link href="#services" className="hover:text-cyan-400 transition-colors">Services</Link>
                    <Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link>
                    <Link href="#footer" className="hover:text-cyan-400 transition-colors">Contact</Link>
                    <ToggleTheme />
                </nav>

                {/* Mobile: Toggle Theme & Menu */}
                <div className="md:hidden flex items-center gap-4">
                    <ToggleTheme />
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <nav
                    className={clsx(
                        "md:hidden px-6 pb-4 space-y-3 py-2 text-sm font-medium transition-all",
                        scrolled
                            ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                            : "bg-gradient-to-b from-cyan-600 to-cyan-700 text-white"
                    )}
                >
                    {["about", "services", "features", "footer"].map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            onClick={() => setIsOpen(false)}
                            className="block hover:text-cyan-300"
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}
