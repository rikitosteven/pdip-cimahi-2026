"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const strukturDPC = [
  {
    nama: "Agung Yudaswara",
    jabatan: "Ketua DPC",
    foto: "/struktur/agung.jpg",
    deskripsi:
      "Memimpin arah gerakan progresif PDIP Cimahi dengan fokus pada transparansi dan keberpihakan pada rakyat.",
  },
  {
    nama: "Pranjani Radja",
    jabatan: "Sekretaris DPC",
    foto: "/struktur/pranjani.png",
    deskripsi:
      "Mengkoordinasikan organisasi dan memastikan tata kelola partai berjalan efektif dan profesional.",
  },
  {
    nama: "Freddy Siagian",
    jabatan: "Bendahara DPC",
    foto: "/struktur/freddy.png",
    deskripsi:
      "Mengelola keuangan secara akuntabel untuk mendukung seluruh program perjuangan.",
  },
];

export default function Struktur() {
  return (
    <section
      id="struktur"
      className="py-40 px-6 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
          Struktur Organisasi
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mb-20">
          Struktur DPC.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {strukturDPC.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-8 text-left">
                <p className="text-[#E10600] font-medium text-sm mb-2">
                  {item.jabatan}
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  {item.nama}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}