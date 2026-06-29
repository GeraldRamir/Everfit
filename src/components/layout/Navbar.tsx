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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-gray-100/80 bg-white/95 shadow-sm shadow-black/[0.03] backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between lg:h-[4.75rem]">
        <Link href="/" className="relative z-50 shrink-0">
          <EverfitLogo
            variant="full"
            theme="wine"
            width={148}
            height={40}
            className="hidden lg:block"
            priority
          />
          <EverfitLogo
            variant="mark"
            theme="wine"
            width={36}
            height={36}
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
          <Link href="/contacto" className="btn-everfit-primary ml-2 px-5 py-2.5 text-sm">
            {dict.nav.startNow}
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg text-everfit-charcoal transition-colors hover:bg-everfit-cream lg:hidden"
          aria-label={mobileOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-everfit-charcoal/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-1 p-6 pt-24">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-medium transition-colors",
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
          <Link href="/contacto" className="btn-everfit-primary mt-4 w-full">
            {dict.nav.startNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
