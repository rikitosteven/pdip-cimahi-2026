"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hero/hero.webp"
        alt="PDIP Cimahi"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white px-6"
      >
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Bergerak untuk
          <br />
          <span className="text-[#E10600]">
            Cimahi Lebih Maju.
          </span>
        </h1>

        <p className="mt-8 max-w-xl mx-auto text-lg text-neutral-200">
          Gerakan progresif berbasis transparansi, partisipasi,
          dan keberpihakan pada rakyat.
        </p>
      </motion.div>
    </section>
  );
}