export default function Hero() {
  return (
    <section id="top" className="tv-hero">
      <div className="tv-hero__grid" aria-hidden="true" />
      <div className="tv-section">
        <div className="tv-eyebrow tv-hero__eyebrow">Dhaka · est. 2009 · still on-call</div>
        <h1 className="tv-hero__claim">
          Built like a country<br />runs on it.
        </h1>
        <div className="tv-hero__proof">
          <p>
            We built the ERP that runs <b>fifteen organisations under Bangladesh's Power Division.</b>{' '}
            We built <b>Binimoy</b>, the country's interoperable digital transaction platform.
            We run <b>proxy voting on blockchain</b> for the second-largest US shareholder
            management firm, and <b>compliance software</b> for banks covering AML, CRA, and HMDA.
          </p>
          <div className="tv-hero__actions">
            <a href="#work" className="tv-btn tv-btn--primary">See the work <span aria-hidden="true">→</span></a>
            <a href="#contact" className="tv-btn tv-btn--ghost">Talk to engineering</a>
          </div>
        </div>
      </div>
    </section>
  );
}
