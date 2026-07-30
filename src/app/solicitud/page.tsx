import type { Metadata } from "next";
import Link from "next/link";
import { Percent, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SolicitudForm from "@/components/solicitud/SolicitudForm";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";
import {
  ANNIVERSARY_DISCOUNT_PERCENT,
  isAnniversaryActiveOrPreview,
} from "@/lib/anniversary";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.solicitud.metadata.title,
    description: dict.solicitud.metadata.description,
  };
}

const VALID_SUBJECTS = new Set([
  "consulta-gratis",
  "plan-entrenamiento",
  "asesoria-nutricional",
  "coaching-online",
  "reto",
  "otro",
]);

type Props = {
  searchParams: Promise<{
    servicio?: string;
    plan?: string;
    previewAnniversary?: string;
  }>;
};

export default async function SolicitudPage({ searchParams }: Props) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { solicitud } = dict;
  const params = await searchParams;
  const servicio =
    params.servicio && VALID_SUBJECTS.has(params.servicio) ? params.servicio : "";
  const plan = params.plan?.trim() ?? "";
  const showAnniversaryDiscount = isAnniversaryActiveOrPreview(Date.now(), params);

  const sourcePage = plan
    ? servicio === "reto"
      ? `/retos/${plan}`
      : `/planes/${plan}`
    : "/solicitud";

  return (
    <>
      <PageHeader
        badge={solicitud.badge}
        title={solicitud.title}
        subtitle={solicitud.subtitle}
      />

      <section className="section-shell">
        <Container>
          <div className="mx-auto max-w-3xl">
            {showAnniversaryDiscount && (
              <div
                className="mb-6 overflow-hidden rounded-2xl border border-everfit-orange/30 bg-gradient-to-br from-everfit-wine to-[#8f1f28] p-5 text-white shadow-lg shadow-everfit-wine/20 md:p-6"
                role="status"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-everfit-orange text-white shadow-md shadow-everfit-orange/30">
                    <Percent size={22} strokeWidth={2.4} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-everfit-orange">
                      <Sparkles size={13} aria-hidden="true" />
                      {ANNIVERSARY_DISCOUNT_PERCENT}% OFF
                    </div>
                    <h2 className="mb-2 font-display text-xl font-bold md:text-2xl">
                      {solicitud.anniversaryDiscountTitle}
                    </h2>
                    <p className="text-sm leading-relaxed text-white/85 md:text-[0.95rem]">
                      {solicitud.anniversaryDiscountMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6 rounded-2xl border border-everfit-cream-dark bg-everfit-cream/70 p-5 text-sm text-gray-700">
              <p className="mb-0">{solicitud.intro}</p>
              <p className="mb-0 mt-3">
                {solicitud.contactPrompt}{" "}
                <Link
                  href="/contacto"
                  className="font-semibold text-everfit-wine underline-offset-2 hover:underline"
                >
                  {solicitud.contactLink}
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:p-6 lg:p-8">
              <h2 className="mb-2 font-display text-xl font-bold text-everfit-wine md:text-2xl">
                {solicitud.formTitle}
              </h2>
              <p className="mb-6 text-sm text-gray-600">{solicitud.formSubtitle}</p>
              <SolicitudForm
                defaultSubject={servicio}
                sourcePlan={plan || undefined}
                sourcePage={sourcePage}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
