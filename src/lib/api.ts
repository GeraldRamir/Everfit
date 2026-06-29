const API_URL =
  process.env.EVERFIT_API_URL ??
  process.env.NEXT_PUBLIC_EVERFIT_API_URL ??
  "http://127.0.0.1:3001";

async function fetchApi<T>(path: string, init?: RequestInit): Promise<T> {
  const isGet = !init?.method || init.method === "GET";

  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      ...(isGet ? { next: { revalidate: 30 } } : {}),
    });
  } catch {
    throw new Error(
      `No se pudo conectar con everfit-admin (${API_URL}). Asegúrate de tener "npm run dev" corriendo en everfit-admin (puerto 3001).`
    );
  }

  if (!res.ok) {
    throw new Error(`Everfit API error: ${path} (${res.status})`);
  }

  return res.json() as Promise<T>;
}

export type Plan = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDesc: string;
  price: number;
  duration: string;
  level: string;
  features: string;
  image: string | null;
  featured: boolean;
};

export type Challenge = {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  price: number;
  image: string | null;
  featured: boolean;
  order: number;
};

export type Recipe = {
  id: string;
  title: string;
  slug: string;
  description: string;
  ingredients: string;
  instructions: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTime: string;
  servings: number;
  category: string;
  image: string | null;
  featured: boolean;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string | null;
  publishedAt: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string | null;
};

export type HomeData = {
  services: Service[];
  plans: Plan[];
  challenges: Challenge[];
  recipes: Recipe[];
  testimonials: Testimonial[];
};

export function getHomeData() {
  return fetchApi<HomeData>("/api/public/home");
}

export function getPlans() {
  return fetchApi<Plan[]>("/api/public/plans");
}

export function getPlan(slug: string) {
  return fetchApi<Plan>(`/api/public/plans/${slug}`);
}

export function getChallenges() {
  return fetchApi<Challenge[]>("/api/public/challenges");
}

export function getChallenge(slug: string) {
  return fetchApi<Challenge>(`/api/public/challenges/${slug}`);
}

export function getRecipes() {
  return fetchApi<Recipe[]>("/api/public/recipes");
}

export function getRecipe(slug: string) {
  return fetchApi<Recipe>(`/api/public/recipes/${slug}`);
}

export function getBlogPosts() {
  return fetchApi<BlogPost[]>("/api/public/blog");
}

export function getBlogPost(slug: string) {
  return fetchApi<BlogPost>(`/api/public/blog/${slug}`);
}

export function parseJsonArray(value: string): string[] {
  try {
    return JSON.parse(value) as string[];
  } catch {
    return [];
  }
}

export async function submitContact(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  return fetchApi<{ success: boolean }>("/api/public/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export { API_URL };
