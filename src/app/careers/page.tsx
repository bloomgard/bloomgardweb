import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Mandala from "@/components/Mandala";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL } from "@/lib/divisions";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Bloomgard are coming soon. We're open to ideas and collaborations.",
};

export default function Careers() {
  return (
    <div className="flex w-full flex-col">
      <SiteHeader />

      <main className="w-full">
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
          <Mandala className="animate-spin-slow absolute -right-64 top-1/2 -z-10 w-[820px] max-w-none -translate-y-1/2 text-ink/[0.1]" />

          <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 sm:pb-36 sm:pt-24 lg:px-10">
            <Reveal>
              <p className="eyebrow text-ink-mute">Careers</p>
              <h1 className="display mt-6 text-7xl sm:text-8xl lg:text-[9rem]">
                Coming <span className="italic text-sindoor">soon.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                We aren&apos;t hiring right now. But we&apos;re always open to new ideas and collaborations. If you have
                something you&apos;d like to build with us, we&apos;d love to hear it.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="display mt-12 text-3xl sm:text-4xl">
                Share your idea at{" "}
                <span className="select-all italic text-sindoor">{CONTACT_EMAIL}</span>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
