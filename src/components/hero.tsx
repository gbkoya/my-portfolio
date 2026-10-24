import Link from "next/link";
import LagosClock from "@/components/lagos-clock";
import { identity, links, stack } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="rail pb-12 pt-10 md:pb-16 md:pt-16">
      <div className="grid gap-12 md:grid-cols-[1.55fr_1fr] md:gap-16">
        <div>
          <p className="eyebrow">( Portfolio )</p>
          <h1 className="display mt-6 text-[clamp(2.35rem,7vw,5.4rem)]">
            I build the software schools run on.
          </h1>
          <p className="lede mt-7">{identity.standfirst}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#work" className="btn btn-solid justify-center">
              See the work ↓
            </Link>
            <a href={links.cv.href} className="btn justify-center">
              Download CV
            </a>
          </div>
        </div>

        <aside className="plate-sheet h-fit self-start">
          <div className="flex items-center justify-between border-b border-rule-strong px-4 py-2">
            <span className="eyebrow">( Spec )</span>
            <span className="chip border-0 bg-transparent p-0">
              <span className="dot" aria-hidden />
              Available
            </span>
          </div>
          <dl>
            {[
              ["Name", identity.name],
              ["Role", identity.role],
              ["Base", identity.location],
            ].map(([k, v]) => (
              <div className="plate-row" key={k}>
                <dt className="plate-key">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
            <div className="plate-row">
              <dt className="plate-key">Local time</dt>
              <dd>
                <LagosClock className="font-mono text-ink" />
              </dd>
            </div>
            <div className="plate-row items-start">
              <dt className="plate-key pt-0.5">Core stack</dt>
              <dd className="leading-relaxed text-ink">
                {stack.slice(0, 6).join(" · ")}
              </dd>
            </div>
          </dl>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule-strong px-4 py-2.5">
            <a href={`mailto:${identity.email}`} className="accent-link">
              {identity.email}
            </a>
            <a
              href={links.linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              className="eyebrow hover:text-ink"
            >
              LinkedIn ↗
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
