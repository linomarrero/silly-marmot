export default function EventsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-10">
      <section className="w-full rounded-2xl border border-[#d8cec2] bg-[#f8f1e8] p-8 card-shadow">
        <h1 className="handwritten text-center text-7xl">Coming Soon</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-2xl leading-relaxed">
          Storytime gatherings, craft days, and family events are on their way
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="rounded-2xl border border-[#c7d0c3] bg-[#dfe8dc] p-5 text-center">
              <p className="text-3xl">🐾</p>
              <p className="mt-2 text-xl">Event TBA — Stay tuned!</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
