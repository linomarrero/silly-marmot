const resources = [
  {
    title: "Conversation Starters",
    description: "Gentle prompts to help kids open up after storytime.",
  },
  {
    title: "Printable Activities",
    description: "Easy, joyful sheets for reading corners and rainy days.",
  },
  {
    title: "Reading Guides",
    description: "Simple tips for making books interactive and meaningful.",
  },
];

export default function ForParentsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-10">
      <div className="w-full">
        <h1 className="text-center text-5xl">For Parents</h1>

        <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.title} className="sticky-note rounded-2xl bg-[#f7efe3] p-5">
              <h2 className="text-2xl">{resource.title}</h2>
              <p className="mt-3 text-lg leading-relaxed">{resource.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
