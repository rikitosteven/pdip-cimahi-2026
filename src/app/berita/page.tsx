import Link from "next/link";
import { client } from "@/lib/sanity";

export default async function ListBerita() {
  const berita = await client.fetch(`
    *[_type == "berita"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt
    }
  `);

  return (
    <div className="container-custom py-24">
      <h1 className="text-4xl font-bold mb-12">Semua Berita</h1>

      <div className="space-y-8">
        {berita.map((item: any) => (
          <div key={item._id} className="border-b pb-6">
            <p className="text-sm text-neutral-500">
              {new Date(item.publishedAt).toLocaleDateString()}
            </p>

            <Link
              href={`/berita/${item.slug}`}
              className="text-xl font-semibold hover:text-red-600"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}