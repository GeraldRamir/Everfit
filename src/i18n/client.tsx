"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "./config";
import type { ClientDictionary } from "./client-dict";
import { cn } from "@/lib/utils";

type I18nContextValue = {
  locale: Locale;
  dict: ClientDictionary;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type LocaleProviderProps = {
  locale: Locale;
  dict: ClientDictionary;
  children: ReactNode;
};

export function LocaleProvider({ locale, dict: initialDict, children }: LocaleProviderProps) {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [dict, setDict] = useState(initialDict);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setCurrentLocale(locale);
    setDict(initialDict);
  }, [locale, initialDict]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === currentLocale) return;

      startTransition(async () => {
        const res = await fetch("/api/locale", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ locale: newLocale }),
        });

        if (!res.ok) return;

        const data = (await res.json()) as { dict?: ClientDictionary };
        if (data.dict) setDict(data.dict);
        setCurrentLocale(newLocale);
        router.refresh();
      });
    },
    [currentLocale, router]
  );

  return (
    <I18nContext.Provider value={{ locale: currentLocale, dict, setLocale, isPending }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LocaleProvider");
  }
  return ctx;
}

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale, isPending } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg border border-gray-200 bg-white p-0.5 text-xs font-semibold",
        isPending && "opacity-60",
        className
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("es")}
        disabled={isPending}
        className={cn(
          "rounded-md px-2 py-1 transition-colors",
          locale === "es"
            ? "bg-everfit-wine text-white"
            : "text-gray-500 hover:text-everfit-wine"
        )}
        aria-pressed={locale === "es"}
      >
        ES
      </button>
      <span className="text-gray-300 select-none" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        disabled={isPending}
        className={cn(
          "rounded-md px-2 py-1 transition-colors",
          locale === "en"
            ? "bg-everfit-wine text-white"
            : "text-gray-500 hover:text-everfit-wine"
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
