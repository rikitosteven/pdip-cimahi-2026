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
    <section id="galeri" className="section px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">
            Kegiatan di Lapangan
          </h2>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Setiap langkah adalah komitmen. Dokumentasi kegiatan nyata
            bersama warga Kota Cimahi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src={`/kegiatan/${photo}`}
                alt="Kegiatan PDIP Cimahi"
                width={600}
                height={400}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium tracking-wide">
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