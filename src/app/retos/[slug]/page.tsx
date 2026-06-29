import type { Metadata } from "next";

import Image from "next/image";

import Link from "next/link";

import { notFound } from "next/navigation";

import { Calendar } from "lucide-react";

import Container from "@/components/ui/Container";

import { formatPrice } from "@/lib/utils";

import { getDictionary } from "@/i18n";
import { localizeChallenge } from "@/i18n/localize";
import { getLocale } from "@/i18n/server";
import { getChallenge } from "@/lib/api";



type Props = { params: Promise<{ slug: string }> };



export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const locale = await getLocale();

  const dict = getDictionary(locale);

  try {

    const { slug } = await params;

    const dict = getDictionary(locale);

    const reto = localizeChallenge(await getChallenge(slug), locale, dict.cms);

    return {

      title: `${reto.title} | ${dict.site.brand}`,

      description: reto.description,

    };

  } catch {

    return { title: dict.pages.retoDetail.notFound };

  }

}



export const dynamic = "force-dynamic";



export default async function RetoDetailPage({ params }: Props) {

  const locale = await getLocale();

  const dict = getDictionary(locale);

  const { pages } = dict;

  const { slug } = await params;



  let reto;

  try {

    reto = localizeChallenge(await getChallenge(slug), locale, dict.cms);

  } catch {

    notFound();

  }



  return (

    <>

      <section className="section-shell-sm bg-everfit-cream/50 pt-28">

        <Container>

          <Link href="/retos" className="mb-6 inline-block text-sm text-everfit-wine/60 hover:text-everfit-wine">

            {pages.retoDetail.backToChallenges}

          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {reto.image && (

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">

                <Image

                  src={reto.image}

                  alt={reto.title}

                  fill

                  className="object-cover"

                  priority

                />

              </div>

            )}

            <div>

              <span className="badge-everfit mb-4">{pages.retoDetail.badge}</span>

              <h1 className="mb-4 font-display text-3xl font-bold text-everfit-wine md:text-4xl">

                {reto.title}

              </h1>

              <p className="mb-6 font-display text-3xl font-bold tabular-nums text-everfit-orange">

                {formatPrice(reto.price, locale)}

              </p>

              <p className="mb-6 text-lg leading-relaxed text-gray-600">

                {reto.description}

              </p>

              <span className="meta-pill mb-8 inline-flex">

                <Calendar size={14} aria-hidden="true" />

                {reto.duration}

              </span>

              <div>

                <Link

                  href={`/contacto?servicio=reto&plan=${encodeURIComponent(slug)}`}

                  className="btn-everfit-primary px-8"

                >

                  {pages.retoDetail.buy}

                </Link>

              </div>

            </div>

          </div>

        </Container>

      </section>

    </>

  );

}

