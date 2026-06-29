import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
};

export default function PageHeader({ title, subtitle, badge, image }: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-32 text-white md:pb-20 md:pt-36"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(160deg, rgba(26,26,26,0.9), rgba(107,21,21,0.82)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { background: "linear-gradient(160deg, #1a1a1a, #6b1515)" }
      }
    >
      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
        {badge && (
          <span className="badge-everfit mb-4 inline-block bg-white/10 text-white">{badge}</span>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
