import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import RetoCard from "@/components/ui/RetoCard";
import CTA from "@/components/home/CTA";
import { getDictionary } from "@/i18n";
import { localizeChallenges } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getChallenges } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.pages.retos.metadata.title,
    description: dict.pages.retos.metadata.description,
  };
}

export const dynamic = "force-dynamic";

export default async function RetosPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { pages } = dict;
  const retos = localizeChallenges(await getChallenges(), locale, dict.cms);

  return (
    <>
      <PageHeader
        badge={pages.retos.badge}
        title={pages.retos.title}
        subtitle={pages.retos.subtitle}
        image="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80"
      />

      <section className="section-shell">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {retos.map((reto) => (
              <RetoCard key={reto.id} {...reto} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
