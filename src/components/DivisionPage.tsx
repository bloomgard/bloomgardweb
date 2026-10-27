import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DivisionGlyph from "@/components/DivisionGlyph";
import Mandala from "@/components/Mandala";
import Reveal from "@/components/Reveal";
import MotifBand from "@/components/MotifBand";
import CrmShowcase from "@/components/CrmShowcase";
import { CONTACT_EMAIL, divisions, getDivision, type DivisionSlug } from "@/lib/divisions";

export default function DivisionPage({
  slug,
  schema,
}: {
  slug: DivisionSlug;
  schema: Record<string, unknown>;
}) {
  const d = getDivision(slug);
  const i = divisions.indexOf(d);
  const next = divisions[(i + 1) % divisions.length];
  const hasProduct = d.slug === "enterprise";
  // Section labels count up, since Enterprise has one extra section.
  const label = (n: number) => String(n).padStart(2, "0");
  const pillarsIndex = label(hasProduct ? 3 : 2);
  const visionIndex = label(hasProduct ? 4 : 3);

  return (
    <div className="flex w-full flex-col">
      <JsonLd data={schema} />
      <SiteHeader />

      <main className="w-full">
        {/* Hero */}
        <section className="grain relative isolate -mt-16 overflow-hidden pt-16">
          <div
            className="absolute -right-40 -top-32 -z-10 h-[600px] w-[600px] rounded-full opacity-45 blur-3xl"
            style={{ background: "radial-gradient(circle, #6f8dff 0%, #2747d8 40%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute right-[18%] top-[10%] -z-10 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #ffb15c 0%, #ea5420 45%, transparent 72%)" }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-10">
            <Link
              href="/#divisions"
              className="eyebrow inline-flex items-center gap-2 text-ink-mute transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All divisions
            </Link>

            <div className="mt-14 grid items-end gap-14 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Reveal>
                  <span className="eyebrow text-ink-mute">Division {d.index}</span>
                  <h1 className="display mt-6 text-7xl sm:text-8xl lg:text-[9rem]">
                    {d.name}
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="display mt-10 max-w-3xl text-3xl text-ink-soft sm:text-5xl">
                    {d.lede} <span className="italic text-sindoor">{d.ledeEm}</span>
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.15} className="lg:col-span-4">
                <div className="relative mx-auto aspect-square w-full max-w-sm">
                  <Mandala className="animate-spin-slow absolute inset-0 text-ink/10" />
                  <DivisionGlyph slug={d.slug} className="absolute inset-[22%] text-blue" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <MotifBand slug={d.slug} />

        {/* Plan */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="eyebrow text-ink-mute lg:col-span-3">(01) The plan</p>
            <div className="space-y-8 lg:col-span-8">
              {d.body.map((para, idx) => (
                <Reveal key={idx} delay={idx * 0.06}>
                  <p className={idx === 0 ? "display text-3xl sm:text-4xl" : "text-lg leading-relaxed text-ink-soft sm:text-xl"}>
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {hasProduct && <CrmShowcase index="02" />}

        {/* Pillars */}
        <section className="border-t border-line bg-gradient-to-b from-sky/60 to-paper">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow text-ink-mute">({pillarsIndex}) Pillars</p>
                <h2 className="display mt-4 text-5xl sm:text-6xl">
                  What we&apos;re <span className="italic text-sindoor">building</span>
                </h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:justify-self-end">
                Three problems {d.name} is going after, each one becoming a product on the same Bloomgard AI core.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {d.pillars.map((p, idx) => (
                <Reveal key={p.title} delay={idx * 0.08} className="h-full">
                  <article className="group relative isolate flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-paper p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_48px_-24px_rgba(39,71,216,0.45)] sm:p-9">
                    {/* Hover fill */}
                    <div
                      className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,#15120e_0%,#18214a_55%,#2747d8_130%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    {/* Oversized numeral */}
                    <span
                      className="display pointer-events-none absolute -bottom-12 -right-2 -z-10 select-none text-[13rem] leading-none text-sky transition-colors duration-500 group-hover:text-paper/[0.06]"
                      aria-hidden="true"
                    >
                      {idx + 1}
                    </span>

                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-ink-mute transition-colors duration-500 group-hover:text-marigold">
                        {d.index}.{idx + 1}
                      </span>
                      <DivisionGlyph
                        slug={d.slug}
                        className="h-12 w-12 text-blue transition-all duration-700 group-hover:rotate-90 group-hover:text-marigold"
                      />
                    </div>

                    <div className="mt-12">
                      <h3 className="display text-3xl transition-colors duration-500 group-hover:text-paper sm:text-[2.1rem]">
                        {p.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/75">
                        {p.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-neel to-blue p-8 text-paper sm:flex-row sm:items-center sm:p-10">
              <p className="display text-3xl">
                Want to build {d.name} with us?
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Bloomgard%20${encodeURIComponent(d.name)}`}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-marigold"
              >
                Get in touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="relative isolate overflow-hidden bg-[linear-gradient(160deg,#0e1430_0%,#18214a_45%,#2747d8_115%)] text-paper">
          <div className="jaali absolute inset-0 -z-10" aria-hidden="true" />
          <Mandala className="animate-spin-slow absolute -right-64 top-1/2 -z-10 w-[900px] max-w-none -translate-y-1/2 text-marigold/[0.12]" />
          <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <p className="eyebrow text-marigold lg:col-span-3">({visionIndex}) Vision</p>
              <div className="lg:col-span-9">
                <Reveal>
                  <h2 className="display text-5xl sm:text-7xl">
                    {d.vision.headline} <span className="italic text-marigold">{d.vision.headlineEm}</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-10 max-w-2xl text-lg leading-relaxed text-paper/75 sm:text-xl">{d.vision.body}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Next division */}
        <Link href={`/${next.slug}`} className="group block border-t border-line">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
            <div>
              <p className="eyebrow text-ink-mute">Next · Division {next.index}</p>
              <p className="display mt-4 text-6xl transition-colors group-hover:text-blue sm:text-8xl">
                {next.name}
              </p>
            </div>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-paper sm:h-24 sm:w-24">
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </main>

      <SiteFooter />
    </div>
  );
}
