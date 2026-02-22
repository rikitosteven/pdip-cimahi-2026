"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `transition ${
      active === id
        ? "text-[#E10600]"
        : "text-neutral-600 hover:text-[#E10600]"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-sm py-3"
            : "bg-white/60 backdrop-blur-xl py-5"
        }
        border-b border-neutral-200`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="font-semibold tracking-tight">
            PDIP Cimahi<span className="text-[#E10600]">.</span>
          </span>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#tentang" className={linkClass("tentang")}>Tentang</a>
            <a href="#visi" className={linkClass("visi")}>Visi</a>
            <a href="#struktur" className={linkClass("struktur")}>Struktur</a>
            <a href="#program" className={linkClass("program")}>Program</a>
            <a href="#agenda" className={linkClass("agenda")}>Agenda</a>
            <a href="#donasi" className={linkClass("donasi")}>Donasi</a>
          </div>

          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium">
          <a href="#tentang" onClick={() => setOpen(false)}>Tentang</a>
          <a href="#visi" onClick={() => setOpen(false)}>Visi</a>
          <a href="#struktur" onClick={() => setOpen(false)}>Struktur</a>
          <a href="#program" onClick={() => setOpen(false)}>Program</a>
          <a href="#agenda" onClick={() => setOpen(false)}>Agenda</a>
          <a href="#donasi" onClick={() => setOpen(false)}>Donasi</a>
        </div>
      )}
    </>
  );
}