export type NavItem = {
  label: string;
  href: string;
  blurb: string;
};

export type Book = {
  id: string;
  title: string;
  cover: string;
  description: string;
  buyUrl: string;
  rotation: number;
  className: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  /** Full URL or path under NEXT_PUBLIC_SHOPIFY_STORE_URL (e.g. /products/bundle-handle). */
  buyUrl: string;
};

export type EventItem = {
  id: string;
  title: string;
  /** ISO date (YYYY-MM-DD) for sorting */
  date: string;
  /** Human-readable date line */
  dateLabel: string;
  time?: string;
  location?: string;
  description: string;
  /** Optional RSVP, tickets, or event detail link */
  linkUrl?: string;
  linkLabel?: string;
  /**
   * Optional flyer: site path like `/images/events/my-flyer.jpg` (add files under `public/images/events/`)
   * or a full `https://...` URL (e.g. hosted PDF thumbnail or image).
   */
  flyerImage?: string;
  flyerAlt?: string;
};

export type Feature = {
  title: string;
  description: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", blurb: "Start your journey with Silly Marmot." },
  { label: "Our Story", href: "/our-story", blurb: "Meet the family behind the stories." },
  { label: "Marmot & Me", href: "/marmot-and-me", blurb: "Interactive kits made for family time." },
  { label: "Books", href: "/books", blurb: "Browse books that grow brave hearts." },
  { label: "Shop", href: "/shop", blurb: "Bring home favorite stories and plush pals." },
  { label: "Events", href: "/events", blurb: "Join warm story hours and meetups." },
  { label: "For Parents", href: "/for-parents", blurb: "A note for grown-ups about this kid-friendly site." },
];

export const books: Book[] = [
  {
    id: "silly-marmots",
    title: "Silly Marmots",
    cover: "/images/books/silly-marmots-en.jpg",
    description: "A playful story about kindness, imagination, and finding joy in little moments.",
    buyUrl: "/products/silly-marmots",
    rotation: -6,
    className: "left-10 top-12",
  },
  {
    id: "blue",
    title: "Blue",
    cover: "/images/books/blue.jpg",
    description: "Blue learns that being different can be a superpower when friends cheer you on.",
    buyUrl: "/products/blue",
    rotation: 4,
    className: "left-64 top-44",
  },
  {
    id: "only-bad-marmot",
    title: "The Only Bad Marmot",
    cover: "/images/books/only-bad-marmot.jpg",
    description: "A heartfelt tale about mistakes, repair, and second chances in a loving community.",
    buyUrl: "/products/the-only-bad-marmot",
    rotation: -3,
    className: "left-[26rem] top-20",
  },
  {
    id: "silly-marmots-zh",
    title: "Silly Marmots (Bilingual)",
    cover: "/images/books/silly-marmots-zh.jpg",
    description: "A bilingual edition that celebrates family language and shared storytelling.",
    buyUrl: "/products/silly-marmots-bilingual",
    rotation: 7,
    className: "left-[42rem] top-32",
  },
  {
    id: "bad-marmot-zh",
    title: "The Only Bad Marmot (Bilingual)",
    cover: "/images/books/bad-marmot-zh.jpg",
    description: "The bilingual companion edition for families reading side-by-side across languages.",
    buyUrl: "/products/the-only-bad-marmot-bilingual",
    rotation: -5,
    className: "left-[24rem] top-80",
  },
];

/**
 * Edit this list for real dates and links. Sorted by `date` when rendered.
 * The Events page shows each event that has `flyerImage` as a large poster; add PNG/JPG under
 * `public/images/events/` (e.g. `flyerImage: "/images/events/story-hour.png"`) or a full `https://...` image URL.
 * Optional `linkUrl` / `linkLabel` appear as a text link under the poster.
 */
export const events: EventItem[] = [
  {
    id: "story-hour-may",
    title: "Silly Marmot Story Hour",
    date: "2026-05-17",
    dateLabel: "Saturday, May 17, 2026",
    time: "10:30 a.m. – 11:30 a.m.",
    location: "Local library (TBA)",
    description: "A cozy read-aloud with crafts and a plush meet-and-greet for little readers.",
    flyerImage: "/images/events/story-hour-may.jpg",
    flyerAlt: "Poster for Silly Marmot Story Hour — May 17, 2026",
  },
  {
    id: "summer-craft",
    title: "Summer Craft & Color Day",
    date: "2026-06-21",
    dateLabel: "Sunday, June 21, 2026",
    time: "2:00 p.m. – 4:00 p.m.",
    location: "Community center (TBA)",
    description: "Coloring sheets, sticker scenes, and photo ops with Silly Marmot friends.",
  },
  {
    id: "bilingual-circle",
    title: "Bilingual Story Circle",
    date: "2026-07-12",
    dateLabel: "Sunday, July 12, 2026",
    time: "11:00 a.m. – 12:00 p.m.",
    location: "Online (link TBA)",
    description: "Families read together in English and Chinese with gentle discussion prompts.",
  },
];

export const products: Product[] = [
  {
    id: "bundle",
    name: "Silly Marmot Book + Plush",
    image: "/images/products/bundle.jpg",
    price: "$30",
    description: "Our family favorite starter bundle for reading and cuddles.",
    buyUrl: "https://theproperlizard.com/products/marmot-bundle",
  },
  {
    id: "plush",
    name: "Silly Marmot Plush Toy",
    image: "/images/products/plush.jpg",
    price: "$10",
    description: "Soft, huggable, and ready for bedtime stories.",
    buyUrl: "https://theproperlizard.com/products/silly-marmot-toy",
  },
  {
    id: "book",
    name: "Silly Marmots Book",
    image: "/images/products/silly-marmots-book.jpg",
    price: "$20",
    description: "A warm storybook for growing kind and curious hearts.",
    buyUrl: "https://theproperlizard.com/products/silly-marmots-book?variant=51473667260704",
  },
  {
    id: "blue-book",
    name: "Blue Book",
    image: "/images/products/blue-book.jpg",
    price: "$20",
    description: "A joyful read for children exploring confidence and friendship.",
    buyUrl: "https://theproperlizard.com/products/blue-the-investment-banker-dinosaur",
  },
];

export const marmotAndMeFeatures: Feature[] = [
  {
    title: "Activity Booklets",
    description:
      "Hands-on printable and bound activities inspired by our stories, perfect for rainy afternoons and cozy reading corners.",
    image: "/images/feature-activity.png",
  },
  {
    title: "Creative Craft Box",
    description:
      "A monthly craft box designed to spark imagination with guided art prompts, stickers, and playful keepsakes.",
    image: "/images/feature-craft.png",
  },
  {
    title: "Plush Toys",
    description:
      "Our plush marmots are made to become brave companions for bedtime, classroom visits, and storytime adventures.",
    image: "/images/feature-plush.png",
  },
];
