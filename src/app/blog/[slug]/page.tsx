import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getDictionary } from "@/i18n";
import { localizeBlogPost } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getBlogPost } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  try {
    const { slug } = await params;
    const dict = getDictionary(locale);
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
  const dateLocale = locale === "en" ? "en-US" : "es-ES";
  const { slug } = await params;

  let post;
  try {
    post = localizeBlogPost(await getBlogPost(slug), locale, dict.cms);
  } catch {
    notFound();
  }

  return (
    <article>
      <section className="relative bg-everfit-charcoal pb-16 pt-32 text-white">
        {post.image && (
          <Image src={post.image} alt="" fill className="object-cover opacity-30" priority />
        )}
        <Container className="relative z-10">
          <Link href="/blog" className="mb-6 inline-block text-sm text-white/60 hover:text-white">
            {dict.pages.blogDetail.backToBlog}
          </Link>
          <span className="badge-everfit mb-4 inline-block bg-everfit-orange/20 text-everfit-orange">
            {post.category}
          </span>
          <h1 className="mb-4 max-w-3xl font-display text-3xl font-bold md:text-5xl">
            {post.title}
          </h1>
          <time className="text-sm text-white/60">
            {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </Container>
      </section>

      <section className="section-shell-sm">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 border-l-4 border-everfit-orange pl-6 text-xl font-medium leading-relaxed text-gray-600">
              {post.excerpt}
            </p>
            <div className="leading-relaxed text-gray-700">
              {post.content.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
