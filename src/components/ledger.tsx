"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Plate from "@/components/plate";
import { caseStudies } from "@/data/portfolio";

/**
 * The ledger: four case studies as an index that opens in place. Each row
 * carries a headline figure and a piece of visual evidence, so the page can be
 * scanned without opening anything.
 */
export default function Ledger() {
  const [open, setOpen] = useState<string | null>(caseStudies[0]?.slug ?? null);
  const reduced = useReducedMotion();

  return (
    <div className="mt-2">
      <div className="hidden items-end justify-between border-t border-ink py-2 md:flex">
        <span className="eyebrow">( Index )</span>
        <span className="eyebrow">Outcome · Year · Open a row</span>
      </div>

      <ul>
        {caseStudies.map((study) => {
          const isOpen = open === study.slug;
          const panelId = `case-${study.slug}`;

          return (
            <li
              key={study.slug}
              className={`ledger-row transition-colors duration-300 ${
                isOpen ? "bg-paper-2/60" : ""
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : study.slug)}
                className="group grid w-full grid-cols-[2.25rem_1fr] items-start gap-x-4 gap-y-4 py-5 text-left md:grid-cols-[2.75rem_minmax(0,1fr)_7.5rem_8rem] md:gap-x-8"
              >
                <span className="ledger-index">{study.index}</span>

                <span className="min-w-0">
                  <span
                    className={`ledger-title block transition-colors duration-200 ${
                      isOpen ? "text-accent" : "group-hover:text-accent"
                    }`}
                  >
                    {study.title}
                  </span>
                  <span className="mono mt-1.5 block">
                    {study.client} · {study.role}
                  </span>
                  <span className="mono mt-1.5 block text-ink-soft/90">
                    {study.spec}
                  </span>
                </span>

                {/* visual evidence: a screenshot, or the headline figure */}
                <span className="col-span-2 md:col-span-1">
                  {study.image ? (
                    <span className="plate-frame shot-wrap block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={study.image}
                        alt={study.imageAlt ?? ""}
                        className="shot h-[76px] w-full object-cover object-top"
                      />
                    </span>
                  ) : (
                    <span className="flex h-[76px] items-center justify-center border border-rule bg-paper-2 px-2">
                      <span className="font-display text-[1.35rem] leading-none text-ink">
                        {study.metrics[0]?.value}
                      </span>
                    </span>
                  )}
                </span>

                <span className="col-span-2 flex items-center justify-between gap-4 md:col-span-1 md:flex-col md:items-end md:gap-2.5">
                  <span className="font-display text-[1.25rem] leading-none text-ink">
                    {study.metrics[1]?.value ?? study.year}
                  </span>
                  <span className="mono">{study.year}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center border border-rule md:mt-0.5">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      aria-hidden
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : "text-ink-soft"
                      }`}
                    >
                      <path
                        d="M5.5 .6v9.8M.6 5.5h9.8"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fill="none"
                      />
                    </svg>
                  </span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    key="panel"
                    initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={
                      reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }
                    }
                    exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-8 md:grid-cols-[1.05fr_1fr] md:gap-12">
                      <Plate
                        image={study.image}
                        imageAlt={study.imageAlt}
                        plate={study.plate}
                      />

                      <div>
                        <p className="lede">{study.summary}</p>

                        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-rule pt-5 sm:grid-cols-3">
                          {study.metrics.map((m) => (
                            <div key={m.label}>
                              <dt className="metric-value text-ink">{m.value}</dt>
                              <dd className="mono mt-1.5 leading-snug">
                                {m.label}
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

                        <div className="mt-6 flex flex-wrap items-center gap-5">
                          <Link
                            href={`/work/${study.slug}`}
                            className="accent-link"
                          >
                            Read the case study →
                          </Link>
                          {study.live && (
                            <a
                              href={study.live.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="eyebrow hover:text-ink"
                            >
                              {study.live.label} ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
        <li className="border-t border-ink" />
      </ul>
    </div>
  );
}
