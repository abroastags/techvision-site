import { useState } from 'react';

const PRACTICE = [
  { n: '01', name: 'Mission-critical systems',
    bullets: ['ERP, transaction rails, regulatory engines', 'Architectures that survive the busy hour', 'Built once, run for a decade'],
    stack: 'Java · .NET · Postgres · Kafka' },
  { n: '02', name: 'Compliance & banking',
    bullets: ['AML alerting and case management', 'CRA evaluations & HMDA LAR generation', 'Bank-side deploys, audit-ready exports'],
    stack: 'Python · Snowflake · Airflow' },
  { n: '03', name: 'Blockchain infrastructure',
    bullets: ['Proxy voting infrastructure', 'NFT custody, royalties, secondary market', 'Settlement workflows for regulated entities'],
    stack: 'Solidity · Ethereum · Polygon · Hyperledger' },
  { n: '04', name: 'AI for hospitals',
    bullets: ['Imaging models for cardiology', 'PACS-side inference, no patient data leaves the hospital', 'On-prem GPU operations'],
    stack: 'PyTorch · DICOM · ONNX' },
  { n: '05', name: 'Government & civic',
    bullets: ['National-scale citizen apps', 'Interoperable transaction rails (Binimoy)', 'Power-utility ERP at 15 organisations'],
    stack: 'Go · gRPC · OAuth · ISO 20022' },
  { n: '06', name: 'On-call operations',
    bullets: ['Same engineers ship and operate', 'Median P0 response under four minutes', 'Single rota, follow-the-sun secondary'],
    stack: 'Prometheus · Grafana · PagerDuty · OpenTelemetry' },
];

export default function OpsPractice() {
  const [idx, setIdx] = useState(0);
  const active = PRACTICE[idx];

  return (
    <section className="ops-practice">
      <div className="ops-shell">
        <div className="ops-section-break">
          <span className="ops-eyebrow">
            <span className="ops-eyebrow__mark">▾</span>
            SECTION 04 · PRACTICE
          </span>
          <span className="tv-mono ops-section-break__meta">
            Six service lines · full lifecycle ownership
          </span>
        </div>

        <h2 className="ops-h2">What we ship, then run.</h2>

        <div className="ops-practice__layout">
          <div className="ops-practice__tabs">
            {PRACTICE.map((p, i) => (
              <button
                key={p.n}
                className={`ops-practice__tab ${i === idx ? 'is-active' : ''}`}
                onClick={() => setIdx(i)}
              >
                <span className="tv-mono ops-practice__num">{p.n}</span>
                <span className="ops-practice__name">{p.name}</span>
                <span className="ops-practice__arrow">→</span>
              </button>
            ))}
          </div>

          <div className="ops-practice__panel">
            <span className="tv-mono ops-practice__panel-eyebrow">
              ▾ {active.n} · {active.name.toUpperCase()}
            </span>
            <h3 className="ops-practice__panel-h">{active.name}</h3>
            <ul className="ops-practice__bullets">
              {active.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="ops-practice__tech">
              <span className="tv-mono ops-practice__tech-l">STACK</span>
              <span className="tv-mono">{active.stack}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
