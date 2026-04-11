"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { shopifyBuyUrl } from "@/lib/shopify";

type BookItem = {
  id: string;
  title: string;
  image: string;
  rotation: number;
  position: string;
  description: string;
  buyUrl: string;
};

const books: BookItem[] = [
  { id: "silly-en", title: "Silly Marmots (English)", image: "/images/books/silly-marmots-en.jpg", rotation: -6, position: "left-[3%] top-[4%]", description: "An adventure full of heart, humor, and gentle growth.", buyUrl: "/products/silly-marmots" },
  { id: "silly-zh", title: "Silly Marmots (Chinese)", image: "/images/books/silly-marmots-zh.jpg", rotation: 4, position: "right-[4%] top-[3%]", description: "A warm bilingual reading experience for families.", buyUrl: "/products/silly-marmots-bilingual" },
  { id: "blue", title: "Blue the Investment Banker Dinosaur", image: "/images/books/blue.jpg", rotation: -3, position: "left-[12%] top-[40%]", description: "A quirky story about confidence and belonging.", buyUrl: "/products/blue" },
  { id: "bad", title: "The Only Bad Marmot", image: "/images/books/only-bad-marmot.jpg", rotation: 7, position: "left-[38%] top-[38%]", description: "A tale of mistakes, repair, and second chances.", buyUrl: "/products/the-only-bad-marmot" },
  { id: "bad-zh", title: "壞壞小地鼠 (Chinese)", image: "/images/books/bad-marmot-zh.jpg", rotation: -5, position: "right-[4%] top-[45%]", description: "Chinese edition for shared family storytime.", buyUrl: "/products/the-only-bad-marmot-bilingual" },
];

export default function BooksPage() {
  const [active, setActive] = useState<BookItem | null>(null);
  const activeBuy = active ? shopifyBuyUrl(active.buyUrl) : "#";

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10">
      <h1 className="text-center text-5xl">Books</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#5d4a3d]">
        A cozy bookshelf of stories for brave, curious hearts.
      </p>

      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[#ddd3c5] bg-[#e3eadf] p-5">
        <div className="absolute inset-5 hidden rounded-xl bg-[#f8f2e8] md:block" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
          {books.map((book) => (
            <motion.button
              key={book.id}
              onClick={() => setActive(book)}
              className="z-10 rounded-xl border border-[#e1d7cb] bg-white p-3 text-left"
              whileHover={{ y: -3 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image src={book.image} alt={book.title} fill sizes="40vw" className="object-cover" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="relative hidden min-h-[620px] md:block">
          {books.map((book) => (
            <motion.button
              key={book.id}
              onClick={() => setActive(book)}
              className={`absolute z-10 w-[22vw] min-w-[150px] max-w-[250px] rounded-xl border border-[#e1d7cb] bg-white p-4 text-left ${book.position}`}
              style={{ rotate: `${book.rotation}deg` }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 50, boxShadow: "10px 14px 34px rgba(100,80,60,0.2)" }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-[#f4eee5]">
                <Image src={book.image} alt={book.title} fill sizes="260px" className="object-contain" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-[#00000066] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl bg-[#f8f1e8] p-6 card-shadow"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-md">
                <Image src={active.image} alt={active.title} fill sizes="280px" className="object-cover" />
              </div>
              <h2 className="mt-4 text-3xl">{active.title}</h2>
              <p className="mt-2 text-lg">{active.description}</p>
              {activeBuy === "#" ? (
                <p className="mt-5 rounded-xl border border-dashed border-[#c7bfb4] bg-[#faf6f0] px-4 py-3 text-sm text-[#6b5c4f]">
                  Online ordering is almost here. Add your Shopify URL in environment settings to turn on Buy links.
                </p>
              ) : (
                <a
                  href={activeBuy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-xl bg-[#A8B09A] px-5 py-2 text-white transition hover:brightness-95"
                >
                  Buy Now
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
