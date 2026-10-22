import DivisionGlyph from "@/components/DivisionGlyph";
import type { DivisionSlug } from "@/lib/divisions";

// A woven belt of Indian motifs: buta (paisley), rangoli star, chakra and lotus, joined by
// small jaali diamonds, with the division's glyph set in a medallion like a buckle.
const IVORY = "#fbfaf7";
const MARIGOLD = "#e5a03a";
const BLUE = "#7f9bff";

const buta = (c: string) =>
  `<g stroke="${c}"><path d="M2 20C-15 20-20 3-12-9C-6-18 8-20 13-12C16-6 11 2 5 0C1-1 1-6 5-7"/><path d="M1 13C-9 13-12 3-7-4"/><circle cx="-4" cy="6" r="1.6" fill="${c}" stroke="none"/></g>`;

const lotus = (c: string) =>
  `<g stroke="${c}"><path d="M0-18C7-10 7 4 0 12C-7 4-7-10 0-18Z"/><path d="M0 12C-4 2-13-6-20-6C-18 4-10 12 0 12Z"/><path d="M0 12C4 2 13-6 20-6C18 4 10 12 0 12Z"/><path d="M-15 17H15"/></g>`;

const star = (c: string) =>
  `<g stroke="${c}"><rect x="-12" y="-12" width="24" height="24"/><rect x="-12" y="-12" width="24" height="24" transform="rotate(45)"/><circle r="5"/><circle r="1.6" fill="${c}" stroke="none"/></g>`;

const chakra = (c: string) =>
  `<g stroke="${c}"><circle r="16"/><circle r="4"/>${Array.from(
    { length: 8 },
    (_, i) => `<line y1="-5" y2="-15" transform="rotate(${i * 45})"/>`,
  ).join("")}${Array.from(
    { length: 8 },
    (_, i) => `<circle cy="-19.5" r="1.2" fill="${c}" stroke="none" transform="rotate(${i * 45 + 22.5})"/>`,
  ).join("")}</g>`;

const diamond = (c: string) => `<g stroke="${c}"><path d="M0-5 5 0 0 5-5 0Z"/></g>`;

const at = (x: number, y: number, s: number, body: string) =>
  `<g transform="translate(${x} ${y}) scale(${s})">${body}</g>`;

// One row of four motifs, 64px tall: the belt's repeat.
const W = 256;
const H = 64;
const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><g fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${[
  at(32, 32, 0.95, buta(IVORY)),
  at(64, 32, 1, diamond(MARIGOLD)),
  at(96, 32, 0.95, star(MARIGOLD)),
  at(128, 32, 1, diamond(IVORY)),
  at(160, 32, 0.9, chakra(BLUE)),
  at(192, 32, 1, diamond(MARIGOLD)),
  at(224, 33, 0.95, lotus(IVORY)),
  at(256, 32, 1, diamond(IVORY)),
  at(0, 32, 1, diamond(IVORY)),
].join("")}</g></svg>`;

const tileUrl = `url("data:image/svg+xml,${encodeURIComponent(tile)}")`;

export default function MotifBand({ slug }: { slug: DivisionSlug }) {
  return (
    <section className="relative isolate z-10 my-14 sm:my-20" aria-hidden="true">
      <div className="relative bg-ink py-3">
        {/* Stitched edges */}
        <div className="absolute inset-x-0 top-1.5 border-t border-dashed border-marigold/40" />
        <div className="absolute inset-x-0 bottom-1.5 border-b border-dashed border-marigold/40" />
        <div
          className="animate-motif-drift h-16 w-full opacity-80"
          style={{ backgroundImage: tileUrl, backgroundSize: `${W}px ${H}px`, backgroundPosition: "0 center" }}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-marigold/40 bg-ink shadow-[0_0_0_10px_#15120e,0_0_0_11px_rgba(229,160,58,0.25)] sm:h-36 sm:w-36">
        <DivisionGlyph slug={slug} className="h-16 w-16 text-marigold sm:h-20 sm:w-20" />
      </div>
    </section>
  );
}
