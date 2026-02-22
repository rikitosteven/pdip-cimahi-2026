"use client";

export default function Berita() {
  const updates = [
    {
      date: "12 Januari 2025",
      title: "Dialog Publik di Kelurahan Cibeureum",
    },
    {
      date: "3 Februari 2025",
      title: "Pelatihan UMKM dan Digital Marketing",
    },
    {
      date: "18 Maret 2025",
      title: "Bakti Sosial & Pemeriksaan Kesehatan Gratis",
    },
  ];

  return (
    <section id="berita" className="section px-6">
      <div className="container-custom">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Update Terbaru
        </h2>

        <div className="space-y-10 max-w-3xl mx-auto">
          {updates.map((item) => (
            <div
              key={item.title}
              className="border-b border-neutral-200 dark:border-neutral-700 pb-6"
            >
              <p className="text-sm text-neutral-500 mb-2">
                {item.date}
              </p>
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}