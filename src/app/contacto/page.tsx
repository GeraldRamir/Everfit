import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import EverfitLogo from "@/components/ui/EverfitLogo";
import IconBox from "@/components/ui/IconBox";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.contact.metadata.title,
    description: dict.contact.metadata.description,
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
  searchParams: Promise<{ servicio?: string; plan?: string; mensaje?: string }>;
};

export default async function ContactoPage({ searchParams }: Props) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { contact, site } = dict;
  const params = await searchParams;
  const servicio = params.servicio && VALID_SUBJECTS.has(params.servicio) ? params.servicio : "";
  const plan = params.plan?.trim() ?? "";
  const defaultMessage = params.mensaje ? decodeURIComponent(params.mensaje) : "";

  const sourcePage = plan
    ? servicio === "reto"
      ? `/retos/${plan}`
      : `/planes/${plan}`
    : "/contacto";

  const planMessage =
    plan && !defaultMessage
      ? contact.planMessageTemplate.replace("{plan}", plan.replace(/-/g, " "))
      : defaultMessage;

  const contactItems = [
    { icon: Mail, label: contact.items.email, value: site.email },
    { icon: Phone, label: contact.items.whatsapp, value: "+1 (809) 000-0000" },
    { icon: MapPin, label: contact.items.location, value: contact.items.locationValue },
    { icon: Clock, label: contact.items.schedule, value: contact.items.scheduleValue },
  ];

  return (
    <>
      <PageHeader
        badge={contact.badge}
        title={contact.title}
        subtitle={contact.subtitle}
      />

      <section className="section-shell">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="mb-6 font-display text-2xl font-bold text-everfit-wine">
                {contact.contactInfoTitle}
              </h2>

              <div className="mb-8 space-y-4">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <IconBox icon={item.icon} size="sm" variant="neutral" />
                    <div>
                      <p className="mb-0 text-sm font-semibold text-everfit-wine">{item.label}</p>
                      <p className="mb-0 text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-everfit-cream-dark bg-everfit-cream/70 p-6">
                <EverfitLogo variant="mark" theme="wine" width={44} height={44} className="mb-4" />
                <h3 className="mb-2 font-display font-bold text-everfit-wine">
                  {contact.freeConsultTitle}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-gray-600">
                  {contact.freeConsultText}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-2 font-display text-2xl font-bold text-everfit-wine">
                  {contact.formTitle}
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                  {contact.formSubtitle}
                </p>
                <ContactForm
                  defaultSubject={servicio}
                  defaultMessage={planMessage}
                  sourcePlan={plan || undefined}
                  sourcePage={sourcePage}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
