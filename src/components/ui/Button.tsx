import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "btn-everfit-primary",
  outline: "btn-everfit-outline",
  orange: "btn-everfit-orange",
  ghost: "btn-everfit-ghost",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
