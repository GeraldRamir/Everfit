import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import BlogCard from "@/components/ui/BlogCard";
import CTA from "@/components/home/CTA";
import { getDictionary } from "@/i18n";
import { localizeBlogPosts } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getBlogPosts } from "@/lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.pages.blog.metadata.title,
    description: dict.pages.blog.metadata.description,
  };
}

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { pages } = dict;
  const posts = localizeBlogPosts(await getBlogPosts(), locale, dict.cms);

  return (
    <>
      <PageHeader
        badge={pages.blog.badge}
        title={pages.blog.title}
        subtitle={pages.blog.subtitle}
        image="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80"
      />

      <section className="section-shell">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
