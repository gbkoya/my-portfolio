/**
 * The one place that knows where the site lives.
 *
 * Nothing is hard-coded: the production domain is unknown while the site has no
 * custom domain yet, so the order is
 *   1. NEXT_PUBLIC_SITE_URL  — set this in Vercel once the real domain exists
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's own production domain
 *   3. VERCEL_URL — the specific deployment (previews get their own)
 *   4. localhost — development
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production.replace(/\/+$/, "")}`;

  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Adekoya Gbolahan — I build the software schools run on.",
};
