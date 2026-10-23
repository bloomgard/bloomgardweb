"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import DivisionGlyph from "@/components/DivisionGlyph";
import { CONTACT_EMAIL, DOCS_URL, divisions } from "@/lib/divisions";

const linkClass = "rounded-full px-3.5 py-1.5 text-[0.84rem] transition-colors";
const idle = "text-ink-soft hover:text-ink hover:bg-ink/5";
const current = "bg-ink text-paper";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onDivision = divisions.some((d) => pathname === `/${d.slug}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-ivory/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link href="/" aria-label="Bloomgard home" className="shrink-0 justify-self-start">
          <Image src="/wordmark.png" alt="Bloomgard" width={896} height={171} priority className="h-7 w-auto sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          <Link href="/#about" className={`${linkClass} ${idle}`}>
            About us
          </Link>

          <div className="group relative">
            <Link
              href="/#divisions"
              className={`${linkClass} inline-flex items-center gap-1 ${onDivision ? current : idle}`}
              aria-haspopup="true"
            >
              Divisions
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-paper p-2 shadow-[0_1px_2px_rgba(21,18,14,0.06),0_16px_40px_-12px_rgba(21,18,14,0.2)]">
                {divisions.map((d) => {
                  const active = pathname === `/${d.slug}`;
                  return (
                    <Link
                      key={d.slug}
                      href={`/${d.slug}`}
                      className={`group/item flex items-start gap-3 rounded-xl p-3 transition-colors ${
                        active ? "bg-sky" : "hover:bg-sky/70"
                      }`}
                    >
                      <DivisionGlyph
                        slug={d.slug}
                        className="mt-0.5 h-8 w-8 shrink-0 text-ink/70 transition-colors group-hover/item:text-blue"
                      />
                      <span className="min-w-0">
                        <span className="block text-[0.9rem] font-medium text-ink">{d.name}</span>
                        <span className="mt-0.5 block text-[0.78rem] leading-snug text-ink-soft">{d.summary}</span>
                      </span>
                    </Link>
                  );
                })}
                <Link
                  href="/#divisions"
                  className="flex items-center justify-between rounded-xl bg-ink p-3 text-paper transition-colors hover:bg-blue"
                >
                  <span className="text-[0.9rem] font-medium">All divisions</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#vision" className={`${linkClass} ${idle}`}>
            Vision
          </Link>
          <Link href="/careers" className={`${linkClass} ${pathname === "/careers" ? current : idle}`}>
            Careers
          </Link>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} ${idle} inline-flex items-center gap-1`}
          >
            Docs
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden justify-self-end rounded-full bg-ink px-5 py-2 text-[0.84rem] font-medium text-paper transition-colors hover:bg-sindoor md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line px-4 pb-8 pt-2 md:hidden">
          <ul className="divide-y divide-line">
            <li>
              <Link href="/#about" onClick={close} className="block py-4 display text-3xl">
                About us
              </Link>
            </li>
            <li className="py-4">
              <Link href="/#divisions" onClick={close} className="display text-3xl">
                Divisions
              </Link>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {divisions.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/${d.slug}`} onClick={close} className="flex items-center gap-2 py-1 text-ink-soft">
                      <DivisionGlyph slug={d.slug} className="h-5 w-5 text-ink/60" />
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/#vision" onClick={close} className="block py-4 display text-3xl">
                Vision
              </Link>
            </li>
            <li>
              <Link href="/careers" onClick={close} className="block py-4 display text-3xl">
                Careers
              </Link>
            </li>
            <li>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 display text-3xl"
              >
                Docs <ArrowUpRight className="h-5 w-5 text-ink-mute" />
              </a>
            </li>
          </ul>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
