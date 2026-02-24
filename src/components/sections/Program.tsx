"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Ekonomi Kerakyatan",
    desc: "Pendampingan UMKM dan pelaku usaha lokal agar naik kelas secara digital dan berkelanjutan.",
    image: "/kegiatan/kegiatan2.jpg",
  },
  {
    title: "Transparansi Publik",
    desc: "Laporan kegiatan dan penggunaan anggaran yang terbuka serta bisa diakses masyarakat.",
    image: "/kegiatan/kegiatan3.jpg",
  },
];

export default function Program() {
  return (
    <section
      id="program"
      className="section px-6 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(225,6,0,0.07),transparent_60%)]" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            Program Pergerakan
          </h2>

          <p className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Bukan sekadar rencana. Ini langkah konkret yang sudah berjalan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {programs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-(--primary-red)">
                  {item.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
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