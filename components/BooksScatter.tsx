"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Book } from "@/lib/data";

export function BooksScatter({ books }: { books: Book[] }) {
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  return (
    <>
      <section className="mx-auto mt-6 max-w-6xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
          {books.map((book) => (
            <motion.button
              key={book.id}
              className="w-full rounded-2xl border-2 border-[#e8ddd0] bg-[#f8f5ef] p-2 text-left card-shadow"
              style={{ rotate: `${book.rotation}deg` }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              onClick={() => setActiveBook(book)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={book.cover} alt={book.title} fill sizes="50vw" className="object-cover" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="relative hidden min-h-[42rem] rounded-2xl bg-[#e6ebdf]/45 p-6 md:block">
          {books.map((book) => (
            <motion.button
              key={book.id}
              className={`absolute w-52 rounded-2xl border-2 border-[#e8ddd0] bg-[#f8f5ef] p-2 text-left card-shadow ${book.className}`}
              style={{ rotate: `${book.rotation}deg` }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 60, boxShadow: "var(--warm-shadow-deep)" }}
              transition={{ type: "spring", stiffness: 230, damping: 20 }}
              onClick={() => setActiveBook(book)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={book.cover} alt={book.title} fill sizes="22vw" className="object-cover" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeBook && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[#00000055] p-4"
            onClick={() => setActiveBook(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl rounded-2xl border border-[#e8d9cb] bg-[#f7f0e6] p-5 card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute right-3 top-3 rounded-xl bg-[#eadccc] px-2 py-1 text-sm" onClick={() => setActiveBook(null)}>
                Close
              </button>
              <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-xl border border-[#e4d7c8] sm:w-72">
                <Image src={activeBook.cover} alt={activeBook.title} fill sizes="300px" className="object-cover" />
              </div>
              <h3 className="mt-4 text-2xl italic">{activeBook.title}</h3>
              <p className="mt-2 leading-7 text-[#564437]">{activeBook.description}</p>
              <a
                href={activeBook.buyUrl}
                className="mt-5 inline-block rounded-xl bg-[var(--sage)] px-5 py-2 text-[#f9f5ee] transition hover:brightness-95"
              >
                Buy Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
