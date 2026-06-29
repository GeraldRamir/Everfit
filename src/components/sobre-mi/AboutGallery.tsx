import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT_IMAGES } from "@/lib/content";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";
import { cn } from "@/lib/utils";

const spanClasses = {
  large: "sm:col-span-2 sm:row-span-2 sm:aspect-[4/5]",
  wide: "sm:col-span-2 sm:aspect-[16/10]",
  normal: "sm:aspect-[4/5]",
};

export default async function AboutGallery() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { pages, aboutImages } = dict;

  return (
    <section className="section-shell-sm bg-everfit-charcoal text-white">
      <Container>
        <SectionHeader
          badge={pages.sobreMi.galleryBadge}
          title={pages.sobreMi.galleryTitle}
          subtitle={pages.sobreMi.gallerySubtitle}
          dark
          className="mb-12"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_IMAGES.gallery.map((item, index) => (
            <figure
              key={item.src}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-everfit-charcoal",
                spanClasses[item.span]
              )}
            >
              <div className="relative h-full min-h-[16rem] w-full">
                <Image
                  src={item.src}
                  alt={aboutImages.gallery[index]?.alt ?? ""}
                  fill
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes={
                    item.span === "large"
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : item.span === "wide"
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
