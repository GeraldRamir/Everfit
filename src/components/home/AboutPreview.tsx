"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT_IMAGES } from "@/lib/content";
import { useI18n } from "@/i18n/client";

export default function AboutPreview() {
  const { dict } = useI18n();
  const { about, aboutCredentials, aboutImages } = dict;
  const { aboutPreview } = dict.home;

  return (
    <section className="section-shell surface-cream">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-everfit-wine/10">
              <Image
                src={ABOUT_IMAGES.portrait}
                alt={aboutImages.portraitAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 992px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-everfit-wine px-6 py-4 text-white shadow-lg md:block">
              <div className="font-display text-lg font-bold">{about.title}</div>
              <div className="text-sm text-white/75">{about.role}</div>
            </div>
          </div>

          <div>
            <SectionHeader
              badge={aboutPreview.badge}
              title={aboutPreview.title}
              subtitle={about.role}
              align="left"
              className="mb-8"
            />

            {about.paragraphs.slice(0, 2).map((p) => (
              <p key={p.slice(0, 30)} className="mb-4 leading-relaxed text-gray-600">
                {p}
              </p>
            ))}

            <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {aboutCredentials.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-everfit-wine/10 text-everfit-wine">
                    <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/sobre-mi" className="btn-everfit-primary">
              {aboutPreview.knowMyStory}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
