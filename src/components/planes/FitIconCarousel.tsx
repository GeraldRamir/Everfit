import {
  Activity,
  Apple,
  Dumbbell,
  Flame,
  Footprints,
  HeartPulse,
  Leaf,
  Scale,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

const FIT_ICONS: LucideIcon[] = [
  Dumbbell,
  HeartPulse,
  Apple,
  Flame,
  Timer,
  Trophy,
  Zap,
  Activity,
  Target,
  Footprints,
  Leaf,
  Scale,
  Sparkles,
];

function IconStamp({ Icon }: { Icon: LucideIcon }) {
  return (
    <Icon
      size={72}
      strokeWidth={2.5}
      aria-hidden="true"
      className="shrink-0 text-gray-400/75 md:h-[5.5rem] md:w-[5.5rem]"
    />
  );
}

export default async function FitIconCarousel() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const track = [...FIT_ICONS, ...FIT_ICONS];

  return (
    <section className="overflow-hidden border-b border-gray-100 bg-gradient-to-b from-everfit-cream/40 to-white py-6 md:py-8">
      <div className="fit-icon-marquee-mask relative">
        <div className="fit-icon-marquee-track flex w-max items-center gap-12 px-4 md:gap-16">
          {track.map((Icon, index) => (
            <IconStamp key={index} Icon={Icon} />
          ))}
        </div>
      </div>

      <p className="sr-only">{dict.fitIconCarousel.iconLabels}</p>
    </section>
  );
}
