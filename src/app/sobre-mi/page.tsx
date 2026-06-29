import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import AboutIntro from "@/components/sobre-mi/AboutIntro";
import AboutGallery from "@/components/sobre-mi/AboutGallery";
import AboutWhyJoin from "@/components/sobre-mi/AboutWhyJoin";
import AboutPhilosophy from "@/components/sobre-mi/AboutPhilosophy";
import CTA from "@/components/home/CTA";
import { ABOUT_IMAGES } from "@/lib/content";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.pages.sobreMi.metadata.title,
    description: dict.about.paragraphs[0],
  };
}

export default async function SobreMiPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about, pages, whyJoin } = dict;

  return (
    <>
      <PageHeader
        badge={dict.common.aboutMe}
        title={about.title}
        subtitle={pages.sobreMi.subtitle}
        image={ABOUT_IMAGES.hero}
      />

      <AboutIntro />
      <AboutGallery />
      <AboutWhyJoin />
      <AboutPhilosophy />

      <section className="section-shell-sm">
        <Container>
          <div className="rounded-2xl bg-everfit-cream p-8 text-center md:p-12">
            <h2 className="mb-4 font-display text-2xl font-bold text-everfit-wine md:text-3xl">
              {pages.sobreMi.readyTitle}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-600">
              {pages.sobreMi.readyText}
            </p>
            <Link href="/contacto" className="btn-everfit-primary px-8">
              {whyJoin.cta}
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
