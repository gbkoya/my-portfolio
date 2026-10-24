import SiteHeader, { SiteFooter } from "@/components/site-chrome";
import Hero from "@/components/hero";
import Ledger from "@/components/ledger";
import {
  Elsewhere,
  Method,
  StackStrip,
  TrackRecord,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <StackStrip />

        <section id="work" className="rail scroll-mt-24">
          <header className="section-head">
            <p className="eyebrow">( The work — four systems )</p>
            <h2 className="display max-w-[24ch] text-[clamp(1.65rem,3.1vw,2.6rem)]">
              Four things I built, and what changed because of them.
            </h2>
            <p className="body-copy">
              A university&apos;s student records, a school platform schools buy
              themselves, competition software for a games audience, and five
              client platforms. Open a row for the short version; the full
              write-up — problem, decisions, outcome — is one click further.
            </p>
          </header>
          <Ledger />
        </section>

        <section id="method" className="rail scroll-mt-24">
          <header className="section-head">
            <p className="eyebrow">( How I work )</p>
            <h2 className="display max-w-[26ch] text-[clamp(1.65rem,3.1vw,2.6rem)]">
              Read the system, model the data, ship in slices, then measure.
            </h2>
            <p className="body-copy">
              The order matters more than the tools. Most of the value is in the
              first two steps, and most of the arguing happens when they are
              skipped.
            </p>
          </header>
          <Method />
        </section>

        <section id="record" className="rail scroll-mt-24">
          <header className="section-head">
            <p className="eyebrow">( Track record )</p>
            <h2 className="display max-w-[24ch] text-[clamp(1.65rem,3.1vw,2.6rem)]">
              Where the four years went.
            </h2>
            <p className="body-copy">
              Same facts as the CV, in the order they happened. MIVA Open
              University and Archware run concurrently — one is the day job, the
              other is a long-running product relationship.
            </p>
          </header>
          <TrackRecord />
        </section>

        <section id="elsewhere" className="rail scroll-mt-24">
          <header className="section-head">
            <p className="eyebrow">( Elsewhere )</p>
            <h2 className="display max-w-[22ch] text-[clamp(1.65rem,3.1vw,2.6rem)]">
              The rest of it, and how to reach me.
            </h2>
          </header>
          <Elsewhere />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
