"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
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
    <section id="impact" className="section px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          Dampak Nyata di Lapangan
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-10 rounded-2xl shadow-sm"
            >
              <h3 className="text-5xl font-bold text-[var(--primary-red)]">
                <Counter value={item.value} />+
              </h3>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}