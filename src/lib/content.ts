export const SITE = {
  email: "everfitbymich@gmail.com",
  whatsapp: "(829) 644-2271",
  whatsappE164: "18296442271",
  founderPhoto: "/images/aboutme/michelle-07.jpeg",
  instagram: "https://www.instagram.com/everfitbymich/",
  amazon:
    "https://www.amazon.com/gp/profile/amzn1.account.AGP4BV7B3YOFECFQFGH2HQJWO5DA?ccs_id=40a9cae9-1bc3-4231-a7de-7d658376e229&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacpa1rQMgAZwP_XfeUxFrNpvP7iYo02vbEakyu7-S8r98HPO442w7SbVczfBA_aem_WMAnbIdodAau7mzr4M0kpw",
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const ABOUT_IMAGES = {
  hero: "/images/aboutme/michelle-09.jpeg",
  portrait: "/images/aboutme/michelle-07.jpeg",
  accent: "/images/aboutme/michelle-06.jpeg",
  mission: "/images/aboutme/michelle-08.jpeg",
  whyJoin: "/images/aboutme/michelle-04.jpeg",
  gallery: [
    { src: "/images/aboutme/michelle-01.jpeg", span: "large" as const },
    { src: "/images/aboutme/michelle-02.jpeg", span: "normal" as const },
    { src: "/images/aboutme/michelle-03.jpeg", span: "normal" as const },
    { src: "/images/aboutme/michelle-05.jpeg", span: "wide" as const },
    { src: "/images/aboutme/michelle-08.jpeg", span: "normal" as const },
  ],
} as const;

export const PLAN_ACCENTS: Record<string, "cream" | "white" | "wine"> = {
  "everfit-ignite": "cream",
  "everfit-power": "white",
  "everfit-elite": "wine",
};
