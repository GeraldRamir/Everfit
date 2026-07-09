export type CmsServiceEntry = {
  title: string;
  description: string;
};

export type CmsPlanEntry = {
  description: string;
  longDesc: string;
  duration: string;
  level: string;
  features: string[];
};

export type CmsChallengeEntry = {
  title: string;
  description: string;
  duration: string;
};

export type CmsRecipeEntry = {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  category: string;
  notes?: string | null;
};

export type CmsTestimonialEntry = {
  role: string;
  content: string;
};

export type CmsBlogEntry = {
  title: string;
  excerpt: string;
  content: string;
  category: string;
};

export type CmsContent = {
  services: Record<string, CmsServiceEntry>;
  plans: Record<string, CmsPlanEntry>;
  challenges: Record<string, CmsChallengeEntry>;
  recipes: Record<string, CmsRecipeEntry>;
  testimonials: Record<string, CmsTestimonialEntry>;
  blog: Record<string, CmsBlogEntry>;
};
