import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { TransformationImage, TransformationMeta } from "@/components/transformaciones/TransformationImage";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";
import { SPOTLIGHT_ID } from "@/lib/transformations";

export default async function FeaturedTransformation() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { transformationsPage, transformationUi, transformations } = dict;
  const spotlight = transformations.find((t) => t.id === SPOTLIGHT_ID)!;
  const spotlightImage = `/images/transformaciones/transformation-${SPOTLIGHT_ID}.jpeg`;

  return (
    <section className="section-shell bg-gradient-to-b from-everfit-cream/60 to-white">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-gray-100/80 bg-white shadow-xl shadow-everfit-wine/5 lg:grid-cols-2 lg:gap-0">
          <TransformationImage
            src={spotlightImage}
            alt={spotlight.alt}
            priority
            className="aspect-[4/5] lg:min-h-full lg:rounded-none"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
            <span className="badge-everfit mb-5 w-fit">{transformationUi.featuredStory}</span>
            <h2 className="mb-4 font-display text-3xl font-bold text-everfit-wine md:text-4xl">
              {transformationsPage.spotlightTitle}
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              {transformationsPage.spotlightText}
            </p>

            <TransformationMeta
              focus={spotlight.focus}
              program={spotlight.program}
              duration={spotlight.duration}
              note={spotlight.note}
              className="mb-8"
            />

            <blockquote className="mb-8 rounded-2xl bg-everfit-cream/70 p-5">
              <Quote
                size={20}
                className="mb-3 text-everfit-orange/80"
                aria-hidden="true"
              />
              <p className="text-sm italic leading-relaxed text-gray-700 md:text-base">
                &ldquo;{transformationUi.quote}&rdquo;
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-wider text-everfit-wine/70">
                {transformationUi.quoteFooter} · {spotlight.program}
              </footer>
            </blockquote>

            <Link href="/planes" className="btn-everfit-primary group inline-flex w-fit">
              {transformationUi.viewPrograms}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
