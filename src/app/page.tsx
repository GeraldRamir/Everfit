import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedPlans from "@/components/home/FeaturedPlans";
import WhyJoin from "@/components/home/WhyJoin";
import FeaturedRetos from "@/components/home/FeaturedRetos";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { getDictionary } from "@/i18n";
import {
  localizeChallenges,
  localizePlans,
  localizeRecipes,
  localizeServices,
  localizeTestimonials,
} from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getHomeData } from "@/lib/api";

export const dynamic = "force-dynamic";

const PLAN_ORDER = ["everfit-ignite", "everfit-power", "everfit-elite"];

export default async function HomePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { services: rawServices, plans: rawPlans, challenges: rawChallenges, recipes: rawRecipes, testimonials: rawTestimonials } =
    await getHomeData();

  const services = localizeServices(rawServices, locale, dict.cms);
  const challenges = localizeChallenges(rawChallenges, locale, dict.cms);
  const recipes = localizeRecipes(rawRecipes, locale, dict.cms);
  const testimonials = localizeTestimonials(rawTestimonials, locale, dict.cms);

  const plans = localizePlans(
    [...rawPlans].sort(
      (a, b) => PLAN_ORDER.indexOf(a.slug) - PLAN_ORDER.indexOf(b.slug)
    ),
    locale,
    dict.cms
  );

  return (
    <>
      <Hero />
      <Services services={services} />
      <FeaturedPlans plans={plans} />
      <WhyJoin />
      <FeaturedRetos retos={challenges} />
      <FeaturedRecipes recipes={recipes} />
      <AboutPreview />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  );
}
