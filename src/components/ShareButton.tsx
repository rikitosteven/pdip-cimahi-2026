"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  MessageCircle,
  Facebook,
  Twitter,
  Link as LinkIcon,
  Check,
} from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const url =
    typeof window !== "undefined" ? window.location.href : "";

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleSmartShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Lihat agenda ini",
          url,
        });
      } catch (err) {}
    } else {
      setOpen((prev) => !prev);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* MAIN BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleSmartShare}
        className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition shadow-lg"
      >
        <Share2 size={18} />
      </motion.button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-60 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl grid grid-cols-4 gap-5 z-50"
          >
            {/* WA */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
              target="_blank"
              className="flex flex-col items-center gap-1 text-xs hover:text-green-400 transition"
            >
              <MessageCircle size={22} />
              WA
            </motion.a>

            {/* FB */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              className="flex flex-col items-center gap-1 text-xs hover:text-blue-400 transition"
            >
              <Facebook size={22} />
              FB
            </motion.a>

            {/* X */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
              target="_blank"
              className="flex flex-col items-center gap-1 text-xs hover:text-sky-400 transition"
            >
              <Twitter size={22} />
              X
            </motion.a>

            {/* COPY */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              onClick={handleCopy}
              className="flex flex-col items-center gap-1 text-xs hover:text-white transition"
            >
              {copied ? <Check size={22} /> : <LinkIcon size={22} />}
              {copied ? "Copied" : "Copy"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}