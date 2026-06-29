"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";
import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

type PlanCardProps = {
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  image?: string | null;
  featured?: boolean;
  highlight?: boolean;
};

export default function PlanCard({
  title,
  slug,
  description,
  price,
  duration,
  level,
  image,
  featured,
  highlight,
}: PlanCardProps) {
  const { dict } = useI18n();
  const { common, cards } = dict;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-[transform,box-shadow,border-color] duration-300",
        highlight
          ? "border-everfit-wine/20 shadow-lg shadow-everfit-wine/10 ring-2 ring-everfit-wine/10 lg:-mt-2 lg:mb-2"
          : "border-gray-100/80 shadow-sm hover:-translate-y-1 hover:border-everfit-wine/15 hover:shadow-xl hover:shadow-everfit-wine/5"
      )}
    >
      <div className="relative h-56 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-everfit-orange px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white shadow-lg">
            <Star size={11} fill="currentColor" aria-hidden="true" />
            {common.popular}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {level}
          </span>
          {price > 0 ? (
            <span className="font-display text-2xl font-bold tabular-nums text-white">
              ${price}
            </span>
          ) : (
            <span className="rounded-full bg-everfit-orange/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {common.coaching}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 font-display text-xl font-bold text-everfit-wine">{title}</h3>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto space-y-4 border-t border-gray-100 pt-5">
          <span className="meta-pill">
            <Clock size={13} aria-hidden="true" />
            {duration}
          </span>
          <Link
            href={`/planes/${slug}`}
            className="btn-everfit-primary group/btn flex w-full justify-between py-2.5 text-sm"
          >
            {cards.plan.signUp}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
