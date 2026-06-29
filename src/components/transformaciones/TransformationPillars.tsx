import { Dumbbell, Heart, Salad, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import IconBox from "@/components/ui/IconBox";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

const icons = [Dumbbell, Salad, Heart, Users];

export default async function TransformationPillars() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { transformationUi, transformationPillars } = dict;

  return (
    <section className="section-shell-sm surface-muted">
      <Container>
        <SectionHeader
          badge={transformationUi.pillarsBadge}
          title={transformationUi.pillarsTitle}
          subtitle={transformationUi.pillarsSubtitle}
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {transformationPillars.map((pillar, index) => (
            <article key={pillar.title} className="card-everfit p-6">
              <IconBox icon={icons[index]} variant="wine" className="mb-5" />
              <h3 className="mb-3 font-display font-bold text-everfit-wine">{pillar.title}</h3>
              <p className="mb-0 text-sm leading-relaxed text-gray-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
