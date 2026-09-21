import Image from "next/image";

import { PortalStatusLabels } from "./components/portal-status-labels";

export default function Home() {
  return (
    <div className="portal-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Interdimensional Lost & Found home"
        >
          <Image
            className="brand-mark"
            src="/icon.svg"
            width={30}
            height={30}
            alt=""
          />
          <span>Interdimensional Lost &amp; Found</span>
        </a>
        <p>Department of Interdimensional Affairs</p>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">Public service portal</p>
            <h1 id="page-title">
              Lost something?
              <br />
              Or found something
              <br />
              that is not from here?
            </h1>
            <p className="lead">
              This public service portal is being prepared to identify, contain,
              and—when possible—return unusual objects from other realities.
            </p>
          </div>

          <div className="portal-visual">
            <Image
              className="portal-art"
              src="/images/interdimensional-portal-transparent.webp"
              width={1024}
              height={1024}
              alt="A recovered object passing through an interdimensional portal"
              priority
            />
            <PortalStatusLabels />
          </div>
        </section>

        <section className="construction" aria-labelledby="construction-title">
          <div className="construction-message">
            <p className="eyebrow">Under construction</p>
            <h2 id="construction-title">
              Reporting and the public registry are not available yet
            </h2>
            <p>
              Object reports and recovered-object records will arrive in a later
              portal update.
            </p>
          </div>
        </section>
      </main>

      <footer>
        For immediate danger, contact local emergency containment.
      </footer>
    </div>
  );
}
