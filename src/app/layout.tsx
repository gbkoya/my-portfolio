import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Self-hosted so the build never depends on a font CDN (and so it works
   offline). Faculty Glyphic = display, Inter = body, IBM Plex Mono = labels. */
const display = localFont({
  src: "./fonts/faculty-glyphic-400-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/inter-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const mono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adekoya Gbolahan — Full-stack developer, Lagos",
    template: "%s — Adekoya Gbolahan",
  },
  description:
    "Full-stack developer in Lagos building the software schools run on: a student information system serving 10,000+ students, school management platforms, and competition software. React, Next.js, TypeScript, Laravel.",
  keywords: [
    "Adekoya Gbolahan",
    "full-stack developer Lagos",
    "React developer Nigeria",
    "Next.js developer",
    "Laravel developer",
    "frontend engineer",
  ],
  authors: [{ name: "Adekoya Gbolahan" }],
  creator: "Adekoya Gbolahan",
  openGraph: {
    type: "website",
    title: "Adekoya Gbolahan — Full-stack developer, Lagos",
    description:
      "I build the software schools run on. React, Next.js, TypeScript and Laravel — student records for 10,000+ learners, school platforms, and competition software.",
    siteName: "Adekoya Gbolahan",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adekoya Gbolahan — Full-stack developer, Lagos",
    description:
      "I build the software schools run on. React, Next.js, TypeScript and Laravel.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
