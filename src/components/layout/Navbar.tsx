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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative transition font-medium ${
      active === id
        ? "text-[#E10600]"
        : "text-neutral-600 dark:text-neutral-300 hover:text-[#E10600]"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-sm py-3"
            : "bg-white/60 dark:bg-black/60 backdrop-blur-xl py-5"
        }
        border-b border-neutral-200 dark:border-neutral-800`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <span className="font-semibold tracking-tight text-lg">
            PDIP Cimahi<span className="text-[#E10600]">.</span>
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              { id: "tentang", label: "Tentang" },
              { id: "visi", label: "Visi" },
              { id: "struktur", label: "Struktur" },
              { id: "program", label: "Program" },
              { id: "agenda", label: "Agenda" },
              { id: "impact", label: "Dampak" },
              { id: "donasi", label: "Donasi" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={linkClass(item.id)}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#E10600]"
                  />
                )}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggle}
              className="ml-4 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-xs"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium"
          >
            {[
              { id: "tentang", label: "Tentang" },
              { id: "visi", label: "Visi" },
              { id: "struktur", label: "Struktur" },
              { id: "program", label: "Program" },
              { id: "agenda", label: "Agenda" },
              { id: "impact", label: "Dampak" },
              { id: "donasi", label: "Donasi" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="hover:text-[#E10600] transition"
              >
                {item.label}
              </a>
            ))}

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