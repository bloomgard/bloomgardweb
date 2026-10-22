import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CRM_URL } from "@/lib/divisions";

const features = [
  "Logs every call, email and meeting on its own",
  "Scores leads on what customers actually say",
  "Gives every deal a live chance of closing",
];

// Example rows for the illustrative preview only.
const leads = [
  { name: "Varma Textiles", stage: "Hot", score: 92 },
  { name: "Konkan Logistics", stage: "New", score: 74 },
  { name: "Sahyadri Foods", stage: "Won", score: 88 },
];

export default function CrmShowcase({ index }: { index: string }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink-mute">({index}) Current product</p>
            <h2 className="display mt-6 text-5xl sm:text-6xl">
              Bloomgard <span className="italic text-sindoor">CRM</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              The first Bloomgard Enterprise product, already working for sales teams. It does the busywork of
              a CRM for you, so your team spends its time selling.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-sindoor"
            >
              Open Bloomgard CRM
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#15120e_0%,#18214a_60%,#2747d8_130%)] p-6 text-paper sm:p-8">
              <div className="jaali absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-paper/50">Pipeline</span>
                  <span className="eyebrow text-paper/40">Illustrative preview</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-paper/10">
                  {[
                    { label: "Open leads", value: "128" },
                    { label: "Hot this week", value: "17" },
                    { label: "Likely to close", value: "64%" },
                  ].map((m) => (
                    <div key={m.label} className="bg-neel-deep/70 p-4">
                      <p className="eyebrow text-[0.6rem] text-paper/50">{m.label}</p>
                      <p className="display mt-2 text-3xl text-marigold sm:text-4xl">{m.value}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-4 divide-y divide-paper/10 rounded-2xl bg-neel-deep/70">
                  {leads.map((l) => (
                    <li key={l.name} className="flex items-center gap-4 px-4 py-3.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/20 font-mono text-[0.65rem] text-paper/70">
                        {l.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm">{l.name}</span>
                      <span className="eyebrow hidden rounded-full border border-paper/15 px-2 py-0.5 text-[0.6rem] text-paper/70 sm:inline">
                        {l.stage}
                      </span>
                      <span className="flex w-24 items-center gap-2 sm:w-32">
                        <span className="h-1 flex-1 overflow-hidden rounded-full bg-paper/10">
                          <span className="block h-full rounded-full bg-marigold" style={{ width: `${l.score}%` }} />
                        </span>
                        <span className="w-6 text-right font-mono text-xs tabular-nums text-paper/70">{l.score}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
