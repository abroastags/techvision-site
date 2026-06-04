import { FutureCursor, FutureNav, FutureFooter, Magnet, Marquee, TICKER_A } from '../future/FutureNow.jsx';

const UTILITIES = [
  { code: 'APSCL',    logo: '/assets/logos/power/apscl.jpg'    },
  { code: 'BPDB',     logo: '/assets/logos/power/bpdb.png'     },
  { code: 'NESCO',    logo: '/assets/logos/power/nesco.jpg'    },
  { code: 'EGCB',     logo: '/assets/logos/power/egcb.jpg'     },
  { code: 'DESCO',    logo: '/assets/logos/power/desco.png'    },
  { code: 'DPDC',     logo: '/assets/logos/power/dpdc.jpg'     },
  { code: 'CPGCBL',   logo: '/assets/logos/power/cpgcbl.jpg'   },
  { code: 'BRPL',     logo: '/assets/logos/power/brpl.png'     },
  { code: 'BREB',     logo: '/assets/logos/power/breb.jpg'     },
  { code: 'NWPGCL',   logo: '/assets/logos/power/nwpgcl.jpg'   },
  { code: 'BREB-PBS', logo: '/assets/logos/power/breb-pbs.jpg' },
  { code: 'PGCB',     logo: '/assets/logos/power/pgcb.png'     },
  { code: 'RPCL',     logo: '/assets/logos/power/rpcl.jpg'     },
  { code: 'SREDA',    logo: '/assets/logos/power/sreda.png'    },
  { code: 'WZPDCL',   logo: '/assets/logos/power/wzpdcl.jpg'   },
];

const COUNTERS = [
  { n: '72K+',       lime: true,  l: 'Employees on payroll' },
  { n: '125 Cr+',                  l: 'Avg. monthly salary disbursed' },
  { n: '13 lacs+',                 l: 'Fixed assets tracked' },
  { n: '99.95%',                   l: 'Uptime · last 30d' },
];

const PROJECTS = [
  { id: 'idtp', icon: '/assets/icons/finance.png',
    tag: 'FINTECH · NATIONAL', name: 'IDTP', status: 'LIVE',
    claim: 'The interoperable digital transaction platform — every bank, MFS and wallet in Bangladesh settling against each other in real time.',
    client: 'Bangladesh Bank · public infrastructure',
    metric: '184M+', metricLabel: 'eligible account holders',
    feature: true,
    spark: [40, 55, 48, 68, 62, 78, 72, 88, 80, 92, 84, 96],
  },
  { id: 'ncc-ai', logo: '/assets/logos/nicvd.png',
    tag: 'HEALTHCARE AI', name: 'NCC cardiac AI', status: 'LIVE',
    claim: 'On-prem cardiac imaging assist for the National Institute of Cardiovascular Diseases. Flags abnormalities for the radiologist on shift.',
    client: 'NICVD · clinical-grade',
    metric: '<2s', metricLabel: 'inference per study',
    bar: 87,
  },
  { id: 'dncc', logo: '/assets/logos/dncc.png',
    tag: 'CIVIC · DHAKA NORTH', name: 'DNCC citizen app', status: 'LIVE',
    claim: 'Taxes, trade licences and complaints — what was a counter in an office is now a phone in a pocket for 4.5M residents.',
    client: 'Dhaka North City Corporation',
    metric: '4.5M', metricLabel: 'residents served',
    spark: [30, 42, 50, 45, 60, 58, 68, 72, 65, 80, 85, 78],
  },
  { id: 'proxy', logo: '/assets/logos/nuarca.png',
    tag: 'BLOCKCHAIN · US', name: 'Proxy voting · on chain', status: 'LIVE',
    claim: 'Annual meetings settle in minutes, not weeks. The audit trail is the chain.',
    client: 'NuArca · 2nd-largest US shareholder firm',
    metric: '9 min', metricLabel: 'meeting settlement',
  },
  { id: 'mlb', logo: '/assets/logos/mlb.png',
    tag: 'SPORTS · BLOCKCHAIN', name: 'MLB NFT infrastructure', status: 'LIVE',
    claim: 'Drops, secondaries, royalties and fan identity for a Major League Baseball franchise.',
    client: 'MLB franchise',
    metric: 'Game-day', metricLabel: 'on-chain · live during drops',
    bar: 64,
  },
  { id: 'aml', logo: '/assets/logos/wolters-kluwer.png',
    tag: 'BANKING · COMPLIANCE', name: 'AML · CRA · HMDA', status: 'LIVE',
    claim: 'Anti-Money-Laundering, Community Reinvestment Act and Home Mortgage Disclosure Act reporting for US banks.',
    client: 'Wolters Kluwer · Empyrean Solutions',
    metric: '3 acts', metricLabel: 'AML · CRA · HMDA',
    spark: [22, 28, 35, 30, 42, 48, 40, 55, 50, 62, 58, 70],
  },
  { id: 'bu', logo: '/assets/logos/bangladesh-university.png',
    tag: 'EDUCATION', name: 'Bangladesh University systems', status: 'LIVE',
    claim: 'Academic & operational platform — admissions, results, finance and HR for a private university.',
    client: 'Bangladesh University',
    metric: 'Multi-year', metricLabel: 'in production',
  },
  { id: 'vsbl', logo: '/assets/logos/vitti-sthapati-brindo.png',
    tag: 'ARCHITECTURE', name: 'Vitti Sthapati Brindo platform', status: 'LIVE',
    claim: 'Practice-management systems for one of Bangladesh’s leading architecture firms.',
    client: 'Vitti Sthapati Brindo Ltd',
    metric: 'On-prem', metricLabel: 'firm-wide deploy',
  },
];

