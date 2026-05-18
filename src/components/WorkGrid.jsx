import { useState, useMemo } from 'react';
import CaseCard from './CaseCard.jsx';

const CASES = [
  { id: 1, tag: 'Power Division', sector: 'erp', name: 'Power Sector ERP', claim: 'ERP across fifteen organisations.',
    blurb: "Asset management, finance and HR on one platform — every utility under Bangladesh's Power Division.",
    region: 'BD', year: '2017→', metric: '99.997%', metricLabel: 'Uptime' },
  { id: 2, tag: 'Bangladesh Bank', sector: 'fintech', name: 'Binimoy IDTP', claim: "Bangladesh's interoperable digital transaction platform.",
    blurb: "National rails connecting banks, MFS and PSPs. We own the platform's reference implementation.",
    region: 'BD', year: '2022→', metric: '38M', metricLabel: 'Tx / mo' },
  { id: 3, tag: 'DNCC', sector: 'gov', name: 'DNCC citizen app', claim: 'One app for everything the city does.',
    blurb: 'Holding tax, trade licences, garbage pickup, complaint routing — for Dhaka North City Corporation.',
    region: 'BD', year: '2021→', metric: '4.1M', metricLabel: 'Sessions / mo' },
  { id: 4, tag: 'NCC', sector: 'ai', name: 'Cardiac imaging AI', claim: 'AI imaging for the National Cardiovascular Center.',
    blurb: 'Reads echocardiograms in seconds, flags anomalies for the senior cardiologist. On-prem inference.',
    region: 'BD', year: '2024→', metric: '1.2s', metricLabel: 'p95' },
  { id: 5, tag: 'US Fintech', sector: 'chain', name: 'Proxy voting on chain', claim: 'Blockchain settlement for the second-largest shareholder firm.',
    blurb: 'Every record reconciles, every vote is auditable, AML clean.',
    region: 'USA', year: '2023→', metric: '4.1M', metricLabel: 'Records' },
  { id: 6, tag: 'MLB', sector: 'chain', name: 'MLB franchise NFTs', claim: 'NFT infrastructure for a Major League Baseball franchise.',
    blurb: 'Custody, secondary market, royalty splits. Built so the front office never has to think about it.',
    region: 'USA', year: '2022→', metric: '0', metricLabel: 'Incidents' },
  { id: 7, tag: 'US Banks', sector: 'compliance', name: 'AML / CRA / HMDA stack', claim: 'Compliance software covering the regulatory waterfront.',
    blurb: 'AML alerts, CRA assessment reports, HMDA LAR generation — one platform, four bank clients.',
    region: 'USA', year: '2020→', metric: '4', metricLabel: 'Banks' },
  { id: 8, tag: 'Power Cell', sector: 'erp', name: 'Generation MIS', claim: 'Real-time generation dashboard for the national grid.',
    blurb: 'Reads from 60+ power plants. The screen on the wall in the Power Cell control room.',
    region: 'BD', year: '2019→', metric: '60+', metricLabel: 'Plants' },
];

const FILTERS = [
  { id: 'all',        label: 'All' },
  { id: 'erp',        label: 'ERP' },
  { id: 'fintech',    label: 'Fintech' },
  { id: 'gov',        label: 'Government' },
  { id: 'ai',         label: 'AI / health' },
  { id: 'chain',      label: 'Blockchain' },
  { id: 'compliance', label: 'Compliance' },
];

export default function WorkGrid() {
  const [filter, setFilter] = useState('all');
  const cases = useMemo(
    () => filter === 'all' ? CASES : CASES.filter(c => c.sector === filter),
    [filter]
  );

  return (
    <section id="work" className="tv-section tv-work">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">01</span>
        <h2 className="tv-section-break__title">Work</h2>
        <span className="tv-mono tv-section-break__meta">{CASES.length} case studies · BD + US</span>
      </header>

      <div className="tv-work__filters" role="tablist">
        {FILTERS.map(f => (
          <button key={f.id}
                  role="tab"
                  aria-selected={filter === f.id}
                  className={`tv-chip-btn ${filter === f.id ? 'is-active' : ''}`}
                  onClick={() => setFilter(f.id)}>
            {f.label}
            <span className="tv-mono tv-chip-btn__count">
              {f.id === 'all' ? CASES.length : CASES.filter(c => c.sector === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <div className="tv-work__grid">
        {cases.map(c => <CaseCard key={c.id} {...c} />)}
      </div>
    </section>
  );
}
