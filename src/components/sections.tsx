import { identity, links, method, stack, trackRecord, education } from "@/data/portfolio";

/** Hairline band of the stack, duplicated once for a seamless CSS marquee. */
export function StackStrip() {
  return (
    <section
      aria-label="Core stack"
      className="marquee-band overflow-hidden border-y border-rule bg-paper-2/70"
    >
      <div className="marquee-mask">
        <div className="marquee-track items-center py-3">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center whitespace-nowrap px-3"
              aria-hidden={copy === 1}
            >
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="eyebrow stack-item text-[0.75rem] tracking-[0.14em] text-ink-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <div className="grid gap-x-16 gap-y-10 py-8 md:grid-cols-2">
      {method.map((item) => (
        <div key={item.step} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span className="ledger-index">{item.step}</span>
          <div>
            <h3 className="font-display text-[1.4rem] leading-snug">
              {item.title}
            </h3>
            <p className="body-copy mt-2 max-w-[46ch]">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrackRecord() {
  return (
    <div className="py-8">
      <ul>
        {trackRecord.map((job) => (
          <li
            key={job.company}
            className="grid gap-x-8 gap-y-1 border-t border-rule py-5 md:grid-cols-[10rem_1fr_1.4fr]"
          >
            <span className="mono md:pt-1">{job.period}</span>
            <div>
              <h3 className="font-display text-[1.3rem] leading-snug">
                {job.company}
              </h3>
              <p className="mono mt-1 text-ink">{job.role}</p>
            </div>
            <p className="body-copy text-[0.9375rem]">{job.note}</p>
          </li>
        ))}
      </ul>
      <div className="grid gap-x-8 gap-y-1 border-t border-rule py-5 md:grid-cols-[10rem_1fr_1.4fr]">
        <span className="mono md:pt-1">{education.period}</span>
        <div>
          <h3 className="font-display text-[1.3rem] leading-snug">
            {education.degree}
          </h3>
          <p className="mono mt-1 text-ink">{education.school}</p>
        </div>
        <p className="body-copy text-[0.9375rem]">
          Not a computer science degree — which is exactly why the data models
          get drawn out on paper first.
        </p>
      </div>
    </div>
  );
}

export function Elsewhere() {
  return (
    <div className="grid gap-12 py-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
      <div>
        <p className="lede">
          Before I wrote software I drew it. Two years at Teesas, 50+ finished
          illustrations for children&apos;s lessons and a lot of storyboarding —
          which is where the habit of explaining things visually comes from.
          I still illustrate and write outside work, and that side of me lives
          on{" "}
          <a
            href={links.instagram.href}
            target="_blank"
            rel="noreferrer noopener"
            className="quiet-link"
          >
            Instagram
          </a>
          .
        </p>
        <p className="body-copy mt-5">{identity.freelanceNote}</p>
      </div>

      <ul className="divide-y divide-rule border-y border-rule">
        {[
          { label: links.github.label, handle: links.github.handle, href: links.github.href, note: "Code and experiments" },
          { label: links.linkedin.label, handle: links.linkedin.handle, href: links.linkedin.href, note: "Full work history" },
          { label: links.cv.label, handle: "One page, PDF", href: links.cv.href, note: "The short version" },
          { label: "Email", handle: identity.email, href: `mailto:${identity.email}`, note: "Fastest way in" },
        ].map((row) => (
          <li key={row.label}>
            <a
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={row.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="group grid grid-cols-[6rem_1fr_auto] items-baseline gap-4 py-4"
            >
              <span className="eyebrow group-hover:text-ink">{row.label}</span>
              <span className="truncate font-mono text-[0.8125rem] text-ink">
                {row.handle}
              </span>
              <span className="mono hidden text-right md:block">{row.note}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
