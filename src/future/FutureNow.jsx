import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

/* ── Cursor ──────────────────────────────────────────────────── */
export function FutureCursor() {
  const ref = useRef(null);
  const labelRef = useRef(null);
  const tx = useRef(0);
  const ty = useRef(0);
  const mx = useRef(0);
  const my = useRef(0);

  useEffect(() => {
    const onMove = (e) => { mx.current = e.clientX; my.current = e.clientY; };
    document.addEventListener('mousemove', onMove);
    let raf;
    const tick = () => {
      tx.current += (mx.current - tx.current) * 0.22;
      ty.current += (my.current - ty.current) * 0.22;
      if (ref.current) ref.current.style.transform = `translate(${tx.current}px, ${ty.current}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const onEnter = (e) => {
      const t = e.target.closest('[data-cursor]');
      if (!t || !ref.current) return;
      ref.current.classList.add('is-hover');
      if (labelRef.current) labelRef.current.textContent = t.dataset.cursor || '';
    };
    const onLeave = (e) => {
      if (!e.target.closest || !e.target.closest('[data-cursor]')) return;
      if (ref.current) ref.current.classList.remove('is-hover');
    };
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => { document.removeEventListener('mouseover', onEnter); document.removeEventListener('mouseout', onLeave); };
  }, []);

  return (
    <div ref={ref} className="fn-cursor">
      <span ref={labelRef} className="fn-cursor__label"></span>
    </div>
  );
}

/* ── Magnetic button / link wrapper ──────────────────────────── */
export function Magnet({ children, className = '', strength = 0.35, href, ...rest }) {
  const ref = useRef(null);
  const Tag = href ? 'a' : 'button';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.setProperty('--mag-x', x + 'px');
      el.style.setProperty('--mag-y', y + 'px');
    };
    const onLeave = () => {
      el.style.setProperty('--mag-x', '0px');
      el.style.setProperty('--mag-y', '0px');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [strength]);

  const props = href ? { href, ref, className: `fn-magnet ${className}`, ...rest } : { ref, className: `fn-magnet ${className}`, ...rest };
  return <Tag {...props}>{children}</Tag>;
}

/* ── Scramble-text effect ───────────────────────────────────── */
const SCRAM_CHARS = '!<>-_\\/[]{}—=+*^?#________';
function Scramble({ text, trigger = 'mount', className }) {
  const [out, setOut] = useState(text);
  const raf = useRef(null);

  const run = useCallback(() => {
    const oldT = out;
    const newT = text;
    const length = Math.max(oldT.length, newT.length);
    const queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldT[i] || '';
      const to = newT[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end, char: '' });
    }
    let frame = 0;
    const update = () => {
      let s = '';
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) { complete++; s += to; }
        else if (frame >= start) {
          if (!char || Math.random() < 0.28) char = SCRAM_CHARS[Math.floor(Math.random() * SCRAM_CHARS.length)];
          queue[i].char = char;
          s += `<span style="opacity:0.7;color:var(--fn-lime)">${char}</span>`;
        } else s += from;
      }
      setOut(s);
      if (complete === queue.length) return;
      frame++;
      raf.current = requestAnimationFrame(update);
    };
    cancelAnimationFrame(raf.current);
    update();
  }, [text, out]);

  useEffect(() => {
    if (trigger === 'mount') run();
    return () => cancelAnimationFrame(raf.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className={`fn-scramble ${className || ''}`}
    onMouseEnter={trigger === 'hover' ? run : undefined}
    dangerouslySetInnerHTML={{ __html: out }} />;
}

/* ── Tile with tilt + flip ──────────────────────────────────── */
function FnTile({ size = 'md', tile }) {
  const ref = useRef(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const px = x / r.width - 0.5;
      const py = y / r.height - 0.5;
      el.style.setProperty('--mx', (x / r.width * 100) + '%');
      el.style.setProperty('--my', (y / r.height * 100) + '%');
      el.style.setProperty('--tilt-x', (px * 6) + 'deg');
      el.style.setProperty('--tilt-y', (-py * 6) + 'deg');
    };
    const onLeave = () => {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <article ref={ref}
      className={`fn-tile fn-tile--${size} ${tile.feature ? 'fn-tile--feature' : ''} ${flipped ? 'is-flipped' : ''}`}
      data-cursor={flipped ? 'close' : 'open'}
      onClick={() => setFlipped((f) => !f)}>
      <div className="fn-tile__head">
        <span className="fn-tile__tag">{tile.tag}</span>
        <span className="fn-tile__status">LIVE</span>
      </div>
      <h3 className="fn-tile__name">{tile.name}</h3>
      <p className="fn-tile__claim">{tile.claim}</p>

      {tile.metric && (
        <div className="fn-tile__metric">
          <span className="fn-tile__metric-n">{tile.liveMetric ?? tile.metric}</span>
          <span className="fn-tile__metric-l">{tile.metricLabel}</span>
        </div>
      )}

      {tile.spark && (
        <div className="fn-tile__viz">
          <div className="fn-tile__spark">
            {tile.spark.map((h, i) => <span key={i} style={{ height: `${h}%` }}></span>)}
          </div>
        </div>
      )}

      {tile.bar !== undefined && (
        <div className="fn-tile__bar">
          <div className="fn-tile__bar-fill" style={{ width: `${tile.bar}%` }}></div>
        </div>
      )}

      <span className="fn-tile__flip-hint">{flipped ? '← back' : 'tap for runbook'}</span>

      <div className="fn-tile__back">
        <h4>{tile.name} · runbook</h4>
        <ul>
          <li><span>SLA</span><span>{tile.sla}</span></li>
          <li><span>Region</span><span>{tile.region}</span></li>
          <li><span>Sector</span><span>{tile.sector}</span></li>
          <li><span>Role</span><span>{tile.role}</span></li>
          <li><span>On-call</span><span>{tile.oncall}</span></li>
          <li><span>Last deploy</span><span>{tile.deploy}</span></li>
        </ul>
        <button className="fn-tile__back-close" data-cursor="back"
          onClick={(e) => { e.stopPropagation(); setFlipped(false); }}>
          ← back to live
        </button>
      </div>
    </article>
  );
}

/* ── Nav ────────────────────────────────────────────────────── */
export function FutureNav() {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const dhakaMs = now.getTime() + (now.getTimezoneOffset() + 6 * 60) * 60000;
      const d = new Date(dhakaMs);
      const pad = n => String(n).padStart(2, '0');
      return `DHAKA ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };
    setClock(fmt());
    const id = setInterval(() => setClock(fmt()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fn-nav">
      <a href="/" className="fn-nav__brand" data-cursor="home">
        <span className="fn-nav__brand-dot"></span>
        techvision
      </a>
      <nav className="fn-nav__links">
        <a href="/#work" data-cursor="jump">Systems</a>
        <a href="/services.html" data-cursor="jump">Services</a>
        <a href="/projects.html" data-cursor="jump">Projects</a>
        <a href="/#practice" data-cursor="jump">Practice</a>
        <a href="/#manifesto" data-cursor="jump">Manifesto</a>
        <a href="/#contact" data-cursor="jump">Contact</a>
      </nav>
      <div className="fn-nav__live">ALL SYSTEMS · {clock || 'DHAKA --:--'}</div>
    </header>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
function FutureHero() {
  const heroRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const txCount = useMemo(() => 184_213_540 + seconds * 38, [seconds]);
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');

  return (
    <section ref={heroRef} className="fn-hero">
      <div className="fn-hero__grid-bg"></div>
      <div className="fn-shell">
        <div className="fn-hero__eyebrow">
          <b>● LIVE</b>
          <span>TECHVISION · DHAKA — NEW YORK — SINGAPORE</span>
          <span style={{ marginLeft: 'auto', color: 'var(--fn-fg-3)' }}>YOU&apos;VE BEEN HERE {minutes}:{sec}</span>
        </div>

        <h1 className="fn-hero__claim">
          <span className="fn-hero__claim-word">The future </span>
          <span className="fn-hero__claim-word fn-hero__claim-word--accent">is already </span>
          <span className="fn-hero__claim-word fn-hero__claim-word--shipping">shipping</span>
        </h1>

        <div className="fn-hero__bottom">
          <p className="fn-hero__lede">
            <b>We don&apos;t pitch the next decade.</b> We built it last decade and it&apos;s
            running right now — a country&apos;s payment rail, a hospital&apos;s AI, a city&apos;s
            citizen app. Today&apos;s science fiction, in production since 2014.
          </p>
          <div className="fn-hero__cta-stack">
            <Magnet href="#work" data-cursor="open work">
              See what&apos;s running
              <span className="fn-magnet__arrow">→</span>
            </Magnet>
            <Magnet className="fn-magnet--ghost" href="tel:+8802555014 4" data-cursor="3am call">
              Call the on-call line
              <span className="fn-magnet__arrow">↗</span>
            </Magnet>
          </div>
        </div>

        <div className="fn-hero__telemetry">
          <div className="fn-hero__tel">
            <span className="fn-hero__tel-n fn-hero__tel-n--lime">{txCount.toLocaleString()}</span>
            <span className="fn-hero__tel-l">Transactions settled on Binimoy today</span>
          </div>
          <div className="fn-hero__tel">
            <span className="fn-hero__tel-n">99.99<span style={{ color: 'var(--fn-fg-3)' }}>%</span></span>
            <span className="fn-hero__tel-l">Uptime across 7 mission-critical systems</span>
          </div>
          <div className="fn-hero__tel">
            <span className="fn-hero__tel-n">{(1.34 + (seconds % 9 - 4) * 0.04).toFixed(2)}<span style={{ color: 'var(--fn-fg-3)' }}>s</span></span>
            <span className="fn-hero__tel-l">NCC cardiac AI · p95 inference</span>
          </div>
          <div className="fn-hero__tel">
            <span className="fn-hero__tel-n">3<span style={{ color: 'var(--fn-fg-3)' }}>am</span></span>
            <span className="fn-hero__tel-l">When you&apos;ll reach an engineer, not a chatbot</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee ────────────────────────────────────────────────── */
export function Marquee({ items, variant, reverse }) {
  const cls = `fn-marquee ${variant === 'lime' ? 'fn-marquee--lime' : ''}`;
  return (
    <div className={cls}>
      <div className={`fn-marquee__track ${reverse ? 'fn-marquee__track--reverse' : ''}`}>
        {[...items, ...items].map((it, i) => (
          <span key={i} className={`fn-marquee__item ${it.outline ? 'fn-marquee__item--outline' : ''}`}>
            {it.icon && <img src={it.icon} className="fn-marquee__item-icon" alt="" aria-hidden="true" />}
            <span className="fn-marquee__item-dot"></span>
            {it.text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Bento ──────────────────────────────────────────────────── */
const TILES = [
  {
    id: 'binimoy', tag: 'FINTECH · BANGLADESH', name: 'IDTP',
    claim: 'The national interoperable digital transaction platform. Every bank, MFS and wallet in Bangladesh settling against each other, in real time.',
    metric: '180M+', metricLabel: 'eligible account holders',
    sla: '99.99%', region: 'Dhaka · DAC', sector: 'Fintech · public infrastructure',
    role: 'Architecture · build · ops', oncall: 'N. Rahman (L1)', deploy: 'v3.2.1 · 4h ago',
    feature: true,
    spark: [40, 55, 48, 68, 62, 78, 72, 88, 80, 92, 84, 96],
  },
  {
    id: 'ncc-ai', tag: 'HEALTHCARE AI', name: 'NCC cardiac AI',
    claim: 'Cardiac imaging assist. Flags abnormalities for the radiologist on shift, in under two seconds.',
    metric: '<2s', metricLabel: 'inference per study',
    sla: 'Clinical-grade', region: 'Dhaka · NCC', sector: 'Healthcare · AI',
    role: 'Research · build · deploy', oncall: 'S. Hossain (L1)', deploy: 'v1.8 · 2d ago',
    bar: 87,
  },
  {
    id: 'power-erp', tag: 'NATIONAL UTILITIES', name: 'Power Division ERP',
    claim: 'One ERP across fifteen organisations of the Power Division — the public utilities keeping the national grid lit.',
    metric: '15', metricLabel: 'orgs · one ERP',
    sla: '99.95%', region: 'Dhaka', sector: 'Utility · public',
    role: 'Full lifecycle · on-call', oncall: 'A. Karim (L2)', deploy: 'v6.4.0 · 11h ago',
  },
  {
    id: 'dncc', tag: 'CIVIC · DHAKA NORTH', name: 'DNCC citizen app',
    claim: 'Taxes, trade licences, complaints — what was a counter in an office is now a phone in a pocket for 4.5M residents.',
    metric: '4.5M', metricLabel: 'residents served',
    sla: '99.9%', region: 'Dhaka', sector: 'Government · civic',
    role: 'Product · build · run', oncall: 'M. Begum (L1)', deploy: 'v3.2.4 · 19h ago',
    spark: [30, 42, 50, 45, 60, 58, 68, 72, 65, 80, 85, 78],
  },
  {
    id: 'proxy', tag: 'BLOCKCHAIN · US', name: 'Proxy voting · on chain',
    claim: 'Annual meetings settle in minutes, not weeks. The audit trail is the chain.',
    metric: '9min', metricLabel: 'meeting settlement',
    sla: 'Bank-grade', region: 'NYC', sector: 'Fintech · blockchain',
    role: 'Protocol · build · audit', oncall: 'D. Khan (L2)', deploy: 'v2.1.0 · 1w ago',
  },
  {
    id: 'mlb', tag: 'SPORTS · BLOCKCHAIN', name: 'MLB NFT infrastructure',
    claim: 'Drops, secondaries, royalties, fan identity — for a Major League Baseball franchise.',
    metric: 'Game-day', metricLabel: 'on-chain · live during drops',
    sla: 'Game-day', region: 'NYC', sector: 'Sports · blockchain',
    role: 'Smart contracts · frontend · run', oncall: 'R. Patel (L1)', deploy: 'v4.0.2 · 3d ago',
    bar: 64,
  },
  {
    id: 'aml', tag: 'BANKING · COMPLIANCE', name: 'AML · CRA · HMDA',
    claim: 'Anti-Money-Laundering, Community Reinvestment Act and Home Mortgage Disclosure Act reporting for US banks.',
    metric: '3 acts', metricLabel: 'AML · CRA · HMDA',
    sla: 'Audit-pass', region: 'NYC', sector: 'Banking · regulatory',
    role: 'Engine · reporting · run', oncall: 'F. Ahmed (L2)', deploy: 'v9.1.0 · 6h ago',
    spark: [22, 28, 35, 30, 42, 48, 40, 55, 50, 62, 58, 70],
  },
];

function FutureSystems() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1100);
    return () => clearInterval(id);
  }, []);

  const liveBinimoy = (184_213_540 + tick * 38).toLocaleString();

  return (
    <section className="fn-section" id="work">
      <div className="fn-shell">
        <div className="fn-section__head">
          <div>
            <div className="fn-section__eyebrow">▾ §02 · LIVE SYSTEMS</div>
            <h2 className="fn-section__title">
              <Scramble text="Today's science fiction, " trigger="mount" /><em>in production.</em>
            </h2>
          </div>
          <div className="fn-section__meta">7 SYSTEMS · 5 REGIONS · LAST SYNC LIVE</div>
        </div>

        <div className="fn-bento">
          <FnTile size="lg" tile={{ ...TILES[0], liveMetric: liveBinimoy, metricLabel: 'transactions settled today · live' }} />
          <FnTile size="md" tile={TILES[1]} />
          <FnTile size="md" tile={TILES[2]} />
          <FnTile size="sm" tile={TILES[3]} />
          <FnTile size="sm" tile={TILES[4]} />
          <FnTile size="sm" tile={TILES[5]} />
          <FnTile size="xl" tile={TILES[6]} />
        </div>
      </div>
    </section>
  );
}

/* ── Capabilities stack ──────────────────────────────────────── */
const CAPS = [
  { num: '01', name: 'Mission-critical systems', bullets: ['ERP', 'Transaction rails', 'Regulatory engines', 'Built once, run a decade'] },
  { num: '02', name: 'Compliance & banking',     bullets: ['AML', 'CRA', 'HMDA', 'Audit-grade'] },
  { num: '03', name: 'Blockchain infrastructure', bullets: ['Proxy voting', 'NFT drops', 'Custody integration', 'Formal review'] },
  { num: '04', name: 'AI for hospitals',          bullets: ['Cardiac imaging', 'On-prem inference', 'Clinician-in-the-loop'] },
  { num: '05', name: 'Government & civic',        bullets: ['Citizen apps', 'Tax · licence flows', 'Public-sector procurement'] },
  { num: '06', name: 'On-call operations',        bullets: ['24/7 rota', 'Engineer-written runbooks', '3am pickup'] },
];

function FutureCapabilities() {
  return (
    <section className="fn-section" id="practice">
      <div className="fn-shell">
        <div className="fn-section__head">
          <div>
            <div className="fn-section__eyebrow">▾ §03 · PRACTICE</div>
            <h2 className="fn-section__title">
              We ship it. <em>Then we run it.</em>
            </h2>
          </div>
          <div className="fn-section__meta">SIX SERVICE LINES · ONE PAGER</div>
        </div>

        <div className="fn-cap-stack">
          {CAPS.map((c) => (
            <article key={c.num} className="fn-cap" data-cursor="open">
              <div className="fn-cap__num">{c.num}/06</div>
              <div className="fn-cap__body">
                <h3 className="fn-cap__name">{c.name}</h3>
                <div className="fn-cap__bullets">
                  {c.bullets.map((b) => <span key={b} className="fn-cap__bullet">{b}</span>)}
                </div>
              </div>
              <span className="fn-cap__cta">Read brief →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Manifesto ──────────────────────────────────────────────── */
function FutureManifesto() {
  return (
    <section className="fn-manifesto" id="manifesto">
      <div className="fn-shell">
        <div className="fn-section__eyebrow" style={{ color: 'var(--fn-lime)', marginBottom: '24px' }}>▾ §04 · MANIFESTO</div>
        <h2 className="fn-manifesto__big">
          We answer the phone <em>at 3am.</em>
        </h2>
        <div className="fn-manifesto__row">
          <p className="fn-manifesto__body">
            <b>The engineer who picks up the phone is on the team that shipped the code.</b>{' '}
            The runbook was written by the person on the rota. The escalation tree is two layers deep. We don&apos;t hand off after launch — same firm, same team, same name on the pager, for as long as the system has to run.
          </p>
          <div className="fn-manifesto__phone">
            <span>Direct line · no IVR</span>
            <span className="fn-manifesto__phone-n">+880 2 555 0144</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ────────────────────────────────────────────────────── */
function FutureCTA() {
  return (
    <section className="fn-cta" id="contact">
      <div className="fn-shell">
        <div className="fn-section__eyebrow" style={{ marginBottom: '24px' }}>▾ §05 · NEXT</div>
        <h2 className="fn-cta__big">
          Start shipping <em>the future</em> today.
        </h2>
        <p className="fn-cta__sub">
          Tell us what has to keep running — a payments rail, a citizen app, a compliance pipeline, a clinical tool. Real engineers reply, within one business day.
        </p>
        <div className="fn-cta__buttons">
          <Magnet href="mailto:hello@techvision.com.bd?subject=Start%20a%20project" data-cursor="contact">
            Start a project
            <span className="fn-magnet__arrow">→</span>
          </Magnet>
          <Magnet className="fn-magnet--ghost" href="mailto:hello@techvision.com.bd?subject=Capability%20brief%20request" data-cursor="brief">
            Download capability brief
            <span className="fn-magnet__arrow">↓</span>
          </Magnet>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
const FOOTER_LINKS = {
  Work:     ['Binimoy', 'Power Division ERP', 'DNCC', 'NCC imaging', 'Proxy voting', 'MLB NFT', 'Bank compliance'],
  Practice: ['Mission-critical', 'Compliance', 'Blockchain', 'Hospital AI', 'Government', 'On-call ops'],
  Company:  ['Engineering', 'Careers', 'Press', 'Contact'],
};

export function FutureFooter() {
  return (
    <footer>
      <div className="fn-shell">
        <div className="fn-foot">
          <div className="fn-foot__brand">
            <div className="fn-nav__brand"><span className="fn-nav__brand-dot"></span> techvision</div>
            <p>Built in Dhaka. Run from Dhaka. Shipping the future to seven mission-critical systems since 2014.</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([h, items]) => (
            <div key={h} className="fn-foot__col">
              <h5>▾ {h}</h5>
              <ul>
                {items.slice(0, 6).map((l) => (
                  <li key={l}>
                    <a href="#" data-cursor="link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="fn-foot__base">
            <span>© 2026 TechVision · v26.05.future-now</span>
            <span>All systems running · last deploy 03:14:08 UTC+6</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Root ───────────────────────────────────────────────────── */
const TICKER_A = [
  { text: 'Binimoy · 184,213,540 settled · uptime 99.99%',     icon: '/assets/icons/finance.png' },
  { text: 'NCC AI · 1.4s inference · 412 studies / day',       icon: '/assets/icons/performance.png', outline: true },
  { text: 'Power ERP · 15 orgs · v6.4.0',                      icon: '/assets/icons/plant.png' },
  { text: 'DNCC · 4.5M residents · v3.2.4',                    icon: '/assets/icons/admin.png',       outline: true },
  { text: 'Proxy voting · 9 min settlement · on chain',        icon: '/assets/icons/tender.png' },
  { text: 'MLB NFT · game-day drops · on chain',               icon: '/assets/icons/hr.png',          outline: true },
  { text: 'AML · CRA · HMDA · audit-clean',                    icon: '/assets/icons/procurement.png' },
];

const TICKER_B = [
  { text: 'WE ANSWER THE PHONE AT 3AM' },
  { text: '+880 2 555 0144 · NO IVR', outline: true },
  { text: 'BUILT IN DHAKA · RUN FROM DHAKA' },
  { text: 'PRODUCT OF THE FUTURE, NOW', outline: true },
];

export default function FutureNow() {
  return (
    <div className="dir-future">
      <div className="fn-noise"></div>
      <FutureCursor />
      <FutureNav />
      <FutureHero />
      <Marquee items={TICKER_A} />
      <FutureSystems />
      <Marquee items={TICKER_B} variant="lime" reverse />
      <FutureCapabilities />
      <FutureManifesto />
      <FutureCTA />
      <FutureFooter />
    </div>
  );
}
