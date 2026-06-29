import Image from "next/image";
import { Heart, MessageCircle, Sprout, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import IconBox from "@/components/ui/IconBox";
import { ABOUT_IMAGES } from "@/lib/content";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

const icons = [Target, Heart, Sprout, MessageCircle];

export default async function AboutPhilosophy() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about, aboutImages, aboutValues } = dict;

  return (
    <section className="section-shell surface-muted">
      <Container>
        <div className="mb-16 grid items-center gap-10 overflow-hidden rounded-3xl bg-everfit-wine text-white lg:grid-cols-2">
          <div className="relative aspect-[4/3] min-h-[18rem] lg:aspect-auto lg:min-h-full">
            <Image
              src={ABOUT_IMAGES.mission}
              alt={aboutImages.missionAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-everfit-wine/80 lg:bg-gradient-to-l lg:from-everfit-wine/20 lg:to-transparent" />
          </div>

          <div className="p-8 md:p-10 lg:p-12">
            <span className="badge-everfit mb-5 inline-block bg-white/10 text-white">{dict.common.myMission}</span>
            <blockquote className="mb-6 font-display text-2xl font-bold leading-snug md:text-3xl">
              &ldquo;{about.closing}&rdquo;
            </blockquote>
            <p className="mb-2 text-lg text-everfit-orange">{about.signature}</p>
            <p className="text-sm text-white/70">{about.role}</p>
          </div>
        </div>

        <SectionHeader
          title={dict.common.myPhilosophy}
          subtitle={dict.common.myPhilosophySubtitle}
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value, index) => (
            <article key={value.title} className="card-everfit flex flex-col p-6">
              <IconBox icon={icons[index]} variant="wine" className="mb-5" />
              <h3 className="mb-3 font-display font-bold text-everfit-wine">{value.title}</h3>
              <p className="mb-0 text-sm leading-relaxed text-gray-600">{value.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
