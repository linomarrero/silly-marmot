"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type Product = {
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  { name: "Silly Marmots Book + Plush Toy Bundle", price: "$30", image: "/images/products/bundle.jpg" },
  { name: "Plush Toy", price: "$10", image: "/images/products/plush.jpg" },
  { name: "Silly Marmots Book", price: "$20", image: "/images/products/silly-marmots-book.jpg" },
  { name: "Blue Book", price: "$20", image: "/images/products/blue-book.jpg" },
  // TODO: Replace static product data with Shopify Storefront API call.
];

export default function ShopPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10">
      <h1 className="text-center text-5xl">Shop</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#5d4a3d]">
        Bring home storytime favorites with books, plush toys, and bundles.
      </p>

      <section className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((product) => (
          <motion.article
            key={product.name}
            whileHover={{ y: -6, boxShadow: "10px 14px 34px rgba(100,80,60,0.2)" }}
            className="relative overflow-hidden rounded-2xl border border-[#e1d8cc] bg-white p-4 card-shadow"
          >
            <span className="absolute left-1/2 top-1 h-[14px] w-[48px] -translate-x-1/2 rounded-[4px] bg-[#D4CBC2] shadow-[0_2px_6px_rgba(100,80,60,0.12)]" />
            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl bg-[#f3ede4]">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                fill={true}
                sizes="(max-width: 768px) 100vw, 48vw"
                imageClassName="object-cover"
                fallbackText={`Missing file: ${product.image.replace("/images/products/", "")}`}
              />
            </div>
            <h2 className="mt-4 text-2xl">{product.name}</h2>
            <p className="handwritten mt-1 text-[28px] text-[#A8B09A]">{product.price}</p>
            <button className="mt-4 w-full rounded-xl bg-[#A8B09A] px-5 py-2 text-white transition hover:brightness-95">Buy Now</button>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
