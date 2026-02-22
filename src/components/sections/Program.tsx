"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Ekonomi Kerakyatan",
    desc: "Pendampingan UMKM dan pelaku usaha lokal untuk naik kelas.",
    image: "/kegiatan/kegiatan2.jpg",
  },
  {
    title: "Transparansi Publik",
    desc: "Laporan kegiatan dan anggaran yang terbuka untuk masyarakat.",
    image: "/kegiatan/kegiatan3.jpg",
  },
];

export default function Program() {
  return (
    <section id="program" className="section px-6 bg-white dark:bg-neutral-950">
      <div className="container-custom">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Program Pergerakan
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {programs.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary-red)]">
                  {item.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}