"use client";

import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackText: string;
  containerClassName?: string;
  imageClassName?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
};

export function ImageWithFallback({
  src,
  alt,
  fallbackText,
  containerClassName = "",
  imageClassName = "object-cover",
  fill = false,
  sizes,
  width,
  height,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={containerClassName}>
      {failed ? (
        <div className="grid h-full w-full place-items-center rounded-md bg-[#D4DDD0] px-4 text-center text-base italic text-[#3D2E22]">
          {fallbackText}
        </div>
      ) : fill ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} onError={() => setFailed(true)} />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 500}
          height={height ?? 600}
          sizes={sizes}
          className={imageClassName}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
