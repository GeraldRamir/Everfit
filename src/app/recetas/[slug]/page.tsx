import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, UtensilsCrossed } from "lucide-react";
import Container from "@/components/ui/Container";
import { getDictionary } from "@/i18n";
import { localizeRecipe } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getRecipe, parseJsonArray } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  try {
    const { slug } = await params;
    const recipe = localizeRecipe(await getRecipe(slug), locale, dict.cms);
    return {
      title: `${recipe.title} | ${dict.pages.recipeDetail.metadataTitleSuffix}`,
      description: recipe.description,
    };
  } catch {
    return { title: dict.pages.recipeDetail.notFound };
  }
}

export const dynamic = "force-dynamic";

export default async function RecipeDetailPage({ params }: Props) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { common, pages } = dict;
  const { slug } = await params;

  let recipe;
  try {
    recipe = localizeRecipe(await getRecipe(slug), locale, dict.cms);
  } catch {
    notFound();
  }

  const ingredients = parseJsonArray(recipe.ingredients);
  const instructions = parseJsonArray(recipe.instructions);
  const totalMacros = recipe.protein + recipe.carbs + recipe.fat;

  const macroCards = [
    { label: common.calories, value: `${recipe.calories}`, unit: common.kcal },
    { label: common.protein, value: `${recipe.protein}`, unit: common.grams },
    { label: common.carbs, value: `${recipe.carbs}`, unit: common.grams },
    { label: common.fat, value: `${recipe.fat}`, unit: common.grams },
    ...(recipe.fiber != null
      ? [{ label: pages.recipeDetail.fiber, value: `${recipe.fiber}`, unit: common.grams }]
      : []),
  ];

  return (
    <>
      <section className="bg-everfit-cream pb-12 pt-28">
        <Container>
          <Link href="/recetas" className="mb-6 inline-block text-sm text-everfit-wine/60 hover:text-everfit-wine">
            {pages.recipeDetail.backToRecipes}
          </Link>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {recipe.image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority />
              </div>
            )}
            <div>
              <span className="badge-everfit mb-3">{recipe.category}</span>
              <h1 className="mb-4 font-display text-3xl font-bold text-everfit-wine md:text-4xl">
                {recipe.title}
              </h1>
              <p className="mb-6 text-lg text-gray-600">{recipe.description}</p>

              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {pages.recipeDetail.fullRecipeMacros}
              </p>
              <div
                className={`mb-6 grid gap-3 ${
                  macroCards.length > 4 ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4"
                }`}
              >
                {macroCards.map((macro) => (
                  <div key={macro.label} className="rounded-xl bg-white p-3 text-center shadow-sm">
                    <div className="text-xs text-gray-500">{macro.label}</div>
                    <div className="text-lg font-bold text-everfit-wine tabular-nums">
                      {macro.value}
                      <span className="text-xs font-normal text-gray-400">{macro.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="meta-pill">
                  <Clock size={13} aria-hidden="true" />
                  {recipe.prepTime}
                </span>
                <span className="meta-pill">
                  <UtensilsCrossed size={13} aria-hidden="true" />
                  {pages.recipeDetail.servings.replace("{count}", String(recipe.servings))}
                </span>
              </div>

              {recipe.notes && (
                <div className="mt-6 rounded-2xl border border-everfit-orange/20 bg-white/80 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-everfit-orange">
                    {pages.recipeDetail.notes}
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-gray-700">{recipe.notes}</p>
                </div>
              )}

              <div className="mt-6">
                <p className="mb-2 text-xs text-gray-500">{pages.recipeDetail.macroDistribution}</p>
                <div className="macro-bar">
                  <div
                    className="macro-bar-fill"
                    style={{
                      width: `${Math.min(totalMacros ? (recipe.protein / totalMacros) * 100 : 0, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell-sm">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="mb-5 font-display text-2xl font-bold text-everfit-wine">
                {pages.recipeDetail.ingredients}
              </h2>
              <ul className="list-none space-y-2 p-0">
                {ingredients.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-gray-100 py-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-everfit-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-7">
              <h2 className="mb-5 font-display text-2xl font-bold text-everfit-wine">
                {pages.recipeDetail.preparation}
              </h2>
              <ol className="list-none space-y-4 p-0">
                {instructions.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-everfit-wine text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="mb-0 pt-1 text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
