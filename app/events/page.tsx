import Image from "next/image";
import { events } from "@/lib/data";

function EventPoster({ src, alt }: { src: string; alt: string }) {
  const isRemote = src.startsWith("http://") || src.startsWith("https://");

  if (isRemote) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[#d8cec2] bg-[#faf6f0] shadow-md">
        <img src={src} alt={alt} className="mx-auto block h-auto max-h-[85vh] w-full object-contain" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-[#d8cec2] bg-[#faf6f0] shadow-md">
      <Image src={src} alt={alt} fill className="object-contain object-center" sizes="(max-width: 768px) 100vw, 768px" />
    </div>
  );
}

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const withFlyers = sorted.filter((ev) => Boolean(ev.flyerImage));
  const withoutFlyers = sorted.filter((ev) => !ev.flyerImage);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-6 md:pt-10">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="handwritten text-5xl leading-tight text-[#4a3f36] md:text-6xl lg:text-7xl">
          Check out our upcoming events!
        </h1>

        {withFlyers.length === 0 ? (
          <p className="mt-12 text-xl text-[#5d4a3d]">Event posters coming soon—we can&apos;t wait to share them.</p>
        ) : (
          <div className="mt-12 flex flex-col items-stretch gap-14 md:mt-16 md:gap-20">
            {withFlyers.map((ev) => (
              <figure key={ev.id} className="mx-auto w-full max-w-3xl">
                <EventPoster src={ev.flyerImage!} alt={ev.flyerAlt ?? `${ev.title} — ${ev.dateLabel}`} />
                {ev.linkUrl ? (
                  <figcaption className="mt-5">
                    <a
                      href={ev.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#5d4a3d] underline decoration-[#A8B09A] decoration-2 underline-offset-4 transition hover:text-[#3d342c]"
                    >
                      {ev.linkLabel ?? "Details & RSVP"}
                    </a>
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        )}

        {withoutFlyers.length > 0 && withFlyers.length > 0 ? (
          <p className="mt-14 text-lg text-[#5d4a3d] md:text-xl">More events are in the works—check back for new posters.</p>
        ) : null}
      </div>
    </main>
  );
}
