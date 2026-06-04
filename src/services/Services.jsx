import { FutureCursor, FutureNav, FutureFooter, Magnet } from '../future/FutureNow.jsx';

const DAP = [
  { letter: 'D', name: 'Domain Expertise',
    body: 'Deep specialisation in the processes of government agencies and autonomous organisations in Bangladesh. We know your statutory rules, your APA cycle, your CAG audit format.' },
  { letter: 'A', name: 'AI-First Approach',
    body: 'Decision-support, predictive analytics and AI assistants embedded across every module. Numbers move the moment they should.' },
  { letter: 'P', name: 'Proven at Scale',
    body: '72,000+ employees managed, 125 Cr+ monthly salary processed, 1,27,000 Cr+ in fixed assets — across 15 power utilities of Bangladesh.' },
];

const SERVICES = [
  { icon: '/assets/icons/hr.png',          tag: 'HR & ADMIN · 50+ REPORTS', name: 'HR & Admin',
    claim: 'Employee lifecycle from joining to retirement — including training, transfer, promotion, deputation, disciplinary actions and PRL.',
    bullets: ['Joining → retirement', 'Training & transfer', 'Promotion eligibility', 'Inter / intra-org deputation', 'Disciplinary actions', '50+ reports'] },
  { icon: '/assets/icons/finance.png',     tag: 'ACCOUNTS · FINANCE',       name: 'Accounts & Finance',
    claim: 'Customisable financial statements, budget allocation, cost centres, energy purchase journals — the whole back-office.',
    bullets: ['Salary & bonus journals', 'Budget allocation', 'Cost centre accounting', 'Energy purchase', 'Customisable reports'] },
  { icon: '/assets/icons/inventory.png',   tag: 'INVENTORY',                name: 'Inventory',
    claim: 'Item card, physical location, zone & BIN, item tracking, requirement planning — with approval workflows and full reporting.',
    bullets: ['Item card · zone · BIN', 'Item requirement planning', 'Approval workflows', 'Periodic transactions', 'Reports'] },
  { icon: '/assets/icons/procurement.png', tag: 'PROCUREMENT · 13 REPORTS', name: 'Procurement',
    claim: 'APP, requisition, comparative statement, purchase agreement, invoices — at the speed your store actually runs.',
    bullets: ['APP & requisition', 'Official cost estimation', 'Comparative statement', 'Purchase agreement & invoices', '13 reports'] },
  { icon: '/assets/icons/admin.png',       tag: 'FIXED ASSET',              name: 'Fixed Asset',
    claim: 'Asset register with unique numbers, related transactions, movement, depreciation, maintenance and disposal — every asset accounted for.',
    bullets: ['Asset register · unique no.', 'Movement & related txns', 'Depreciation', 'Maintenance & disposal', 'Statistics'] },
  { icon: '/assets/icons/plant.png',       tag: 'PLANT MANAGEMENT',         name: 'Plant Management',
    claim: 'Daily generation & load, process monitoring, trip / shutdown logs, calibration logs, transformer load balancing — the control-room view.',
    bullets: ['Daily gen & load', 'Trip / shutdown log', 'Calibration log', 'Maintenance requests', 'Transformer load balance'] },
  { icon: '/assets/icons/performance.png', tag: 'PERFORMANCE APPRAISAL',    name: 'Performance Appraisal',
    claim: 'ACR-compliant, multi-type evaluation, configurable periods, APA & job-description PI library, employee self-assessment, RIO/CSO process.',
    bullets: ['Multi-type evaluation', 'Configurable period', 'APA / JD-based PI library', 'Employee self-assessment', 'RIO · CSO process'] },
  { icon: '/assets/icons/tender.png',      tag: 'TENDER MANAGEMENT',        name: 'Tender Management',
    claim: 'End-to-end tender lifecycle — advertisement, opening, evaluation, ranking, NOA, performance security, contract, LD calculation.',
    bullets: ['Advertisement / REOI', 'Opening & evaluation', 'Ranking calculation', 'Notification of Award', 'Performance security', 'LD calculation'] },
];

const INTEGRATIONS = [
  { icon: '/assets/icons/msword.png',  name: 'Microsoft Word',     note: 'Native report export' },
  { icon: '/assets/icons/msexcel.png', name: 'Microsoft Excel',    note: 'Lists & reports · filterable' },
  { icon: '/assets/icons/database.png', name: 'Third-party PMIS',   note: 'Inbound & outbound · API + file' },
];

