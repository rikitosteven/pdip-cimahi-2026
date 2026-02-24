import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 60;
async function getAgenda() {
  return await client.fetch(`
    *[_type == "agenda"] | order(date desc) {
      _id,
      title,
      date,
      location,
      image,
      slug
    }
  `);
}

export default async function Agenda() {
  const events = await getAgenda();
  const today = new Date();

  if (!events || events.length === 0) return null;

  const upcoming = events.filter(
    (e: any) => new Date(e.date) >= today
  );

  const spotlight =
    upcoming.length > 0
      ? upcoming.sort(
          (a: any, b: any) =>
            new Date(a.date).getTime() -
            new Date(b.date).getTime()
        )[0]
      : events[0];

  const others = events.filter(
    (e: any) => e._id !== spotlight._id
  );

  return (
    <section className="relative px-6 py-28 bg-black text-white overflow-hidden">

      {/* Ambient Red Burst */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-600/15 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Agenda
            <span className="text-red-600">.</span>
          </h2>

          <p className="text-neutral-400 mt-6 max-w-xl text-lg">
            Aktivitas nyata. Gerak langsung. Tanpa menunggu.
          </p>
        </div>

        {/* SPOTLIGHT */}
        <Link href={`/agenda/${spotlight.slug?.current || "#"}`}>
          <div className="group grid md:grid-cols-2 gap-12 items-center mb-24">

            {/* IMAGE */}
            {spotlight.image && (
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src={urlFor(spotlight.image).width(1200).url()}
                  alt={spotlight.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            )}

            {/* TEXT */}
            <div>

              <div className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
                {new Date(spotlight.date) >= today
                  ? "Agenda Terdekat"
                  : "Agenda Terakhir"}
              </div>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight group-hover:text-red-600 transition">
                {spotlight.title}
              </h3>

              <div className="mt-6 text-neutral-400 text-lg">
                {new Date(spotlight.date).toLocaleDateString("id-ID")}  
                <span className="mx-3">•</span>
                {spotlight.location}
              </div>

            </div>
          </div>
        </Link>

        {/* SECONDARY LIST */}
        <div className="space-y-10">
          {others.slice(0, 3).map((event: any) => (
            <Link
              key={event._id}
              href={`/agenda/${event.slug?.current || "#"}`}
            >
              <div className="group flex justify-between items-center border-b border-white/10 pb-6 hover:border-red-600 transition">

                <div>
                  <h4 className="text-2xl font-semibold group-hover:text-red-600 transition">
                    {event.title}
                  </h4>

                  <div className="text-neutral-500 mt-2">
                    {new Date(event.date).toLocaleDateString("id-ID")}  
                    <span className="mx-3">•</span>
                    {event.location}
                  </div>
                </div>

                <div className="text-neutral-600 text-sm group-hover:text-red-600 transition">
                  →
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}