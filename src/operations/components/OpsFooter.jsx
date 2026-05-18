import wordmarkWhite from '/assets/techvision-wordmark-white.png';

const COLS = [
  { h: 'WORK',     items: ['Binimoy', 'Power Division ERP', 'DNCC', 'NCC imaging', 'Proxy voting', 'MLB NFT', 'Bank compliance'] },
  { h: 'PRACTICE', items: ['Mission-critical', 'Compliance', 'Blockchain', 'Hospital AI', 'Government', 'On-call ops'] },
  { h: 'COMPANY',  items: ['About', 'Engineering', 'Careers', 'Press', 'Contact'] },
  { h: 'OFFICES',  items: ['Dhaka HQ', 'New York', 'Singapore'] },
];

export default function OpsFooter() {
  return (
    <footer className="ops-footer">
      <div className="ops-shell">
        <div className="ops-footer__top">
          <div className="ops-footer__brand">
            <img src={wordmarkWhite} alt="techvision" />
          </div>
          <h2 className="ops-footer__claim">
            TechVision builds the kind of software that can't go down.
          </h2>
        </div>
        <div className="ops-footer__cols">
          {COLS.map(c => (
            <div key={c.h}>
              <div className="tv-mono ops-footer__h">▾ {c.h}</div>
              <ul>
                {c.items.map(i => <li key={i}><a href="#">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="ops-footer__base tv-mono">
          <span>© 2026 TechVision · Built in Dhaka, run from Dhaka</span>
          <span>v26.05 · build 33139 · all systems running · last deploy 03:14:08 UTC+6</span>
        </div>
      </div>
    </footer>
  );
}
