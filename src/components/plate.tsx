import Link from "next/link";
import { caseStudies } from "@/data/portfolio";

type PlateProps = {
  image?: string;
  imageAlt?: string;
  plate?: { heading: string; rows: [string, string][] };
  /** omit to show the screenshot at its natural proportions (nothing cropped) */
  aspect?: string;
};

/**
 * A "plate": either a framed screenshot, or — when the product is an internal
 * system with no public UI to show — a typographic specification sheet. The
 * spec sheet is not a placeholder: it carries the facts a screenshot can't.
 */
export default function Plate({ image, imageAlt, plate, aspect }: PlateProps) {
  if (image) {
    return (
      <figure className="plate-frame shot-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="shot w-full object-cover object-top"
          style={aspect ? { aspectRatio: aspect } : undefined}
          loading="lazy"
        />
        <figcaption className="mono border-t border-rule px-3 py-1.5">
          {imageAlt}
        </figcaption>
      </figure>
    );
  }

  if (plate) {
    return (
      <div className="plate-sheet">
        <div className="border-b border-rule-strong px-4 py-2">
          <span className="eyebrow">( {plate.heading} )</span>
        </div>
        <div className="py-1.5">
          {plate.rows.map(([key, value]) => (
            <div className="plate-row" key={key}>
              <span className="plate-key">{key}</span>
              <span className="text-ink">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export function CaseStudyLink({ slug }: { slug: string }) {
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return null;
  return (
    <Link href={`/work/${study.slug}`} className="accent-link">
      Read the case study →
    </Link>
  );
}
