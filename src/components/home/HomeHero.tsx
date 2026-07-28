import Hero from "@/components/home/Hero";
import AnniversaryHero from "@/components/home/AnniversaryHero";
import { isAnniversaryActiveOrPreview } from "@/lib/anniversary";

type Props = {
  searchParams?: Promise<{ previewAnniversary?: string }>;
};

/** Switches to the anniversary hero between Jul 30–Aug 4, 2026 (AST), then back automatically. */
export default async function HomeHero({ searchParams }: Props) {
  const params = searchParams ? await searchParams : undefined;
  const showAnniversary = isAnniversaryActiveOrPreview(Date.now(), params);

  return showAnniversary ? <AnniversaryHero /> : <Hero />;
}
