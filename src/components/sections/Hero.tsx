"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden text-white">

      {/* Background Image */}
      <Image
        src="/hero/hero.webp"
        alt="Kegiatan masyarakat Cimahi"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay (lebih dramatis, tanpa blur berlebihan) */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Cimahi Butuh
          <br />
          <span className="text-[var(--primary-red)]">
            Gerakan Nyata.
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto">
          Bukan sekadar janji. Tapi aksi.
          Transparan, terbuka, dan berpihak pada rakyat.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#program"
            className="px-8 py-3 rounded-full bg-[var(--primary-red)] hover:scale-105 transition"
          >
            Lihat Program
          </a>

          <a
            href="#galeri"
            className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            Lihat Kegiatan
          </a>
        </div>

        {/* Trust Signal */}
        <p className="mt-8 text-sm text-neutral-300">
          17 kegiatan sosial · 280 relawan · 6 kelurahan aktif
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-300 text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}