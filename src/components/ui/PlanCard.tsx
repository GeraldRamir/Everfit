"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";
import { useI18n } from "@/i18n/client";
import { cn, formatPlanPriceParts } from "@/lib/utils";

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
  const { locale, dict } = useI18n();
  const { common, cards, home } = dict;
  const priceParts = formatPlanPriceParts(price, slug, locale);

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
        {priceParts?.onSale && (
          <span className="absolute right-4 top-4 rounded-full bg-everfit-orange px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white shadow-lg">
            {home.anniversary.saleBadge}
          </span>
        )}
        {featured && !priceParts?.onSale && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-everfit-orange px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white shadow-lg">
            <Star size={11} fill="currentColor" aria-hidden="true" />
            {common.popular}
          </span>
        )}
        {featured && priceParts?.onSale && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-everfit-wine shadow-lg">
            <Star size={11} fill="currentColor" aria-hidden="true" />
            {common.popular}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {level}
          </span>
          {priceParts ? (
            <span className="text-right">
              {priceParts.original && (
                <span className="mb-0.5 block text-xs text-white/70 line-through">
                  {priceParts.original}
                </span>
              )}
              <span className="block font-display text-2xl font-bold tabular-nums text-white">
                {priceParts.current}
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-white/80">
                USD
              </span>
            </span>
          ) : (
            <span className="rounded-full bg-everfit-orange/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {common.coaching}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-1 font-display text-xl font-bold text-everfit-wine">{title}</h3>
        {priceParts ? (
          <div className="mb-3">
            {priceParts.original && (
              <p className="mb-0 text-sm text-gray-400">
                {home.anniversary.wasPrice}{" "}
                <span className="line-through">{priceParts.original}</span>
              </p>
            )}
            <p className="mb-0 font-display text-2xl font-bold tabular-nums text-everfit-orange">
              {priceParts.current}
            </p>
            <p className="mb-0 text-xs font-medium text-gray-500">{common.priceInUsd}</p>
          </div>
        ) : (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-everfit-orange">
            {common.coaching}
          </p>
        )}
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
