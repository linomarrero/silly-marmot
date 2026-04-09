import type { Metadata } from "next";
import { Caveat, Lora } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MarmotEasterEgg } from "@/components/MarmotEasterEgg";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silly Marmot",
  description: "Children's books and family activities by Amari and Chien Yi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable} ${caveat.variable}`}>
      <body className="bg-[var(--bg-cream)] text-[var(--text-brown)] font-serif">
        <div className="texture-overlay" aria-hidden />
        <Sidebar />
        <div className="min-h-screen px-4 pb-12 pt-20 sm:px-6 md:pl-28 md:pr-10 md:pt-10">{children}</div>
        <MarmotEasterEgg />
      </body>
    </html>
  );
}
