"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  {
    title: "Transparan & Terbuka",
    desc: "Setiap kebijakan harus bisa dipahami publik dan diawasi bersama.",
  },
  {
    title: "Ekonomi Naik Kelas",
    desc: "UMKM dan pelaku usaha lokal menjadi prioritas pembangunan.",
  },
  {
    title: "Ruang Generasi Muda",
    desc: "Pemuda diberi ruang nyata untuk ikut menentukan arah kota.",
  },
];

export default function VisiMisi() {
  return (
    <section
      id="visi"
      className="relative section px-6 text-white overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/kegiatan/kegiatan1.jpg"
        alt="Kegiatan masyarakat Cimahi"
        fill
        className="object-cover"
      />

      {/* Dark Overlay (tanpa blur berlebihan) */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="container-custom relative z-10">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Visi & Arah Pergerakan
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-200">
            Politik bukan soal kekuasaan.
            Ini tentang keberanian mendengar,
            bekerja bersama,
            dan hadir di tengah masyarakat.
          </p>
        </motion.div>

        {/* Direction Points */}
        <div className="grid md:grid-cols-3 gap-10">
          {points.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
            >
              <h4 className="text-xl font-semibold mb-4 text-[var(--primary-red)]">
                {item.title}
              </h4>

              <p className="text-neutral-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}