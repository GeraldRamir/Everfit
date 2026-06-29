"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import IconBox from "@/components/ui/IconBox";
import { serviceIcons, Sparkles } from "@/components/ui/icons";
import { useI18n } from "@/i18n/client";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export default function Services({ services }: { services: Service[] }) {
  const { dict } = useI18n();
  const { services: servicesCopy } = dict.home;

  return (
    <section className="section-shell surface-muted">
      <Container>
        <SectionHeader
          badge={servicesCopy.badge}
          title={servicesCopy.title}
          subtitle={servicesCopy.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? Sparkles;
            return (
              <article key={service.id} className="card-everfit flex flex-col p-6">
                <IconBox icon={Icon} variant="wine" className="mb-5" />
                <h3 className="mb-3 font-display text-lg font-bold text-everfit-wine">
                  {service.title}
                </h3>
                <p className="mb-0 flex-grow text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
