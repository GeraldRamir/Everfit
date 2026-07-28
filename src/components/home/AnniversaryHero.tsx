"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowUpRight, Dumbbell, Sparkles, Star } from "lucide-react";
import AnniversaryCountdown from "@/components/home/AnniversaryCountdown";
import { ANNIVERSARY_DISCOUNT_PERCENT } from "@/lib/anniversary";
import { ABOUT_IMAGES } from "@/lib/content";
import { useI18n } from "@/i18n/client";

export default function AnniversaryHero() {
  const { dict } = useI18n();
  const a = dict.home.anniversary;

  return (
    <section className="relative overflow-hidden pt-[4.25rem] lg:pt-[4.75rem]">
      {/* Cream / wine split behind the card */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[56%] bg-[#f3eee8]" />
        <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[#3f0c12]" />
        <div
          className="absolute inset-x-0 top-[52%] h-24 -translate-y-1/2 opacity-60"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(63,12,18,0.35), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 py-5 sm:px-5 lg:px-8 lg:py-8">
        <div className="anniversary-hero-card relative overflow-hidden rounded-[1.75rem] bg-[#0c0a0a] shadow-[0_32px_80px_-24px_rgba(74,14,20,0.6)] ring-1 ring-white/10 sm:rounded-[2rem]">
          {/* Full-bleed trainer photo */}
          <div className="absolute inset-0">
            <Image
              src={ABOUT_IMAGES.portrait}
              alt={a.collageAlt}
              fill
              priority
              className="anniversary-hero-photo object-cover object-[center_18%] sm:object-[68%_12%]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(8,6,6,0.94) 0%, rgba(8,6,6,0.78) 34%, rgba(8,6,6,0.35) 58%, rgba(8,6,6,0.55) 100%), linear-gradient(180deg, rgba(8,6,6,0.5) 0%, transparent 30%, rgba(8,6,6,0.72) 100%)",
              }}
              aria-hidden="true"
            />
            {/* Warm brand glow */}
            <div
              className="pointer-events-none absolute -right-10 top-1/4 h-72 w-72 rounded-full bg-everfit-orange/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-everfit-wine/35 blur-3xl"
              aria-hidden="true"
            />
            {/* Film grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative grid min-h-[620px] lg:min-h-[680px] lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col justify-between px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
              <div>
                {/* Top meta row */}
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md">
                    <span className="inline-flex items-center gap-0.5 text-[#f5c451]" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                      ))}
                    </span>
                    <span className="text-[0.78rem] font-medium tracking-wide">
                      {a.ratingLabel}
                    </span>
                  </div>
                </div>

                {/* Big 50% OFF — primary visual hook */}
                <div className="anniversary-discount-hero mb-5 inline-flex items-end gap-3 sm:gap-4">
                  <div className="relative">
                    <span
                      className="pointer-events-none absolute -inset-4 rounded-full bg-everfit-orange/25 blur-2xl sm:-inset-6"
                      aria-hidden="true"
                    />
                    <p className="relative font-display text-[5.5rem] font-extrabold leading-none tracking-[-0.06em] text-everfit-orange sm:text-[7rem] lg:text-[8.25rem]">
                      {ANNIVERSARY_DISCOUNT_PERCENT}
                      <span className="text-[0.55em]">%</span>
                    </p>
                  </div>
                  <div className="mb-2 sm:mb-3">
                    <p className="font-display text-2xl font-bold uppercase leading-none tracking-[0.08em] text-white sm:text-3xl lg:text-4xl">
                      OFF
                    </p>
                    <p className="mt-1.5 max-w-[9rem] text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.14em] text-white/65 sm:text-xs">
                      {a.discountLabel}
                    </p>
                  </div>
                </div>

                <h1 className="anniversary-hero-title mb-5 max-w-xl font-display text-[2.2rem] font-bold leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-[3.1rem]">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span>{a.headline1Lead}</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="anniversary-serif text-[1.02em] font-medium italic text-white/95">
                        {a.headline1Accent}
                      </span>
                      <span className="anniversary-icon-pill inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/85 ring-1 ring-white/15 backdrop-blur-sm sm:h-10 sm:w-10">
                        <Dumbbell size={16} aria-hidden="true" />
                      </span>
                    </span>
                  </span>
                  <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span>{a.headline2Lead}</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="anniversary-serif text-[1.02em] font-medium italic text-white/95">
                        {a.headline2Accent}
                      </span>
                      <span className="anniversary-icon-pill inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/85 ring-1 ring-white/15 backdrop-blur-sm sm:h-10 sm:w-10">
                        <Activity size={16} aria-hidden="true" />
                      </span>
                    </span>
                  </span>
                </h1>

                <p className="mb-7 max-w-md text-sm leading-relaxed text-white/80 sm:text-[0.95rem]">
                  <span className="text-white/80">{a.descriptionBefore}</span>
                  <span className="font-medium text-white underline decoration-everfit-orange/70 decoration-2 underline-offset-4">
                    {a.descriptionHighlight1}
                  </span>
                  <span className="text-white/80">{a.descriptionMiddle}</span>
                  <span className="font-semibold text-everfit-orange underline decoration-everfit-orange/80 decoration-2 underline-offset-4">
                    {a.descriptionHighlight2}
                  </span>
                  <span className="text-white/80">{a.descriptionAfter}</span>
                </p>

                {/* Live countdown */}
                <div className="mb-8 max-w-md">
                  <AnniversaryCountdown
                    labels={a.countdown}
                    endsLabel={a.countdownLabel}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    href="/planes"
                    className="anniversary-cta-shine group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-everfit-orange px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(230,57,70,0.65)] transition-[transform,filter] duration-200 hover:brightness-110"
                  >
                    <span className="relative z-10">{a.ctaPlans}</span>
                    <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover:rotate-12">
                      <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  </Link>

                  <Link
                    href="/planes"
                    className="anniversary-orbit group relative inline-flex h-[6.5rem] w-[6.5rem] items-center justify-center"
                    aria-label={a.ctaPlans}
                  >
                    <span
                      className="pointer-events-none absolute inset-2 rounded-full border border-white/10"
                      aria-hidden="true"
                    />
                    <svg
                      viewBox="0 0 100 100"
                      className="anniversary-orbit-text absolute inset-0 h-full w-full overflow-visible"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="anniversary-cta-path"
                          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        />
                      </defs>
                      <text
                        className="fill-white/80 text-[9.5px] uppercase tracking-[0.22em]"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                      >
                        <textPath href="#anniversary-cta-path" startOffset="0%">
                          {a.ctaCircle}
                        </textPath>
                      </text>
                    </svg>
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-everfit-charcoal shadow-[0_10px_30px_-8px_rgba(255,255,255,0.55)] transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight size={18} strokeWidth={2.25} />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-5">
                <p className="max-w-sm text-xs leading-relaxed text-white/45">
                  {a.datesNote}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-everfit-orange" />
                  {a.eyebrow}
                </div>
              </div>
            </div>

            {/* Right decorative column — oversized 50% watermark */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="anniversary-discount-watermark absolute inset-0 flex items-center justify-center">
                <p className="select-none font-display text-[14rem] font-extrabold leading-none tracking-[-0.07em] text-white/[0.08]">
                  {ANNIVERSARY_DISCOUNT_PERCENT}%
                </p>
              </div>
              <div className="absolute right-8 top-10 overflow-hidden rounded-2xl border border-everfit-orange/35 bg-everfit-orange/15 px-5 py-4 shadow-[0_16px_40px_-16px_rgba(230,57,70,0.55)] backdrop-blur-md">
                <div className="mb-1 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-everfit-orange">
                  <Sparkles size={12} />
                  {a.statDiscount}
                </div>
                <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-white">
                  {ANNIVERSARY_DISCOUNT_PERCENT}%
                  <span className="ml-1 text-2xl font-bold text-everfit-orange">OFF</span>
                </p>
              </div>
              <div className="absolute bottom-16 right-10 h-24 w-24 rounded-full border border-white/10 bg-gradient-to-br from-everfit-orange/25 to-transparent blur-[1px]" />
              <div className="absolute bottom-28 right-28 h-3 w-3 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
