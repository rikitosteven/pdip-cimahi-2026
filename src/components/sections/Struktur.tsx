"use client";

import { motion } from "framer-motion";

export default function Struktur() {
  return (
    <section id="struktur" className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto text-center space-y-16">

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Struktur DPC
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            { name: "Ketua DPC", desc: "Memimpin arah strategis organisasi." },
            { name: "Sekretaris DPC", desc: "Mengelola koordinasi & administrasi." },
            { name: "Bendahara DPC", desc: "Mengelola transparansi keuangan." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p className="mt-4 text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}