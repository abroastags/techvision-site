import { useState } from 'react';

const TICKET_BASE = Math.floor(Math.random() * 8999 + 1000);
const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbywKA9azL0NT_Nh4IRnIl9_hu8XNR8CzzJ3VzUpu4me_exugXRtOAU4aqxMqY3rXE8QsQ/exec';

export default function ContactBlock() {
  const [form, setForm] = useState({ name: '', email: '', org: '', project: 'erp', message: '', oncall: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = 'Required.';
    if (!form.email.match(/.+@.+\..+/)) err.email = 'Need a real email.';
    if (!form.message.trim()) err.message = 'One sentence is fine.';
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setSubmitting(true);
    try {
      await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...form, userAgent: navigator.userAgent }),
      });
    } catch (_) {
      /* no-cors fire-and-forget — the request still reaches Apps Script */
    }
    setSubmitting(false);
    setSent(true);
  };

  if (sent) {
    return (
      <section id="contact" className="tv-section tv-contact">
        <header className="tv-section-break">
          <span className="tv-mono tv-section-break__num">04</span>
          <h2 className="tv-section-break__title">Start a project</h2>
        </header>
        <div className="tv-contact__confirm">
          <div className="tv-eyebrow"><span aria-hidden="true">▾</span><span>Received · ticket TV-{TICKET_BASE}</span></div>
          <h3 className="tv-contact__confirm-title">Thanks, {form.name.split(' ')[0]}. We'll be in touch within one business day.</h3>
          <p>If it's urgent, the pager is <span className="tv-mono">+880 2 — answered 24/7</span>.</p>
          <button type="button" className="tv-btn tv-btn--ghost"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', org: '', project: 'erp', message: '', oncall: false }); }}>
            Send another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="tv-section tv-contact">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">04</span>
        <h2 className="tv-section-break__title">Start a project</h2>
        <span className="tv-mono tv-section-break__meta">we read every one</span>
      </header>

      <div className="tv-contact__layout">
        <div className="tv-contact__left">
          <h3 className="tv-contact__pitch">If it has to work,<br />we want to build it.</h3>
          <p className="tv-contact__sub">One sentence about what you need is enough to start. We'll reply with a real engineer, not a sales rep.</p>
          <div className="tv-contact__addr">
            <div><span className="tv-mono">Dhaka</span><br />House 42, Road 11, Banani</div>
            <div><span className="tv-mono">New York</span><br />By appointment · Midtown</div>
          </div>
        </div>

        <form className="tv-contact__form" onSubmit={submit} noValidate>
          <div className="tv-field">
            <label htmlFor="cn">Name</label>
            <input id="cn" type="text" value={form.name} onChange={e => update('name', e.target.value)} aria-invalid={!!errors.name} />
            {errors.name && <span className="tv-field__error">{errors.name}</span>}
          </div>
          <div className="tv-field">
            <label htmlFor="ce">Email</label>
            <input id="ce" type="email" value={form.email} onChange={e => update('email', e.target.value)} aria-invalid={!!errors.email} />
            {errors.email && <span className="tv-field__error">{errors.email}</span>}
          </div>
          <div className="tv-field">
            <label htmlFor="co">Organisation</label>
            <input id="co" type="text" value={form.org} onChange={e => update('org', e.target.value)} placeholder="optional" />
          </div>
          <div className="tv-field">
            <label htmlFor="cp">What needs to work</label>
            <select id="cp" value={form.project} onChange={e => update('project', e.target.value)}>
              <option value="erp">ERP / back-office</option>
              <option value="compliance">Banking compliance</option>
              <option value="chain">Blockchain / settlement</option>
              <option value="ai">Clinical AI</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div className="tv-field tv-field--wide">
            <label htmlFor="cm">One sentence is fine.</label>
            <textarea id="cm" rows="3" value={form.message} onChange={e => update('message', e.target.value)} aria-invalid={!!errors.message} />
            {errors.message && <span className="tv-field__error">{errors.message}</span>}
          </div>
          <label className="tv-checkbox tv-field--wide">
            <input type="checkbox" checked={form.oncall} onChange={e => update('oncall', e.target.checked)} />
            <span className="tv-checkbox__box" aria-hidden="true"><span /></span>
            <span>I need on-call coverage included</span>
          </label>
          <div className="tv-field--wide tv-contact__submit">
            <button className="tv-btn tv-btn--primary" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : <>Send <span aria-hidden="true">→</span></>}
            </button>
            <span className="tv-mono tv-contact__hint">We reply within one business day.</span>
          </div>
        </form>
      </div>
    </section>
  );
}
