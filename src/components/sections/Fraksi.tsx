"use client";

export default function Fraksi() {
  const anggota = [
    {
      nama: "Agung Yudasmara, S.T.",
      jabatan: "Wakil Ketua II DPRD Kota Cimahi",
      komisi: "-",
      bidang: "Legislatif",
      foto: "/fraksi/agung.png",
    },
    {
      nama: "Freddy Siagian",
      jabatan: "Ketua Komisi I",
      komisi: "Komisi I",
      bidang: "Pemerintahan",
      foto: "/fraksi/freddy.png",
    },
    {
      nama: "Moch. Dani Daniswara, S.Pd.",
      jabatan: "Anggota Komisi I",
      komisi: "Komisi I",
      bidang: "Perekonomian & Keuangan",
      foto: "/fraksi/dani.png",
    },
    {
      nama: "Purwanto, S.Pd.",
      jabatan: "Anggota Komisi III",
      komisi: "Komisi III",
      bidang: "Pembangunan",
      foto: "/fraksi/purwanto.png",
    },
    {
      nama: "Iwan Setiawan",
      jabatan: "Sekretaris Komisi IV",
      komisi: "Komisi IV",
      bidang: "Kesejahteraan Rakyat",
      foto: "/fraksi/iwan.png",
    },
    {
      nama: "Dadang Mulyana",
      jabatan: "Anggota Komisi IV",
      komisi: "Komisi IV",
      bidang: "Kesejahteraan Rakyat",
      foto: "/fraksi/dadang.png",
    },
  ];

  return (
    <section id="fraksi" className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Fraksi PDIP DPRD Kota Cimahi
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 mb-16">
          Mengawal kebijakan dan memperjuangkan aspirasi masyarakat Kota Cimahi.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {anggota.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#E10600]">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">{item.nama}</h3>

              <p className="text-[#E10600] font-medium mt-2">
                {item.jabatan}
              </p>

              {item.komisi !== "-" && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {item.komisi}
                </p>
              )}

              <p className="text-sm mt-2 italic text-neutral-500">
                Bidang: {item.bidang}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}