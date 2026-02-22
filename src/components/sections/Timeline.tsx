"use client";

import { motion } from "framer-motion";

const items = [
  {
    year: "2020",
    title: "Reformasi Internal",
    desc: "Memperkuat struktur dan transparansi organisasi.",
  },
  {
    year: "2022",
    title: "Digitalisasi Gerakan",
    desc: "Platform partisipatif berbasis teknologi.",
  },
  {
    year: "2024",
    title: "Program Sosial Progresif",
    desc: "Inisiatif langsung menyentuh masyarakat.",
  },
];

export default function Timeline() {
  return (
    <section className="py-40 px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-20">
          Perjalanan Gerakan.
        </h2>

        <div className="space-y-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 border border-neutral-200 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-800"
            >
              <p className="text-[#E10600] font-semibold mb-2">
                {item.year}
              </p>
              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}