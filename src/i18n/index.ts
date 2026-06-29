import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale };
export { locales, defaultLocale, LOCALE_COOKIE, isLocale } from "./config";
