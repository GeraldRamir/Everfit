import type { Dictionary } from "../types";
import { cmsEn } from "./cms-en";

export const en: Dictionary = {
  site: {
    brand: "Everfit by Mich",
    founder: "Michelle Ruiz",
    email: "everfitbymich@gmail.com",
  },

  aboutImages: {
    portraitAlt: "Michelle Ruiz, founder of Everfit",
    accentAlt: "Michelle Ruiz — Everfit by Mich",
    missionAlt: "Michelle Ruiz — Everfit by Mich",
    whyJoinAlt: "Michelle Ruiz — Everfit coaching",
    gallery: [
      { alt: "Michelle Ruiz — Everfit fitness session" },
      { alt: "Michelle Ruiz personal trainer" },
      { alt: "Michelle Ruiz nutrition coach" },
      { alt: "Michelle Ruiz founder of Everfit" },
      { alt: "Michelle Ruiz — Everfit by Mich" },
    ],
  },

  aboutCredentials: [
    "Certified Personal Trainer",
    "Nutrition Coach",
    "1:1 Online Coaching",
    "Founder of Everfit",
  ],

  aboutValues: [
    {
      title: "Science and consistency",
      text: "Evidence-based coaching — not fad diets or extreme trends.",
    },
    {
      title: "I genuinely care",
      text: "Your progress is personal to me. I celebrate every win with you.",
    },
    {
      title: "Sustainable habits",
      text: "Plans that fit your real life and that you can maintain long term.",
    },
    {
      title: "Honest guidance",
      text: "No empty promises. Support, accountability, and constant communication.",
    },
  ],

  about: {
    title: "Michelle Ruiz",
    role: "Founder of Everfit",
    paragraphs: [
      "I'm a certified personal trainer and nutrition coach passionate about helping people build a healthier, stronger, and more confident version of themselves.",
      "My coaching is built on science, consistency, and sustainable habits — not extreme diets or quick fixes. Every plan is designed to fit your lifestyle while helping you achieve real, lasting results.",
      "Whether your goal is to lose fat, build muscle, or simply feel better, I'm here to guide and support you every step of the way.",
    ],
    closing:
      "Welcome to Everfit. Let's become your strongest version together.",
    signature: "With love, Michelle",
  },

  whyJoin: {
    title: "Why join my program?",
    intro: "Because I genuinely care about your progress.",
    paragraphs: [
      "When you join Everfit, you don't just get a workout and meal plan — you have someone in your corner who wants to see you succeed.",
      "I'll guide you, support you, celebrate your wins, and help you through the moments when motivation isn't enough. My goal is for fitness to feel realistic, enjoyable, and something you can actually sustain.",
      "No quick fixes. No starving yourself. No impossible routines.",
      "Just a personalized plan, honest guidance, and the accountability you need to become the strongest, healthiest version of yourself.",
    ],
    closing: "Your goals become my goals — and we'll achieve them together.",
    cta: "Sign up today. Let's get started.",
    highlights: [
      {
        title: "I care about your progress",
        text: "You're not just a number. Your story and your goals matter.",
      },
      {
        title: "No extremes",
        text: "Realistic habits — no starving or impossible routines.",
      },
      {
        title: "Real accountability",
        text: "Guidance, support, and celebration at every step.",
      },
    ],
  },

  planTiers: {
    ignite: { tagline: "The perfect place to start.", level: "Foundation" },
    power: { tagline: "Take your results to the next level.", level: "Progress" },
    elite: { tagline: "The ultimate coaching experience.", level: "Elite" },
  },

  plansPage: {
    intro:
      "Every Everfit plan is designed to fit your lifestyle — with science, consistency, and Michelle's personal support. No extreme diets or impossible routines.",
    comparisonTitle: "Compare the programs",
    comparisonSubtitle:
      "Find the level of support that best aligns with your goal, experience, and pace of life.",
    howItWorksTitle: "How it works",
    howItWorksSubtitle:
      "A clear process from first contact to sustainable results.",
    faqTitle: "Frequently asked questions",
  },

  planDetails: {
    "everfit-ignite": {
      tagline: "The perfect place to start.",
      idealFor: [
        "Beginners or those returning to fitness",
        "People who want to build solid habits",
        "Those seeking guidance without extreme pressure",
      ],
      outcomes: [
        "Learn training technique and structure",
        "Build a flexible, sustainable nutrition foundation",
        "Gain confidence with a plan you can maintain",
      ],
    },
    "everfit-power": {
      tagline: "Take your results to the next level.",
      idealFor: [
        "Those with a base who want to progress faster",
        "People ready for greater accountability",
        "Body recomposition or performance goals",
      ],
      outcomes: [
        "Advanced program with frequent adjustments",
        "More check-ins and plateau-busting strategies",
        "Visible progress with priority support",
      ],
    },
    "everfit-elite": {
      tagline: "The ultimate coaching experience.",
      idealFor: [
        "Those seeking maximum personalization",
        "Ambitious goals with a defined timeline",
        "People who value direct, close communication",
      ],
      outcomes: [
        "Highly personalized 1:1 coaching",
        "Premium integrated training and nutrition plan",
        "Real-time adjustments and full strategy",
      ],
    },
  },

  howItWorks: [
    {
      step: "01",
      title: "Initial consultation",
      text: "We talk about your goals, experience, schedule, and lifestyle to understand your starting point.",
    },
    {
      step: "02",
      title: "Personalized plan",
      text: "Michelle designs your training and nutrition tailored to you — realistic, sustainable, and results-driven.",
    },
    {
      step: "03",
      title: "Ongoing support",
      text: "Check-ins, adjustments, and accountability based on your plan. We celebrate wins and tackle obstacles together.",
    },
    {
      step: "04",
      title: "Lasting results",
      text: "You build habits that stick. The goal isn't a sprint — it's becoming your strongest version.",
    },
  ],

  planComparison: {
    featureColumn: "Feature",
    recommended: "Recommended",
    included: "Included",
    notIncluded: "Not included",
    tiers: { ignite: "Ignite", power: "Power", elite: "Elite" },
    features: [
      { label: "Personalized training", ignite: true, power: true, elite: true },
      { label: "Flexible nutrition plan", ignite: true, power: true, elite: true },
      { label: "Regular check-ins", ignite: true, power: true, elite: true },
      { label: "Accountability with Michelle", ignite: true, power: true, elite: true },
      { label: "Frequent program adjustments", ignite: false, power: true, elite: true },
      { label: "Priority support", ignite: false, power: true, elite: true },
      { label: "Premium 1:1 coaching", ignite: false, power: false, elite: true },
      { label: "Constant direct communication", ignite: false, power: false, elite: true },
    ],
  },

  planFaq: [
    {
      q: "Is breakfast the most important meal?",
      a: "No, all meals can be equally important. Whether breakfast is good or bad depends on how healthy it is. If you're not hungry at breakfast time, it's better to wait until you are.",
    },
    {
      q: "Can I have cheat meals?",
      a: "Cheat meals will be set in the program as you progress. Please check with me before eating anything outside the plan.",
    },
    {
      q: "Should foods be weighed cooked or raw?",
      a: "Foods should be weighed after cooking, unless the program says otherwise. Try to be as accurate as possible and don't exceed a 5g difference in measurements.",
    },
    {
      q: "Can I drink alcohol?",
      a: "Alcohol has more calories than protein and carbs. Excessive drinking contributes to muscle loss. If you still want to drink, 1 or 2 glasses of wine can have health benefits.",
    },
    {
      q: "Can I drink coffee?",
      a: "Yes, diet or low-calorie drinks are allowed in moderation (Coke Zero, sugar-free energy drinks, etc.).",
    },
    {
      q: "How do I control hunger?",
      a: "Drink plenty of water. Make sure you get enough sleep (8–9 hours). Lack of sleep increases hunger and cravings.",
    },
    {
      q: "What's the benefit of training fasted?",
      a: "Training fasted burns a higher percentage of stored fat. When glycogen is low, as it often is in the morning, your body gets used to burning more fat and uses stored fat as fuel.",
    },
    {
      q: "Do frozen foods lose nutritional value?",
      a: "No, frozen foods often retain their nutritional qualities, sometimes even better than fresh ones.",
    },
    {
      q: "How long should I wait to eat after training?",
      a: "Right after training, within 10–20 minutes you can take a protein supplement — the post-workout intake. For a meal or dinner, you can wait about two hours.",
    },
    {
      q: "Can training late at night hurt my sleep?",
      a: "Yes, because adrenaline rises and when you go to bed it's still high, preventing restful sleep.",
    },
    {
      q: "Do I need to eat at the same time every day?",
      a: "No, manage meals according to your schedule and lifestyle.",
    },
    {
      q: "Why is sleep important for weight loss if I already diet and exercise?",
      a: "If you don't rest enough, cortisol rises. With high cortisol, lipolysis (fat burning) is inhibited because the body is on alert.",
    },
    {
      q: "Why should I limit sweeteners if they have no calories?",
      a: "Sweeteners change our taste standards and get us used to sweeter flavors, and they can negatively affect the microbiota. It's important to get used to food without sweeteners or added sugar. You can consume them, but in moderation.",
    },
    {
      q: "Will eating carbs at night make me gain weight?",
      a: "No, no food changes its nutritional value based on the time it's consumed.",
    },
    {
      q: "Can I spot-reduce fat?",
      a: "No, the body simply doesn't work that way. Every body and metabolism is different, and body fat depends on genetics, direct factors, and your current lifestyle. Fat is oxidized globally across the whole body, not in a specific muscle group.",
    },
    {
      q: "Can I lose fat and gain muscle at the same time?",
      a: "It depends on your experience level and plan. If you're a beginner or returning after a break, recomp is possible. But if you've been training for a while, it's more effective to focus on one goal at a time: deficit to lose fat or surplus to gain muscle.",
    },
    {
      q: "What if I'm not hungry for a meal?",
      a: "That's normal some days. If you're not hungry, you can delay the meal or have something lighter, but don't use it as an excuse to skip everything. Meal consistency adds up to results.",
    },
    {
      q: "Can I train during my period?",
      a: "Yes, you can train. If you feel good, training can even improve your mood and reduce cramps. Adapt the intensity to how you feel that day.",
    },
    {
      q: "Is it bad to repeat meals every day?",
      a: "No, repeating meals helps you stay consistent and control portions better. If your diet is varied over the week, there's no problem repeating dishes that work for you.",
    },
  ],

  transformationCategories: [
    { id: "all", label: "All" },
    { id: "recomposicion", label: "Recomposition" },
    { id: "fuerza", label: "Strength" },
    { id: "tonificacion", label: "Toning" },
  ],

  transformationsPage: {
    title: "Real Transformations",
    subtitle:
      "Results from real clients who trusted Everfit coaching. No filters, no tricks — just work, consistency, and support.",
    intro:
      "Every journey is different, but the method is the same: personalized training, flexible nutrition, and someone in your corner who wants to see you succeed.",
    spotlightTitle: "Progress you can feel and see",
    spotlightText:
      "These clients didn't look for shortcuts. They built habits, trained with purpose, and had Michelle's support at every stage — even when motivation ran low.",
  },

  transformationStats: [
    { value: "11+", label: "Documented stories" },
    { value: "100%", label: "Real clients" },
    { value: "3", label: "Everfit programs" },
    { value: "1:1", label: "Personalized coaching" },
  ],

  transformationPillars: [
    {
      title: "Tailored training",
      text: "Routines adapted to your level, available equipment, and goal — no generic workouts.",
    },
    {
      title: "Flexible nutrition",
      text: "Sustainable plans that fit your life — no starving or extreme diets.",
    },
    {
      title: "Guided consistency",
      text: "Check-ins, adjustments, and accountability so progress doesn't depend on motivation alone.",
    },
    {
      title: "Michelle's support",
      text: "Close, honest, human coaching — celebrating every win with you.",
    },
  ],

  transformations: [
    {
      id: "01",
      alt: "Physical transformation before and after — Everfit client",
      focus: "Body recomposition",
      program: "Everfit Power",
      duration: "14 weeks",
      note: "Greater definition and visible change in body composition.",
    },
    {
      id: "02",
      alt: "Side progress before and after with Everfit by Mich",
      focus: "Glutes and core",
      program: "Everfit Ignite",
      duration: "12 weeks",
      note: "Notable improvement in posture, tone, and lower body shape.",
    },
    {
      id: "03",
      alt: "Real body transformation — Everfit program",
      focus: "Fat loss",
      program: "Everfit Power",
      duration: "16 weeks",
      note: "Sustained progress with structured training and flexible nutrition.",
    },
    {
      id: "04",
      alt: "Fitness coaching results before and after",
      focus: "General toning",
      program: "Everfit Ignite",
      duration: "10 weeks",
      note: "Firmer body and renewed energy from the first weeks.",
    },
    {
      id: "05",
      alt: "Physical change with Everfit training and nutrition",
      focus: "Body recomposition",
      program: "Everfit Elite",
      duration: "5 months",
      note: "Deep transformation with 1:1 coaching and close follow-up.",
    },
    {
      id: "06",
      alt: "Real Everfit by Mich client transformation",
      focus: "Strength and definition",
      program: "Everfit Power",
      duration: "18 weeks",
      note: "Visible strength gains with greater muscle definition.",
    },
    {
      id: "07",
      alt: "Strength and body composition progress — before and after",
      focus: "Strength and arms",
      program: "Everfit Power",
      duration: "12 weeks",
      note: "Upper body muscle gain and more defined core.",
    },
    {
      id: "08",
      alt: "Fitness transformation with visible muscle definition",
      focus: "Muscle definition",
      program: "Everfit Elite",
      duration: "6 months",
      note: "Standout result with premium plan and constant communication.",
    },
    {
      id: "09",
      alt: "Real personalized Everfit coaching result",
      focus: "Toning and posture",
      program: "Everfit Ignite",
      duration: "11 weeks",
      note: "First major visible change with habits she could maintain.",
    },
    {
      id: "10",
      alt: "Sustainable physical change — Everfit client",
      focus: "Body recomposition",
      program: "Everfit Power",
      duration: "15 weeks",
      note: "More defined waist and greater confidence in the process.",
    },
    {
      id: "11",
      alt: "Before and after transformation — Everfit by Mich",
      focus: "Confidence and tone",
      program: "Everfit Ignite",
      duration: "13 weeks",
      note: "From feeling uncomfortable to enjoying her body with consistency.",
    },
  ],

  transformationUi: {
    featuredStory: "Featured story",
    quote:
      "It wasn't a sprint — it was learning to be consistent. Michelle was there for every adjustment and every question.",
    quoteFooter: "Everfit client",
    viewPrograms: "View programs",
    eachPhotoTitle: "Every photo, a journey",
    eachPhotoSubtitle:
      "Filter by goal and explore transformations from clients who trusted Everfit.",
    enlarge: "Enlarge",
    noResults: "No transformations in this category for now.",
    modalAriaLabel: "Transformation detail",
    close: "Close",
    previous: "Previous",
    next: "Next",
    before: "Before",
    after: "After",
    storyOf: "Story {current} of {total}",
    realResult:
      "Real Everfit client result. Every journey is unique — yours will be too.",
    pillarsBadge: "The Everfit method",
    pillarsTitle: "What they have in common",
    pillarsSubtitle: "Behind every photo is a process — not a magic solution.",
    nextStoryTitle: "Your story could be next",
    nextStoryText:
      "You don't need to start perfect — you just need to start. Michelle supports you with a plan made for you.",
    viewTransformation: "View transformation: {focus}",
    realResultsBadge: "Real results",
    clientLabel: "Everfit client",
  },

  fitIconCarousel: {
    iconLabels:
      "Strength, cardio, nutrition, fat burn, consistency, results, energy, progress, goals, habits, balance, transformation, and confidence.",
  },

  motivation: {
    badge: "Motivation",
    title: "Change begins",
    titleHighlight: "when you decide",
    description:
      "Whether you've never stepped foot in a gym or you've been training for years. At Everfit, I believe in you before you believe in yourself.",
    cta: "Read more motivation",
    items: [
      {
        title: "Your body can handle almost anything",
        text: "It's your mind you have to convince. Every rep brings you closer to who you want to be.",
      },
      {
        title: "It's not about perfection",
        text: "It's about progress. One day at a time, one meal at a time, one workout at a time.",
      },
      {
        title: "The gym is your sanctuary",
        text: "A place where you invest in yourself, where every drop of sweat counts and every win is celebrated.",
      },
    ],
  },

  nav: {
    ariaLabel: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    startNow: "Start Now",
    links: {
      home: "Home",
      plans: "Plans",
      challenges: "Challenges",
      transformations: "Transformations",
      recipes: "Fit Recipes",
      blog: "Motivation",
      about: "About Me",
      contact: "Contact",
    },
  },

  footer: {
    tagline:
      "Transform your body and mind with personalized fitness coaching. Train with purpose, eat smart, live with energy.",
    servicesHeading: "Services",
    companyHeading: "Everfit",
    copyright: "All rights reserved.",
    designed: "Designed to transform lives",
    social: { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube" },
    links: {
      trainingPlans: "Training Plans",
      fitChallenges: "Fit Challenges",
      transformations: "Transformations",
      blogMotivation: "Blog & Motivation",
      onlineCoaching: "Online Coaching",
      aboutMich: "About Mich",
      contact: "Contact",
      pricing: "Pricing",
    },
  },

  layout: {
    skipToContent: "Skip to content",
  },

  metadata: {
    title: "Everfit by Mich | Fitness Coaching, Plans & Fit Recipes",
    description:
      "Transform your body with personalized fitness coaching. Training plans, fit recipes, online coaching, and motivation to reach your goals.",
    keywords: [
      "fitness",
      "training",
      "fit recipes",
      "fitness coaching",
      "gym",
      "nutrition",
      "everfit",
    ],
    openGraphTitle: "Everfit by Mich",
    openGraphDescription: "Your fitness transformation starts here",
  },

  common: {
    step: "Step",
    coaching: "Coaching",
    popular: "Popular",
    challenge: "Challenge",
    readArticle: "Read article →",
    viewMore: "View more",
    viewAll: "View all",
    exploreAll: "Explore all",
    signUpNow: "Sign Up Now",
    freeConsultation: "Free Consultation",
    backToPlans: "← Back to plans",
    backToChallenges: "← Back to challenges",
    backToRecipes: "← Back to recipes",
    backToBlog: "← Back to blog",
    buyChallenge: "Buy Challenge",
    viewChallenge: "View Challenge",
    viewRecipe: "View Recipe",
    viewDetails: "View details",
    idealFor: "Ideal for",
    idealForYou: "Ideal for you if…",
    whatYouAchieve: "What you'll achieve",
    whatIncludes: "What's included?",
    aboutThisPlan: "About this plan",
    personalizedCoaching: "Personalized coaching",
    calories: "Calories",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    kcal: "kcal",
    grams: "g",
    fiber: "fiber",
    servings: "serving(s)",
    macroDistribution: "Macro distribution",
    ingredients: "Ingredients",
    preparation: "Preparation",
    process: "Process",
    programs: "Programs",
    products: "Products",
    nutrition: "Nutrition",
    motivation: "Motivation",
    aboutMe: "About Me",
    contact: "Contact",
    results: "Real results",
    realStories: "Real stories",
    everfitMethod: "The Everfit method",
    myMission: "My mission",
    myPhilosophy: "My philosophy",
    myPhilosophySubtitle:
      "The values that guide every plan, every recipe, and every conversation at Everfit.",
    knowMichelle: "Meet Michelle",
    knowMyStory: "Know My Story",
    founderAlt: "founder of Everfit",
    portraitFounderAlt: "Michelle Ruiz — Everfit coaching",
  },

  home: {
    hero: {
      badge: "Personalized Fitness Coaching",
      titleLine1: "Transform your body.",
      titleLine2: "Empower your mind.",
      description:
        "Training plans, nutrition, and fit recipes with professional support designed for real, sustainable results.",
      viewPlans: "View Plans",
      freeConsultation: "Free Consultation",
      stats: [
        { value: "500+", label: "Clients transformed" },
        { value: "4+", label: "Years of experience" },
        { value: "50+", label: "Exclusive fit recipes" },
        { value: "100%", label: "Committed to you" },
      ],
    },
    services: {
      badge: "What I offer",
      title: "Everfit Services",
      subtitle: "Everything you need to transform your lifestyle, in one place.",
    },
    featuredPlans: {
      badge: "Training plans",
      title: "Choose your transformation",
      subtitle: "Personalized programs for every goal, level, and lifestyle.",
      viewCatalog: "View full catalog",
      viewAllPlans: "View All Plans",
    },
    featuredRetos: {
      badge: "Products",
      title: "Everfit Challenges",
      subtitle:
        "Intensive programs with a set duration and accessible price. Concrete results in clear timeframes.",
      viewAll: "View all challenges",
      viewAllMobile: "View All Challenges",
    },
    featuredRecipes: {
      badge: "Healthy eating",
      title: "Exclusive Fit Recipes",
      subtitle:
        "Delicious, easy to prepare, and with calculated macros to support your goals.",
      available: "{count}+ recipes available",
      exploreAll: "Explore all",
      exploreRecipes: "Explore Recipes",
    },
    aboutPreview: {
      badge: "About Me",
      title: "Hi, I'm Michelle",
      knowMyStory: "Know My Story",
    },
    testimonials: {
      badge: "Testimonials",
      title: "Transformation stories",
      subtitle: "Real results from real women who trusted Everfit.",
    },
    cta: {
      eyebrow: "Take the first step",
      title: "Ready for your transformation?",
      description:
        "Book your free 15-minute consultation and discover which plan is perfect for you.",
      scheduleConsultation: "Book Free Consultation",
      viewPlansAndPricing: "View Plans & Pricing",
    },
  },

  contact: {
    metadata: {
      title: "Contact | Everfit by Mich",
      description:
        "Book your free consultation or submit a service request to start your fitness transformation today.",
    },
    badge: "Contact",
    title: "Request your service",
    subtitle:
      "Complete the form and you'll receive a response within 24 hours. Your request goes directly to the admin panel.",
    contactInfoTitle: "Contact information",
    freeConsultTitle: "Free 15-min consultation",
    freeConsultText:
      "No commitment. We'll talk about your goals, assess your current situation, and I'll recommend the best path for you.",
    formTitle: "Send your request",
    formSubtitle:
      "Choose the service you're interested in. When you submit, Michelle will receive a push notification in the admin panel.",
    planMessageTemplate: "Hi Mich, I'd like information about {plan}.",
    items: {
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Location",
      locationValue: "100% Online Coaching — Available worldwide",
      schedule: "Hours",
      scheduleValue: "Mon - Fri: 8:00 AM - 8:00 PM",
    },
    form: {
      success: "Request sent successfully. I'll contact you soon.",
      submitError: "Error sending",
      unknownError: "Unknown error",
      name: "Name",
      namePlaceholder: "Your name…",
      email: "Email",
      emailPlaceholder: "you@email.com…",
      phone: "Phone / WhatsApp",
      phonePlaceholder: "+1 809 000 0000…",
      subject: "Service of interest",
      subjectPlaceholder: "Select a service…",
      message: "Message",
      messagePlaceholder: "Tell me about your goals, experience, and any questions…",
      submitting: "Sending request…",
      submit: "Send request",
      subjects: [
        { value: "consulta-gratis", label: "Free Consultation" },
        { value: "plan-entrenamiento", label: "Training Plan" },
        { value: "asesoria-nutricional", label: "Nutrition Coaching" },
        { value: "coaching-online", label: "Online Coaching" },
        { value: "reto", label: "Fit Challenge" },
        { value: "otro", label: "Other" },
      ],
    },
  },

  cards: {
    plan: { signUp: "Sign Up Now" },
    reto: { badge: "Challenge", view: "View Challenge" },
    recipe: { view: "View Recipe" },
    blog: { read: "Read article →" },
  },

  pages: {
    planes: {
      metadata: {
        title: "Coaching Plans | Everfit by Mich",
        description:
          "Everfit Ignite, Power, and Elite — personalized coaching programs with training, nutrition, and accountability from Michelle Ruiz.",
      },
      badge: "Everfit Coaching",
      title: "Choose your program",
      subtitle:
        "Personalized training, flexible nutrition, and Michelle's support at every step — no extremes, real results.",
      programsBadge: "Programs",
      programsTitle: "Everfit Ignite · Power · Elite",
      programsSubtitle:
        "Three levels of support. All with the same commitment: helping you become your strongest version.",
      choosePlanTitle: "Not sure which plan to choose?",
      choosePlanText:
        "Book a free consultation and I'll help you find the perfect program for your goal, experience, and lifestyle.",
      choosePlanCta: "Free Consultation",
    },
    planDetail: {
      notFound: "Plan not found",
      backToPlans: "← Back to plans",
      aboutPlan: "About this plan",
      idealForYou: "Ideal for you if…",
      whatYouAchieve: "What you'll achieve",
      whatIncludes: "What's included?",
      signUp: "Sign Up Now",
      personalizedCoaching: "Personalized coaching",
      yourPathBadge: "Your path",
      whatToExpect: "What to expect",
      whatToExpectSubtitle: "This is the process once you join Everfit.",
      otherPrograms: "Other programs",
      otherProgramsSubtitle:
        "Explore the rest of the Everfit plans and find the ideal level for you.",
    },
    retos: {
      metadata: {
        title: "Challenges | Everfit by Mich",
        description:
          "Michelle Ruiz's fitness challenges: fat loss, booty builder, glow up, home workout, and more. From US$19.99.",
      },
      badge: "Products",
      title: "Everfit Challenges",
      subtitle:
        "Intensive programs with a set duration for concrete results. Choose the challenge that best fits your goal.",
    },
    retoDetail: {
      notFound: "Challenge not found",
      backToChallenges: "← Back to challenges",
      badge: "Challenge",
      buy: "Buy Challenge",
    },
    recetas: {
      metadata: {
        title: "Fit Recipes | Everfit by Mich",
        description:
          "Healthy, delicious recipes with calculated macros. Breakfasts, lunches, snacks, and fit desserts.",
      },
      badge: "Nutrition",
      title: "Fit Recipes",
      subtitle:
        "Real, tasty, nutritious food. Every recipe includes macros so you know exactly what you're eating.",
    },
    recipeDetail: {
      notFound: "Recipe not found",
      metadataTitleSuffix: "Everfit Fit Recipes",
      backToRecipes: "← Back to recipes",
      servings: "{count} serving(s)",
      macroDistribution: "Macro distribution",
      ingredients: "Ingredients",
      preparation: "Preparation",
      fiber: "Fiber",
      notes: "Notes / macros per serving",
      fullRecipeMacros: "Nutrition facts (full recipe)",
    },
    blog: {
      metadata: {
        title: "Blog & Motivation | Everfit by Mich",
        description:
          "Motivation articles, mindset, nutrition, and fitness tips to keep you inspired on your journey.",
      },
      badge: "Motivation",
      title: "Blog & Inspiration",
      subtitle:
        "Content to fuel your mind, maintain discipline, and celebrate the process.",
    },
    blogDetail: {
      notFound: "Article not found",
      metadataTitleSuffix: "Everfit Blog",
      backToBlog: "← Back to blog",
      readingTime: "{minutes} min read",
      relatedTitle: "Related articles",
      viewAll: "View all",
    },
    sobreMi: {
      metadata: { title: "About Me | Michelle Ruiz — Everfit by Mich" },
      badge: "About Me",
      subtitle:
        "Founder of Everfit · Trainer · Nutrition coach · Your fitness ally",
      readyTitle: "Ready to start together?",
      readyText:
        "Your transformation starts with a conversation. Write to me and we'll design the path that fits you best.",
      galleryBadge: "Everfit by Mich",
      galleryTitle: "The coach behind the method",
      gallerySubtitle:
        "Fitness with purpose, warmth, and real results — that's Michelle in action.",
    },
    transformaciones: {
      metadata: { title: "Real Transformations | Everfit by Mich" },
      badge: "Real results",
      nextStoryTitle: "Your story could be next",
      nextStoryText:
        "You don't need to start perfect — you just need to start. Michelle supports you with a plan made for you.",
      startNow: "Start Now",
    },
    notFound: {
      title: "404",
      heading: "Page not found",
      description: "Looks like you went off track. Let's get back to training!",
      backHome: "Back to home",
    },
  },

  api: {
    contactSendFailed: "Could not send the request.",
    contactAdminOffline:
      "Could not connect to the admin system. Make sure everfit-admin is running.",
    invalidLocale: "Invalid locale",
    invalidRequest: "Invalid request",
  },

  cms: cmsEn,
};
