import Image from "next/image";
import type { ReactNode } from "react";

type BrandLogoProps = {
  src?: string;
  alt: string;
  size: number;
  fallback: ReactNode;
  className?: string;
};

export function BrandLogo({ src, alt, size, fallback, className }: BrandLogoProps) {
  if (!src) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={`${alt} logo`}
      width={size}
      height={size}
      className={className ?? "h-8 w-8 object-contain"}
    />
  );
}
