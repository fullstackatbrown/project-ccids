"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type HeroImage = {
  asset?: { _ref: string };
  hotspot?: { x: number; y: number };
  alt?: string;
};

export default function TitleImage({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image?: HeroImage | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative w-full h-[400px] md:h-[875px]"
    >
      {image?.asset ? (
        <Image
          // Sanity's CDN resizes per screen width, so Next doesn't recompress it
          loader={({ width }) => urlFor(image).width(width).auto("format").quality(85).url()}
          src={image.asset._ref}
          alt={image.alt || ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: image.hotspot
              ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
              : "center",
          }}
        />
      ) : (
        <Image
          src="/images/BrownUniversityCampusPhoto.webp"
          alt="Aerial view of Brown University campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      <div className="absolute bottom-8 md:bottom-[70px]">
        <h1 className="text-2xl md:text-6xl font-bold text-white ml-6 md:ml-[100px] leading-tight whitespace-pre-line">
          {title}
        </h1>
        <div className="h-4 md:h-9" />
        {/* Line breaks from Studio apply on desktop only, like the original layout */}
        <h3 className="text-xs md:text-lg font-normal text-white ml-6 md:ml-[100px] md:whitespace-pre-line">
          {subtitle}
        </h3>
      </div>
    </motion.div>
  );
}
