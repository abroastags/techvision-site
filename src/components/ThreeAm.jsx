export default function ThreeAm() {
  return (
    <section id="ops" className="tv-3am">
      <div className="tv-section">
        <header className="tv-section-break tv-section-break--inverse">
          <span className="tv-mono tv-section-break__num">03</span>
          <h2 className="tv-section-break__title">Operations</h2>
          <span className="tv-mono tv-section-break__meta">on-call · 24 / 7 · same team that shipped it</span>
        </header>

        <h2 className="tv-3am__claim">We answer the phone at 3am.</h2>

        <div className="tv-3am__cols">
          <div className="tv-3am__col">
            <div className="tv-eyebrow tv-3am__eyebrow">Lifecycle</div>
            <p>Requirements, architecture, code, QA, deployment, and the on-call shift when something breaks at 3am — one team, one P&amp;L.</p>
          </div>
          <div className="tv-3am__col">
            <div className="tv-eyebrow tv-3am__eyebrow">On-call</div>
            <p>Pager rotates through the engineers who shipped the system. No level-1 triage layer. Median time to first response is under four minutes.</p>
          </div>
          <div className="tv-3am__col">
            <div className="tv-eyebrow tv-3am__eyebrow">Where we sit</div>
            <p>Dhaka is on UTC+6. We cover overnight US-East from 6pm Dhaka onwards — and we are awake when the lights would otherwise go out.</p>
          </div>
        </div>

        <div className="tv-3am__phone">
          <span className="tv-mono">Pager · </span>
          <span className="tv-3am__num">+880&nbsp;2&nbsp;—&nbsp;answered&nbsp;24/7</span>
        </div>
      </div>
    </section>
  );
}
