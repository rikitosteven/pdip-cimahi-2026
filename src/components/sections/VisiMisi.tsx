"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function VisiMisi() {
  return (
    <section
      id="visi"
      className="relative section px-6 bg-[#111] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-red)]/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Visi & Arah
            <br />
            <span className="primary-text">Pergerakan.</span>
          </h2>

          <p className="mt-10 text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto text-neutral-300">
            Politik bukan soal kekuasaan.
            Ini tentang masa depan kota,
            ruang bagi generasi muda,
            dan keberanian untuk berubah.
          </p>
        </motion.div>
      </div>
    </section>
  );
}