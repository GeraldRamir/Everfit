"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import StarRating from "@/components/ui/StarRating";
import { useI18n } from "@/i18n/client";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string | null;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const { dict } = useI18n();
  const { testimonials: testimonialsCopy } = dict.home;

  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeader
          badge={testimonialsCopy.badge}
          title={testimonialsCopy.title}
          subtitle={testimonialsCopy.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="card-everfit flex flex-col p-6">
              <StarRating rating={t.rating} />
              <p className="my-5 flex-grow text-sm leading-relaxed text-gray-700 md:text-base">
                &ldquo;{t.content}&rdquo;
              </p>
              <footer className="flex items-center gap-3 border-t border-gray-100 pt-5">
                {t.image && (
                  <Image
                    src={t.image}
                    alt=""
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                )}
                <div className="min-w-0">
                  <cite className="block font-display text-sm font-bold not-italic text-everfit-wine">
                    {t.name}
                  </cite>
                  <p className="mb-0 truncate text-xs text-gray-500">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
