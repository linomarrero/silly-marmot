import Link from "next/link";
import { BotanicalCorner } from "@/components/BotanicalCorner";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const cards = [
  { label: "Our Story", href: "/our-story", bg: "#D2C2B8" },
  { label: "Marmot & Me", href: "/marmot-and-me", bg: "#A88F82" },
  { label: "Books", href: "/books", bg: "#BFB1A1" },
  { label: "Events", href: "/events", bg: "#D9CCC3" },
  { label: "Shop", href: "/shop", bg: "#AA9283" },
  { label: "For Parents", href: "/for-parents", bg: "#B3A797" },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1180px] px-4 pb-8 pt-2 sm:px-8">
      <section className="flex-1 p-2 sm:p-4">
        <BotanicalCorner className="left-4 top-28 h-52 w-28 opacity-70" />
        <h1 className="handwritten text-center text-5xl sm:text-6xl">Growing hearts, growing together...</h1>

        <div className="mt-6 grid items-stretch gap-8 lg:min-h-[620px] lg:grid-cols-[1.18fr_1fr]">
          <div className="relative">
            <div className="grid-band !left-6 !right-6 !top-16 !bottom-4" />
            <div className="torn-strip !left-8 !right-4 !top-20 !h-72" />
            <div className="relative z-10 mx-auto max-w-xl rounded-[24px] bg-white p-6 shadow-[4px_6px_20px_rgba(100,80,60,0.12)]">
              <BotanicalCorner className="left-1 top-2 h-28 w-20 opacity-70" />
              <BotanicalCorner className="bottom-2 right-1 h-28 w-20 opacity-70" flipX />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
                <ImageWithFallback
                  src="/images/marmot-hero.png"
                  alt="Silly Marmot character"
                  fill={true}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  imageClassName="object-cover"
                  fallbackText="Add marmot-hero.png to /public/images/"
                />
              </div>
            </div>
          </div>

          <div className="grid h-full grid-cols-2 grid-rows-3 gap-5">
            {cards.map((card) => (
              <div key={card.href} className="h-full transition hover:-translate-y-1">
                <Link
                  href={card.href}
                  className="relative flex h-full items-center justify-center rounded-[14px] px-3 text-center text-[22px] text-[#3D2E22] shadow-[4px_6px_20px_rgba(100,80,60,0.12)] transition hover:brightness-[0.98]"
                  style={{ backgroundColor: card.bg }}
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
