"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden text-white">

      <Image
        src="/hero/hero.webp"
        alt="Kegiatan masyarakat Cimahi"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

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

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#program"
            className="px-8 py-3 rounded-full bg-[var(--primary-red)] hover:scale-105 transition"
          >
            Lihat Program
          </a>

          <a
            href="#aspirasi"
            className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            Sampaikan Aspirasi
          </a>
        </div>
      </motion.div>
    </section>
  );
}