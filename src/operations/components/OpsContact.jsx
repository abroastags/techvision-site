import { useState } from 'react';

export default function OpsContact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', severity: 'P0 · system down', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section className="ops-contact">
      <div className="ops-shell">
        <div className="ops-section-break">
          <span className="ops-eyebrow">
            <span className="ops-eyebrow__mark">▾</span>
            SECTION 07 · OPEN A TICKET
          </span>
          <span className="tv-mono ops-section-break__meta">
            Reply SLA · 1 business day · 24/7 for P0
          </span>
        </div>

        <div className="ops-contact__layout">
          <div className="ops-contact__pitch-col">
            <h2 className="ops-contact__pitch">Tell us what needs to keep running.</h2>
            <p>
              Payments rail, citizen app, compliance pipeline, clinical tool —
              real engineers reply, not a chatbot. P0/P1 wakes the on-call.
            </p>
            <div className="ops-contact__addr tv-mono">
              <div>
                <span className="ops-contact__addr-l">DHAKA HQ</span>
                <span>  House 14, Road 27, Banani · 1213</span>
              </div>
              <div>
                <span className="ops-contact__addr-l">NEW YORK</span>
                <span>  40 Wall St., Floor 28 · 10005</span>
              </div>
              <div>
                <span className="ops-contact__addr-l">DIRECT</span>
                <span>    +880 2 555 0144</span>
              </div>
              <div>
                <span className="ops-contact__addr-l">EMAIL</span>
                <span>     hello@techvision.dev · pgp on request</span>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="ops-contact__sent">
              <span className="tv-mono">▾ TICKET OPENED · TV-{Math.floor(Math.random()*8999+1000)}</span>
              <h3>Got it, {form.name.split(' ')[0]}.</h3>
              <p>
                Severity <span className="tv-mono">{form.severity.split(' ')[0]}</span>.
                An engineer will reach you at <span className="tv-mono">{form.email}</span> within
                one business day. P0 already paged the on-call.
              </p>
              <button className="ops-3am__btn" onClick={() => { setSent(false); setForm({ name: '', email: '', org: '', severity: 'P0 · system down', message: '' }); }}>
                Open another ticket
              </button>
            </div>
          ) : (
            <form className="ops-contact__form" onSubmit={submit}>
              <div className="ops-field">
                <label>Name</label>
                <input value={form.name} onChange={e => update('name', e.target.value)} required />
              </div>
              <div className="ops-field">
                <label>Email</label>
                <input type="email" value={form.email} onChange={e => update('email', e.target.value)} required />
              </div>
              <div className="ops-field">
                <label>Organisation</label>
                <input value={form.org} onChange={e => update('org', e.target.value)} />
              </div>
              <div className="ops-field">
                <label>Severity</label>
                <select value={form.severity} onChange={e => update('severity', e.target.value)}>
                  <option>P0 · system down</option>
                  <option>P1 · degraded</option>
                  <option>P2 · question</option>
                  <option>P3 · planning</option>
                </select>
              </div>
              <div className="ops-field ops-field--wide">
                <label>What needs to keep running</label>
                <textarea
                  rows="5"
                  placeholder="Shape of the system, who depends on it, what 'down' costs."
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  required
                />
              </div>
              <div className="ops-contact__submit">
                <button className="ops-3am__btn" type="submit">Open ticket →</button>
                <span className="tv-mono ops-contact__hint">
                  P0 wakes the on-call · all replies signed
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
