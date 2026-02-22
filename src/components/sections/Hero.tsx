"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div style={{ y }} className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          <span className="relative inline-block">
            PDIP Kota Cimahi.
            <span className="absolute inset-0 blur-2xl opacity-30 bg-[#E10600] -z-10" />
          </span>
          <br />
          <span className="relative text-[#E10600]">
            Bergerak untuk Masa Depan.
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#E10600] blur-sm opacity-40" />
          </span>
        </h1>

        <p className="mt-8 text-neutral-600 dark:text-neutral-400 text-lg">
          Platform politik progresif untuk transparansi, partisipasi,
          dan masa depan kota yang berkelanjutan.
        </p>
      </motion.div>
    </section>
  );
}