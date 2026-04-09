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
  { label: "For Parents", href: "/for-parents", blurb: "Helpful reading and play resources." },
];

export const books: Book[] = [
  {
    id: "silly-marmots",
    title: "Silly Marmots",
    cover: "/images/books/silly-marmots-en.jpg",
    description: "A playful story about kindness, imagination, and finding joy in little moments.",
    buyUrl: "#",
    rotation: -6,
    className: "left-10 top-12",
  },
  {
    id: "blue",
    title: "Blue",
    cover: "/images/books/blue.jpg",
    description: "Blue learns that being different can be a superpower when friends cheer you on.",
    buyUrl: "#",
    rotation: 4,
    className: "left-64 top-44",
  },
  {
    id: "only-bad-marmot",
    title: "The Only Bad Marmot",
    cover: "/images/books/only-bad-marmot.jpg",
    description: "A heartfelt tale about mistakes, repair, and second chances in a loving community.",
    buyUrl: "#",
    rotation: -3,
    className: "left-[26rem] top-20",
  },
  {
    id: "silly-marmots-zh",
    title: "Silly Marmots (Bilingual)",
    cover: "/images/books/silly-marmots-zh.jpg",
    description: "A bilingual edition that celebrates family language and shared storytelling.",
    buyUrl: "#",
    rotation: 7,
    className: "left-[42rem] top-32",
  },
  {
    id: "bad-marmot-zh",
    title: "The Only Bad Marmot (Bilingual)",
    cover: "/images/books/bad-marmot-zh.jpg",
    description: "The bilingual companion edition for families reading side-by-side across languages.",
    buyUrl: "#",
    rotation: -5,
    className: "left-[24rem] top-80",
  },
];

export const products: Product[] = [
  {
    id: "bundle",
    name: "Silly Marmot Book + Plush",
    image: "/images/products/bundle.jpg",
    price: "$30",
    description: "Our family favorite starter bundle for reading and cuddles.",
  },
  {
    id: "plush",
    name: "Silly Marmot Plush Toy",
    image: "/images/products/plush.jpg",
    price: "$10",
    description: "Soft, huggable, and ready for bedtime stories.",
  },
  {
    id: "book",
    name: "Silly Marmots Book",
    image: "/images/products/silly-marmots-book.jpg",
    price: "$20",
    description: "A warm storybook for growing kind and curious hearts.",
  },
  {
    id: "blue-book",
    name: "Blue Book",
    image: "/images/products/blue-book.jpg",
    price: "$20",
    description: "A joyful read for children exploring confidence and friendship.",
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
