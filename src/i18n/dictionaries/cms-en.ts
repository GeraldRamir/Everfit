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
    "tostadas-francesas-altas-en-proteina": {
      title: "High-Protein French Toast",
      description:
        "High-protein French toast — perfect for a filling, macro-friendly breakfast.",
      ingredients: [
        "3 slices low-carb bread",
        "4 egg whites",
        "½ scoop (15 g) protein powder",
        "1 tsp vanilla",
        "Zero-calorie sweetener",
        "Cinnamon",
      ],
      instructions: [
        "Whisk the egg whites with protein powder, vanilla, sweetener, and cinnamon.",
        "Dip each bread slice in the mixture.",
        "Cook in a nonstick skillet over medium heat until golden on both sides.",
        "Serve warm. If split into 3 toasts, each is about 103 kcal.",
      ],
      prepTime: "15 min",
      category: "Breakfast",
      notes:
        "If split into 3 toasts, each provides approximately: 103 kcal · 11.3 g protein · 8.3 g carbs · 2 g fat.",
    },
    "pancakes-de-proteina": {
      title: "Protein Pancakes",
      description:
        "Fluffy high-protein pancakes — great for breakfast or post-workout.",
      ingredients: [
        "½ cup (40 g) oats",
        "1 scoop (30 g) protein powder",
        "A splash (60 ml) almond milk",
        "1 medium banana",
        "2 eggs",
        "Vanilla",
        "Cinnamon",
        "Salt",
        "Baking powder",
      ],
      instructions: [
        "Blend or mix all ingredients until smooth.",
        "Heat a nonstick skillet over medium heat.",
        "Pour batter portions and cook until bubbles appear; flip and cook the other side.",
        "Makes about 4 pancakes.",
      ],
      prepTime: "20 min",
      category: "Breakfast",
      notes:
        "If you get 4 pancakes, each is approximately: 123 kcal · 9.8 g protein · 11.3 g carbs · 4.2 g fat.",
    },
    "avena-proteica-chocolate-mantequilla-mani": {
      title: "Protein Oats with Chocolate & Peanut Butter",
      description:
        "Creamy oats with protein, chocolate, and peanut butter for an energizing breakfast.",
      ingredients: [
        "50 g oats",
        "1 scoop protein powder",
        "1 tbsp (16 g) peanut butter",
        "1 cup unsweetened almond milk",
        "Cinnamon",
        "Stevia",
      ],
      instructions: [
        "Heat the almond milk in a pot over medium heat.",
        "Add the oats and cook until thickened.",
        "Remove from heat; stir in protein powder, peanut butter, cinnamon, and stevia.",
        "Mix well and serve.",
      ],
      prepTime: "10 min",
      category: "Breakfast",
    },
    "parfait-pudding-de-chia": {
      title: "Chia Pudding Parfait",
      description:
        "Light, fiber-rich chia pudding. Toppings (yogurt, fruit, peanut butter) are not included in the macros.",
      ingredients: [
        "2 tbsp (28 g) chia seeds",
        "½ cup (120 ml) unsweetened almond milk",
        "1 tsp sugar-free maple syrup or stevia",
        "Cinnamon to taste",
        "A touch of vanilla extract",
      ],
      instructions: [
        "Mix all ingredients.",
        "Refrigerate for at least 4 hours or overnight.",
        "Add your preferred toppings before serving.",
      ],
      prepTime: "5 min + rest",
      category: "Snack",
      notes:
        "Toppings (Greek yogurt, apple, strawberries, and peanut butter) are NOT included in these macros.",
    },
    "wrap-alto-en-proteina": {
      title: "High-Protein Wrap",
      description:
        "A quick, very high-protein wrap with tuna, egg whites, and cottage cheese.",
      ingredients: [
        "2 low-carb tortillas",
        "¼ cup cottage cheese",
        "1 can or pouch tuna in water (about 70 g drained)",
        "3 egg whites",
      ],
      instructions: [
        "Mix the tuna, egg whites, and cottage cheese.",
        "Cook the mixture until the egg whites are set.",
        "Warm the tortillas.",
        "Fill and roll.",
      ],
      prepTime: "15 min",
      category: "Lunch",
      notes:
        "If the recipe makes 2 wraps, each provides approximately: 173 kcal · 23 g protein · 10 g carbs · 3.5 g fat.",
    },
    "avena-nocturna-con-matcha": {
      title: "Overnight Matcha Oats",
      description:
        "Overnight oats with matcha, chia, and Greek yogurt — prep the night before.",
      ingredients: [
        "½ cup (40 g) rolled oats",
        "1 tbsp (14 g) chia seeds",
        "1 tsp matcha",
        "¼ cup nonfat plain Greek yogurt",
        "⅔ cup unsweetened almond milk",
        "1 tbsp sugar-free maple syrup",
        "½ tbsp vanilla extract",
      ],
      instructions: [
        "Mix all ingredients.",
        "Refrigerate overnight or for at least 2 hours.",
        "Add fruit or your favorite toppings before eating.",
      ],
      prepTime: "5 min + rest",
      category: "Breakfast",
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
      content: `Training isn't just about looking good — it's about feeling powerful. Every session is an investment in the best version of you.

## Benefits you'll notice in the first week

- Better cardiovascular health and daily energy
- Less stress and improved sleep quality
- More confidence and discipline outside the gym

## The Everfit mindset

> The best time to start was yesterday. The second best is now.

Build small but consistent habits. You don't need two-hour workouts — 30 well-executed minutes can change your day. Celebrate every win, no matter how small.`,
      category: "Motivation",
    },
    "superar-miedo-gym": {
      title: "How to overcome gym fear as a beginner",
      excerpt:
        "The gym can be intimidating, but with the right mindset and proper guidance, it becomes your favorite place.",
      content: `It's normal to feel watched or not know what to do. Everyone — even those who look like experts today — started from zero.

## Tips for your first month

- Follow a clear training plan (don't wing it on the floor)
- Choose less crowded hours if that helps you focus
- Focus on your progress, not comparisons with anyone else

## Your mental kit

Use headphones, bring your water bottle, and celebrate every small win. The gym stops feeling intimidating when you realize it's your space to grow.

> Initial discomfort is a sign you're leaving your comfort zone — and that's exactly what we're after.`,
      category: "Mindset",
    },
    "meal-prep-clave-alimentacion": {
      title: "Meal prep: the key to staying on track with your nutrition",
      excerpt:
        "Preparing your meals ahead saves time, money, and keeps you on the path to your goals.",
      content: `Good meal prep is the difference between hitting your macros or reaching for fast food when the day gets hectic.

## A 2-hour Sunday plan

- Batch-cook proteins (chicken, fish, eggs)
- Prep base carbs (rice, sweet potato, oats)
- Wash and chop vegetables for the week

## Tips to avoid boredom

Use portioned containers, freeze what you won't eat within 3 days, and rotate seasonings and fit sauces. Variety keeps you consistent.

> Preparing today is gifting yourself discipline tomorrow.`,
      category: "Nutrition",
    },
  },
};
