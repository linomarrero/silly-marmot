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
            Amari writes stories rooted in heart and humor. Chien Yi brings them to life with illustrations full of warmth and whimsy. Together, they create books for little ones and the families who love them.
          </p>
        </article>
      </section>
    </main>
  );
}
