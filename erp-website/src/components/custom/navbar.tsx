"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import ToggleTheme from "../theme/toggle-theme";

const SECTIONS = ["home", "about", "services", "features", "contact"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentSection, setCurrentSection] = useState<string>("home");

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleSections.length > 0) {
                const topSection = visibleSections[0];
                const id = topSection.target.getAttribute("id");
                if (id) setCurrentSection(id);
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.4, // Adjusted threshold
        });

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            SECTIONS.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let current = "home";
            let minDistance = Infinity;

            for (const id of SECTIONS) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const distance = Math.abs(rect.top);

                    if (rect.top <= 40 && distance < minDistance) {
                        minDistance = distance;
                        current = id;
                    }
                }
            }

            setCurrentSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                <Link
                    href="/"
                    className="flex items-center gap-1.5 text-xl md:text-3xl font-bold tracking-tight"
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    NexSpire
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center font-medium">
                    {SECTIONS.map((id) => (
                        <Link
                            key={id}
                            href={`#${id === "contact" ? "footer" : id}`}
                            className={clsx(
                                "transition-colors",
                                currentSection === id
                                    ? "text-cyan-400"
                                    : "hover:text-cyan-400"
                            )}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                    <ToggleTheme />
                </nav>

                {/* Mobile: Toggle Theme & Menu */}
                <div className="md:hidden flex items-center gap-2">
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
                    {["home", "about", "services", "features", "contact"].map((id) => {
                        const hrefId = id === "contact" ? "footer" : id;
                        return (
                            <Link
                                key={id}
                                href={`#${hrefId}`}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block hover:text-cyan-300",
                                    currentSection === hrefId && "text-cyan-200 font-semibold"
                                )}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}
