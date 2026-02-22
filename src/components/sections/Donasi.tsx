"use client";

export default function Donasi() {
  return (
    <section id="donasi" className="section px-6 bg-[#111] text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-semibold">
          Dukung Perjuangan
        </h2>

        <p className="text-neutral-300">
          Kontribusi publik membantu memperkuat program nyata bagi masyarakat.
        </p>

        <button className="bg-[#E10600] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
          Donasi Sekarang
        </button>
      </div>
    </section>
  );
}