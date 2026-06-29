"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/client";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: Date | string;
  image?: string | null;
};

export default function BlogCard({
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  image,
}: BlogCardProps) {
  const { dict, locale } = useI18n();
  const dateLocale = locale === "en" ? "en-US" : "es-ES";

  return (
    <article className="card-everfit h-100">
      <div className="relative h-48 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge-everfit">{category}</span>
          <span className="text-xs text-gray-400">
            {new Date(publishedAt).toLocaleDateString(dateLocale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-display font-bold text-lg text-everfit-wine mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-everfit-wine font-semibold text-sm hover:text-everfit-orange transition-colors">
          {dict.cards.blog.read} →
        </Link>
      </div>
    </article>
  );
}
