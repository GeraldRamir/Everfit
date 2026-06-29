import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import { PLAN_ACCENTS } from "@/lib/content";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";
import { cn } from "@/lib/utils";

type Plan = {
  title: string;
  slug: string;
  description: string;
  level: string;
  image: string | null;
};

export default async function PlanTierSections({ plans }: { plans: Plan[] }) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { common, planDetails } = dict;

  return (
    <section className="section-shell-sm">
      <Container>
        <div className="space-y-20 md:space-y-28">
          {plans.map((plan, index) => {
            const details = planDetails[plan.slug as keyof typeof planDetails];
            const accent = PLAN_ACCENTS[plan.slug];
            const reversed = index % 2 === 1;

            return (
              <article
                key={plan.slug}
                id={plan.slug}
                className={cn(
                  "scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl",
                    accent === "wine" && "shadow-everfit-wine/20"
                  )}
                >
                  {plan.image && (
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-everfit-charcoal/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {plan.level}
                  </span>
                </div>

                <div>
                  <span className="badge-everfit mb-4">{details?.tagline ?? plan.level}</span>
                  <h2 className="mb-4 font-display text-3xl font-bold text-everfit-wine md:text-4xl">
                    {plan.title}
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">{plan.description}</p>

                  {details && (
                    <div className="mb-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-everfit-wine">
                          <Target size={16} aria-hidden="true" />
                          {common.idealFor}
                        </h3>
                        <ul className="m-0 list-none space-y-2 p-0">
                          {details.idealFor.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                              <Check size={14} className="mt-0.5 shrink-0 text-everfit-orange" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-everfit-wine">
                          {common.whatYouAchieve}
                        </h3>
                        <ul className="m-0 list-none space-y-2 p-0">
                          {details.outcomes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                              <Check size={14} className="mt-0.5 shrink-0 text-everfit-orange" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/planes/${plan.slug}`}
                    className="btn-everfit-primary group inline-flex"
                  >
                    {common.viewDetails}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
