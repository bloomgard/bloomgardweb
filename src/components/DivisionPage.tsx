import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DivisionGlyph from "@/components/DivisionGlyph";
import Mandala from "@/components/Mandala";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, CRM_URL, divisions, getDivision, type DivisionSlug } from "@/lib/divisions";

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
  const live = d.slug === "enterprise";

  return (
    <div className="flex w-full flex-col">
      <JsonLd data={schema} />
      <SiteHeader />

      <main className="w-full">
        {/* Hero */}
        <section className="grain relative isolate -mt-16 overflow-hidden pt-16">
          <div
            className="absolute -right-32 -top-20 -z-10 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, #e5a03a 0%, #c4441c 50%, transparent 72%)" }}
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
                  <p className="display mt-10 max-w-3xl text-3xl text-ink-soft sm:text-4xl">{d.lede}</p>
                </Reveal>
              </div>

              <Reveal delay={0.15} className="lg:col-span-4">
                <div className="relative mx-auto aspect-square w-full max-w-sm">
                  <Mandala className="animate-spin-slow absolute inset-0 text-ink/10" />
                  <DivisionGlyph slug={d.slug} className="absolute inset-[22%] text-sindoor" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-y border-ink bg-ink text-paper">
          <dl className="mx-auto grid max-w-7xl divide-y divide-paper/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-10">
            {d.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse py-8 sm:px-8 sm:first:pl-0">
                <dt className="eyebrow text-paper/50">{m.label}</dt>
                <dd className="display mt-2 text-4xl text-marigold sm:text-5xl">{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>

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
              {live && (
                <a
                  href={CRM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-sindoor"
                >
                  Launch Bloomgard CRM
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-ink-mute">(02) Pillars</p>
                <h2 className="display mt-4 text-5xl sm:text-6xl">
                  What we&apos;re <span className="italic">building</span>
                </h2>
              </div>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {d.pillars.map((p, idx) => (
                <Reveal key={p.title} delay={idx * 0.08} className="h-full">
                  <div className="flex h-full flex-col bg-ivory p-8 sm:p-10">
                    <span className="eyebrow text-ink-mute">
                      {d.index}.{idx + 1}
                    </span>
                    <h3 className="display mt-16 text-3xl sm:text-4xl">{p.title}</h3>
                    <p className="mt-4 leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ivory p-8 sm:flex-row sm:items-center sm:p-10">
              <p className="display text-3xl">
                Want to build {d.name} with us?
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Bloomgard%20${encodeURIComponent(d.name)}`}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                Get in touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Next division */}
        <Link href={`/${next.slug}`} className="group block border-t border-line">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
            <div>
              <p className="eyebrow text-ink-mute">Next · Division {next.index}</p>
              <p className="display mt-4 text-6xl transition-colors group-hover:text-sindoor sm:text-8xl">
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
