"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Agenda() {
  const events = [
    {
      title: "Dialog Publik Warga Cibeureum",
      date: "12 Januari 2025",
      location: "Kelurahan Cibeureum",
      status: "Selesai",
      image: "/kegiatan/kegiatan4.jpg",
    },
    {
      title: "Pelatihan UMKM & Digital Marketing",
      date: "3 Februari 2025",
      location: "Aula Kecamatan Cimahi Tengah",
      status: "Selesai",
      image: "/kegiatan/kegiatan5.jpg",
    },
    {
      title: "Bakti Sosial & Pemeriksaan Kesehatan Gratis",
      date: "18 Maret 2025",
      location: "Kelurahan Melong",
      status: "Mendatang",
      image: "/kegiatan/kegiatan6.jpg",
    },
  ];

  return (
    <section
      id="agenda"
      className="section px-6 relative overflow-hidden bg-white dark:bg-neutral-950"
    >
      {/* Subtle Red Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(225,6,0,0.08),transparent_60%)]" />

      <div className="container-custom relative z-10">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Agenda & Kegiatan
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event) => (
            <motion.div
              key={event.title}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800 transition"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                {/* Status Badge */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                    event.status === "Mendatang"
                      ? "bg-green-100 text-green-600"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                  }`}
                >
                  {event.status}
                </span>

                <h4 className="text-lg font-semibold mb-2">
                  {event.title}
                </h4>

                <p className="text-sm text-neutral-500">
                  {event.date}
                </p>

                <p className="text-sm text-neutral-400 mt-1">
                  {event.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}