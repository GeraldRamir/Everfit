"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, Target, X, ZoomIn } from "lucide-react";
import type { Transformation } from "@/lib/transformations";
import { cn } from "@/lib/utils";
import { TransformationImage } from "@/components/transformaciones/TransformationImage";
import { useI18n } from "@/i18n/client";

type TransformationsShowcaseProps = {
  items: Transformation[];
};

export default function TransformationsShowcase({ items }: TransformationsShowcaseProps) {
  const { dict } = useI18n();
  const { transformationCategories, transformationUi } = dict;
  const [category, setCategory] = useState<Transformation["category"] | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      category === "all" ? items : items.filter((item) => item.category === category),
    [category, items]
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    setActiveIndex(null);
  }, [category]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrev]);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {transformationCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              category === cat.id
                ? "bg-everfit-wine text-white shadow-md shadow-everfit-wine/20"
                : "bg-white text-gray-600 ring-1 ring-gray-200 hover:text-everfit-wine hover:ring-everfit-wine/20"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <article
            key={item.id}
            className={cn(
              "group overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-everfit-wine/15 hover:shadow-xl hover:shadow-everfit-wine/5",
              item.featured && "sm:col-span-2 lg:row-span-1"
            )}
          >
            <button
              type="button"
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-everfit-wine"
              onClick={() => setActiveIndex(index)}
              aria-label={`${transformationUi.viewTransformation}: ${item.focus}`}
            >
              <div className="relative">
                <TransformationImage
                  src={item.image}
                  alt={item.alt}
                  className={cn(
                    "aspect-[4/5]",
                    item.featured && "sm:aspect-[16/10]"
                  )}
                  sizes={
                    item.featured
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-everfit-wine opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn size={14} aria-hidden="true" />
                  {transformationUi.enlarge}
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="meta-pill">
                    <Target size={13} aria-hidden="true" />
                    {item.focus}
                  </span>
                  <span className="meta-pill">
                    <Clock size={13} aria-hidden="true" />
                    {item.duration}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-everfit-wine">
                  {item.program}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.note}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-500">
          {transformationUi.noResults}
        </p>
      )}

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-everfit-charcoal/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={transformationUi.modalAriaLabel}
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={close}
            aria-label={transformationUi.close}
          >
            <X size={22} />
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:inline-flex"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label={transformationUi.previous}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:inline-flex"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={transformationUi.next}
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-everfit-charcoal shadow-2xl lg:grid-cols-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/5] bg-black lg:col-span-3 lg:aspect-auto lg:min-h-[32rem]">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-white/60"
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute bottom-6 left-6 rounded-full bg-black/50 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
                {transformationUi.before}
              </span>
              <span className="pointer-events-none absolute bottom-6 right-6 rounded-full bg-everfit-orange px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
                {transformationUi.after}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 text-white lg:col-span-2 lg:p-8">
              <span className="mb-4 text-xs font-semibold uppercase tracking-wider text-everfit-orange">
                {transformationUi.storyOf
                  .replace("{current}", String(activeIndex + 1))
                  .replace("{total}", String(filtered.length))}
              </span>
              <h3 className="mb-2 font-display text-2xl font-bold">{active.focus}</h3>
              <p className="mb-4 text-sm font-semibold text-white/90">{active.program}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  <Clock size={13} aria-hidden="true" />
                  {active.duration}
                </span>
              </div>
              <p className="leading-relaxed text-white/75">{active.note}</p>
              <p className="mt-6 text-sm text-white/50">
                {transformationUi.realResult}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
