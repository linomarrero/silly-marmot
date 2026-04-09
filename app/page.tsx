import Link from "next/link";
import { BotanicalCorner } from "@/components/BotanicalCorner";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const cards = [
  { label: "Our Story", href: "/our-story" },
  { label: "Marmot & Me", href: "/marmot-and-me" },
  { label: "Books", href: "/books" },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
  { label: "For Parents", href: "/for-parents" },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1180px] px-4 pb-8 pt-2 sm:px-8">
      <section className="flex-1 p-2 sm:p-4">
        <BotanicalCorner className="left-4 top-28 h-52 w-28 opacity-70" />
        <h1 className="handwritten text-center text-5xl sm:text-6xl">Growing hearts, growing together...</h1>

        <div className="mt-6 grid items-stretch gap-8 lg:min-h-[560px] lg:grid-cols-[1.05fr_1fr]">
          <div className="relative">
            <div className="grid-band !left-8 !right-8 !top-16 !bottom-2" />
            <div className="torn-strip !left-10 !right-6 !top-20 !h-64" />
            <div className="relative z-10 mx-auto max-w-md rounded-[24px] bg-white p-6 shadow-[4px_6px_20px_rgba(100,80,60,0.12)]">
              <BotanicalCorner className="left-2 top-2 h-24 w-16 opacity-70" />
              <BotanicalCorner className="bottom-2 right-2 h-24 w-16 opacity-70" flipX />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <ImageWithFallback
                  src="/images/marmot-hero.png"
                  alt="Silly Marmot character"
                  fill={true}
                  sizes="(max-width: 1024px) 100vw, 460px"
                  imageClassName="object-cover"
                  fallbackText="Add marmot-hero.png to /public/images/"
                />
              </div>
              <p className="handwritten mt-3 text-center text-[48px] leading-[1] text-[#3D2E22]">Silly Marmot</p>
            </div>
          </div>

          <div className="grid h-full grid-cols-2 grid-rows-3 gap-5">
            {cards.map((card) => (
              <div key={card.href} className="h-full transition hover:-translate-y-1">
                <Link
                  href={card.href}
                  className="relative flex h-full items-center justify-center rounded-[14px] bg-[#B8AFA8] px-3 text-center text-[22px] text-[#3D2E22] shadow-[4px_6px_20px_rgba(100,80,60,0.12)]"
                >
                  <span className="absolute left-1/2 top-[-7px] h-[14px] w-[48px] -translate-x-1/2 rounded-[4px] bg-[#C9C0B8] shadow-[0_2px_6px_rgba(100,80,60,0.14)]" />
                  <span className="block leading-tight">{card.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
