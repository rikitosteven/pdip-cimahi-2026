"use client";

import Image from "next/image";

export default function JoinMovement() {
  return (
    <section id="join" className="relative section text-white text-center px-6 overflow-hidden">

      <Image
        src="/kegiatan/kegiatan2.jpg"
        alt="Gerakan masyarakat"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-(--primary-red)/80" />

      <div className="container-custom relative z-10 max-w-3xl mx-auto">

        <h2 className="text-5xl font-bold mb-8">
          Perubahan Dimulai Dari Kita
        </h2>

        <p className="mb-12 text-lg opacity-90">
          Jadilah bagian dari gerakan nyata
          untuk masa depan Cimahi yang lebih baik.
        </p>

        <button className="px-10 py-4 rounded-full bg-white text-(--primary-red) font-semibold hover:scale-105 transition">
          Bergabung Sekarang
        </button>
      </div>
    </section>
  );
}