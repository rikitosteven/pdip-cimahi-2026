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
        const sectionTop = section.offsetTop - 140;
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

  // 🔥 AGENDA DIARAHKAN KE AKTIVITAS
  const menuItems = [
    { id: "tentang", label: "Tentang" },
    { id: "visi", label: "Visi" },
    { id: "struktur", label: "Struktur" },
    { id: "fraksi", label: "Fraksi" },
    { id: "program", label: "Program" },
    { id: "aktivitas", label: "Agenda" }, // FIX
    { id: "impact", label: "Dampak" },
    { id: "aspirasi", label: "Aspirasi" },
    { id: "donasi", label: "Donasi" },
  ];

  const linkClass = (id: string) =>
    `relative transition duration-300 ${
      active === id
        ? "text-[var(--primary-red)]"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-gradient-to-b from-black/70 to-transparent py-6"
        }`}
      >
        <div className="container-custom flex justify-between items-center">

          {/* LOGO */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActive("");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-semibold tracking-tight text-lg cursor-pointer flex items-center gap-1 text-white"
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

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={linkClass(item.id)}
              >
                {item.label}
              </a>
            ))}

            {/* CTA */}
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-5 py-2 rounded-full bg-[var(--primary-red)] text-white text-sm font-medium shadow-md hover:shadow-lg transition"
            >
              Bergabung
            </motion.a>

            {/* THEME */}
            <button
              onClick={toggle}
              className="ml-3 px-3 py-1 rounded-full border border-white/20 text-xs text-white/70 hover:text-white transition"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium text-white"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="hover:text-[var(--primary-red)] transition"
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
              className="mt-6 px-6 py-2 rounded-full border border-white/20"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}