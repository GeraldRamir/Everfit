export const SITE = {
  email: "everfitbymich@gmail.com",
  founderPhoto: "/images/aboutme/michelle-07.jpeg",
} as const;

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
