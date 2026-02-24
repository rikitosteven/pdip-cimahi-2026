"use client";

import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      {/* Invisible target container */}
      <div ref={ref} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-(--primary-red) origin-left z-50 shadow-[0_0_12px_var(--primary-red)]"
      />
    </>
  );
}