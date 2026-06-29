import Link from "next/link";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.pages.notFound;

  return (
    <div className="min-h-screen flex items-center justify-center bg-everfit-cream pt-20">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl font-bold text-everfit-wine mb-4">{t.title}</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.heading}</h2>
        <p className="text-gray-600 mb-8">{t.description}</p>
        <Link href="/" className="btn-everfit-primary">
          {t.backHome}
        </Link>
      </div>
    </div>
  );
}
