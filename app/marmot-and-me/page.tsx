import { ImageWithFallback } from "@/components/ImageWithFallback";

const rows = [
  {
    title: "Marmot & Me Activity Booklets",
    body: "Interactive themed activity booklets designed to spark curiosity and connection.",
    image: "/images/activity-booklet.jpg",
    rotate: "-rotate-2",
  },
  {
    title: "Creative Craft Box",
    body: "A bi-monthly box of handpicked creative activities delivered to your door.",
    image: "/images/craft-box.jpg",
    rotate: "rotate-2",
  },
  {
    title: "Silly Marmots Plush Toys",
    body: "Bring the Silly Marmots home as a cuddly companion.",
    image: "/images/plush-toy.jpg",
    rotate: "-rotate-1",
  },
];

export default function MarmotAndMePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10">
      <h1 className="handwritten text-center text-[52px]">Marmot &amp; Me</h1>

      <section className="mt-6 rounded-2xl border border-[#c7d0c3] bg-[#D4DDD0] p-6">
        <div
          className="rounded-xl p-4"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0 1px, transparent 1px 36px), repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0 1px, transparent 1px 36px)",
          }}
        >
          <div className="space-y-8">
            {rows.map((row, index) => (
              <div key={row.title} className={`grid items-center gap-6 md:grid-cols-2 ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`rounded-xl bg-white p-4 shadow-[4px_8px_20px_rgba(100,80,60,0.16)] ${row.rotate}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={row.image}
                      alt={row.title}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 520px"
                      imageClassName="object-cover"
                      fallbackText={`Missing file: ${row.image.replace("/images/", "")}`}
                    />
                  </div>
                </div>
                <article className="rounded-xl bg-[#f7f1e8]/80 p-5">
                  <h2 className="text-3xl leading-tight">{row.title}</h2>
                  <p className="mt-3 text-xl leading-relaxed">{row.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
