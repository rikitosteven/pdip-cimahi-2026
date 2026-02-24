import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import ShareButton from "@/components/ShareButton";

export default async function DetailAgenda({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const agenda = await client.fetch(
    `*[_type == "agenda" && slug.current == $slug][0]{
      title,
      description,
      image,
      date,
      location
    }`,
    { slug }
  );

  if (!agenda) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
        Agenda tidak ditemukan
      </div>
    );
  }

  const eventDate = new Date(agenda.date);
  const isUpcoming = eventDate >= new Date();

  return (
    <section className="relative bg-neutral-950 text-white px-6 py-20 md:py-28 overflow-hidden">

      {/* subtle background depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(225,6,0,0.08),transparent_60%)]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          {agenda.title}
        </h1>

        {/* Accent Line */}
        <div className="h-1 w-16 bg-[var(--primary-red)] mb-8 rounded-full" />

        {/* META BADGES */}
        <div className="flex flex-wrap items-center gap-3 mb-10 text-sm">
          <span className="px-4 py-1.5 rounded-full bg-white/10">
            {eventDate.toLocaleDateString("id-ID")}
          </span>

          <span className="px-4 py-1.5 rounded-full bg-white/10">
            {agenda.location}
          </span>

          <span
            className={`px-4 py-1.5 rounded-full font-semibold ${
              isUpcoming
                ? "bg-green-500/20 text-green-400"
                : "bg-neutral-700 text-neutral-300"
            }`}
          >
            {isUpcoming ? "Mendatang" : "Selesai"}
          </span>
        </div>

        {/* IMAGE */}
        {agenda.image && (
          <div className="group relative w-full max-w-3xl aspect-[16/9] rounded-3xl overflow-hidden mb-14 shadow-xl">
            <Image
              src={urlFor(agenda.image).width(1600).url()}
              alt={agenda.title}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* DESCRIPTION */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed">
            <PortableText value={agenda.description} />
          </div>
        </div>

        {/* ACTION SECTION */}
        <div className="mt-16 border-t border-white/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Tertarik mengikuti agenda ini?
            </h3>
            <p className="text-sm text-neutral-400">
              Ikuti dan dukung kegiatan kami bersama masyarakat.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/#join"
              className="px-6 py-3 bg-[var(--primary-red)] rounded-full font-semibold hover:scale-105 transition"
            >
              Bergabung
            </Link>

            <ShareButton title={agenda.title} />
          </div>
        </div>

      </div>
    </section>
  );
}