"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  "dialog1.jpg",
  "baksos1.jpg",
  "umkm1.jpg",
];

export default function Galeri() {
  return (
    <section
      id="galeri"
      className="section px-6 relative overflow-hidden bg-neutral-100 dark:bg-neutral-900"
    >
      {/* Subtle Red Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.06),transparent_70%)]" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">
            Kegiatan di Lapangan
          </h2>

          <p className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Setiap langkah adalah komitmen.
            Dokumentasi kegiatan nyata bersama warga Kota Cimahi.
          </p>
        </div>

        {/* Grid Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-md"
            >
              <Image
                src={`/kegiatan/${photo}`}
                alt="Kegiatan PDIP Cimahi"
                width={800}
                height={600}
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-110"
              />

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-wide">
                  Lihat Dokumentasi
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}