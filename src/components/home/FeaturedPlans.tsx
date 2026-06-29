"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PlanCard from "@/components/ui/PlanCard";
import { useI18n } from "@/i18n/client";

type Plan = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  image: string | null;
  featured: boolean;
};

export default function FeaturedPlans({ plans }: { plans: Plan[] }) {
  const { dict } = useI18n();
  const { featuredPlans } = dict.home;

  return (
    <section className="section-shell plans-grid-accent">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeader
            badge={featuredPlans.badge}
            title={featuredPlans.title}
            subtitle={featuredPlans.subtitle}
            align="left"
            className="mb-0"
          />
          <Link
            href="/planes"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-everfit-wine transition-colors hover:text-everfit-orange md:inline-flex"
          >
            {featuredPlans.viewCatalog}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              {...plan}
              highlight={index === 1}
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/planes" className="btn-everfit-outline">
            {featuredPlans.viewAllPlans}
          </Link>
        </div>
      </Container>
    </section>
  );
}
