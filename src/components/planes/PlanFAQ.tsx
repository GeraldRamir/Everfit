import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export default async function PlanFAQ() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="section-shell-sm">
      <Container>
        <SectionHeader title={dict.plansPage.faqTitle} className="mb-12" />

        <div className="mx-auto max-w-3xl divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
          {dict.planFaq.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="cursor-pointer list-none font-display font-semibold text-everfit-wine marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span
                    className="shrink-0 text-everfit-orange transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mb-0 mt-4 text-sm leading-relaxed text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
