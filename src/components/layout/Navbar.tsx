"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import EverfitLogo from "@/components/ui/EverfitLogo";
import Container from "@/components/ui/Container";
import { LanguageSwitcher, useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

const navLinkKeys = [
  { href: "/", key: "home" as const },
  { href: "/planes", key: "plans" as const },
  { href: "/retos", key: "challenges" as const },
  { href: "/transformaciones", key: "transformations" as const },
  { href: "/recetas", key: "recipes" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/sobre-mi", key: "about" as const },
  { href: "/contacto", key: "contact" as const },
];

export default function NavbarEverfit() {
  const pathname = usePathname();
  const { dict } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = navLinkKeys.map(({ href, key }) => ({
    href,
    label: dict.nav.links[key],
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled || mobileOpen
            ? "border-b border-gray-100/80 bg-white/95 shadow-sm shadow-black/[0.03] backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <Container className="flex h-[4.25rem] items-center justify-between lg:h-[4.75rem]">
          <Link href="/" className="relative z-50 flex max-h-full shrink-0 items-center">
            <EverfitLogo
              variant="full"
              theme="wine"
              width={142}
              height={38}
              fixedLayout
              className="hidden lg:block"
              priority
            />
            <EverfitLogo
              variant="mark"
              theme="wine"
              width={34}
              height={34}
              fixedLayout
              className="lg:hidden"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={dict.nav.ariaLabel}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link-everfit",
                  pathname === link.href && "nav-link-everfit-active font-semibold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher className="ml-2" />
            <Link href="/solicitud" className="btn-everfit-primary ml-2 px-5 py-2.5 text-sm">
              {dict.nav.startNow}
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-lg text-everfit-charcoal transition-colors hover:bg-everfit-cream lg:hidden"
            aria-label={mobileOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </header>

      {/* Mobile drawer lives outside header so it never stretches/overlays the bar incorrectly */}
      <div
        className={cn(
          "fixed inset-0 z-[45] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-everfit-charcoal/45 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        <nav
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          aria-label={dict.nav.ariaLabel}
        >
          <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-gray-100 px-4">
            <EverfitLogo variant="mark" theme="wine" width={34} height={34} fixedLayout />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-everfit-charcoal transition-colors hover:bg-everfit-cream"
              aria-label={dict.nav.closeMenu}
              onClick={() => setMobileOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 pb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-everfit-cream text-everfit-wine"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex justify-center">
              <LanguageSwitcher />
            </div>
            <Link href="/solicitud" className="btn-everfit-primary mt-4 w-full">
              {dict.nav.startNow}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
