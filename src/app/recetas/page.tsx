import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import RecipeCard from "@/components/ui/RecipeCard";
import CTA from "@/components/home/CTA";
import { getDictionary } from "@/i18n";
import { localizeRecipes } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getRecipes } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.pages.recetas.metadata.title,
    description: dict.pages.recetas.metadata.description,
  };
}

export const dynamic = "force-dynamic";

export default async function RecetasPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { pages } = dict;
  const recipes = localizeRecipes(await getRecipes(), locale, dict.cms);
  const categories = [...new Set(recipes.map((r) => r.category))];

  return (
    <>
      <PageHeader
        badge={pages.recetas.badge}
        title={pages.recetas.title}
        subtitle={pages.recetas.subtitle}
        image="https://images.unsplash.com/photo-1498837167922-ddd27525cd34?w=1200&q=80"
      />

      <section className="section-shell">
        <Container>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span key={cat} className="badge-everfit">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
