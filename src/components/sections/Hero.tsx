"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden text-white">

      {/* Background Image */}
      <Image
        src="/hero/hero.webp"
        alt="Gerakan masyarakat Cimahi"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay lebih clean & tajam */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Cimahi Butuh
          <br />
          <span className="text-[var(--primary-red)]">
            Gerakan Nyata.
          </span>
        </h1>

        {/* Subtext – lebih movement tone */}
        <p className="mt-8 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
          Bukan sekadar janji lima tahunan.
          <br />
          Ini gerakan yang sudah dimulai — hari ini.
        </p>

        {/* Single CTA – lebih kuat & fokus */}
        <div className="mt-12">
          <a
            href="#galeri"
            className="px-10 py-4 rounded-full bg-[var(--primary-red)] font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Lihat Pergerakan
          </a>
        </div>

        {/* Mini Visual Stats – lebih modern */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm text-neutral-200">
          <div>
            <p className="text-2xl font-bold text-[var(--primary-red)]">280+</p>
            <p>Relawan</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[var(--primary-red)]">17</p>
            <p>Kegiatan</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[var(--primary-red)]">6</p>
            <p>Kelurahan</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-300 text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}