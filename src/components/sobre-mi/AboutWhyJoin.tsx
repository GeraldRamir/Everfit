import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import IconBox from "@/components/ui/IconBox";
import { ABOUT_IMAGES } from "@/lib/content";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

const highlightIcons = [Heart, ShieldCheck, Users];

export default async function AboutWhyJoin() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { whyJoin, aboutImages } = dict;

  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-everfit-wine/10">
              <Image
                src={ABOUT_IMAGES.whyJoin}
                alt={aboutImages.whyJoinAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 max-w-xs rounded-2xl bg-everfit-cream p-5 shadow-lg">
              <p className="font-display text-sm font-bold text-everfit-wine">{whyJoin.closing}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              badge={dict.common.coaching}
              title={whyJoin.title}
              subtitle={whyJoin.intro}
              align="left"
              className="mb-8"
            />

            <div className="mb-8 space-y-4 leading-relaxed text-gray-600">
              {whyJoin.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mb-8 space-y-3">
              {whyJoin.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Heart;
                return (
                  <article key={item.title} className="card-everfit flex gap-4 p-4">
                    <IconBox icon={Icon} variant="wine" size="sm" />
                    <div>
                      <h3 className="mb-1 font-display font-bold text-everfit-wine">{item.title}</h3>
                      <p className="mb-0 text-sm text-gray-600">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <Link href="/contacto" className="btn-everfit-primary">
              {whyJoin.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
