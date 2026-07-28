import type { Metadata } from "next";
import { Great_Vibes, Inter, Montserrat, Playfair_Display } from "next/font/google";
import NavbarEverfit from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/i18n";
import { LocaleProvider } from "@/i18n/client";
import { toClientDictionary } from "@/i18n/client-dict";
import { getLocale } from "@/i18n/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL("https://everfitbymich.com"),
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    openGraph: {
      title: dict.metadata.openGraphTitle,
      description: dict.metadata.openGraphDescription,
      images: ["/images/logo-original-transparent.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${greatVibes.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          {dict.layout.skipToContent}
        </a>
        <LocaleProvider locale={locale} dict={toClientDictionary(dict)}>
          <NavbarEverfit />
          <main id="main-content">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
