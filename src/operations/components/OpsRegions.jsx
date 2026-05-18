const REGIONS = [
  { code: 'DAC', label: 'Dhaka HQ',   x: 600.91, y: 132.38, status: 'ok',   pulse: 2.2, primary: true,  uptime: '99.94', ping: '117' },
  { code: 'SIN', label: 'Singapore',  x: 630.67, y: 177.30, status: 'ok',   pulse: 2.5, primary: false, uptime: '99.94', ping: '117' },
  { code: 'NYC', label: 'New York',   x: 235.56, y:  98.58, status: 'ok',   pulse: 2.8, primary: false, uptime: '99.94', ping: '117' },
  { code: 'FRA', label: 'Frankfurt',  x: 419.29, y:  79.78, status: 'ok',   pulse: 3.1, primary: false, uptime: '99.94', ping: '117' },
  { code: 'LHR', label: 'London',     x: 399.71, y:  76.98, status: 'warn', pulse: 3.4, primary: false, uptime: '99.72', ping: '188' },
];

const COLOR = { ok: '#16A34A', warn: '#F59E0B', alert: '#DC2626' };
const HQ = REGIONS.find(r => r.primary);

export default function OpsRegions() {
  return (
    <section className="ops-regions">
      <div className="ops-shell">
        <div className="ops-section-break">
          <span className="ops-eyebrow">
            <span className="ops-eyebrow__mark">▾</span>
            SECTION 03 · COVERAGE
          </span>
          <span className="tv-mono ops-section-break__meta">
            Dhaka HQ · 5 regions · single on-call rota
          </span>
        </div>

        <div className="ops-regions__grid">
          <div className="ops-regions__map">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360" className="ops-map">
              <defs>
                <pattern id="opsdots" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.18)" />
                </pattern>
              </defs>
              <rect width="800" height="360" fill="url(#opsdots)" />
              <rect width="800" height="360" fill="none" stroke="rgba(255,255,255,0.08)" />
              <line x1="0" y1="180" x2="800" y2="180" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" />
              <line x1="400" y1="0" x2="400" y2="360" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" />

              {REGIONS.filter(r => !r.primary).map(r => (
                <line
                  key={`line-${r.code}`}
                  x1={HQ.x} y1={HQ.y} x2={r.x} y2={r.y}
                  stroke="rgba(142,168,220,0.35)" strokeWidth="0.8" strokeDasharray="2 3"
                />
              ))}

              {REGIONS.map(r => (
                <g key={r.code}>
                  <circle cx={r.x} cy={r.y} r="7" fill="none" stroke={COLOR[r.status]} strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values={r.primary ? '4;26;4' : '4;18;4'} dur={`${r.pulse}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0;0.7" dur={`${r.pulse}s`} repeatCount="indefinite" />
                  </circle>
                  <circle cx={r.x} cy={r.y} r={r.primary ? 5 : 3.5} fill={COLOR[r.status]} />
                  <text x={r.x + 10} y={r.y - 6} fill="rgba(255,255,255,0.85)" fontSize="10"
                        fontFamily="Geist Mono, monospace" letterSpacing="0.06em">{r.code}</text>
                  <text x={r.x + 10} y={r.y + 6} fill="rgba(255,255,255,0.5)" fontSize="9"
                        fontFamily="Geist Mono, monospace">{r.label}</text>
                </g>
              ))}
            </svg>
          </div>

          <div className="ops-regions__list">
            {REGIONS.map(r => (
              <div className="ops-region" key={r.code}>
                <div className="ops-region__head">
                  <span className={`tv-status-dot tv-status-dot--${r.status}`} />
                  <span className="ops-region__code tv-mono">{r.code}</span>
                  <span className="ops-region__label">{r.label}</span>
                </div>
                <div className="ops-region__metrics tv-mono">
                  <span>uptime <b>{r.uptime}%</b></span>
                  <span>ping <b>{r.ping}ms</b></span>
                </div>
              </div>
            ))}
            <div className="ops-region__note tv-mono">
              ▾ One rota · primary in DAC · secondary follows the sun
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
