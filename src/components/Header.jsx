import { useState, useEffect } from 'react';
import markImg from '/assets/techvision-mark.png';

const links = [
  { id: 'work',    label: 'Work' },
  { id: 'do',      label: 'What we do' },
  { id: 'ops',     label: 'Operations' },
  { id: 'company', label: 'Company' },
];

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`tv-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="tv-nav__brand" aria-label="techvision home">
        <img src={markImg} alt="" width="26" height="26" />
        <span>techvision</span>
      </a>
      <nav className="tv-nav__links" aria-label="Primary">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} className={activeSection === l.id ? 'is-active' : ''}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="tv-nav__spacer" />
      <div className="tv-nav__status" title="Live status">
        <span className="tv-status-dot tv-status-dot--ok" />
        <span className="tv-mono">All systems · 99.997%</span>
      </div>
      <a href="#contact" className="tv-btn tv-btn--primary tv-btn--sm">
        Start a project <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}
