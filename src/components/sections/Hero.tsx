"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Ambient Civic Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-800 h-800 bg-[#E10600]/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      <motion.div style={{ y }} className="max-w-4xl">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
          Civic Movement Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          <span className="relative inline-block">
            PDIP Kota Cimahi.
            <span className="absolute inset-0 blur-2xl opacity-30 bg-[#E10600] -z-10" />
          </span>
          <br />
          <span className="text-[#E10600]">
            Bergerak untuk Masa Depan.
          </span>
        </h1>

        <p className="mt-10 text-lg text-neutral-600 max-w-2xl mx-auto">
          Transparansi. Partisipasi. Progres.  
          Politik modern untuk generasi baru.
        </p>
      </motion.div>
    </section>
  );
}