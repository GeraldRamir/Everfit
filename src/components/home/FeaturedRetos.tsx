"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import RetoCard from "@/components/ui/RetoCard";
import { useI18n } from "@/i18n/client";

type Reto = {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  price: number;
  image: string | null;
};

export default function FeaturedRetos({ retos }: { retos: Reto[] }) {
  const { dict } = useI18n();
  const { featuredRetos } = dict.home;

  return (
    <section className="section-shell surface-muted">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeader
            badge={featuredRetos.badge}
            title={featuredRetos.title}
            subtitle={featuredRetos.subtitle}
            align="left"
            className="mb-0"
          />
          <Link
            href="/retos"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-everfit-wine transition-colors hover:text-everfit-orange md:inline-flex"
          >
            {featuredRetos.viewAll}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {retos.map((reto) => (
            <RetoCard key={reto.id} {...reto} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/retos" className="btn-everfit-outline">
            {featuredRetos.viewAllMobile}
          </Link>
        </div>
      </Container>
    </section>
  );
}
