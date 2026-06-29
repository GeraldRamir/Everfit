"use client";

import Link from "next/link";
import EverfitLogo from "@/components/ui/EverfitLogo";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/client";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  );
}

export default function Footer() {
  const { dict } = useI18n();
  const { footer } = dict;

  const footerLinks = {
    servicios: [
      { href: "/planes", label: footer.links.trainingPlans },
      { href: "/retos", label: footer.links.fitChallenges },
      { href: "/transformaciones", label: footer.links.transformations },
      { href: "/blog", label: footer.links.blogMotivation },
      { href: "/contacto", label: footer.links.onlineCoaching },
    ],
    empresa: [
      { href: "/sobre-mi", label: footer.links.aboutMich },
      { href: "/contacto", label: footer.links.contact },
      { href: "/planes", label: footer.links.pricing },
    ],
  };

  const socialLinks = [
    { label: footer.social.instagram, href: "#", Icon: InstagramIcon },
    { label: footer.social.tiktok, href: "#", Icon: TikTokIcon },
    { label: footer.social.youtube, href: "#", Icon: YoutubeIcon },
  ];

  return (
    <footer className="footer-gradient relative overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-everfit-orange/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="section-shell pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <EverfitLogo variant="full" theme="light" width={172} height={46} className="mb-5" />
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              {footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-[background-color,border-color,color] duration-200 hover:border-everfit-orange/50 hover:bg-everfit-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-everfit-orange"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h6 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.16em] text-everfit-cream/90">
              {footer.servicesHeading}
            </h6>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h6 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.16em] text-everfit-cream/90">
              {footer.companyHeading}
            </h6>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {dict.site.brand}. {footer.copyright}
          </p>
          <p className="text-xs text-white/40">{footer.designed}</p>
        </div>
      </Container>
    </footer>
  );
}
