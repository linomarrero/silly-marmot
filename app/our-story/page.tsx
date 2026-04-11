import { BotanicalCorner } from "@/components/BotanicalCorner";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function OurStoryPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10">
      <section className="grid items-center gap-10 lg:grid-cols-[520px_1fr]">
        <div className="relative mx-auto w-full max-w-[500px]">
          <BotanicalCorner className="-left-8 -top-6 h-36 w-24 opacity-80" />
          <BotanicalCorner className="-bottom-5 -right-7 h-36 w-24 opacity-80" flipX />

          <div className="relative -rotate-2 rounded-[10px] bg-white px-4 pb-12 pt-4 shadow-[4px_10px_26px_rgba(100,80,60,0.18)]">
            <div className="relative overflow-hidden rounded-md">
              <ImageWithFallback
                src="/images/chien-yi-amari.jpg"
                alt="Chien Yi and Amari"
                width={500}
                height={600}
                sizes="(max-width: 1024px) 92vw, 500px"
                imageClassName="h-auto w-full object-cover"
                fallbackText="Add chien-yi-amari.jpg to /public/images/"
              />
            </div>
            <p className="handwritten mt-5 text-center text-[36px] leading-none text-[#3D2E22]">Chien Yi &amp; Amari</p>
          </div>
        </div>

        <article className="mx-auto w-full max-w-xl rounded-2xl bg-[#f8f1e8]/60 p-6 card-shadow">
          <div className="mb-5 h-[1px] w-28 bg-[#A8B09A]" />
          <p className="text-[24px] leading-relaxed text-[#3D2E22]">
            Two years ago, during his senior year of high school, Amari realized that very soon, his mom would be entering an empty-nest season.

He began to wonder—

How could her life remain full and joyful?

More importantly, how could we keep doing the things we love, together?

So he began writing. Drawing from his own experiences growing up, he created the stories that would become The Silly Marmots series. Then he invited me to join him—to bring these warm and whimsical little books to life side by side.

From little Amari to the 20-year-old college student he is today,

we’ve made clay crafts, baked cookies, built small experiments;

as he grew, we learned music together, played tennis,

he stepped into speech and debate, and I stepped into becoming a parent judge.

We’ve shared the bright highlights,

and we’ve walked through challenges and disappointments hand in hand.

The birth of Silly Marmots came from a simple yet deeply heartfelt wish—

that “together” would not fade with time.

We believe childhood is the most precious season for building connection between parent and child.

And togetherness is not just a moment—

it’s a habit of the heart we hope to carry for a lifetime.
          </p>
        </article>
      </section>
    </main>
  );
}
