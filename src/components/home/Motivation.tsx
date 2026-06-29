"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import IconBox from "@/components/ui/IconBox";
import { Brain, Dumbbell, TrendingUp } from "@/components/ui/icons";
import { useI18n } from "@/i18n/client";

const motivationIcons = [Brain, TrendingUp, Dumbbell];

export default function Motivation() {
  const { dict } = useI18n();
  const { motivation } = dict;

  return (
    <section className="section-shell relative overflow-hidden bg-everfit-charcoal text-white">
      <div className="pointer-events-none absolute -right-16 top-1/2 opacity-[0.04] -translate-y-1/2">
        <Image
          src="/images/isotipo-naranja-transparent.png"
          alt=""
          width={360}
          height={360}
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="badge-everfit mb-4 inline-block bg-white/10 text-everfit-cream">
              {motivation.badge}
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
              {motivation.title}{" "}
              <span className="text-everfit-orange">{motivation.titleHighlight}</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/70 md:text-lg">
              {motivation.description}
            </p>
            <Link href="/blog" className="btn-everfit-orange">
              {motivation.cta}
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-3">
            {motivation.items.map((item, index) => {
              const Icon = motivationIcons[index] ?? Brain;
              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"
                >
                  <IconBox icon={Icon} variant="ghost" />
                  <div className="min-w-0">
                    <h3 className="mb-2 font-display text-base font-bold text-everfit-cream md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mb-0 text-sm leading-relaxed text-white/65">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
