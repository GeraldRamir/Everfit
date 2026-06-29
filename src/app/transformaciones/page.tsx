import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import TransformationStats from "@/components/transformaciones/TransformationStats";
import FeaturedTransformation from "@/components/transformaciones/FeaturedTransformation";
import TransformationsShowcase from "@/components/transformaciones/TransformationsShowcase";
import TransformationPillars from "@/components/transformaciones/TransformationPillars";
import CTA from "@/components/home/CTA";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";
import { buildTransformations } from "@/lib/transformations";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.pages.transformaciones.metadata.title,
    description: dict.transformationsPage.subtitle,
  };
}

export default async function TransformacionesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { transformationsPage, transformationUi } = dict;
  const transformations = buildTransformations(dict.transformations);

  return (
    <>
      <PageHeader
        badge={dict.pages.transformaciones.badge}
        title={transformationsPage.title}
        subtitle={transformationsPage.subtitle}
        image="/images/transformaciones/transformation-08.jpeg"
      />

      <TransformationStats />

      <section className="section-shell-sm border-b border-gray-100 bg-white">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            {transformationsPage.intro}
          </p>
        </Container>
      </section>

      <FeaturedTransformation />

      <section className="section-shell">
        <Container>
          <SectionHeader
            badge={transformationUi.realResultsBadge}
            title={transformationUi.eachPhotoTitle}
            subtitle={transformationUi.eachPhotoSubtitle}
            className="mb-12"
          />
          <TransformationsShowcase items={transformations} />
        </Container>
      </section>

      <TransformationPillars />

      <section className="section-shell-sm">
        <Container>
          <div className="rounded-2xl bg-everfit-wine p-8 text-center text-white md:p-12">
            <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
              {transformationUi.nextStoryTitle}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/80">
              {transformationUi.nextStoryText}
            </p>
            <Link href="/contacto" className="btn-everfit-orange px-8">
              {dict.pages.transformaciones.startNow}
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
