import { useState } from 'react';

const EMAIL = 'hello@techvision.com.bd';
const SUBJECT = 'About TechVision — quick question';
const BODY = 'Hi TechVision,\n\nI saw the About page and wanted to reach out about ';

export default function AboutContact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the address is still visible on screen */
    }
  };

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  return (
    <section id="contact" className="tv-section about-contact">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">04</span>
        <h2 className="tv-section-break__title">Get in touch</h2>
        <span className="tv-mono tv-section-break__meta">real engineers reply · not a chatbot</span>
      </header>

      <div className="about-contact__layout">
        <div className="about-contact__copy">
          <h3 className="about-contact__pitch">
            Drop us a line.
          </h3>
          <p>
            For a project, a question, or a press inquiry — write to the address on the right.
            We read every message and reply within one business day. P0 wakes the on-call rota.
          </p>
          <p className="about-contact__sub tv-mono">
            Hiring? Send your CV to the same address with subject line "engineering".
          </p>
        </div>

        <div className="about-contact__card">
          <span className="tv-eyebrow about-contact__label">Placeholder email · update before launch</span>

          <a href={mailto} className="about-contact__email">
            {EMAIL}
          </a>

          <div className="about-contact__actions">
            <a href={mailto} className="tv-btn tv-btn--primary">
              Send an email <span aria-hidden="true">→</span>
            </a>
            <button type="button" className="tv-btn tv-btn--ghost" onClick={handleCopy}>
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>

          <div className="about-contact__meta tv-mono">
            <div>
              <span className="about-contact__meta-l">Dhaka HQ</span>
              <span>House 42, Road 11, Banani</span>
            </div>
            <div>
              <span className="about-contact__meta-l">New York</span>
              <span>By appointment · Midtown</span>
            </div>
            <div>
              <span className="about-contact__meta-l">Pager</span>
              <span>+880 2 — answered 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
