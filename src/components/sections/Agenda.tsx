"use client";

export default function Agenda() {
  const events = [
    {
      title: "Dialog Publik Warga Cibeureum",
      date: "12 Januari 2025",
      location: "Kelurahan Cibeureum",
      status: "Selesai",
    },
    {
      title: "Pelatihan UMKM & Digital Marketing",
      date: "3 Februari 2025",
      location: "Aula Kecamatan Cimahi Tengah",
      status: "Selesai",
    },
    {
      title: "Bakti Sosial & Pemeriksaan Kesehatan Gratis",
      date: "18 Maret 2025",
      location: "Kelurahan Melong",
      status: "Mendatang",
    },
  ];

  return (
    <section id="agenda" className="section px-6">
      <div className="container-custom">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Agenda & Kegiatan
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.title}
              className="border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 bg-white dark:bg-neutral-900 shadow-sm"
            >
              <span className={`text-sm font-semibold ${
                event.status === "Mendatang"
                  ? "text-green-600"
                  : "text-neutral-500"
              }`}>
                {event.status}
              </span>

              <h4 className="text-xl font-semibold mt-4 mb-2">
                {event.title}
              </h4>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {event.date}
              </p>

              <p className="text-neutral-500 text-sm mt-1">
                {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}