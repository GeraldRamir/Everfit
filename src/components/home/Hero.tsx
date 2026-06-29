"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronRight, Sparkles } from "lucide-react";
import EverfitLogo from "@/components/ui/EverfitLogo";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/client";

export default function Hero() {
  const { dict } = useI18n();
  const { hero } = dict.home;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-everfit-charcoal">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-40"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10 pb-24 pt-28 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            <Sparkles size={14} className="text-everfit-orange" aria-hidden="true" />
            {hero.badge}
          </div>

          <EverfitLogo
            variant="full"
            theme="light"
            width={300}
            height={76}
            className="animate-fade-in mx-auto mb-10"
            priority
          />

          <h1 className="animate-fade-in-delay mb-6 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-everfit-orange to-[#ff6b6b] bg-clip-text text-transparent">
              {hero.titleLine2}
            </span>
          </h1>

          <p className="animate-fade-in-delay mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 md:max-w-2xl md:text-lg">
            {hero.description}
          </p>

          <div className="animate-fade-in-delay mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/planes" className="btn-everfit-orange min-w-[200px] px-8 py-3.5 text-base">
              {hero.viewPlans}
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contacto" className="btn-everfit-ghost min-w-[200px] px-8 py-3.5 text-base">
              {hero.freeConsultation}
            </Link>
          </div>

          <div className="animate-fade-in-delay mx-auto grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card rounded-2xl p-4 text-center transition-[background-color,border-color] duration-300 md:p-5"
              >
                <div className="font-display text-2xl font-bold tabular-nums text-everfit-orange md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-white/60 md:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </div>
    </section>
  );
}
