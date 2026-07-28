import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  applyAnniversaryDiscount,
  isAnniversaryActive,
} from "@/lib/anniversary";

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

function formatUsdAmount(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
}

/** Monthly plans show a period suffix; amounts are always labeled as USD. */
export function formatPlanPrice(price: number, slug: string, locale: string) {
  if (price <= 0) return null;
  const displayPrice = applyAnniversaryDiscount(price);
  const amount = formatUsdAmount(displayPrice);
  if (slug === "everfit-ignite") {
    return `${amount}${locale === "en" ? "/mo" : "/mes"}`;
  }
  return amount;
}

export function formatPlanPriceParts(price: number, slug: string, locale: string) {
  if (price <= 0) return null;
  const onSale = isAnniversaryActive() && price > 0;
  const salePrice = applyAnniversaryDiscount(price);
  const suffix = slug === "everfit-ignite" ? (locale === "en" ? "/mo" : "/mes") : "";
  return {
    onSale,
    current: `${formatUsdAmount(salePrice)}${suffix}`,
    original: onSale ? `${formatUsdAmount(price)}${suffix}` : null,
  };
}
