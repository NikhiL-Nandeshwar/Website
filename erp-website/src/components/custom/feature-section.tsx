'use client'

import { Layers3, Zap, LayoutGrid } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Smart & Scalable Systems",
    desc: "Whether it's an apartment, society, or business — our platforms are built to scale with your operations, offering automation, seamless workflows and a modern user experience.",
    icon: Layers3,
  },
  {
    title: "Modern Websites that Inspire Trust",
    desc: "We build fast, responsive and SEO-ready websites designed to elevate your brand, improve engagement, and convert visitors into customers or members.",
    icon: LayoutGrid,
  },
  {
    title: "Digital Growth & Dedicated Support",
    desc: "From SEO and ads to onboarding and training — we ensure you're visible online and supported throughout your digital journey.",
    icon: Zap,
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">

        <motion.h2
          className="text-4xl font-bold mb-5 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Built to Help You Succeed
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Smart systems, modern websites, and long-term growth support — helping you build reliable digital foundations.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/10 to-transparent dark:from-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-5 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
