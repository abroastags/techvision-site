const NUMBERS = [
  { value: '2009',     label: 'Founded',                     note: 'Banani, Dhaka' },
  { value: '16',       label: 'Years on-call',               note: 'one rota, same team' },
  { value: '7',        label: 'Systems under management',    note: 'all green at last sync' },
  { value: '15',       label: 'Power Division organisations', note: 'one ERP, our platform' },
  { value: '99.997%',  label: 'Rolling uptime',              note: 'across systems we operate' },
  { value: '4 min',    label: 'Median P0 response',          note: 'pager → engineer' },
  { value: '2',        label: 'Offices',                     note: 'Dhaka HQ · New York' },
  { value: '24 / 7',   label: 'Coverage',                    note: 'no level-1 triage' },
];

export default function AboutNumbers() {
  return (
    <section className="tv-section about-numbers">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">02</span>
        <h2 className="tv-section-break__title">By the numbers</h2>
        <span className="tv-mono tv-section-break__meta">verifiable, not aspirational</span>
      </header>

      <div className="about-numbers__grid">
        {NUMBERS.map(n => (
          <div className="about-numbers__cell" key={n.label}>
            <div className="about-numbers__value">{n.value}</div>
            <div className="about-numbers__label">{n.label}</div>
            <div className="tv-mono about-numbers__note">{n.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
