/** Everfit anniversary campaign — auto on/off by calendar (America/Santo_Domingo, UTC-4). */

export const ANNIVERSARY_TIMEZONE = "America/Santo_Domingo";

/** Inclusive start: 2026-07-30 00:00:00 AST */
export const ANNIVERSARY_START_MS = Date.UTC(2026, 6, 30, 4, 0, 0, 0);

/** Exclusive end: 2026-08-05 00:00:00 AST (after Aug 4 ends) */
export const ANNIVERSARY_END_MS = Date.UTC(2026, 7, 5, 4, 0, 0, 0);

export const ANNIVERSARY_DISCOUNT_PERCENT = 50;

export function isAnniversaryActive(now: number | Date = Date.now()): boolean {
  const t = typeof now === "number" ? now : now.getTime();
  return t >= ANNIVERSARY_START_MS && t < ANNIVERSARY_END_MS;
}

/** Dev/preview: `?previewAnniversary=1` forces the banner on. */
export function isAnniversaryActiveOrPreview(
  now: number | Date = Date.now(),
  searchParams?: { previewAnniversary?: string | string[] | undefined }
): boolean {
  const raw = searchParams?.previewAnniversary;
  const preview = Array.isArray(raw) ? raw[0] : raw;
  if (preview === "1" || preview === "true") return true;
  return isAnniversaryActive(now);
}

export function getAnniversaryRemainingMs(now: number | Date = Date.now()): number {
  const t = typeof now === "number" ? now : now.getTime();
  return Math.max(0, ANNIVERSARY_END_MS - t);
}

export function applyAnniversaryDiscount(price: number): number {
  if (price <= 0 || !isAnniversaryActive()) return price;
  return Math.round(price * (1 - ANNIVERSARY_DISCOUNT_PERCENT / 100) * 100) / 100;
}
