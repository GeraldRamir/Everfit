"use client";

import Link from "next/link";
import { Heart, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import IconBox from "@/components/ui/IconBox";
import { useI18n } from "@/i18n/client";

const highlightIcons = [Heart, ShieldCheck, Users];

export default function WhyJoin() {
  const { dict } = useI18n();
  const { whyJoin } = dict;

  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              badge={dict.common.coaching}
              title={whyJoin.title}
              subtitle={whyJoin.intro}
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {whyJoin.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-display text-lg font-semibold text-everfit-wine">
              {whyJoin.closing}
            </p>
            <Link href="/contacto" className="btn-everfit-primary mt-8">
              {whyJoin.cta}
            </Link>
          </div>

          <div className="space-y-4">
            {whyJoin.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? Heart;
              return (
                <article
                  key={item.title}
                  className="card-everfit flex gap-4 p-5"
                >
                  <IconBox icon={Icon} variant="wine" size="sm" />
                  <div>
                    <h3 className="mb-1 font-display font-bold text-everfit-wine">
                      {item.title}
                    </h3>
                    <p className="mb-0 text-sm text-gray-600">{item.text}</p>
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
