"use client"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("theme")
        const prefersDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)

        const html = document.documentElement
        html.classList.remove("dark", "light")
        html.classList.add(prefersDark ? "dark" : "light")

        setIsDark(prefersDark)
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark"
        const html = document.documentElement
        html.classList.remove("dark", "light")
        html.classList.add(newTheme)
        localStorage.setItem("theme", newTheme)
        setIsDark(!isDark)
    }

    // Prevent hydration mismatch
    if (!mounted) return null

    return (
        <>
            <button
                onClick={toggleTheme}
                className="fixed top-5 right-5 z-[9999] p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
                aria-label="Toggle Theme"
            >
                {isDark ? "🌞" : "🌙"}
            </button>
            {children}
        </>
    )
}
