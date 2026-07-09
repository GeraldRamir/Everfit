import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/ui/BlogCard";
import { getDictionary } from "@/i18n";
import { localizeBlogPost, localizeBlogPosts } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { BlogContent, estimateReadingTime } from "@/lib/blog-content";
import { getBlogPost, getBlogPosts } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  try {
    const { slug } = await params;
    const post = localizeBlogPost(await getBlogPost(slug), locale, dict.cms);
    return {
      title: `${post.title} | ${dict.pages.blogDetail.metadataTitleSuffix}`,
      description: post.excerpt,
    };
  } catch {
    return { title: dict.pages.blogDetail.notFound };
  }
}

export const dynamic = "force-dynamic";

export default async function BlogDetailPage({ params }: Props) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { pages } = dict;
  const dateLocale = locale === "en" ? "en-US" : "es-ES";
  const { slug } = await params;

  let post;
  let allPosts;
  try {
    [post, allPosts] = await Promise.all([
      localizeBlogPost(await getBlogPost(slug), locale, dict.cms),
      localizeBlogPosts(await getBlogPosts(), locale, dict.cms),
    ]);
  } catch {
    notFound();
  }

  const readingMinutes = estimateReadingTime(post.content);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const morePosts =
    related.length >= 2
      ? related
      : allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article>
      <section className="bg-everfit-cream pb-12 pt-28">
        <Container>
          <Link
            href="/blog"
            className="mb-6 inline-block text-sm font-medium text-everfit-wine/70 transition-colors hover:text-everfit-wine"
          >
            {pages.blogDetail.backToBlog}
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-12">
            {post.image && (
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg lg:col-span-7">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            )}

            <div className={post.image ? "lg:col-span-5" : "lg:col-span-12 max-w-3xl"}>
              <span className="badge-everfit mb-4 inline-block">{post.category}</span>
              <h1 className="mb-5 font-display text-3xl font-bold leading-tight text-everfit-wine md:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h1>

              <div className="mb-6 flex flex-wrap gap-3">
                <span className="meta-pill">
                  <CalendarDays size={13} aria-hidden="true" />
                  {formattedDate}
                </span>
                <span className="meta-pill">
                  <Clock size={13} aria-hidden="true" />
                  {pages.blogDetail.readingTime.replace("{minutes}", String(readingMinutes))}
                </span>
              </div>

              <div className="rounded-2xl border border-everfit-orange/20 bg-white/80 p-5 shadow-sm">
                <p className="mb-0 border-l-4 border-everfit-orange pl-4 text-lg font-medium leading-relaxed text-gray-700">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell-sm surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <BlogContent content={post.content} />
          </div>
        </Container>
      </section>

      {morePosts.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-16 md:py-20">
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="badge-everfit mb-3">{pages.blog.badge}</p>
                <h2 className="font-display text-2xl font-bold text-everfit-wine md:text-3xl">
                  {pages.blogDetail.relatedTitle}
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-everfit-wine transition-colors hover:text-everfit-orange"
              >
                {pages.blogDetail.viewAll} →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {morePosts.map((item) => (
                <BlogCard key={item.id} {...item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