export default function Services() {
  return (
    <div className="dir-future">
      <div className="fn-noise"></div>
      <FutureCursor />
      <FutureNav />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="fn-hero">
        <div className="fn-hero__grid-bg"></div>
        <div className="fn-shell">
          <div className="fn-hero__eyebrow">
            <b>▾ §01 · WHAT WE PROVIDE</b>
            <span>EIGHT ERP MODULES · ENTERPRISE-GRADE · AUDIT-CLEAN</span>
          </div>
          <h1 className="fn-hero__claim">
            <span className="fn-hero__claim-word">What we </span>
            <span className="fn-hero__claim-word fn-hero__claim-word--accent">build, ship </span>
            <span className="fn-hero__claim-word fn-hero__claim-word--shipping">and run</span>
          </h1>
          <p className="fn-hero__lede" style={{ maxWidth: '52ch' }}>
            <b>TechVision builds full-lifecycle ERP systems for governments, banks, utilities and hospitals.</b>{' '}
            Eight production modules, three Microsoft Dynamics integrations, and a 24/7 on-call rota for every line of code we ship.
          </p>

          <div className="fn-dap">
            {DAP.map(d => (
              <article key={d.letter} className="fn-dap__card" data-cursor="read">
                <span className="fn-dap__letter">{d.letter}</span>
                <h3 className="fn-dap__name">{d.name}</h3>
                <p className="fn-dap__body">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2 · Service tiles ───────────────────────── */}
      <section className="fn-section" id="services">
        <div className="fn-shell">
          <div className="fn-section__head">
            <div>
              <div className="fn-section__eyebrow">▾ §02 · SERVICE LINES</div>
              <h2 className="fn-section__title">
                Eight modules. <em>One platform.</em>
              </h2>
            </div>
            <div className="fn-section__meta">PRODUCTION · CUSTOMISABLE · AUDIT-READY</div>
          </div>

          <div className="fn-bento">
            {SERVICES.map((s, i) => (
              <article key={s.name} className={`fn-tile fn-tile--${i === 0 ? 'lg' : i < 4 ? 'md' : 'sm'}`} data-cursor="read">
                <img src={s.icon} alt="" className="fn-tile__icon" />
                <div className="fn-tile__head">
                  <span className="fn-tile__tag">{s.tag}</span>
                  <span className="fn-tile__status">LIVE</span>
                </div>
                <h3 className="fn-tile__name">{s.name}</h3>
                <p className="fn-tile__claim">{s.claim}</p>
                <div className="fn-cap__bullets" style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  {s.bullets.map(b => <span key={b} className="fn-cap__bullet">{b}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 · Integrations ────────────────────────── */}
      <section className="fn-integrations" id="integrations">
        <div className="fn-shell">
          <div className="fn-integrations__head">▾ §03 · INTEGRATIONS</div>
          <h2 className="fn-section__title" style={{ marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            Plays nicely <em>with what you already run.</em>
          </h2>
          <div className="fn-integrations__row">
            {INTEGRATIONS.map(i => (
              <div key={i.name} className="fn-integrations__item" data-cursor="link">
                <img src={i.icon} alt="" />
                <span>{i.name}<small>{i.note}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 · CTA ─────────────────────────────────── */}
      <section className="fn-cta" id="contact">
        <div className="fn-shell">
          <div className="fn-section__eyebrow" style={{ marginBottom: '24px' }}>▾ §04 · NEXT</div>
          <h2 className="fn-cta__big">
            Ready to ship <em>your back-office</em> next?
          </h2>
          <p className="fn-cta__sub">
            Request a demo or download the capability brief — both reach a real engineer, not a chatbot.
          </p>
          <div className="fn-cta__buttons">
            <Magnet href="mailto:hello@techvision.com.bd?subject=Request%20a%20demo" data-cursor="demo">
              Request a demo
              <span className="fn-magnet__arrow">→</span>
            </Magnet>
            <Magnet className="fn-magnet--ghost" href="mailto:hello@techvision.com.bd?subject=Capability%20brief" data-cursor="brief">
              Download capability brief
              <span className="fn-magnet__arrow">↓</span>
            </Magnet>
          </div>
        </div>
      </section>

      <FutureFooter />
    </div>
  );
}
