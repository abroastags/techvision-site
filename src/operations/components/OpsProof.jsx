const CLIENTS = [
  { id: '001', name: 'Binimoy',           note: 'IDTP · Bangladesh' },
  { id: '002', name: 'Power Division',    note: 'ERP · 15 orgs' },
  { id: '003', name: 'DNCC',              note: 'Citizen app · Dhaka North' },
  { id: '004', name: 'NCC',               note: 'AI imaging · cardiac' },
  { id: '005', name: 'Shareholder Co.',   note: 'Proxy voting · on chain' },
  { id: '006', name: 'MLB franchise',     note: 'NFT infrastructure' },
  { id: '007', name: 'US bank · regional', note: 'AML · CRA · HMDA' },
  { id: '008', name: 'US bank · regional', note: 'AML · CRA · HMDA' },
  { id: '009', name: 'US bank · regional', note: 'AML · CRA · HMDA' },
  { id: '010', name: 'US bank · regional', note: 'AML · CRA · HMDA' },
  { id: '011', name: 'US bank · regional', note: 'AML · CRA · HMDA' },
  { id: '012', name: 'US bank · regional', note: 'AML · CRA · HMDA' },
];

export default function OpsProof() {
  return (
    <section className="ops-proof">
      <div className="ops-shell">
        <div className="ops-section-break">
          <span className="ops-eyebrow">
            <span className="ops-eyebrow__mark">▾</span>
            SECTION 06 · CLIENTS
          </span>
          <span className="tv-mono ops-section-break__meta">
            Governments · banks · utilities · hospitals · sports
          </span>
        </div>
        <div className="ops-proof__grid">
          {CLIENTS.map(c => (
            <div className="ops-proof__cell" key={c.id}>
              <span className="tv-mono ops-proof__id">CL-{c.id}</span>
              <div className="ops-proof__name">{c.name}</div>
              <div className="ops-proof__note tv-mono">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
