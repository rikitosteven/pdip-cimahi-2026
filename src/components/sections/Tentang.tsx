"use client";

import { motion } from "framer-motion";

export default function Tentang() {
  return (
    <section id="tentang" className="section px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Dari Warga,
            <br />
            <span className="text-[var(--primary-red)]">
              Untuk Warga.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-600 dark:text-neutral-300 space-y-6"
        >
          <p>
            Kami percaya perubahan tidak lahir dari ruang tertutup,
            tetapi dari dialog terbuka dan partisipasi masyarakat.
          </p>
          <p>
            Setiap program, kebijakan, dan keputusan harus berdampak nyata
            bagi kehidupan warga Cimahi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}