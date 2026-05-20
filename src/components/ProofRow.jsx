const clients = [
  { name: 'Bangladesh Bank', note: 'Binimoy' },
  { name: 'Power Division',  note: 'ERP · 15 orgs' },
  { name: 'DNCC',                 note: 'citizen app' },
  { name: 'NCC',                  note: 'imaging AI' },
  { name: 'MLB franchise',   note: 'NFT infra' },
  { name: 'US Banks (4)', note: 'AML/CRA/HMDA' },
];

export default function ProofRow() {
  return (
    <section className="tv-proof">
      <div className="tv-section tv-proof__inner">
        <div className="tv-eyebrow">Trusted from Dhaka to Wall Street</div>
        <div className="tv-proof__grid">
          {clients.map((c, i) => (
            <div className="tv-proof__cell" key={i}>
              <div className="tv-proof__name">{c.name}</div>
              <div className="tv-mono tv-proof__note">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
