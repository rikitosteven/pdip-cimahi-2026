import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import ShareButton from "@/components/ShareButton";

export default async function DetailBerita({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <div className="p-10">Slug tidak ditemukan</div>;
  }

  const berita = await client.fetch(
    `*[_type == "berita" && slug.current == $slug][0]{
      title,
      content,
      image,
      publishedAt
    }`,
    { slug }
  );

  if (!berita) {
    return <div className="p-10">Berita tidak ditemukan</div>;
  }

  const date = berita.publishedAt
    ? new Date(berita.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <section className="relative bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white px-6 py-16 md:py-24 overflow-hidden">

      <div className="max-w-3xl mx-auto">

        {/* CATEGORY */}
        <div className="text-xs uppercase tracking-widest text-[var(--primary-red)] mb-4">
          Berita
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          {berita.title}
        </h1>

        {/* META + SHARE */}
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          <span>{date}</span>
          <ShareButton title={berita.title} />
        </div>

        {/* HERO IMAGE */}
        {berita.image && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={urlFor(berita.image).width(1600).url()}
              alt={berita.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* ARTICLE CONTENT */}
        <article className="prose prose-lg dark:prose-invert max-w-none leading-relaxed prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-[var(--primary-red)]">
          <PortableText value={berita.content} />
        </article>

      </div>
    </section>
  );
}