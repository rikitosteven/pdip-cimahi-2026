"use client";

import { useState } from "react";

export default function Aspirasi() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxDVOP8AWkNJZcpAypP7s9o_ViZ9BbtsEw6g6VI9jhQNf1smwJ7xOLOG7Edh2MLWZIF/exec",
        {
          method: "POST",
          mode: "no-cors", // 🔥 WAJIB untuk Google Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama,
            email,
            pesan,
          }),
        }
      );

      // karena no-cors, kita tidak bisa baca response
      setSuccess(true);
      setNama("");
      setEmail("");
      setPesan("");
    } catch (error) {
      alert("Terjadi kesalahan. Coba lagi.");
    }

    setLoading(false);
  };

  return (
    <section
      id="aspirasi"
      className="section px-6 bg-[#F5F5F7] dark:bg-neutral-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">
          Sampaikan Aspirasi.
        </h2>

        <p className="mb-12 text-neutral-600 dark:text-neutral-400">
          Suara Anda adalah bagian dari perubahan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            placeholder="Nama"
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black"
          />

          <input
            type="email"
            placeholder="Email (opsional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black"
          />

          <textarea
            placeholder="Tuliskan aspirasi Anda..."
            required
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="w-full p-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black h-40"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E10600] text-white py-4 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Mengirim..." : "Kirim Aspirasi"}
          </button>

          {success && (
            <p className="text-green-600 mt-4">
              Aspirasi berhasil dikirim. Terima kasih!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}