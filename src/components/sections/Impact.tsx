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
  return (
    <section id="impact" className="py-40 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
          Transparansi & Dampak
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mb-20">
          Dampak Nyata.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { value: 124, label: "Program Sosial" },
            { value: 5, label: "Inisiatif Digital" },
            { value: 3000, label: "Relawan Aktif" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 p-10 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-[#E10600]">
                <Counter value={item.value} />+
              </h3>
              <p className="mt-4 text-neutral-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}