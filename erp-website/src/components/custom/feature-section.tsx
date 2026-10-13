"use client";

import { motion } from "framer-motion";
import { Headset, LayoutGrid, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Premium-First Execution",
    desc: "Design direction, copy, and frontend polish are aligned to present your business as credible and high-quality.",
    icon: LayoutGrid,
  },
  {
    title: "Operational Reliability",
    desc: "Your system architecture is built for maintainability, role access control, and practical everyday use by teams.",
    icon: ShieldCheck,
  },
  {
    title: "Hands-On Support",
    desc: "From onboarding to updates, our team stays involved so your product and campaigns keep improving over time.",
    icon: Headset,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16">
      <div className="section-shell">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300 mb-3">
            Why Clients Choose Us
          </p>
          <h2 className="section-title text-slate-900 dark:text-slate-50">
            A Team That Builds for Long-Term Business Value
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/80 dark:hover:border-cyan-700/70 hover:shadow-[0_24px_50px_-30px_rgba(8,145,178,0.55)]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.45 }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_20px_-14px_rgba(8,145,178,0.65)]">
                <item.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
