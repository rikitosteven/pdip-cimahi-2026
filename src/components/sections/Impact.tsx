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
        <h2 className="text-4xl md:text-6xl font-semibold mb-20">
          Dampak Nyata.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-5xl font-bold text-[#E10600]">
              <Counter value={124} />+
            </h3>
            <p>Program Sosial</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#E10600]">
              <Counter value={5} />+
            </h3>
            <p>Inisiatif Digital</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#E10600]">
              <Counter value={3000} />+
            </h3>
            <p>Relawan Aktif</p>
          </div>
        </div>
      </div>
    </section>
  );
}