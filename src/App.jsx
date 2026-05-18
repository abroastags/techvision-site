import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import StatusTicker from './components/StatusTicker.jsx';
import WorkGrid from './components/WorkGrid.jsx';
import Capabilities from './components/Capabilities.jsx';
import ThreeAm from './components/ThreeAm.jsx';
import ProofRow from './components/ProofRow.jsx';
import ContactBlock from './components/ContactBlock.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const ids = ['work', 'do', 'ops', 'company'];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Header activeSection={active} />
      <Hero />
      <StatusTicker />
      <WorkGrid />
      <Capabilities />
      <ThreeAm />
      <ProofRow />
      <ContactBlock />
      <Footer />
    </>
  );
}
