import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Mandala from "@/components/Mandala";
import DivisionGlyph from "@/components/DivisionGlyph";
import Reveal from "@/components/Reveal";
import MumbaiClock from "@/components/MumbaiClock";
import { CRM_URL, divisions } from "@/lib/divisions";

const principles = [
  {
    mark: "01",
    title: "Infrastructure first",
    body: "We build for power grids, data centres, banks and big organisations, where reliability matters more than novelty.",
  },
  {
    mark: "02",
    title: "Built for India's scale",
    body: "If a system works across a billion people, it will work anywhere. We design from Mumbai for the world's most demanding environments.",
  },
  {
    mark: "03",
    title: "People at the centre",
    body: "AI should take on the complex, the dangerous and the repetitive, so people have more time for creativity, connection and progress.",
  },
];

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bloomgard Corporation",
    url: "https://bloomgard.co",
    logo: "https://bloomgard.co/logo.png",
    description: "Mumbai-based AI company building AI systems for global infrastructure.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <div className="flex w-full flex-col">
      <JsonLd data={orgSchema} />

      <SiteHeader />

      {/* Hero */}
      <section className="grain relative isolate -mt-16 overflow-hidden pt-16">
        <div
          className="absolute -right-56 top-[55%] -z-10 h-[460px] w-[460px] rounded-full opacity-45 blur-3xl sm:-right-20 sm:top-10 sm:h-[620px] sm:w-[620px] sm:opacity-60"
          style={{ background: "radial-gradient(circle, #e5a03a 0%, #c4441c 45%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Mandala className="animate-spin-slow absolute -right-72 top-[78%] -z-10 w-[620px] max-w-none -translate-y-1/2 text-ink/[0.12] sm:-right-40 sm:top-1/2 sm:w-[760px] lg:-right-24 lg:w-[880px]" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-4 pb-8 pt-16 sm:px-6 sm:pt-24 lg:px-10">
          <div className="max-w-4xl">
            <Reveal delay={0.08}>
              <h1 className="display mt-4 text-[3.4rem] sm:text-7xl lg:text-[7.5rem]">
                Intelligence for the systems{" "}
                <span className="italic text-sindoor">that run the world.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                Bloomgard is an AI company from Mumbai. We build software for the systems societies
                depend on: enterprise, energy, data, quantum, finance, education and healthcare.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#divisions"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-sindoor"
                >
                  Explore the divisions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={CRM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-ink/40"
                >
                  Try Bloomgard CRM <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="eyebrow mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-5 text-ink-mute">
            <span>Mumbai, India</span>
            <span className="hidden sm:inline">19.0760° N, 72.8777° E</span>
            <MumbaiClock />
            <span className="hidden md:inline">Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-ink bg-ink py-5 text-paper" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...divisions, ...divisions, ...divisions, ...divisions].map((d, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="display text-3xl">{d.name}</span>
              <span className="text-marigold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <main className="w-full">
        {/* Statement */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="eyebrow text-ink-mute lg:col-span-3">(01) Who we are</p>
            <Reveal className="lg:col-span-9">
              <p className="display text-4xl sm:text-5xl lg:text-6xl">
                One company, seven divisions, and one aim:{" "}
                <span className="italic text-ink-soft">
                  put AI to work in the systems people depend on every day,
                </span>{" "}
                starting with the ones that keep India running.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Divisions index */}
        <section id="divisions" className="scroll-mt-16 border-t border-line">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col justify-between gap-6 py-16 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-ink-mute">(02) Divisions</p>
                <h2 className="display mt-4 text-5xl sm:text-6xl">
                  The <span className="italic">Bloomgard</span> stack
                </h2>
              </div>
              <p className="max-w-sm text-ink-soft">
                Each division takes on one critical system, and all seven share the same AI core.
              </p>
            </div>

            <ul className="border-t border-ink">
              {divisions.map((d) => (
                <li key={d.slug} className="border-b border-line">
                  <Link
                    href={`/${d.slug}`}
                    className="group relative grid grid-cols-12 items-center gap-4 py-8 transition-colors sm:py-10"
                  >
                    <span className="absolute inset-y-0 -left-4 -right-4 -z-10 origin-bottom scale-y-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-y-100 sm:-left-6 sm:-right-6" />
                    <span className="eyebrow col-span-2 text-ink-mute sm:col-span-1">{d.index}</span>
                    <DivisionGlyph
                      slug={d.slug}
                      className="col-span-2 hidden h-16 w-16 text-ink/70 transition-all duration-500 group-hover:rotate-45 group-hover:text-sindoor sm:block lg:col-span-1"
                    />
                    <div className="col-span-10 sm:col-span-6 lg:col-span-4">
                      <h3 className="display text-4xl sm:text-5xl">{d.name}</h3>
                    </div>
                    <p className="col-span-12 text-ink-soft sm:col-span-9 sm:col-start-2 lg:col-span-4 lg:col-start-auto">
                      {d.summary}
                    </p>
                    <div className="col-span-12 flex items-center justify-end gap-4 sm:col-span-2">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Principles */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
          <p className="eyebrow text-ink-mute">(03) How we build</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-paper p-8 sm:p-10">
                  <span className="eyebrow text-sindoor">{p.mark}</span>
                  <h3 className="display mt-14 text-3xl sm:text-4xl">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="relative isolate overflow-hidden bg-neel text-paper">
          <div className="jaali absolute inset-0 -z-10" aria-hidden="true" />
          <Mandala className="animate-spin-slow absolute left-1/2 top-1/2 -z-10 w-[1100px] max-w-none -translate-x-1/2 -translate-y-1/2 text-marigold/[0.12]" />
          <div className="mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 sm:py-40 lg:px-10">
            <p className="eyebrow text-marigold">(04) Vision</p>
            <Reveal>
              <h2 className="display mt-8 text-5xl sm:text-7xl lg:text-8xl">
                Bringing AI and humanity <span className="italic text-marigold">closer.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-paper/75 sm:text-xl">
                The real promise of AI goes beyond computation. It&apos;s in what AI frees people to do. By
                automating the complex, the dangerous and the repetitive across the world&apos;s infrastructure,
                we want to give people more time for creativity, connection and progress.
              </p>
            </Reveal>
            <p className="font-deva mt-14 text-2xl text-paper/50">वसुधैव कुटुम्बकम्</p>
            <p className="eyebrow mt-2 text-paper/40">The world is one family</p>
          </div>
        </section>

        {/* CTA */}
        <section className="grain relative isolate">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="eyebrow text-ink-mute">(05) Start here</p>
              <h2 className="display mt-6 text-5xl sm:text-6xl">
                Start with <span className="italic text-sindoor">what&apos;s live.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-ink-soft">
                Bloomgard CRM captures every interaction, scores every lead and forecasts every deal. Your
                team can start using it today.
              </p>
            </div>
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-ink p-8 text-paper sm:p-12"
            >
              <DivisionGlyph
                slug="enterprise"
                className="absolute -right-10 -top-10 h-64 w-64 text-paper/10 transition-transform duration-700 group-hover:rotate-90"
              />
              <span className="eyebrow text-marigold">Enterprise · 01</span>
              <p className="display mt-16 text-4xl sm:text-5xl">Bloomgard CRM</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-paper/70 transition-colors group-hover:text-paper">
                cma.bloomgard.co
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
