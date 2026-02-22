"use client";

export default function Program() {
  return (
    <section id="program" className="py-40 md:py-56 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <h2 className="text-4xl md:text-6xl font-semibold">
          Program Prioritas
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h4 className="text-xl font-semibold">
              Ekonomi Kerakyatan
            </h4>
            <p className="mt-4 text-neutral-600">
              Dukungan konkret untuk UMKM dan usaha lokal.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h4 className="text-xl font-semibold">
              Transparansi Publik
            </h4>
            <p className="mt-4 text-neutral-600">
              Laporan kebijakan dan anggaran terbuka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}