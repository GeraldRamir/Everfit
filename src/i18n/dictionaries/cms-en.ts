import type { CmsContent } from "../cms-types";

export const cmsEn: CmsContent = {
  services: {
    dumbbell: {
      title: "Training Plans",
      description:
        "Personalized routines based on your goal: fat loss, muscle gain, or body recomposition.",
    },
    nutrition: {
      title: "Nutrition Coaching",
      description:
        "Balanced meal plans with fit recipes, calculated macros, and weekly check-ins.",
    },
    video: {
      title: "Online Coaching",
      description:
        "100% online support with video calls, real-time adjustments, and WhatsApp support.",
    },
    recipe: {
      title: "Fit Recipes",
      description:
        "A library of healthy, easy, and delicious recipes to complement your nutrition plan.",
    },
  },

  plans: {
    "everfit-ignite": {
      description:
        "The perfect place to start. Build healthy habits, learn proper training, and create a solid foundation with personalized guidance.",
      longDesc:
        "Everfit Ignite is designed for those taking their first step or rebuilding their relationship with fitness. You'll learn technique, structure, and habits you can maintain. Includes personalized training, nutrition guidance, and Michelle's support so you start with confidence and clarity.",
      duration: "Ongoing program",
      level: "Foundation",
      features: [
        "Personalized training adapted to your level",
        "Flexible, sustainable nutrition plan",
        "Learn training technique and structure",
        "Building healthy habits",
        "Support and accountability with Michelle",
        "Ideal for starting or getting back on track",
      ],
    },
    "everfit-power": {
      description:
        "Take your results to the next level. Designed for those ready to push harder, stay accountable, and progress faster.",
      longDesc:
        "Everfit Power is for those who already have a base and want more visible results with greater support. More structure, more accountability, and frequent adjustments to keep you on track. Michelle will be closer to you at every phase of the process.",
      duration: "Ongoing program",
      level: "Progress",
      features: [
        "Advanced personalized training program",
        "Nutrition optimized for your goals",
        "More frequent check-ins and adjustments",
        "Accountability and close follow-up",
        "Strategies to break through plateaus",
        "Priority support from Michelle",
      ],
    },
    "everfit-elite": {
      description:
        "The ultimate coaching experience. The most complete program with personalized coaching, close guidance, and everything you need for your best results.",
      longDesc:
        "Everfit Elite is the premium Everfit by Mich experience. Highly personalized coaching, direct communication, and a comprehensive plan designed exclusively for you. If you're looking for the highest level of support and results, this is your program.",
      duration: "Ongoing program",
      level: "Elite",
      features: [
        "Highly personalized 1:1 coaching",
        "Premium training and nutrition plan",
        "Direct communication and constant follow-up",
        "Real-time adjustments based on your progress",
        "Complete strategy for your specific goals",
        "The most complete Everfit experience",
      ],
    },
  },

  challenges: {
    "21-day-fat-loss-challenge": {
      title: "21-Day Fat Loss Challenge",
      description:
        "Intensive 21-day challenge focused on fat loss with structured training and nutrition guidance.",
      duration: "21 days",
    },
    "booty-builder-challenge": {
      title: "Booty Builder Challenge (30 days)",
      description:
        "30-day challenge designed to develop and tone glutes with progressive, effective routines.",
      duration: "30 days",
    },
    "everfit-glow-up-challenge": {
      title: "Everfit Glow Up Challenge (30 days)",
      description:
        "Complete 30-day transformation: training, nutrition, and mindset for your best version.",
      duration: "30 days",
    },
    "home-workout-challenge": {
      title: "Home Workout Challenge (30 days)",
      description:
        "30 days of effective training from home. No excuses, no complicated equipment.",
      duration: "30 days",
    },
    "holiday-balance-challenge": {
      title: "Holiday Balance Challenge",
      description:
        "Stay balanced during the holidays: enjoy yourself without losing your progress or your health.",
      duration: "Special program",
    },
  },

  recipes: {
    "bowl-proteico-pollo-quinoa": {
      title: "Chicken & Quinoa Protein Bowl",
      description:
        "A complete, colorful bowl packed with protein — ideal for post-workout.",
      ingredients: [
        "150g chicken breast",
        "80g cooked quinoa",
        "1/2 avocado",
        "1 cup spinach",
        "1/2 cup cherry tomatoes",
        "2 tbsp hummus",
        "Lemon, salt, and pepper",
      ],
      instructions: [
        "Cook the quinoa according to package instructions.",
        "Season the chicken with salt, pepper, and paprika. Pan-sear 5–6 min per side.",
        "Build the bowl: spinach base, quinoa, sliced chicken.",
        "Add avocado, tomatoes, and hummus.",
        "Squeeze lemon and serve.",
      ],
      prepTime: "25 min",
      category: "Lunch",
    },
    "overnight-oats-proteina": {
      title: "Protein Overnight Oats",
      description:
        "Breakfast prepared the night before — creamy and with 30g of protein.",
      ingredients: [
        "1/2 cup oats",
        "1 scoop vanilla protein powder",
        "3/4 cup almond milk",
        "1 tsp peanut butter",
        "1/2 banana, sliced",
        "1 tsp chia seeds",
        "Cinnamon to taste",
      ],
      instructions: [
        "Mix oats, protein powder, milk, and chia in a jar.",
        "Refrigerate overnight (at least 6 hours).",
        "In the morning, add banana, peanut butter, and cinnamon.",
        "Enjoy cold or at room temperature.",
      ],
      prepTime: "5 min + rest",
      category: "Breakfast",
    },
    "wrap-fit-atun": {
      title: "Fit Tuna & Veggie Wrap",
      description:
        "A quick, practical, high-protein option to take to work or the gym.",
      ingredients: [
        "1 large whole-wheat tortilla",
        "1 can tuna in water",
        "2 tbsp Greek yogurt",
        "Lettuce, tomato, cucumber",
        "1/4 avocado",
        "Mustard and lemon",
      ],
      instructions: [
        "Mix drained tuna with yogurt, mustard, and lemon.",
        "Lightly warm the tortilla.",
        "Add lettuce, tuna mix, and vegetables.",
        "Add avocado, roll tightly, and cut in half.",
      ],
      prepTime: "10 min",
      category: "Snack",
    },
    "smoothie-verde-energetico": {
      title: "Energizing Green Smoothie",
      description:
        "A refreshing pre-workout drink with carbs and micronutrients.",
      ingredients: [
        "1 frozen banana",
        "1 cup spinach",
        "1/2 cup pineapple",
        "1 cup light coconut milk",
        "1 tsp honey",
        "Ice to taste",
      ],
      instructions: [
        "Add all ingredients to a blender.",
        "Blend until creamy.",
        "Serve immediately.",
      ],
      prepTime: "5 min",
      category: "Drink",
    },
    "brownies-fit-cacao": {
      title: "Fit Cacao Brownies",
      description:
        "A guilt-free healthy dessert, perfect for sweet cravings.",
      ingredients: [
        "2 ripe bananas",
        "1/4 cup cocoa powder",
        "1/2 cup ground oats",
        "2 eggs",
        "1 scoop chocolate protein powder",
        "1 tsp baking powder",
        "Dark chocolate chips",
      ],
      instructions: [
        "Preheat oven to 180°C (350°F).",
        "Blend bananas, eggs, and protein powder.",
        "Mix with cocoa, oats, and baking powder.",
        "Pour into a greased pan, add chips.",
        "Bake 20–25 minutes. Let cool before cutting.",
      ],
      prepTime: "30 min",
      category: "Dessert",
    },
  },

  testimonials: {
    "María González": {
      role: "Everfit Ignite Client",
      content:
        "Michelle changed my relationship with the gym. Her constant support and realistic approach made all the difference.",
    },
    "Carolina Ruiz": {
      role: "Everfit Power Client",
      content:
        "Michelle's routines are challenging but adapted to my level. I feel stronger and more confident than ever.",
    },
    "Ana Lucía Pérez": {
      role: "Everfit Elite Client",
      content:
        "Michelle taught me everything from scratch with patience. Now I train with confidence and love the process.",
    },
  },

  blog: {
    "5-razones-empezar-entrenar": {
      title: "5 reasons you should start training today",
      excerpt:
        "Don't wait for Monday, next month, or New Year's. Your body and mind will thank you from day one.",
      content:
        "Training isn't just about looking good — it's about feeling powerful. It improves cardiovascular health, reduces stress, boosts confidence, and builds discipline that goes beyond the gym. Every session is an investment in the best version of you. At Everfit we believe the best time to start was yesterday; the second best is now.",
      category: "Motivation",
    },
    "superar-miedo-gym": {
      title: "How to overcome gym fear as a beginner",
      excerpt:
        "The gym can be intimidating, but with the right mindset and proper guidance, it becomes your favorite place.",
      content:
        "It's normal to feel watched or not know what to do. Start with a clear plan, less crowded hours, and remember: everyone started from zero. Focus on your progress, not comparisons. Use headphones, bring your water bottle, and celebrate every small win.",
      category: "Mindset",
    },
    "meal-prep-clave-alimentacion": {
      title: "Meal prep: the key to staying on track with your nutrition",
      excerpt:
        "Preparing your meals ahead saves time, money, and keeps you on the path to your goals.",
      content:
        "Dedicate 2 hours on Sunday to prep proteins, carbs, and vegetables. Use portioned containers, freeze what you won't eat in 3 days, and vary your seasonings so you don't get bored. Good meal prep is the difference between hitting your macros or falling for fast food.",
      category: "Nutrition",
    },
  },
};
