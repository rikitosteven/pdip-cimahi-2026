"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ibu Rina – Pelaku UMKM",
    text: "Pendampingan UMKM sangat membantu usaha kami berkembang.",
    photo: "rina.jpg",
  },
  {
    name: "Pak Dedi – Warga Melong",
    text: "Dialog publik membuat kami bisa menyampaikan aspirasi secara langsung.",
    photo: "dedi.jpg",
  },
  {
    name: "Aldi – Pemuda Cimahi",
    text: "Program kepemudaan memberi ruang bagi generasi muda.",
    photo: "aldi.jpg",
  },
];

export default function SuaraWarga() {
  return (
    <section id="suara" className="section px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          Suara Warga
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 rounded-3xl shadow-sm"
            >
              <p className="text-neutral-600 dark:text-neutral-400 italic mb-8">
                “{item.text}”
              </p>

              <div className="flex items-center gap-4 justify-center">
                <Image
                  src={`/warga/${item.photo}`}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-[var(--primary-red)] object-cover"
                />

                <h4 className="font-semibold text-[var(--primary-red)] text-sm">
                  {item.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}