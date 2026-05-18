const items = [
  'binimoy.gov.bd · 200 OK · 47ms',
  'power-erp-dse · 15/15 nodes healthy',
  'proxy-vote-prod · last block 1 sec ago',
  'dncc-app · 4.1M sessions / mo',
  'ncc-imaging · model v2.3 · p95 1.2s',
  'compliance-aml · 0 stale alerts',
  '▾ we answer the phone at 3am',
];

export default function StatusTicker() {
  const doubled = [...items, ...items];
  return (
    <div className="tv-ticker" aria-hidden="true">
      <div className="tv-ticker__track">
        {doubled.map((t, i) => (
          <span key={i} className="tv-ticker__item">
            <span className="tv-status-dot tv-status-dot--ok" />
            <span className="tv-mono">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
