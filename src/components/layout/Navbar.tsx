"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return; // hanya track scroll di homepage

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
  }, [pathname]);

  const menuItems = [
    { id: "tentang", label: "Tentang" },
    { id: "visi", label: "Visi" },
    { id: "struktur", label: "Struktur" },
    { id: "fraksi", label: "Fraksi" },
    { id: "program", label: "Program" },
    { id: "aktivitas", label: "Agenda" },
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
            : "bg-linear-to-b from-black/70 to-transparent py-6"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="font-semibold tracking-tight text-lg flex items-center gap-1 text-white"
          >
            <span>PDIP Cimahi</span>
            <span className="text-(--primary-red)">.</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={
                  pathname === "/"
                    ? `#${item.id}`
                    : `/#${item.id}`
                }
                className={linkClass(item.id)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#join"
              className="ml-6 px-5 py-2 rounded-full bg-(--primary-red) text-white text-sm font-medium shadow-md hover:shadow-lg transition"
            >
              Bergabung
            </Link>

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
              <Link
                key={item.id}
                href={
                  pathname === "/"
                    ? `#${item.id}`
                    : `/#${item.id}`
                }
                onClick={() => setOpen(false)}
                className="hover:text-(--primary-red) transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-3 rounded-full bg-(--primary-red) text-white"
            >
              Bergabung
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}