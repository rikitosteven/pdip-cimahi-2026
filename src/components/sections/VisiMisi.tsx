"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function VisiMisi() {
  return (
    <section
      id="visi"
      className="relative py-40 md:py-56 px-6 bg-[#111] text-white overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#E10600]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Visi & Arah
            <br />
            <span className="text-[#E10600]">Pergerakan.</span>
          </h2>

          <p className="mt-10 text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto text-neutral-300">
            Politik bukan soal kekuasaan.
            <br />
            Ini tentang masa depan kota,
            ruang bagi generasi muda,
            dan keberanian untuk berubah.
          </p>
        </motion.div>

        {/* Manifesto Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {[
            {
              title: "Transparan & Terbuka",
              desc: "Setiap kebijakan harus bisa dipahami publik. Tidak ada ruang untuk keputusan tertutup."
            },
            {
              title: "Ekonomi Naik Kelas",
              desc: "UMKM, kreator, dan startup lokal harus jadi motor pertumbuhan kota."
            },
            {
              title: "Politik Ramah Generasi Muda",
              desc: "Memberi ruang partisipasi nyata bagi pemuda dalam pengambilan keputusan."
            },
            {
              title: "Kota Berkelanjutan",
              desc: "Pembangunan harus berpikir jangka panjang: lingkungan, sosial, dan ekonomi."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-[#E10600]/50 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-[#E10600] transition">
                {item.title}
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}