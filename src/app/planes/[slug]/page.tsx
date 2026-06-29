import type { Metadata } from "next";

import Image from "next/image";

import Link from "next/link";

import { notFound } from "next/navigation";

import { Check, Target } from "lucide-react";

import Container from "@/components/ui/Container";

import SectionHeader from "@/components/ui/SectionHeader";

import PlanCard from "@/components/ui/PlanCard";

import { getDictionary } from "@/i18n";
import { localizePlan, localizePlans } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getPlan, getPlans, parseJsonArray } from "@/lib/api";



type Props = { params: Promise<{ slug: string }> };



export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const locale = await getLocale();

  const dict = getDictionary(locale);

  try {

    const { slug } = await params;

    const plan = localizePlan(await getPlan(slug), locale, dict.cms);

    return {

      title: `${plan.title} | ${dict.site.brand}`,

      description: plan.description,

    };

  } catch {

    return { title: dict.pages.planDetail.notFound };

  }

}



export const dynamic = "force-dynamic";



const PLAN_ORDER = ["everfit-ignite", "everfit-power", "everfit-elite"];



export default async function PlanDetailPage({ params }: Props) {

  const locale = await getLocale();

  const dict = getDictionary(locale);

  const { common, planDetails, pages, howItWorks } = dict;

  const { slug } = await params;



  let plan;

  let allPlans;

  try {

    [plan, allPlans] = await Promise.all([getPlan(slug), getPlans()]);

    plan = localizePlan(plan, locale, dict.cms);

    allPlans = localizePlans(allPlans, locale, dict.cms);

  } catch {

    notFound();

  }



  const features = parseJsonArray(plan.features);

  const details = planDetails[plan.slug as keyof typeof planDetails];

  const otherPlans = [...allPlans]

    .filter((p) => p.slug !== slug)

    .sort((a, b) => PLAN_ORDER.indexOf(a.slug) - PLAN_ORDER.indexOf(b.slug));



  return (

    <>

      <section className="relative bg-everfit-charcoal pb-16 pt-28 text-white">

        <Container>

          <Link href="/planes" className="mb-6 inline-block text-sm text-white/60 hover:text-white">

            {pages.planDetail.backToPlans}

          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="badge-everfit mb-4 inline-block bg-everfit-orange/20 text-everfit-orange">

                {plan.level}

              </span>

              <h1 className="mb-2 font-display text-4xl font-bold md:text-5xl">{plan.title}</h1>

              {details && (

                <p className="mb-4 text-lg text-everfit-orange">{details.tagline}</p>

              )}

              <p className="mb-6 text-lg text-white/75">{plan.description}</p>

              <div className="flex flex-wrap items-center gap-4">

                {plan.price > 0 ? (

                  <span className="font-display text-3xl font-bold tabular-nums text-everfit-orange">

                    ${plan.price}

                  </span>

                ) : (

                  <span className="rounded-full bg-everfit-orange/20 px-4 py-1.5 text-sm font-semibold text-everfit-orange">

                    {pages.planDetail.personalizedCoaching}

                  </span>

                )}

                <span className="text-white/40">|</span>

                <span className="text-white/80">{plan.duration}</span>

              </div>

              <Link

                href={`/contacto?servicio=plan-entrenamiento&plan=${encodeURIComponent(plan.slug)}`}

                className="btn-everfit-orange mt-8 inline-flex"

              >

                {pages.planDetail.signUp}

              </Link>

            </div>

            {plan.image && (

              <div className="relative aspect-video overflow-hidden rounded-2xl">

                <Image src={plan.image} alt={plan.title} fill className="object-cover" priority />

              </div>

            )}

          </div>

        </Container>

      </section>



      <section className="section-shell-sm">

        <Container>

          <div className="grid gap-10 lg:grid-cols-12">

            <div className="lg:col-span-7">

              <h2 className="mb-4 font-display text-2xl font-bold text-everfit-wine">

                {pages.planDetail.aboutPlan}

              </h2>

              <p className="text-lg leading-relaxed text-gray-600">{plan.longDesc}</p>



              {details && (

                <div className="mt-10 grid gap-8 sm:grid-cols-2">

                  <div>

                    <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-everfit-wine">

                      <Target size={18} aria-hidden="true" />

                      {pages.planDetail.idealForYou}

                    </h3>

                    <ul className="m-0 list-none space-y-3 p-0">

                      {details.idealFor.map((item) => (

                        <li key={item} className="flex items-start gap-3 text-gray-600">

                          <Check size={16} className="mt-0.5 shrink-0 text-everfit-orange" aria-hidden="true" />

                          {item}

                        </li>

                      ))}

                    </ul>

                  </div>

                  <div>

                    <h3 className="mb-4 font-display text-lg font-bold text-everfit-wine">

                      {pages.planDetail.whatYouAchieve}

                    </h3>

                    <ul className="m-0 list-none space-y-3 p-0">

                      {details.outcomes.map((item) => (

                        <li key={item} className="flex items-start gap-3 text-gray-600">

                          <Check size={16} className="mt-0.5 shrink-0 text-everfit-orange" aria-hidden="true" />

                          {item}

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              )}

            </div>



            <div className="lg:col-span-5">

              <div className="sticky top-28 rounded-2xl bg-everfit-cream p-6">

                <h3 className="mb-5 font-display text-xl font-bold text-everfit-wine">

                  {pages.planDetail.whatIncludes}

                </h3>

                <ul className="m-0 list-none space-y-3 p-0">

                  {features.map((feature) => (

                    <li key={feature} className="flex items-start gap-3 text-gray-700">

                      <Check size={16} className="mt-0.5 shrink-0 text-everfit-orange" aria-hidden="true" />

                      {feature}

                    </li>

                  ))}

                </ul>

                <Link

                  href={`/contacto?servicio=plan-entrenamiento&plan=${encodeURIComponent(plan.slug)}`}

                  className="btn-everfit-primary mt-8 w-full"

                >

                  {pages.planDetail.signUp}

                </Link>

              </div>

            </div>

          </div>

        </Container>

      </section>



      <section className="section-shell-sm surface-muted">

        <Container>

          <SectionHeader

            badge={pages.planDetail.yourPathBadge}

            title={pages.planDetail.whatToExpect}

            subtitle={pages.planDetail.whatToExpectSubtitle}

            className="mb-10"

          />

          <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">

            {howItWorks.map((item) => (

              <li key={item.step} className="card-everfit p-5">

                <span className="mb-2 block font-display text-xs font-bold text-everfit-orange">

                  {common.step} {item.step}

                </span>

                <h3 className="mb-2 font-display font-bold text-everfit-wine">{item.title}</h3>

                <p className="mb-0 text-sm text-gray-600">{item.text}</p>

              </li>

            ))}

          </ol>

        </Container>

      </section>



      {otherPlans.length > 0 && (

        <section className="section-shell-sm">

          <Container>

            <SectionHeader

              title={pages.planDetail.otherPrograms}

              subtitle={pages.planDetail.otherProgramsSubtitle}

              className="mb-10"

            />

            <div className="grid gap-6 md:grid-cols-2">

              {otherPlans.map((other) => (

                <PlanCard key={other.id} {...other} />

              ))}

            </div>

          </Container>

        </section>

      )}

    </>

  );

}

