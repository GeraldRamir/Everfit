import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SolicitudForm from "@/components/solicitud/SolicitudForm";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

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
  searchParams: Promise<{ servicio?: string; plan?: string }>;
};

export default async function SolicitudPage({ searchParams }: Props) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { solicitud } = dict;
  const params = await searchParams;
  const servicio =
    params.servicio && VALID_SUBJECTS.has(params.servicio) ? params.servicio : "";
  const plan = params.plan?.trim() ?? "";

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

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-2 font-display text-2xl font-bold text-everfit-wine">
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
