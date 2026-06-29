"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Flame, Dumbbell } from "lucide-react";
import { useI18n } from "@/i18n/client";

type RecipeCardProps = {
  title: string;
  slug: string;
  description: string;
  calories: number;
  protein: number;
  prepTime: string;
  category: string;
  image?: string | null;
};

export default function RecipeCard({
  title,
  slug,
  description,
  calories,
  protein,
  prepTime,
  category,
  image,
}: RecipeCardProps) {
  const { dict } = useI18n();
  const { common, cards } = dict;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-everfit-wine/15 hover:shadow-xl hover:shadow-everfit-wine/5">
      <div className="relative h-52 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 badge-everfit bg-white/95 shadow-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-2 font-display text-lg font-bold text-everfit-wine">{title}</h3>
        <p className="mb-4 line-clamp-2 flex-grow text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2 border-b border-gray-100 pb-5">
          <span className="meta-pill">
            <Flame size={13} className="text-everfit-orange" aria-hidden="true" />
            {calories} {common.kcal}
          </span>
          <span className="meta-pill">
            <Dumbbell size={13} aria-hidden="true" />
            {protein}{common.grams}
          </span>
          <span className="meta-pill">
            <Clock size={13} aria-hidden="true" />
            {prepTime}
          </span>
        </div>

        <Link
          href={`/recetas/${slug}`}
          className="btn-everfit-outline group/btn flex w-full justify-between py-2.5 text-sm"
        >
          {cards.recipe.view}
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
