import { useMemo, useState } from 'react';

const SYSTEMS = [
  { status: 'ok', name: 'Binimoy / IDTP',         sector: 'Fintech',    region: 'DAC', uptime: '99.99', p95: '142',  calls: '12,480' },
  { status: 'ok', name: 'Power Division ERP',     sector: 'Utility',    region: 'DAC', uptime: '99.95', p95: '88',   calls: '4,218' },
  { status: 'ok', name: 'DNCC citizen app',       sector: 'Civic',      region: 'DAC', uptime: '99.92', p95: '217',  calls: '19,200' },
  { status: 'ok', name: 'NCC cardiac AI',         sector: 'Healthcare', region: 'DAC', uptime: '99.97', p95: '1386', calls: '412' },
  { status: 'ok', name: 'Proxy voting · onchain', sector: 'Fintech',    region: 'NYC', uptime: '100',   p95: '374',  calls: '188' },
  { status: 'ok', name: 'MLB NFT infra',          sector: 'Sports',     region: 'NYC', uptime: '99.98', p95: '216',  calls: '904' },
  { status: 'ok', name: 'AML · CRA · HMDA',       sector: 'Banking',    region: 'NYC', uptime: '99.99', p95: '90',   calls: '6,810' },
];

const FILTERS = ['All', 'Fintech', 'Banking', 'Utility', 'Civic', 'Healthcare', 'Sports'];

export default function OpsSystems() {
  const [filter, setFilter] = useState('All');
  const rows = useMemo(
    () => filter === 'All' ? SYSTEMS : SYSTEMS.filter(s => s.sector === filter),
    [filter]
  );

  return (
    <section className="ops-systems">
      <div className="ops-shell">
        <div className="ops-section-break">
          <span className="ops-eyebrow">
            <span className="ops-eyebrow__mark">▾</span>
            SECTION 02 · SYSTEMS UNDER MANAGEMENT
          </span>
          <span className="tv-mono ops-section-break__meta">{rows.length} systems · last sync 19 s ago</span>
        </div>

        <h2 className="ops-h2">The work, as it runs.</h2>
        <p className="ops-lede">
          These are real systems we built, that we still operate. We name the client,
          the SLA, and the engineer who picks up if it breaks.
        </p>

        <div className="ops-systems__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`ops-chip ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="ops-systems__table">
          <div className="ops-row ops-row--head tv-mono">
            <span>STATUS</span>
            <span>SYSTEM</span>
            <span>SECTOR</span>
            <span>REGION</span>
            <span>UPTIME 30d</span>
            <span>p95</span>
            <span>CALLS/5m</span>
            <span />
          </div>
          {rows.map((r, i) => (
            <div className="ops-row ops-row--data" key={i}>
              <span>
                <span className="tv-status-dot tv-status-dot--ok" />
                <span className="tv-mono">OK</span>
              </span>
              <span className="ops-row__name">{r.name}</span>
              <span className="tv-mono ops-row__dim">{r.sector}</span>
              <span className="tv-mono ops-row__dim">{r.region}</span>
              <span className="tv-mono">{r.uptime}<span>%</span></span>
              <span className="tv-mono">{r.p95}<span>ms</span></span>
              <span className="tv-mono ops-row__dim">{r.calls}</span>
              <span className="ops-row__open tv-mono">OPEN →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
