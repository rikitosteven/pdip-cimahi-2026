import Link from "next/link";
import { client } from "@/lib/sanity";

async function getLatestBerita() {
  return await client.fetch(`
    *[_type == "berita"] 
    | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      publishedAt
    }
  `);
}

export default async function Berita() {
  const updates = await getLatestBerita();

  if (!updates || updates.length === 0) return null;

  return (
    <section id="berita" className="section px-6">
      <div className="container-custom">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Update Terbaru
        </h2>

        <div className="space-y-10 max-w-3xl mx-auto">
          {updates.map((item: any) => (
            <div
              key={item._id}
              className="border-b border-neutral-200 dark:border-neutral-700 pb-6"
            >
              <p className="text-sm text-neutral-500 mb-2">
                {item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString("id-ID")
                  : ""}
              </p>

              <Link
                href={`/berita/${item.slug.current}`}
                className="text-xl font-semibold hover:text-(--primary-red) transition"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/berita"
            className="px-8 py-3 rounded-full border border-(--primary-red) text-(--primary-red) hover:bg-(--primary-red) hover:text-white transition"
          >
            Lihat Semua Berita
          </Link>
        </div>

      </div>
    </section>
  );
}