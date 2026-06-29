"use client";

import Link from "next/link";
import { ChevronRight, UtensilsCrossed } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import RecipeCard from "@/components/ui/RecipeCard";
import { useI18n } from "@/i18n/client";

type Recipe = {
  id: string;
  title: string;
  slug: string;
  description: string;
  calories: number;
  protein: number;
  prepTime: string;
  category: string;
  image: string | null;
};

export default function FeaturedRecipes({ recipes }: { recipes: Recipe[] }) {
  const { dict } = useI18n();
  const { featuredRecipes } = dict.home;

  return (
    <section className="section-shell recipes-grid-accent">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <SectionHeader
              badge={featuredRecipes.badge}
              title={featuredRecipes.title}
              subtitle={featuredRecipes.subtitle}
              align="left"
              className="mb-0"
            />
          </div>
          <div className="hidden shrink-0 flex-col items-end gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm ring-1 ring-gray-100">
              <UtensilsCrossed size={16} className="text-everfit-wine" aria-hidden="true" />
              <span>{recipes.length}+ {featuredRecipes.available}</span>
            </div>
            <Link
              href="/recetas"
              className="inline-flex items-center gap-1 text-sm font-semibold text-everfit-wine transition-colors hover:text-everfit-orange"
            >
              {featuredRecipes.exploreAll}
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/recetas" className="btn-everfit-primary px-8">
            {featuredRecipes.exploreRecipes}
          </Link>
        </div>
      </Container>
    </section>
  );
}