export default function Projects() {
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
            <b>▾ §01 · WHERE WE SHIP</b>
            <span>15 POWER UTILITIES · 70,000+ USERS · 4 CONTINENTS</span>
          </div>
          <h1 className="fn-hero__claim">
            <span className="fn-hero__claim-word">Live </span>
            <span className="fn-hero__claim-word fn-hero__claim-word--accent">in production, </span>
            <span className="fn-hero__claim-word fn-hero__claim-word--shipping">today</span>
          </h1>
          <p className="fn-hero__lede" style={{ maxWidth: '52ch' }}>
            <b>Real projects, named clients, audit-clean numbers.</b>{' '}
            Every system on this page is running right now — and the engineers who shipped it are still on the rota.
          </p>
        </div>
      </section>

      {/* ── Section 2 · Power Sector ERP feature ────────────── */}
      <section className="fn-feature" id="power">
        <div className="fn-shell">
          <div className="fn-section__eyebrow">▾ §02 · FLAGSHIP DEPLOY · POWER SECTOR ERP</div>
          <h2 className="fn-feature__claim">
            One ERP. Fifteen utilities. <em>The national grid.</em>
          </h2>
          <p style={{ color: 'var(--fn-fg-2)', fontSize: 'clamp(15px, 1.1vw, 18px)', lineHeight: 1.5, maxWidth: '56ch', margin: '0 0 clamp(32px, 4vw, 56px)' }}>
            Asset management, finance, HR, procurement, plant ops — on one platform, across every utility under Bangladesh&apos;s Power Division.
          </p>

          <div className="fn-feature__counters">
            {COUNTERS.map(c => (
              <div key={c.l} className="fn-feature__counter">
                <span className={`fn-feature__counter-n ${c.lime ? 'fn-feature__counter-n--lime' : ''}`}>{c.n}</span>
                <span className="fn-feature__counter-l">{c.l}</span>
              </div>
            ))}
          </div>

          <p className="fn-feature__logos-l">▾ 15 utilities under the Power Division</p>
          <div className="fn-feature__logos">
            {UTILITIES.map(u => (
              <article key={u.code} className="fn-feature__logo" data-cursor={u.code.toLowerCase()}>
                <span className="fn-feature__logo-img">
                  <img src={u.logo} alt={u.code} loading="lazy" />
                </span>
                <span className="fn-feature__logo-name">{u.code}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational ticker (shared with homepage) ───────── */}
      <Marquee items={TICKER_A} />

      {/* ── Section 3 · Project tiles ───────────────────────── */}
      <section className="fn-section" id="projects">
        <div className="fn-shell">
          <div className="fn-section__head">
            <div>
              <div className="fn-section__eyebrow">▾ §03 · OTHER LIVE SYSTEMS</div>
              <h2 className="fn-section__title">
                Built once. <em>Still running.</em>
              </h2>
            </div>
            <div className="fn-section__meta">8 SYSTEMS · 2 REGIONS · ALL LIVE</div>
          </div>

          <div className="fn-bento">
            {PROJECTS.map((p, i) => (
              <article key={p.id} className={`fn-tile fn-tile--${i === 0 ? 'lg' : i < 3 ? 'md' : i < 6 ? 'sm' : 'md'} ${p.feature ? 'fn-tile--feature' : ''}`} data-cursor="read">
                <div className="fn-tile__head" style={{ alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    {p.logo ? (
                      <span className="fn-tile__brand"><img src={p.logo} alt="" /></span>
                    ) : p.icon ? (
                      <img src={p.icon} alt="" style={{ width: 18, height: 18, filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                    ) : null}
                    <span className="fn-tile__tag">{p.tag}</span>
                  </div>
                  <span className={`fn-tile__status fn-tile__status--live`}>{p.status}</span>
                </div>
                <h3 className="fn-tile__name">{p.name}</h3>
                <p className="fn-tile__claim">{p.claim}</p>

                {p.metric && (
                  <div className="fn-tile__metric">
                    <span className="fn-tile__metric-n">{p.metric}</span>
                    <span className="fn-tile__metric-l">{p.metricLabel}</span>
                  </div>
                )}
                {p.spark && (
                  <div className="fn-tile__viz">
                    <div className="fn-tile__spark">
                      {p.spark.map((h, j) => <span key={j} style={{ height: `${h}%` }}></span>)}
                    </div>
                  </div>
                )}
                {p.bar !== undefined && (
                  <div className="fn-tile__bar">
                    <div className="fn-tile__bar-fill" style={{ width: `${p.bar}%` }}></div>
                  </div>
                )}
                <span className="fn-tile__flip-hint" style={{ pointerEvents: 'none' }}>{p.client}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 · CTA ─────────────────────────────────── */}
      <section className="fn-cta" id="contact">
        <div className="fn-shell">
          <div className="fn-section__eyebrow" style={{ marginBottom: '24px' }}>▾ §04 · NEXT</div>
          <h2 className="fn-cta__big">
            Want to be <em>the next case study?</em>
          </h2>
          <p className="fn-cta__sub">
            One sentence about what has to keep running is enough to start. We&apos;ll reply with a real engineer within one business day.
          </p>
          <div className="fn-cta__buttons">
            <Magnet href="mailto:hello@techvision.com.bd?subject=Start%20a%20project" data-cursor="contact">
              Start a project
              <span className="fn-magnet__arrow">→</span>
            </Magnet>
          </div>
        </div>
      </section>

      <FutureFooter />
    </div>
  );
}
