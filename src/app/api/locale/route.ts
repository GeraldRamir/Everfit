import { NextResponse } from "next/server";
import { getDictionary } from "@/i18n";
import { toClientDictionary } from "@/i18n/client-dict";
import { isLocale, LOCALE_COOKIE } from "@/i18n/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { locale } = body as { locale?: string };

    if (!locale || !isLocale(locale)) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    }

    const dict = toClientDictionary(getDictionary(locale));
    const response = NextResponse.json({ ok: true, locale, dict });
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
