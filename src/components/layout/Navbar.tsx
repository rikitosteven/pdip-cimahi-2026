"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "tentang", label: "Tentang" },
    { id: "visi", label: "Visi" },
    { id: "struktur", label: "Struktur" },
    { id: "fraksi", label: "Fraksi" },
    { id: "program", label: "Program" },
    { id: "agenda", label: "Agenda" },
    { id: "impact", label: "Dampak" },
    { id: "aspirasi", label: "Aspirasi" },
    { id: "donasi", label: "Donasi" },
  ];

  const linkClass = (id: string) =>
    `relative transition duration-300 ${
      active === id
        ? "text-[var(--primary-red)]"
        : "text-neutral-600 dark:text-neutral-300 hover:text-[var(--primary-red)]"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-md py-3"
            : "bg-white/60 dark:bg-black/60 backdrop-blur-lg py-5"
        } border-b border-neutral-200 dark:border-neutral-800`}
      >
        <div className="container-custom flex justify-between items-center">

          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActive("");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-semibold tracking-tight text-lg cursor-pointer flex items-center gap-1"
          >
            <span>PDIP Cimahi</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[var(--primary-red)]"
            >
              .
            </motion.span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            ))}

            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-5 py-2 rounded-full bg-[var(--primary-red)] text-white text-xs font-semibold shadow-md"
            >
              Bergabung
            </motion.a>

            <button
              onClick={toggle}
              className="ml-3 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-3 rounded-full bg-[var(--primary-red)] text-white"
            >
              Bergabung
            </a>

            <button
              onClick={toggle}
              className="mt-6 px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700"
            >
              {dark ? "Switch to Light" : "Switch to Dark"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}