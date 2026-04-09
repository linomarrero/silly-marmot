"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

export function ShopGrid({ products }: { products: Product[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {products.map((product) => (
        <motion.article
          key={product.id}
          whileHover={{ y: -4, boxShadow: "10px 12px 30px rgba(100,80,60,0.18)" }}
          className="tape relative rounded-2xl border border-[#e7d9cc] bg-[#f8efe4] p-4 card-shadow"
        >
          <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl bg-[#f1e7da]">
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <h3 className="text-2xl italic">{product.name}</h3>
          <p className="mt-1 leading-7 text-[#5d4a3d]">{product.description}</p>
          <p className="handwritten mt-2 text-3xl text-[var(--taupe)]">{product.price}</p>
          <button className="mt-3 rounded-xl bg-[var(--sage)] px-4 py-2 text-[#f9f4eb] transition hover:brightness-95">Buy Now</button>
        </motion.article>
      ))}
    </section>
  );
}
