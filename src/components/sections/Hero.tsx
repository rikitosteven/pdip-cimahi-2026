import Image from "next/image"; import { client, urlFor } from "@/lib/sanity";

export const revalidate = 60;
async function getHero() {
  return await client.fetch(`*[_type == "hero"][0]{
    headline,
    highlight,
    subheadline,
    ctaText,
    ctaLink,
    stat1Value,
    stat1Label,
    stat2Value,
    stat2Label,
    stat3Value,
    stat3Label,
    backgroundImage
  }`);
}

export default async function Hero() {
  const hero = await getHero();

  if (!hero) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden text-white">

      {hero.backgroundImage && (
        <Image
          src={urlFor(hero.backgroundImage).width(2000).url()}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      )}

    <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 px-6 max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          {hero.headline}
          <br />
          <span className="text-(--primary-red)">
            {hero.highlight}
          </span>
        </h1>
      <p className="mt-8 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        {hero.ctaText && (
          <div className="mt-12">
            <a
              href={hero.ctaLink || "#"}
              className="px-10 py-4 rounded-full bg-(--primary-red) font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {hero.ctaText}
            </a>
          </div>
        )}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm text-neutral-200">
          <div>
            <p className="text-2xl font-bold text-(--primary-red)">
              {hero.stat1Value}
            </p>
            <p>{hero.stat1Label}</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-(--primary-red)">
              {hero.stat2Value}
            </p>
            <p>{hero.stat2Label}</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-(--primary-red)">
              {hero.stat3Value}
            </p>
            <p>{hero.stat3Label}</p>
          </div>
        </div>

      </div>
    </section>
  );
}