import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "wine" | "orange" | "neutral" | "ghost";
  className?: string;
};

const sizeMap = {
  sm: { box: "h-10 w-10", icon: 18 },
  md: { box: "h-12 w-12", icon: 22 },
  lg: { box: "h-14 w-14", icon: 26 },
};

const variantMap = {
  wine: "bg-everfit-wine/10 text-everfit-wine",
  orange: "bg-everfit-orange/10 text-everfit-orange",
  neutral: "bg-everfit-cream text-everfit-wine",
  ghost: "bg-white/10 text-everfit-cream",
};

export default function IconBox({
  icon: Icon,
  size = "md",
  variant = "wine",
  className,
}: IconBoxProps) {
  const { box, icon } = sizeMap[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl",
        box,
        variantMap[variant],
        className
      )}
      aria-hidden="true"
    >
      <Icon size={icon} strokeWidth={1.75} />
    </span>
  );
}
