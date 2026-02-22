"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const upcoming = [
  {
    title: "Bakti Sosial & Pemeriksaan Gratis",
    date: "18 Maret 2025",
    location: "Kelurahan Melong",
  },
  {
    title: "Forum Dialog Pemuda",
    date: "5 April 2025",
    location: "Cimahi Tengah",
  },
];

const gallery = [
  "dialog1.jpg",
  "baksos1.jpg",
  "umkm1.jpg",
];

export default function Aktivitas() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="aktivitas"
      ref={ref}
      className="relative overflow-hidden bg-neutral-950 text-white"
    >
      {/* SAFE TEXTURE OVERLAY (NO SVG) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* ============================= */}
      {/* CINEMATIC HERO BLOCK */}
      {/* ============================= */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/kegiatan/dialog1.jpg"
            alt="Kegiatan Massa"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 flex items-center">
          <div className="container-custom px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="h-1 w-20 bg-[var(--primary-red)] mb-8" />

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Kami Tidak Menunggu
                <br />
                <span className="text-[var(--primary-red)]">
                  Perubahan.
                </span>
              </h2>

              <p className="mt-8 text-xl md:text-2xl text-neutral-200 leading-relaxed">
                Kami bergerak bersama warga.
                Dari dialog hingga aksi nyata di lapangan.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 text-sm"
        >
          ↓ Scroll
        </motion.div>
      </div>

      {/* ============================= */}
      {/* AGENDA */}
      {/* ============================= */}
      <div className="section px-6 relative">
        <div className="container-custom">
          <h3 className="text-2xl font-semibold mb-12 text-[var(--primary-red)]">
            Agenda Mendatang
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {upcoming.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-[var(--primary-red)] transition"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-sm">
                  {item.date}
                </p>
                <p className="text-neutral-500 text-sm mt-1">
                  {item.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* GALLERY */}
      {/* ============================= */}
      <div className="section px-6 relative border-t border-white/10">
        <div className="container-custom">
          <h3 className="text-2xl font-semibold mb-12 text-[var(--primary-red)]">
            Dokumentasi Lapangan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {gallery.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative group overflow-hidden rounded-3xl cursor-pointer"
              >
                <Image
                  src={`/kegiatan/${photo}`}
                  alt="Dokumentasi Kegiatan"
                  width={1000}
                  height={700}
                  className="object-cover w-full h-80 transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    Lihat Dokumentasi
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}