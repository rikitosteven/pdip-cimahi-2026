"use client";

export default function Program() {
  const programs = [
    {
      title: "Ekonomi Kerakyatan",
      points: [
        "Pendampingan UMKM lokal",
        "Akses digital marketing",
        "Legalitas & perizinan usaha",
      ],
    },
    {
      title: "Transparansi Publik",
      points: [
        "Laporan triwulan terbuka",
        "Forum diskusi warga",
        "Kanal aspirasi online",
      ],
    },
    {
      title: "Generasi Muda Berdaya",
      points: [
        "Ruang partisipasi pemuda",
        "Pelatihan kepemimpinan",
        "Kolaborasi komunitas kreatif",
      ],
    },
  ];

  return (
    <section id="program" className="section px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Program Prioritas
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 rounded-3xl shadow-sm"
            >
              <h4 className="text-xl font-semibold text-[var(--primary-red)] mb-6">
                {item.title}
              </h4>

              <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-sm">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}