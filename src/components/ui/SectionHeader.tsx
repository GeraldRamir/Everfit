import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "badge-everfit mb-4 inline-block",
            dark && "bg-white/10 text-everfit-cream"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "section-title text-balance",
          dark && "text-white",
          align === "left" && "mx-0"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle text-pretty",
            dark && "text-white/70",
            align === "left" && "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
