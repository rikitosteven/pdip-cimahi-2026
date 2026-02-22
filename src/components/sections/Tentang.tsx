"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Tentang() {
  return (
    <section id="tentang" className="py-40 md:py-56 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Tentang
            <br />
            <span className="text-[#E10600]">PDIP Cimahi</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-neutral-600 space-y-6 text-lg">
          <p>
            PDIP Kota Cimahi hadir sebagai kekuatan politik rakyat
            dengan komitmen membangun kota yang inklusif dan transparan.
          </p>
          <p>
            Melalui struktur organisasi yang solid dan fraksi di DPRD,
            kami mendorong kebijakan yang berdampak nyata bagi masyarakat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}