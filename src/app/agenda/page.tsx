import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 60;
export default async function ListAgenda() {
  const agenda = await client.fetch(`
    *[_type == "agenda"] | order(date desc) {
      _id,
      title,
      "slug": slug.current,
      date,
      location,
      image
    }
  `);

  const today = new Date();

  return (
    <div className="container-custom py-24">
      <h1 className="text-4xl font-bold mb-12">Semua Agenda</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {agenda.map((item: any) => {
          const eventDate = new Date(item.date);
          const isUpcoming = eventDate >= today;

          return (
            <div key={item._id} className="border rounded-2xl p-6">
              {item.image && (
                <div className="relative h-40 mb-4">
                  <Image
                    src={urlFor(item.image).width(600).url()}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}

              <span className={`text-xs px-3 py-1 rounded-full ${
                isUpcoming
                  ? "bg-green-100 text-green-600"
                  : "bg-neutral-200 text-neutral-600"
              }`}>
                {isUpcoming ? "Mendatang" : "Selesai"}
              </span>

              <h3 className="text-lg font-semibold mt-3">
                <Link href={`/agenda/${item.slug}`}>
                  {item.title}
                </Link>
              </h3>

              <p className="text-sm text-neutral-500 mt-2">
                {new Date(item.date).toLocaleDateString("id-ID")}
              </p>

              <p className="text-sm text-neutral-400">
                {item.location}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}