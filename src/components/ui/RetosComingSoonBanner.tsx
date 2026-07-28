import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

type RetosComingSoonBannerProps = {
  badge: string;
  title: string;
  message: string;
  plansCta: string;
  applyCta: string;
  className?: string;
};

export default function RetosComingSoonBanner({
  badge,
  title,
  message,
  plansCta,
  applyCta,
  className,
}: RetosComingSoonBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-everfit-wine px-6 py-12 text-center text-white shadow-lg md:px-12 md:py-16",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-everfit-wine via-[#7a1a1a] to-everfit-orange/80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-everfit-orange/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <Image
        src="/images/isotipo-vino-transparent.png"
        alt=""
        width={360}
        height={360}
        className="pointer-events-none absolute -right-10 bottom-0 opacity-[0.08]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
          <Flame size={14} className="text-everfit-orange" aria-hidden="true" />
          {badge}
        </span>
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
          {message}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/planes"
            className="btn-everfit bg-white text-everfit-wine hover:bg-everfit-cream"
          >
            {plansCta}
          </Link>
          <Link href="/solicitud" className="btn-everfit-ghost">
            {applyCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
