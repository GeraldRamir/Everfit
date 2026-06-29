"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/client";

export default function CTA() {
  const { dict } = useI18n();
  const { cta } = dict.home;

  return (
    <section className="relative overflow-hidden bg-everfit-wine py-20 md:py-24">
      <Image
        src="/images/isotipo-vino-transparent.png"
        alt=""
        width={480}
        height={480}
        className="pointer-events-none absolute -right-16 top-1/2 opacity-[0.06] -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-everfit-wine via-everfit-wine to-[#4a0e0e]"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          {cta.eyebrow}
        </p>
        <h2 className="mb-5 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
          {cta.title}
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
          {cta.description}
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contacto"
            className="btn-everfit bg-white text-everfit-wine hover:bg-everfit-cream"
          >
            {cta.scheduleConsultation}
          </Link>
          <Link href="/planes" className="btn-everfit-ghost">
            {cta.viewPlansAndPricing}
          </Link>
        </div>
      </Container>
    </section>
  );
}
