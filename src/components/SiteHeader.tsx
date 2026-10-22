"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_EMAIL, divisions } from "@/lib/divisions";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-ivory/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="Bloomgard home" className="shrink-0">
          <Image src="/wordmark.png" alt="Bloomgard" width={896} height={171} priority className="h-7 w-auto sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {divisions.map((d) => {
            const active = pathname === `/${d.slug}`;
            return (
              <Link
                key={d.slug}
                href={`/${d.slug}`}
                className={`rounded-full px-3.5 py-1.5 text-[0.84rem] transition-colors ${
                  active ? "bg-ink text-paper" : "text-ink-soft hover:text-ink hover:bg-ink/5"
                }`}
              >
                {d.name}
              </Link>
            );
          })}
        </nav>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden rounded-full bg-ink px-5 py-2 text-[0.84rem] font-medium text-paper transition-colors hover:bg-sindoor lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line px-4 pb-8 pt-4 lg:hidden">
          <ul className="divide-y divide-line">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/${d.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-3xl">{d.name}</span>
                  <span className="eyebrow text-ink-mute">{d.index}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
