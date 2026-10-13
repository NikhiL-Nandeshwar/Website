"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import ToggleTheme from "../theme/toggle-theme";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "features", label: "Why Us" },
  { id: "footer", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const setFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && LINKS.some((link) => link.id === hashId)) {
        setCurrentSection(hashId);
      }
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  useEffect(() => {
    const getActiveSectionFromScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const markerY = viewportHeight * 0.85;
      let activeId = LINKS[0].id;

      // Ensure the last section becomes active when user reaches page end,
      // even if that section is shorter than the viewport.
      if (scrollY + viewportHeight >= documentHeight - 2) {
        setCurrentSection(LINKS[LINKS.length - 1].id);
        return;
      }

      // First pass: section that contains the marker line in viewport.
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= markerY && rect.bottom >= markerY) {
          activeId = link.id;
          setCurrentSection(activeId);
          return;
        }
      }

      // Second pass fallback: last section whose top has crossed marker.
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= markerY) {
          activeId = link.id;
        }
      }

      setCurrentSection(activeId);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          getActiveSectionFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    getActiveSectionFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", getActiveSectionFromScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", getActiveSectionFromScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setCurrentSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-[0_12px_30px_-18px_rgba(0,0,0,0.45)] border-b border-cyan-100/70 dark:border-cyan-900/50"
          : "bg-transparent"
      )}
    >
      <div className="section-shell flex items-center justify-between py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/nt_logo.png"
            alt="Nexspire Technologies"
            width={146}
            height={62}
            className="h-16 w-auto md:h-20"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-7 items-center text-sm font-semibold tracking-wide">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={clsx(
                "transition-colors",
                currentSection === link.id
                  ? "text-cyan-600 dark:text-cyan-300"
                  : "text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ToggleTheme />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ToggleTheme />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-cyan-100 dark:border-cyan-900/60"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden px-6 pb-5 pt-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-cyan-100/80 dark:border-cyan-900/60 space-y-3 text-sm font-medium">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={clsx(
                "block transition-colors",
                currentSection === link.id
                  ? "text-cyan-600 dark:text-cyan-300"
                  : "text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
