import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import PlanCard from "@/components/ui/PlanCard";
import PlanComparison from "@/components/planes/PlanComparison";
import PlanTierSections from "@/components/planes/PlanTierSections";
import HowItWorks from "@/components/planes/HowItWorks";
import PlanFAQ from "@/components/planes/PlanFAQ";
import FitIconCarousel from "@/components/planes/FitIconCarousel";
import CTA from "@/components/home/CTA";
import { getDictionary } from "@/i18n";
import { localizePlans } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getPlans } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.pages.planes.metadata.title,
    description: dict.pages.planes.metadata.description,
  };
}

export const dynamic = "force-dynamic";

const PLAN_ORDER = ["everfit-ignite", "everfit-power", "everfit-elite"];

function sortPlans<T extends { slug: string }>(plans: T[]): T[] {
  return [...plans].sort(
    (a, b) => PLAN_ORDER.indexOf(a.slug) - PLAN_ORDER.indexOf(b.slug)
  );
}

export default async function PlanesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { pages, whyJoin } = dict;
  const plans = localizePlans(sortPlans(await getPlans()), locale, dict.cms);

  return (
    <>
      <PageHeader
        badge={pages.planes.badge}
        title={pages.planes.title}
        subtitle={pages.planes.subtitle}
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
      />

      <FitIconCarousel />

      <section className="section-shell">
        <Container>
          <SectionHeader
            badge={pages.planes.programsBadge}
            title={pages.planes.programsTitle}
            subtitle={pages.planes.programsSubtitle}
            className="mb-14"
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            {plans.map((plan, index) => (
              <PlanCard key={plan.id} {...plan} highlight={index === 1} />
            ))}
          </div>
        </Container>
      </section>

      <PlanTierSections plans={plans} />

      <section className="section-shell-sm bg-everfit-cream/50">
        <Container>
          <SectionHeader
            title={dict.plansPage.comparisonTitle}
            subtitle={dict.plansPage.comparisonSubtitle}
            className="mb-10"
          />
          <PlanComparison />
        </Container>
      </section>

      <HowItWorks />

      <section className="section-shell-sm">
        <Container>
          <div className="rounded-2xl bg-everfit-wine p-8 text-center text-white md:p-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-everfit-orange">
              {whyJoin.title}
            </p>
            <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
              {whyJoin.closing}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/80">
              {whyJoin.paragraphs[whyJoin.paragraphs.length - 1]}
            </p>
            <Link href="/contacto" className="btn-everfit-orange px-8">
              {whyJoin.cta}
            </Link>
          </div>
        </Container>
      </section>

      <PlanFAQ />

      <section className="section-shell-sm">
        <Container>
          <div className="rounded-2xl bg-everfit-cream p-8 text-center md:p-12">
            <h2 className="mb-4 font-display text-2xl font-bold text-everfit-wine md:text-3xl">
              {pages.planes.choosePlanTitle}
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-gray-600">
              {pages.planes.choosePlanText}
            </p>
            <Link href="/contacto" className="btn-everfit-primary">
              {pages.planes.choosePlanCta}
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
