import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
    maximumFractionDigits: 2,
  }).format(price);
}

/** Monthly plans show a period suffix; amounts are always labeled as USD. */
export function formatPlanPrice(price: number, slug: string, locale: string) {
  if (price <= 0) return null;
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
  if (slug === "everfit-ignite") {
    return `${amount}${locale === "en" ? "/mo" : "/mes"}`;
  }
  return amount;
}
