"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useI18n } from "@/i18n/client";
import { formatPrice } from "@/lib/utils";

type RetoCardProps = {
  title: string;
  slug: string;
  description: string;
  duration: string;
  price: number;
  image?: string | null;
};

export default function RetoCard({
  title,
  slug,
  description,
  duration,
  price,
  image,
}: RetoCardProps) {
  const { dict, locale } = useI18n();
  const { cards } = dict;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-everfit-wine/15 hover:shadow-xl hover:shadow-everfit-wine/5">
      <div className="relative h-44 overflow-hidden bg-everfit-cream">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 badge-everfit bg-white/95 shadow-sm">
          {cards.reto.badge}
        </span>
        <span className="absolute bottom-4 right-4 font-display text-xl font-bold tabular-nums text-white">
          {formatPrice(price, locale)}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-2 font-display text-lg font-bold text-everfit-wine">{title}</h3>
        <p className="mb-4 line-clamp-2 flex-grow text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <span className="meta-pill mb-4 w-fit">
          <Calendar size={13} aria-hidden="true" />
          {duration}
        </span>
        <Link
          href={`/retos/${slug}`}
          className="btn-everfit-outline group/btn flex w-full justify-between py-2.5 text-sm"
        >
          {cards.reto.view}
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
