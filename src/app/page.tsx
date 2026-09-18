export default function Home() {
  return (
    <div className="portal-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Interdimensional Lost & Found home"
        >
          <span className="brand-mark" aria-hidden="true">
            ⌘
          </span>
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
              Report unusual objects that have arrived from other realities. We
              will identify, contain, and—when possible—return them.
            </p>
            <a className="primary-action" href="#report">
              Report an object
            </a>
          </div>

          <div
            className="portal-visual"
            aria-label="Portal status: stable"
            role="img"
          >
            <div className="portal-ring">
              <span aria-hidden="true">⌘</span>
            </div>
            <span className="portal-status">Portal status: stable</span>
          </div>
        </section>

        <section className="available" aria-labelledby="available-title">
          <h2 id="available-title">Available now</h2>
          <p>Start with a report, or look through the small public registry.</p>

          <div className="service-grid">
            <article className="service-card" id="report">
              <span className="service-icon" aria-hidden="true">
                !
              </span>
              <h3>Report a discovery</h3>
              <p>
                Tell us what you found and where it appeared. Do not touch
                objects that are humming.
              </p>
            </article>
            <article className="service-card" id="registry">
              <span className="service-icon" aria-hidden="true">
                ⌕
              </span>
              <h3>Browse recovered objects</h3>
              <p>See a short list of items currently held by the Department.</p>
            </article>
          </div>

          <section
            className="construction"
            aria-labelledby="construction-title"
          >
            <div className="construction-message">
              <h2 id="construction-title">
                More realities are under construction
              </h2>
              <p>
                Claims, object history, and containment updates will arrive
                later.
              </p>
            </div>
          </section>
        </section>
      </main>

      <footer>
        For immediate danger, contact local emergency containment.
      </footer>
    </div>
  );
}
