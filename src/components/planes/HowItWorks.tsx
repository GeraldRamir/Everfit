import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export default async function HowItWorks() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="section-shell surface-muted">
      <Container>
        <SectionHeader
          badge={dict.common.process}
          title={dict.plansPage.howItWorksTitle}
          subtitle={dict.plansPage.howItWorksSubtitle}
          className="mb-14"
        />

        <ol className="m-0 grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-4">
          {dict.howItWorks.map((item) => (
            <li key={item.step}>
              <div className="card-everfit h-full p-6">
                <span
                  className="mb-4 inline-flex rounded-full bg-everfit-wine px-3 py-1 font-display text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="mb-3 font-display text-lg font-bold text-everfit-wine">
                  {item.title}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
