import Image from "next/image";

type PolaroidFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PolaroidFrame({ src, alt, className = "" }: PolaroidFrameProps) {
  return (
    <div className={`relative rounded-2xl border border-[#e8dccf] bg-[#f8f4ed] p-3 card-shadow ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#efe7dc]">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute -bottom-2 right-8 h-8 w-24 rotate-3 rounded-sm bg-white/65" />
    </div>
  );
}
