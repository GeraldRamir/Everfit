import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import EverfitLogo from "@/components/ui/EverfitLogo";
import IconBox from "@/components/ui/IconBox";
import { whatsappUrl } from "@/lib/content";
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

export default async function ContactoPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { contact, site } = dict;

  const contactItems = [
    { icon: Mail, label: contact.items.email, value: site.email, href: `mailto:${site.email}` },
    {
      icon: Phone,
      label: contact.items.whatsapp,
      value: site.whatsapp,
      href: whatsappUrl(),
    },
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
            <div className="lg:col-span-6">
              <h2 className="mb-6 font-display text-2xl font-bold text-everfit-wine">
                {contact.contactInfoTitle}
              </h2>

              <div className="mb-8 space-y-4">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <IconBox icon={item.icon} size="sm" variant="neutral" />
                    <div>
                      <p className="mb-0 text-sm font-semibold text-everfit-wine">{item.label}</p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-gray-600 underline-offset-2 transition-colors hover:text-everfit-wine hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mb-0 text-sm text-gray-600">{item.value}</p>
                      )}
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

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-2 font-display text-2xl font-bold text-everfit-wine">
                  {contact.applyTitle}
                </h2>
                <p className="mb-6 text-sm text-gray-600">{contact.applySubtitle}</p>
                <Link href="/solicitud" className="btn-everfit-primary inline-flex px-8 py-3">
                  {contact.applyCta}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
