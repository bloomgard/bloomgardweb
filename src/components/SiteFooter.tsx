import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, CRM_URL, DOCS_URL, divisions } from "@/lib/divisions";
import MumbaiClock from "@/components/MumbaiClock";

export default function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-neel-deep text-paper">
      <div className="jaali absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="display text-5xl sm:text-6xl">
              Built in Mumbai.
              <br />
              <span className="italic text-marigold">Made for the world.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-6 lg:justify-items-end">
            <div>
              <p className="eyebrow mb-5 text-paper/45">Divisions</p>
              <ul className="space-y-3 text-[0.95rem]">
                {divisions.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/${d.slug}`} className="text-paper/80 transition-colors hover:text-paper">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5 text-paper/45">Company</p>
              <ul className="space-y-3 text-[0.95rem]">
                <li>
                  <a href={CRM_URL} target="_blank" rel="noopener noreferrer" className="text-paper/80 transition-colors hover:text-paper">
                    Bloomgard CRM ↗
                  </a>
                </li>
                <li>
                  <Link href="/#vision" className="text-paper/80 transition-colors hover:text-paper">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-paper/80 transition-colors hover:text-paper">
                    Careers
                  </Link>
                </li>
                <li>
                  <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="text-paper/80 transition-colors hover:text-paper">
                    Docs ↗
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-paper/80 transition-colors hover:text-paper">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/15 py-6 text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">© {new Date().getFullYear()} Bloomgard Group</p>
          <p className="eyebrow flex flex-wrap gap-x-5 gap-y-1">
            <span>Mumbai</span>
            <span>19.0760° N, 72.8777° E</span>
            <MumbaiClock />
          </p>
        </div>

        <div className="pointer-events-none mt-4 pb-10 select-none" aria-hidden="true">
          <Image
            src="/wordmark.png"
            alt=""
            width={896}
            height={171}
            className="h-auto w-full opacity-[0.08] invert"
          />
        </div>
      </div>
    </footer>
  );
}
