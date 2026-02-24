"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      {/* HERO */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/kegiatan/dialog1.jpg"
            alt="Kegiatan"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 flex items-center">
          <div className="container-custom px-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Kami Tidak Menunggu Perubahan.
            </h2>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="section px-6 border-t border-white/10">
        <div className="container-custom">
          <h3 className="text-2xl font-semibold mb-12 text-red-600">
            Dokumentasi Lapangan
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {gallery.map((photo) => (
              <div key={photo} className="relative rounded-3xl overflow-hidden">
                <Image
                  src={`/kegiatan/${photo}`}
                  alt="Dokumentasi"
                  width={1000}
                  height={700}
                  className="object-cover w-full h-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}