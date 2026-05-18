import { useEffect, useRef, useState } from 'react';

const SEED_LOG = [
  { t: '03:14:00', m: 'sshd[on-call] · session opened for engineer@dac.techvision.dev', k: 'sys' },
  { t: '03:14:02', m: 'binimoy/idtp · p95 142ms · uptime 99.99% · no alerts',            k: 'ok' },
  { t: '03:14:04', m: 'power-erp/15-orgs · last reconcile +03:00 · pass',                k: 'ok' },
  { t: '03:14:06', m: 'ncc-ai · pulled 412 studies · 1 flagged for radiologist review',  k: 'info' },
  { t: '03:14:08', m: 'aml-cra-hmda/q2-batch · 6810 accounts · audit-clean',             k: 'ok' },
];

const METRICS = [
  { label: 'CPU',        value: '27.0', unit: '%',  fill: 27, mod: 'norm' },
  { label: 'MEM',        value: '43.0', unit: '%',  fill: 43, mod: 'norm' },
  { label: 'UPTIME',     value: '99.99%', unit: '', fill: 99, mod: 'ok' },
  { label: 'ERR · 5min', value: '3',   unit: '',   fill: 12, mod: 'warn' },
];

const FAKE_RESPONSES = {
  status:  ['ok', '7/7 systems green · 0 P0 · 0 P1 · 1 P2 (NCC review queue)'],
  uptime:  ['ok', 'rolling 30d uptime 99.967% · LHR degraded 99.72%'],
  who:     ['sys', 'primary: N. Rahman (DAC) · secondary: J. Patel (NYC) follows the sun'],
  runbook: ['info', 'runbooks/ · binimoy · power-erp · ncc-ai · aml · mlb-nft · proxy-vote'],
};

export default function OpsConsole() {
  const [log, setLog] = useState(SEED_LOG);
  const [input, setInput] = useState('');
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    const now = new Date();
    const t = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    const key = cmd.split(/\s+/)[0];
    const resp = FAKE_RESPONSES[key];
    setLog(l => [
      ...l,
      { t, m: `on-call@dac:~$ ${cmd}`, k: 'sys' },
      resp ? { t, m: resp[1], k: resp[0] } : { t, m: `unknown: ${key} · try: status · uptime · who · runbook`, k: 'warn' },
    ]);
    setInput('');
  };

  return (
    <section className="ops-hero">
      <div className="ops-shell">
        <div className="ops-hero__head">
          <div className="ops-eyebrow">
            <span className="ops-eyebrow__mark">▾</span>
            <span>SECTION 01 · OPS CONSOLE · 1039</span>
          </div>
          <span className="tv-mono ops-hero__meta">tail -f /var/log/techvision/* · live</span>
        </div>

        <h1 className="ops-hero__claim">We answer the<br />phone at 3am.</h1>

        <p className="ops-hero__sub">
          TechVision builds the kind of software that can't go down.
          ERP for power utilities and governments, blockchain and compliance systems for US banks,
          AI for hospitals — and we run them, around the clock, from Dhaka.
        </p>

        <div className="ops-hero__board">
          <div className="ops-board__metrics">
            {METRICS.map(m => (
              <div className="ops-metric" key={m.label}>
                <div className="ops-metric__row">
                  <span className="tv-mono">{m.label}</span>
                  <span className="tv-mono ops-metric__v">{m.value}{m.unit && <span>{m.unit}</span>}</span>
                </div>
                <div className="ops-bar">
                  <div className={`ops-bar__fill ops-bar__fill--${m.mod}`} style={{ width: `${m.fill}%` }} />
                </div>
              </div>
            ))}
            <div className="ops-metric ops-metric--wide">
              <div className="ops-metric__row">
                <span className="tv-mono">SYSTEMS UNDER MANAGEMENT</span>
                <span className="tv-mono ops-metric__v">7<span> /7 · all green</span></span>
              </div>
            </div>
          </div>

          <div className="ops-board__log">
            <div className="ops-log__head tv-mono">
              <span>TIME</span>
              <span>EVENT</span>
              <span className="ops-log__live">
                <span className="tv-status-dot tv-status-dot--ok" />
                LIVE
              </span>
            </div>
            <div className="ops-log__rows" ref={logRef}>
              {log.map((r, i) => (
                <div className={`ops-log__row ops-log__row--${r.k}`} key={i}>
                  <span className="tv-mono ops-log__t">{r.t}</span>
                  <span className="tv-mono ops-log__m">{r.m}</span>
                </div>
              ))}
            </div>
            <form className="ops-log__input" onSubmit={handleSubmit}>
              <span className="tv-mono ops-log__prompt">on-call@dac:~$</span>
              <input
                placeholder="try: status · uptime · who · runbook binimoy"
                spellCheck="false"
                autoComplete="off"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <span className="tv-mono ops-log__hint">↵</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
