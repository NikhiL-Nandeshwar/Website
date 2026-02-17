"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TAGS = [
  "Business Software",
  "Society Management",
  "Premium Websites",
  "Digital Business Cards",
  "Social Media Bundles",
];

const PROOF_ITEMS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "48h", label: "Average First Response" },
  { value: "95%", label: "Client Retention Focus" },
];

export default function IntroSection() {
  return (
    <section id="home" className="pt-28 pb-20 md:pb-24">
      <div className="section-shell">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="inline-flex rounded-full border border-cyan-200 dark:border-cyan-800 px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 bg-white/70 dark:bg-slate-900/60 mb-5">
              Nexspire Technologies
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-50">
              Premium Digital
              <span className="block text-cyan-600 dark:text-cyan-300">
                Products For Growing Brands
              </span>
            </h1>

            <p className="section-lead mt-6 max-w-xl mx-auto md:mx-0">
              We design and build software, websites, and growth campaigns that
              make your business look professional, work faster, and convert
              better.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-6 justify-center md:justify-start">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-sm rounded-full px-3 py-1.5 bg-cyan-50 dark:bg-cyan-950/40 text-slate-700 dark:text-slate-200 border border-cyan-100 dark:border-cyan-900/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <Link href="#services">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6">
                  Explore Services
                </Button>
              </Link>
              <Link href="#footer">
                <Button
                  variant="outline"
                  className="border-cyan-200 dark:border-cyan-800 text-slate-800 dark:text-slate-100 hover:bg-cyan-50 dark:hover:bg-cyan-950/40"
                >
                  Contact Team
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="relative overflow-hidden glass-card rounded-3xl p-5 md:p-7 max-w-xl transition-all duration-300 hover:shadow-[0_24px_50px_-30px_rgba(8,145,178,0.55)]">
              <Image
                src="/intro-img.svg"
                alt="Nexspire digital solutions"
                width={560}
                height={460}
                className="w-full h-auto object-contain"
                priority
              />

              <motion.div
                aria-hidden
                className="absolute top-0 left-0 h-full w-1/2 bg-[#1e95bc] dark:bg-[#302104] border-r border-amber-300/20 dark:border-amber-700/30"
                initial={{ x: 0 }}
                whileInView={{ x: "-110%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  aria-hidden
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 h-11 w-2.5 rounded-full bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 shadow-[inset_0_0_0_1px_rgba(120,53,15,0.45),0_2px_10px_rgba(0,0,0,0.35)]"
                />
              </motion.div>
              <motion.div
                aria-hidden
                className="absolute top-0 right-0 h-full w-1/2 bg-[#1e95bc] dark:bg-[#302104] border-l border-amber-300/20 dark:border-amber-700/30"
                initial={{ x: 0 }}
                whileInView={{ x: "110%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  aria-hidden
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 h-11 w-2.5 rounded-full bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 shadow-[inset_0_0_0_1px_rgba(120,53,15,0.45),0_2px_10px_rgba(0,0,0,0.35)]"
                />
              </motion.div>
              <motion.div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-12 md:-translate-y-14"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 2.35 }}
              >
                <motion.span
                  className="text-amber-200 dark:text-amber-300 font-semibold tracking-[0.14em] text-[11px] md:text-sm uppercase px-4 py-2 rounded-full border border-amber-200/35 dark:border-amber-700/45 bg-black/30 dark:bg-black/40 backdrop-blur-sm shadow-[0_0_22px_rgba(251,191,36,0.18)]"
                  initial={{ scale: 1, opacity: 1 }}
                  whileInView={{ scale: 1.04, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.35 }}
                >
                  Welcome to Nexspire Technologies !!
                 </motion.span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 right-4 pointer-events-none"
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 3.35 }}
              >
                <div className="rounded-2xl border border-cyan-200/80 dark:border-cyan-800/80 bg-white/90 dark:bg-slate-400 backdrop-blur-md px-4 py-2 text-center shadow-[0_14px_30px_-20px_rgba(6,182,212,0.55)]">
                  <p className="text-[11px] md:text-xs tracking-[0.11em] uppercase font-semibold text-cyan-700 dark:text-cyan-200 leading-relaxed">
                    Where Ideas Become Reality
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {PROOF_ITEMS.map((item, idx) => (
            <motion.div
              key={item.label}
              className="glass-card rounded-2xl p-5 text-center sm:text-left"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-cyan-700 dark:text-cyan-300">
                {item.value}
              </p>
              <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
