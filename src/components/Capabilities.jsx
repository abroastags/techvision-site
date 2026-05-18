const rows = [
  { n: '01', name: 'Enterprise platforms',
    bullets: ['ERP across power utilities, governments, and large NGOs', 'On-prem deployments where required'],
    tech: 'Java · Postgres · Spring · Kafka' },
  { n: '02', name: 'National infrastructure',
    bullets: ['Interoperable transaction rails (Binimoy)', 'Citizen apps for municipalities'],
    tech: 'Go · gRPC · OAuth · ISO 20022' },
  { n: '03', name: 'Banking compliance',
    bullets: ['AML alerting and case management', 'CRA evaluations & HMDA LAR generation'],
    tech: 'Python · Snowflake · Airflow' },
  { n: '04', name: 'Blockchain & settlement',
    bullets: ['Proxy voting infrastructure', 'NFT custody, royalties, secondary'],
    tech: 'Solidity · Ethereum · Polygon · Hyperledger' },
  { n: '05', name: 'Clinical AI',
    bullets: ['Imaging models for cardiology', 'PACS-side inference, no patient data leaves the hospital'],
    tech: 'PyTorch · DICOM · ONNX' },
];

export default function Capabilities() {
  return (
    <section id="do" className="tv-section tv-caps">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">02</span>
        <h2 className="tv-section-break__title">What we do</h2>
        <span className="tv-mono tv-section-break__meta">five practices · one team · one shift</span>
      </header>

      <div className="tv-caps__list">
        {rows.map(r => (
          <div className="tv-caps__row" key={r.n}>
            <span className="tv-mono tv-caps__num">{r.n}</span>
            <div className="tv-caps__body">
              <h3 className="tv-caps__name">{r.name}</h3>
              <ul className="tv-caps__bullets">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="tv-caps__tech tv-mono">{r.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
