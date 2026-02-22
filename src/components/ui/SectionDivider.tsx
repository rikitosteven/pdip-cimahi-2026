"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "120px" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-1 bg-[#E10600] mx-auto my-20 rounded-full"
    />
  );
}