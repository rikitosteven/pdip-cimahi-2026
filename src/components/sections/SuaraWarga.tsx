"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SuaraWarga() {
  return (
    <section
      id="suara"
      className="relative section px-6 overflow-hidden bg-neutral-950 text-white"
    >
      {/* Red Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,rgba(225,6,0,0.25),transparent_60%)]" />

      <div className="container-custom relative z-10">

        {/* Big Background Word */}
        <div className="absolute -top-10 left-0 text-[120px] md:text-[180px] font-extrabold text-white/5 select-none pointer-events-none">
          SUARA
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT – Featured */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-10">
              Suara Warga.
              <span className="block text-[var(--primary-red)]">
                Bukan Sekadar Cerita.
              </span>
            </h2>

            <p className="text-2xl md:text-3xl leading-relaxed font-medium text-neutral-200 mb-12">
              “Kami merasa didengar. Program ini bukan janji,
              tapi benar-benar hadir di tengah masyarakat.”
            </p>

            <div className="flex items-center gap-5">
              <Image
                src="/warga/rina.jpg"
                alt="Ibu Rina"
                width={80}
                height={80}
                className="rounded-full border-2 border-[var(--primary-red)] object-cover"
              />

              <div>
                <h4 className="font-semibold text-[var(--primary-red)]">
                  Ibu Rina
                </h4>
                <p className="text-neutral-400 text-sm">
                  Pelaku UMKM Cimahi
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – Smaller Testimonials with Photos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              {
                text: "Dialog publik membuat kami bisa menyampaikan aspirasi secara langsung.",
                name: "Pak Dedi",
                role: "Warga Melong",
                photo: "dedi.jpg",
              },
              {
                text: "Program kepemudaan memberi ruang nyata bagi generasi muda.",
                name: "Aldi",
                role: "Pemuda Cimahi",
                photo: "aldi.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-[var(--primary-red)] transition"
              >
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={`/warga/${item.photo}`}
                    alt={item.name}
                    width={55}
                    height={55}
                    className="rounded-full border border-[var(--primary-red)] object-cover"
                  />

                  <div>
                    <h4 className="text-[var(--primary-red)] font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}