import type { Locale } from "./config";
import type { CmsContent } from "./cms-types";
import type {
  BlogPost,
  Challenge,
  Plan,
  Recipe,
  Service,
  Testimonial,
} from "@/lib/api";

function cmsFor(locale: Locale, cms?: CmsContent): CmsContent | undefined {
  return locale === "en" ? cms : undefined;
}

export function localizeService(
  service: Service,
  locale: Locale,
  cms?: CmsContent
): Service {
  const entry = cmsFor(locale, cms)?.services[service.icon];
  if (!entry) return service;
  return { ...service, title: entry.title, description: entry.description };
}

export function localizeServices(
  services: Service[],
  locale: Locale,
  cms?: CmsContent
): Service[] {
  return services.map((s) => localizeService(s, locale, cms));
}

export function localizePlan(plan: Plan, locale: Locale, cms?: CmsContent): Plan {
  const entry = cmsFor(locale, cms)?.plans[plan.slug];
  if (!entry) return plan;
  return {
    ...plan,
    description: entry.description,
    longDesc: entry.longDesc,
    duration: entry.duration,
    level: entry.level,
    features: JSON.stringify(entry.features),
  };
}

export function localizePlans(
  plans: Plan[],
  locale: Locale,
  cms?: CmsContent
): Plan[] {
  return plans.map((p) => localizePlan(p, locale, cms));
}

export function localizeChallenge(
  challenge: Challenge,
  locale: Locale,
  cms?: CmsContent
): Challenge {
  const entry = cmsFor(locale, cms)?.challenges[challenge.slug];
  if (!entry) return challenge;
  return {
    ...challenge,
    title: entry.title,
    description: entry.description,
    duration: entry.duration,
  };
}

export function localizeChallenges(
  challenges: Challenge[],
  locale: Locale,
  cms?: CmsContent
): Challenge[] {
  return challenges.map((c) => localizeChallenge(c, locale, cms));
}

export function localizeRecipe(
  recipe: Recipe,
  locale: Locale,
  cms?: CmsContent
): Recipe {
  const entry = cmsFor(locale, cms)?.recipes[recipe.slug];
  if (!entry) return recipe;
  return {
    ...recipe,
    title: entry.title,
    description: entry.description,
    ingredients: JSON.stringify(entry.ingredients),
    instructions: JSON.stringify(entry.instructions),
    prepTime: entry.prepTime,
    category: entry.category,
  };
}

export function localizeRecipes(
  recipes: Recipe[],
  locale: Locale,
  cms?: CmsContent
): Recipe[] {
  return recipes.map((r) => localizeRecipe(r, locale, cms));
}

export function localizeTestimonial(
  testimonial: Testimonial,
  locale: Locale,
  cms?: CmsContent
): Testimonial {
  const entry = cmsFor(locale, cms)?.testimonials[testimonial.name];
  if (!entry) return testimonial;
  return { ...testimonial, role: entry.role, content: entry.content };
}

export function localizeTestimonials(
  testimonials: Testimonial[],
  locale: Locale,
  cms?: CmsContent
): Testimonial[] {
  return testimonials.map((t) => localizeTestimonial(t, locale, cms));
}

export function localizeBlogPost(
  post: BlogPost,
  locale: Locale,
  cms?: CmsContent
): BlogPost {
  const entry = cmsFor(locale, cms)?.blog[post.slug];
  if (!entry) return post;
  return {
    ...post,
    title: entry.title,
    excerpt: entry.excerpt,
    content: entry.content,
    category: entry.category,
  };
}

export function localizeBlogPosts(
  posts: BlogPost[],
  locale: Locale,
  cms?: CmsContent
): BlogPost[] {
  return posts.map((p) => localizeBlogPost(p, locale, cms));
}
