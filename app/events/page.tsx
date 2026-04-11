import { events } from "@/lib/data";

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-10">
      <section className="w-full rounded-2xl border border-[#d8cec2] bg-[#f8f1e8] p-8 card-shadow">
        <h1 className="text-center text-5xl md:text-6xl">Events</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-[#5d4a3d] md:text-2xl">
          Storytime gatherings, craft days, and family meetups. Dates and venues are posted here as they are confirmed.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((ev) => (
            <article
              key={ev.id}
              className="flex flex-col rounded-2xl border border-[#c7d0c3] bg-[#dfe8dc] p-6 text-left card-shadow"
            >
              <p className="text-3xl">🐾</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#3d342c]">{ev.title}</h2>
              <p className="mt-2 text-lg font-medium text-[#5d4a3d]">{ev.dateLabel}</p>
              {ev.time ? <p className="mt-1 text-[#5d4a3d]">{ev.time}</p> : null}
              {ev.location ? <p className="mt-1 text-[#5d4a3d]">{ev.location}</p> : null}
              <p className="mt-3 flex-1 text-lg leading-relaxed text-[#4a3f36]">{ev.description}</p>
              {ev.linkUrl ? (
                <a
                  href={ev.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#A8B09A] px-4 py-2.5 text-center text-white transition hover:brightness-95"
                >
                  {ev.linkLabel ?? "Details"}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
