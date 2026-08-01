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
    const formData = await request.formData();

    const res = await fetch(`${API_URL}/api/public/solicitud`, {
      method: "POST",
      body: formData,
      // Don't set Content-Type — fetch sets multipart boundary automatically.
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("Solicitud admin error:", res.status, data);
      return NextResponse.json(
        { error: data.error ?? dict.api.contactSendFailed },
        { status: res.status }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Solicitud proxy error:", err, "API_URL=", API_URL);
    return NextResponse.json(
      { error: dict.api.contactAdminOffline },
      { status: 503 }
    );
  }
}
