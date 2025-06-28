'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ToggleTheme() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        const prefersDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)

        const html = document.documentElement
        html.classList.remove('dark', 'light')
        html.classList.add(prefersDark ? 'dark' : 'light')

        setIsDark(prefersDark)
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark'
        const html = document.documentElement
        html.classList.remove('dark', 'light')
        html.classList.add(newTheme)
        localStorage.setItem('theme', newTheme)
        setIsDark(!isDark)
    }

    if (!mounted) return null

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-cyan-200 dark:border-yellow-700 shadow bg-white dark:bg-gray-800 hover:scale-105 transition"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-cyan-700" />}
        </button>
    )
}
