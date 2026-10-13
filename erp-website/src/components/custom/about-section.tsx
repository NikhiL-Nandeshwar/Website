"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Business software with focused automation for daily operations.",
  "Society and apartment platforms for billing, records, and communication.",
  "Fast, conversion-focused websites with a premium brand look.",
  "SEO and digital marketing execution backed by clear campaign goals.",
  "Reliable support with custom features as your needs evolve.",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="section-shell">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300 mb-3">
              About Nexspire
            </p>
            <h2 className="section-title text-slate-900 dark:text-slate-50">
              Practical Technology For Real Business Outcomes
            </h2>
            <p className="section-lead mt-5">
              We help societies, institutions, and companies replace manual
              processes with clean digital systems. Every product is built to be
              easy to operate, easy to scale, and aligned with your workflow.
            </p>

            <ul className="mt-7 space-y-3.5">
              {POINTS.map((point, idx) => (
                <motion.li
                  key={point}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.32, delay: idx * 0.06 }}
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-200">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="glass-card rounded-3xl p-4 md:p-5 transition-all duration-300 hover:shadow-[0_20px_45px_-28px_rgba(8,145,178,0.5)]">
              <Image
                src="/system.png"
                alt="Nexspire business system preview"
                width={700}
                height={520}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
