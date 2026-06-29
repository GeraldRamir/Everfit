import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT_IMAGES } from "@/lib/content";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export default async function AboutIntro() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { about, aboutCredentials, aboutImages } = dict;

  return (
    <section className="section-shell">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-everfit-wine/15">
              <Image
                src={ABOUT_IMAGES.portrait}
                alt={aboutImages.portraitAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-everfit-charcoal/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block lg:-right-8 lg:w-52">
              <div className="relative aspect-[3/4]">
                <Image
                  src={ABOUT_IMAGES.accent}
                  alt={aboutImages.accentAlt}
                  fill
                  className="object-cover object-top"
                  sizes="208px"
                />
              </div>
            </div>

            <div className="absolute -left-2 top-8 rounded-2xl bg-everfit-wine px-5 py-4 text-white shadow-lg md:-left-6">
              <p className="font-display text-lg font-bold">{about.title}</p>
              <p className="text-sm text-white/75">{about.role}</p>
            </div>
          </div>

          <div>
            <SectionHeader badge={dict.common.aboutMe} title={dict.common.knowMichelle} align="left" className="mb-6" />

            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="mb-4 leading-relaxed text-gray-600 md:text-lg">
                {p}
              </p>
            ))}

            <p className="mb-2 font-display text-lg font-semibold text-everfit-wine">{about.closing}</p>
            <p className="mb-8 text-everfit-orange">{about.signature}</p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {aboutCredentials.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-everfit-wine/10 text-everfit-wine">
                    <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
