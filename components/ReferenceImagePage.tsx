import Image from "next/image";

type ReferenceImagePageProps = {
  src: string;
  alt: string;
};

export function ReferenceImagePage({ src, alt }: ReferenceImagePageProps) {
  return (
    <main className="mx-auto max-w-[1180px] pb-8">
      <div className="overflow-hidden rounded-[20px] border border-[#e1d4c5] bg-[#f5eee4] p-2 card-shadow sm:p-3">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority
          className="h-auto w-full rounded-2xl"
          sizes="(max-width: 1280px) 100vw, 1180px"
        />
      </div>
    </main>
  );
}
