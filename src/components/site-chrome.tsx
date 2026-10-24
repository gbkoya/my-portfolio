import Link from "next/link";
import LagosClock from "@/components/lagos-clock";
import { identity, links } from "@/data/portfolio";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Method", href: "/#method" },
  { label: "Track record", href: "/#record" },
  { label: "Elsewhere", href: "/#elsewhere" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <div className="rail flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-3">
        <Link href="/" className="order-1 flex items-baseline gap-2.5">
          <span className="font-display text-[1.35rem] leading-none tracking-tight">
            {identity.firstName} {identity.lastName}
          </span>
          <span className="eyebrow hidden sm:inline">( full-stack )</span>
        </Link>

        <div className="order-2 flex items-center gap-4">
          <LagosClock className="mono hidden lg:inline" />
          <a href={`mailto:${identity.email}`} className="accent-link">
            Email
          </a>
        </div>

        <nav aria-label="Sections" className="order-3 w-full md:order-2 md:w-auto">
          <ul className="-mx-1 flex items-center gap-5 overflow-x-auto whitespace-nowrap px-1 md:overflow-visible">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="eyebrow hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-20 bg-night text-paper-2">
      <div className="rail grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <p className="eyebrow text-[#a8a294]">( Contact )</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.6rem)] text-paper-2">
            Send me the problem,
            <br />
            not the brief.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-[#c3bdae]">
            {identity.available}. If you are hiring, the CV below is the short
            version of this page — the same work, one page, no scrolling.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${identity.email}`}
              className="btn border-paper-2 text-[0.8125rem] normal-case tracking-normal text-paper-2 hover:bg-paper-2 hover:text-night"
            >
              {identity.email}
            </a>
            <a
              href={links.cv.href}
              className="btn border-[#4a453a] text-paper-2 hover:bg-paper-2 hover:text-night"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

        <div className="grid gap-8 self-end">
          <dl className="grid grid-cols-[7rem_1fr] gap-y-2 text-[0.8125rem]">
            <dt className="eyebrow text-[#8f8a7d]">Base</dt>
            <dd className="font-mono">{identity.location}</dd>
            <dt className="eyebrow text-[#8f8a7d]">Local time</dt>
            <dd>
              <LagosClock className="font-mono" />
            </dd>
            <dt className="eyebrow text-[#8f8a7d]">Phone</dt>
            <dd className="font-mono">{identity.phone}</dd>
          </dl>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "GitHub", href: links.github.href },
              { label: "LinkedIn", href: links.linkedin.href },
              { label: "Instagram", href: links.instagram.href },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow text-[#c3bdae] hover:text-paper-2"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#6f6a5e]">
            Designed and built by hand — Next.js, no template
          </p>
        </div>
      </div>
    </footer>
  );
}
