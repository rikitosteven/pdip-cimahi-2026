"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Impact() {
  const stats = [
    { value: 17, label: "Kegiatan Sosial 2024" },
    { value: 6, label: "Kelurahan Aktif" },
    { value: 280, label: "Relawan Terlibat" },
    { value: 132, label: "Aspirasi Masuk" },
  ];

  return (
    <section
      id="impact"
      className="section px-6 relative overflow-hidden bg-neutral-100 dark:bg-neutral-900"
    >
      {/* Subtle Red Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.08),transparent_60%)]" />

      <div className="container-custom relative z-10 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20"
        >
          Dampak Nyata di Lapangan
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-10 rounded-3xl shadow-md transition"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-(--primary-red)">
                <Counter value={item.value} />+
              </h3>

              <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}