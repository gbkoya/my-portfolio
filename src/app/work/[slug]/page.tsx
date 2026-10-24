import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader, { SiteFooter } from "@/components/site-chrome";
import Plate from "@/components/plate";
import { caseStudies, caseStudyBySlug } from "@/data/portfolio";
import { ogImage, siteUrl } from "@/lib/site-url";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = caseStudyBySlug(params.slug);
  if (!study) return { title: "Case study" };
  return {
    title: `${study.title} — ${study.client}`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      title: `${study.title} — ${study.client}`,
      description: study.summary,
      url: `${siteUrl}/work/${study.slug}`,
      images: [ogImage],
    },
  };
}

/** Two-column editorial section: a full-width rule, then label + content. */
function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 grid gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
      <div className="border-t border-ink pt-3 lg:col-span-2" aria-hidden />
      <h2 className="eyebrow">( {label} )</h2>
      <div>{children}</div>
    </section>
  );
}

export default function CaseStudyPage({ params }: Params) {
  const study = caseStudyBySlug(params.slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug);
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = others[(index - 1 + others.length) % others.length];

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="rail pb-4 pt-10 md:pt-14">
          <Link href="/#work" className="eyebrow hover:text-ink">
            ← Back to the index
          </Link>

          <header className="mt-6 border-t border-ink pt-6">
            <p className="eyebrow">
              ( Case study {study.index} — {study.year} )
            </p>
            <h1 className="display mt-5 max-w-[22ch] text-[clamp(2.1rem,6vw,4.4rem)]">
              {study.title}
            </h1>
            <p className="lede mt-6">{study.summary}</p>

            <dl className="mt-9 grid gap-x-10 gap-y-5 border-t border-rule pt-5 sm:grid-cols-3">
              {[
                ["Client", study.client],
                ["Role", study.role],
                ["Period", study.period],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-1.5 font-mono text-[0.8125rem] leading-relaxed text-ink">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {study.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </header>

          <div className="mt-10 md:max-w-[46rem]">
            <Plate
              image={study.image}
              imageAlt={study.imageAlt}
              plate={study.plate}
            />
          </div>

          <Section label="The problem">
            <div className="space-y-5">
              {study.problem.map((p) => (
                <p key={p} className="lede">
                  {p}
                </p>
              ))}
            </div>
          </Section>

          <Section label="What I built">
            <ul className="space-y-7">
              {study.built.map((item, i) => (
                <li key={item.lead} className="grid grid-cols-[2.25rem_1fr] gap-4">
                  <span className="ledger-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.35rem] leading-snug">
                      {item.lead}
                    </h3>
                    <p className="body-copy mt-2 max-w-[52ch]">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            {study.alsoBuilt && (
              <div className="plate-sheet mt-9">
                <div className="border-b border-rule-strong px-4 py-2">
                  <span className="eyebrow">( Also in this stretch )</span>
                </div>
                {study.alsoBuilt.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-1 gap-1 border-b border-dashed border-rule px-4 py-2.5 last:border-b-0 sm:grid-cols-[12rem_1fr]"
                  >
                    <span className="font-mono text-[0.8125rem] text-ink">
                      {row.name}
                    </span>
                    <span className="mono">{row.note}</span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section label="The outcome">
            <dl className="grid gap-x-10 gap-y-6 border-b border-rule pb-7 sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="metric-value text-ink">{m.value}</dt>
                  <dd className="mono mt-2 leading-snug">{m.label}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-7 space-y-4">
              {study.outcome.map((o) => (
                <li key={o} className="flex gap-4">
                  <span
                    className="mt-2.5 h-px w-6 flex-none bg-accent"
                    aria-hidden
                  />
                  <span className="body-copy max-w-[58ch] text-ink">{o}</span>
                </li>
              ))}
            </ul>

            {study.live && (
              <p className="mt-8">
                <a
                  href={study.live.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="accent-link"
                >
                  {study.live.label} ↗
                </a>
              </p>
            )}
          </Section>
        </article>

        <nav
          aria-label="Other case studies"
          className="rail mt-14 border-t border-ink py-8"
        >
          <p className="eyebrow">( Next case study )</p>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-3 flex flex-wrap items-baseline justify-between gap-3"
          >
            <span className="ledger-title group-hover:text-accent">
              {next.title}
            </span>
            <span className="mono">
              {next.index} · {next.client}
            </span>
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
