import type { CmsContent } from "./cms-types";

export type FaqItem = { q: string; a: string };

export type StepItem = { step: string; title: string; text: string };

export type ValueItem = { title: string; text: string };

export type HighlightItem = { title: string; text: string };

export type PlanDetailEntry = {
  tagline: string;
  idealFor: string[];
  outcomes: string[];
};

export type ComparisonFeature = {
  label: string;
  ignite: boolean;
  power: boolean;
  elite: boolean;
};

export type TransformationCategoryEntry = {
  id: "all" | "recomposicion" | "fuerza" | "tonificacion";
  label: string;
};

export type TransformationEntry = {
  id: string;
  alt: string;
  focus: string;
  program: string;
  duration: string;
  note: string;
};

export type StatEntry = { value: string; label: string };

export type GalleryAlt = { alt: string };

export type SubjectOption = { value: string; label: string };

export type NavLink = { label: string };

export type MotivationItem = { title: string; text: string };

export type Dictionary = {
  site: {
    brand: string;
    founder: string;
    email: string;
  };

  aboutImages: {
    portraitAlt: string;
    accentAlt: string;
    missionAlt: string;
    whyJoinAlt: string;
    gallery: GalleryAlt[];
  };

  aboutCredentials: string[];

  aboutValues: ValueItem[];

  about: {
    title: string;
    role: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };

  whyJoin: {
    title: string;
    intro: string;
    paragraphs: string[];
    closing: string;
    cta: string;
    highlights: HighlightItem[];
  };

  planTiers: {
    ignite: { tagline: string; level: string };
    power: { tagline: string; level: string };
    elite: { tagline: string; level: string };
  };

  plansPage: {
    intro: string;
    comparisonTitle: string;
    comparisonSubtitle: string;
    howItWorksTitle: string;
    howItWorksSubtitle: string;
    faqTitle: string;
  };

  planDetails: {
    "everfit-ignite": PlanDetailEntry;
    "everfit-power": PlanDetailEntry;
    "everfit-elite": PlanDetailEntry;
  };

  howItWorks: StepItem[];

  planComparison: {
    featureColumn: string;
    recommended: string;
    included: string;
    notIncluded: string;
    tiers: { ignite: string; power: string; elite: string };
    features: ComparisonFeature[];
  };

  planFaq: FaqItem[];

  transformationCategories: TransformationCategoryEntry[];

  transformationsPage: {
    title: string;
    subtitle: string;
    intro: string;
    spotlightTitle: string;
    spotlightText: string;
  };

  transformationStats: StatEntry[];

  transformationPillars: ValueItem[];

  transformations: TransformationEntry[];

  transformationUi: {
    featuredStory: string;
    quote: string;
    quoteFooter: string;
    viewPrograms: string;
    eachPhotoTitle: string;
    eachPhotoSubtitle: string;
    enlarge: string;
    noResults: string;
    modalAriaLabel: string;
    close: string;
    previous: string;
    next: string;
    before: string;
    after: string;
    storyOf: string;
    realResult: string;
    pillarsBadge: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    nextStoryTitle: string;
    nextStoryText: string;
    viewTransformation: string;
    realResultsBadge: string;
    clientLabel: string;
  };

  fitIconCarousel: {
    iconLabels: string;
  };

  motivation: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    items: MotivationItem[];
  };

  nav: {
    ariaLabel: string;
    openMenu: string;
    closeMenu: string;
    startNow: string;
    links: {
      home: string;
      plans: string;
      challenges: string;
      transformations: string;
      recipes: string;
      blog: string;
      about: string;
      contact: string;
    };
  };

  footer: {
    tagline: string;
    servicesHeading: string;
    companyHeading: string;
    copyright: string;
    designed: string;
    social: { instagram: string; tiktok: string; youtube: string };
    links: {
      trainingPlans: string;
      fitChallenges: string;
      transformations: string;
      blogMotivation: string;
      onlineCoaching: string;
      aboutMich: string;
      contact: string;
      pricing: string;
    };
  };

  layout: {
    skipToContent: string;
  };

  metadata: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
  };

  common: {
    step: string;
    coaching: string;
    popular: string;
    challenge: string;
    readArticle: string;
    viewMore: string;
    viewAll: string;
    exploreAll: string;
    signUpNow: string;
    freeConsultation: string;
    backToPlans: string;
    backToChallenges: string;
    backToRecipes: string;
    backToBlog: string;
    buyChallenge: string;
    viewChallenge: string;
    viewRecipe: string;
    viewDetails: string;
    idealFor: string;
    idealForYou: string;
    whatYouAchieve: string;
    whatIncludes: string;
    aboutThisPlan: string;
    personalizedCoaching: string;
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    kcal: string;
    grams: string;
    servings: string;
    macroDistribution: string;
    ingredients: string;
    preparation: string;
    process: string;
    programs: string;
    products: string;
    nutrition: string;
    motivation: string;
    aboutMe: string;
    contact: string;
    results: string;
    realStories: string;
    everfitMethod: string;
    myMission: string;
    myPhilosophy: string;
    myPhilosophySubtitle: string;
    knowMichelle: string;
    knowMyStory: string;
    founderAlt: string;
    portraitFounderAlt: string;
  };

  home: {
    hero: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      description: string;
      viewPlans: string;
      freeConsultation: string;
      stats: StatEntry[];
    };
    services: {
      badge: string;
      title: string;
      subtitle: string;
    };
    featuredPlans: {
      badge: string;
      title: string;
      subtitle: string;
      viewCatalog: string;
      viewAllPlans: string;
    };
    featuredRetos: {
      badge: string;
      title: string;
      subtitle: string;
      viewAll: string;
      viewAllMobile: string;
    };
    featuredRecipes: {
      badge: string;
      title: string;
      subtitle: string;
      available: string;
      exploreAll: string;
      exploreRecipes: string;
    };
    aboutPreview: {
      badge: string;
      title: string;
      knowMyStory: string;
    };
    testimonials: {
      badge: string;
      title: string;
      subtitle: string;
    };
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      scheduleConsultation: string;
      viewPlansAndPricing: string;
    };
  };

  contact: {
    metadata: { title: string; description: string };
    badge: string;
    title: string;
    subtitle: string;
    contactInfoTitle: string;
    freeConsultTitle: string;
    freeConsultText: string;
    formTitle: string;
    formSubtitle: string;
    planMessageTemplate: string;
    items: {
      email: string;
      whatsapp: string;
      location: string;
      locationValue: string;
      schedule: string;
      scheduleValue: string;
    };
    form: {
      success: string;
      submitError: string;
      unknownError: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitting: string;
      submit: string;
      subjects: SubjectOption[];
    };
  };

  cards: {
    plan: { signUp: string };
    reto: { badge: string; view: string };
    recipe: { view: string };
    blog: { read: string };
  };

  pages: {
    planes: {
      metadata: { title: string; description: string };
      badge: string;
      title: string;
      subtitle: string;
      programsBadge: string;
      programsTitle: string;
      programsSubtitle: string;
      choosePlanTitle: string;
      choosePlanText: string;
      choosePlanCta: string;
    };
    planDetail: {
      notFound: string;
      backToPlans: string;
      aboutPlan: string;
      idealForYou: string;
      whatYouAchieve: string;
      whatIncludes: string;
      signUp: string;
      personalizedCoaching: string;
      yourPathBadge: string;
      whatToExpect: string;
      whatToExpectSubtitle: string;
      otherPrograms: string;
      otherProgramsSubtitle: string;
    };
    retos: {
      metadata: { title: string; description: string };
      badge: string;
      title: string;
      subtitle: string;
    };
    retoDetail: {
      notFound: string;
      backToChallenges: string;
      badge: string;
      buy: string;
    };
    recetas: {
      metadata: { title: string; description: string };
      badge: string;
      title: string;
      subtitle: string;
    };
    recipeDetail: {
      notFound: string;
      metadataTitleSuffix: string;
      backToRecipes: string;
      servings: string;
      macroDistribution: string;
      ingredients: string;
      preparation: string;
    };
    blog: {
      metadata: { title: string; description: string };
      badge: string;
      title: string;
      subtitle: string;
    };
    blogDetail: {
      notFound: string;
      metadataTitleSuffix: string;
      backToBlog: string;
    };
    sobreMi: {
      metadata: { title: string };
      badge: string;
      subtitle: string;
      readyTitle: string;
      readyText: string;
      galleryBadge: string;
      galleryTitle: string;
      gallerySubtitle: string;
    };
    transformaciones: {
      metadata: { title: string };
      badge: string;
      nextStoryTitle: string;
      nextStoryText: string;
      startNow: string;
    };
    notFound: {
      title: string;
      heading: string;
      description: string;
      backHome: string;
    };
  };

  api: {
    contactSendFailed: string;
    contactAdminOffline: string;
    invalidLocale: string;
    invalidRequest: string;
  };

  cms?: CmsContent;
};
