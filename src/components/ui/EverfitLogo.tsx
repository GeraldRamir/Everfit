import Image from "next/image";
import { cn } from "@/lib/utils";

type EverfitLogoProps = {
  variant?: "full" | "mark";
  theme?: "wine" | "light";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

const logoSources = {
  full: {
    wine: "/images/logo-everfit-transparent.png",
    light: "/images/logo-naranja-transparent.png",
  },
  mark: {
    wine: "/images/isotipo-vino-transparent.png",
    light: "/images/isotipo-naranja-transparent.png",
  },
} as const;

export default function EverfitLogo({
  variant = "full",
  theme = "wine",
  className,
  width,
  height,
  priority = false,
}: EverfitLogoProps) {
  const src = logoSources[variant][theme];
  const defaultWidth = variant === "full" ? 180 : 40;
  const defaultHeight = variant === "full" ? 48 : 40;

  return (
    <Image
      src={src}
      alt="Everfit by Mich"
      width={width ?? defaultWidth}
      height={height ?? defaultHeight}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        theme === "light" && variant === "full" && "brightness-110",
        className
      )}
    />
  );
}
