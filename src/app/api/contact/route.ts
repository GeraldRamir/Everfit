import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { API_URL } from "@/lib/api";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, LOCALE_COOKIE } from "@/i18n/config";

async function getRequestLocale() {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  return value && isLocale(value) ? value : defaultLocale;
}

export async function POST(request: Request) {
  const locale = await getRequestLocale();
  const dict = getDictionary(locale);

  try {
    const body = await request.json();

    const res = await fetch(`${API_URL}/api/public/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { error: data.error ?? dict.api.contactSendFailed },
        { status: res.status }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: dict.api.contactAdminOffline },
      { status: 503 }
    );
  }
}
