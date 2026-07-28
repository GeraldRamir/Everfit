"use client";

import Link from "next/link";
import EverfitLogo from "@/components/ui/EverfitLogo";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/content";
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

function AmazonIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 4.5c-2.4 0-4.1 1.3-4.1 3.4 0 2.1 1.6 3.1 3.8 3.8l1.1.3c1.3.4 1.9.8 1.9 1.6 0 .9-.8 1.5-2.1 1.5-1.3 0-2.3-.5-3.1-1.1l-1.1 1.5c1.1.9 2.6 1.5 4.3 1.5 2.6 0 4.3-1.4 4.3-3.5 0-2.1-1.5-3.1-3.8-3.8l-1.1-.3c-1.2-.3-1.8-.7-1.8-1.5 0-.8.8-1.4 1.9-1.4 1.1 0 2 .4 2.7.9l1-1.5c-1-.7-2.3-1.4-3.9-1.4z" />
      <path d="M4.8 17.2c2.6 1.5 6.2 2.3 9.2 2.3 2.4 0 4.8-.5 6.7-1.5.4-.2.7.2.3.5-2.3 2.1-6 3.1-9 3.1-4.3 0-8.2-1.5-10.7-3.5-.3-.2-.1-.6.3-.4.1 0 .1 0 .2 0z" />
      <path d="M20.8 16.2c.3-.4.1-.9-.4-.7-.9.3-1.2.4-2.1.5-.3 0-.4.3-.2.5.7.9 1.8 1.6 2.8 2 .4.2.8-.2.5-.6-.2-.2-.4-.5-.6-.7z" />
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
      { href: "/solicitud", label: footer.links.onlineCoaching },
    ],
    empresa: [
      { href: "/sobre-mi", label: footer.links.aboutMich },
      { href: "/contacto", label: footer.links.contact },
      { href: "/planes", label: footer.links.pricing },
    ],
  };

  const socialLinks = [
    { label: footer.social.instagram, href: SITE.instagram, Icon: InstagramIcon },
    { label: footer.social.amazon, href: SITE.amazon, Icon: AmazonIcon },
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
                  target="_blank"
                  rel="noopener noreferrer"
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
