import { useState, useEffect, useSyncExternalStore } from 'react';
import markImg from '/assets/techvision-mark.png';
import { getAppliedTheme, setTheme, subscribeTheme } from '../theme.js';

const links = [
  { id: 'work',    href: '/#work',       label: 'Work' },
  { id: 'do',      href: '/#do',         label: 'What we do' },
  { id: 'ops',     href: '/#ops',        label: 'Operations' },
  { id: 'about',   href: '/about.html',  label: 'About' },
];

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getAppliedTheme, getAppliedTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`tv-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="/" className="tv-nav__brand" aria-label="techvision home">
        <img src={markImg} alt="" width="44" height="44" />
        <span>techvision</span>
      </a>
      <nav className="tv-nav__links" aria-label="Primary">
        {links.map(l => (
          <a key={l.id} href={l.href} className={activeSection === l.id ? 'is-active' : ''}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="tv-nav__spacer" />
      <div className="tv-nav__status" title="Live status">
        <span className="tv-status-dot tv-status-dot--ok" />
        <span className="tv-mono">All systems · 99.997%</span>
      </div>
      <button
        type="button"
        className="tv-theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode'}
        title={theme === 'dark' ? 'Light mode' : 'Night mode'}
      >
        <svg className="tv-theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
        </svg>
        <svg className="tv-theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
      <a href="/#contact" className="tv-btn tv-btn--primary tv-btn--sm">
        Start a project <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}
