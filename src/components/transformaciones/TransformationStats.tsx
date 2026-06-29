import Container from "@/components/ui/Container";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export default async function TransformationStats() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="border-b border-gray-100 bg-everfit-charcoal text-white">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {dict.transformationStats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center md:py-10">
              <p className="font-display text-3xl font-bold tabular-nums text-everfit-orange md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/60 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
