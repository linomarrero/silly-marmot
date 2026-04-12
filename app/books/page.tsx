"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type BookItem = {
  id: string;
  title: string;
  image: string;
  rotation: number;
  position: string;
  description: string;
};

const books: BookItem[] = [
  {
    id: "silly-en",
    title: "Silly Marmots (English)",
    image: "/images/books/silly-marmots-en.jpg",
    rotation: -6,
    position: "left-[4%] top-[4%]",
    description:
      "Meet a merry crew of marmots who stumble through big feelings and small adventures with humor and heart. This English edition is perfect for read-alouds at bedtime or in the classroom—gentle lessons about kindness and curiosity hide inside every giggle. Young listeners see that being silly and being thoughtful can go hand in paw.",
  },
  {
    id: "silly-zh",
    title: "Silly Marmots (Chinese)",
    image: "/images/books/silly-marmots-zh.jpg",
    rotation: 4,
    position: "right-[4%] top-[5%]",
    description:
      "The same warm, playful world of Silly Marmots, offered for families who read or learn together in Chinese. Side-by-side storytelling gets easier when the pictures carry the emotion and the text meets caregivers where they are. It is a lovely bridge for bilingual homes and for kids building confidence in a new language.",
  },
  {
    id: "blue",
    title: "Blue the Investment Banker Dinosaur",
    image: "/images/books/blue.jpg",
    rotation: -3,
    position: "left-[6%] top-[76%]",
    description:
      "Blue is not like everyone else—and at first that feels loud and awkward. This offbeat story turns confidence into a superpower when friends show up with cheer instead of judgment. It is for any child who has felt “too different” and for grown-ups who want a funny, tender way to talk about belonging.",
  },
  {
    id: "bad",
    title: "The Only Bad Marmot",
    image: "/images/books/only-bad-marmot.jpg",
    rotation: 7,
    position: "left-[36%] top-[34%]",
    description:
      "What happens when someone makes a big mistake in a community that cares? This English edition walks through regret, repair, and second chances without talking down to kids. The tone stays hopeful: nobody is only their worst moment, and love can make room for growth.",
  },
  {
    id: "bad-zh",
    title: "壞壞小地鼠 (The Only Bad Marmot — Chinese)",
    image: "/images/books/bad-marmot-zh.jpg",
    rotation: -5,
    position: "right-[5%] top-[76%]",
    description:
      "The Chinese edition of the repair-and-redemption story families already love in English. It is built for shared reading across generations and languages, with artwork that helps younger readers follow the emotional beats. Ideal when you want the same heartfelt message in the language your household uses most at home.",
  },
];

function scrollToBook(id: string) {
  document.getElementById(`book-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function BooksPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10">
      <h1 className="text-center text-5xl">Books</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#5d4a3d]">
        A cozy bookshelf of stories for brave, curious hearts. Tap a cover to jump to its story—then visit the shop when you are ready to bring one home.
      </p>

      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[#ddd3c5] bg-[#e3eadf] p-5 pb-8 md:p-8 md:pb-12">
        <div className="absolute inset-5 hidden rounded-xl bg-[#f8f2e8] md:block md:inset-6" />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:hidden">
          {books.map((book) => (
            <motion.button
              key={book.id}
              type="button"
              onClick={() => scrollToBook(book.id)}
              className="z-10 rounded-xl border border-[#e1d7cb] bg-white p-4 text-left"
              whileHover={{ y: -3 }}
            >
              <div className="relative aspect-[3/4] min-h-[140px] overflow-hidden rounded-md sm:min-h-[180px]">
                <Image src={book.image} alt={book.title} fill sizes="(max-width: 768px) 45vw, 33vw" className="object-cover" />
              </div>
              <span className="mt-2 block text-center text-sm font-medium text-[#4a3f36]">Read more ↓</span>
            </motion.button>
          ))}
        </div>

        <div className="relative hidden min-h-[1120px] md:block">
          {books.map((book) => (
            <motion.button
              key={book.id}
              type="button"
              onClick={() => scrollToBook(book.id)}
              className={`absolute z-10 w-[27vw] min-w-[175px] max-w-[270px] rounded-xl border border-[#e1d7cb] bg-white p-4 text-left lg:max-w-[290px] lg:p-5 ${book.position}`}
              style={{ rotate: `${book.rotation}deg` }}
              whileHover={{ rotate: 0, scale: 1.08, zIndex: 50, boxShadow: "10px 14px 34px rgba(100,80,60,0.2)" }}
              whileTap={{ scale: 1.06, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-[#f4eee5]">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-width: 1280px) 28vw, 320px"
                  className="object-contain"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-12" aria-labelledby="books-detail-heading">
        <h2 id="books-detail-heading" className="text-center text-4xl text-[#3d342c]">
          About each book
        </h2>

        {books.map((book) => (
          <article
            key={book.id}
            id={`book-${book.id}`}
            className="scroll-mt-24 rounded-2xl border border-[#e1d8cc] bg-[#f8f1e8] p-6 card-shadow md:flex md:gap-8 md:p-8"
          >
            <div className="relative mx-auto aspect-[3/4] w-48 shrink-0 overflow-hidden rounded-xl border border-[#e4d7c8] bg-white sm:w-52 md:mx-0 md:w-44">
              <Image src={book.image} alt={book.title} fill sizes="200px" className="object-cover" />
            </div>
            <div className="mt-6 flex flex-1 flex-col md:mt-0">
              <h3 className="text-2xl font-semibold text-[#3d342c] md:text-3xl">{book.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#4a3f36]">{book.description}</p>
              <Link
                href="/shop"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-xl bg-[#A8B09A] px-6 py-2.5 text-white transition hover:brightness-95"
              >
                Visit the shop
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
