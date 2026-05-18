import { useEffect, useState } from 'react';
import markWhite from '/assets/techvision-mark-white.png';

function formatDhakaClock() {
  const now = new Date();
  const dhakaMs = now.getTime() + (now.getTimezoneOffset() + 6 * 60) * 60000;
  const d = new Date(dhakaMs);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export default function OpsNav() {
  const [time, setTime] = useState(formatDhakaClock());

  useEffect(() => {
    const id = setInterval(() => setTime(formatDhakaClock()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="ops-nav">
      <a href="#" className="ops-nav__brand">
        <img src={markWhite} alt="" width="22" height="22" />
        <span>techvision</span>
        <span className="ops-nav__build tv-mono">v26.05.r49</span>
      </a>
      <nav className="ops-nav__links">
        <a href="#" className="is-active">Operations</a>
        <a href="#">Systems</a>
        <a href="#">Practice</a>
        <a href="#">Company</a>
        <a href="#">Engineering log</a>
      </nav>
      <div className="ops-nav__rail">
        <div className="ops-rail-item">
          <span className="tv-mono ops-rail-item__l">DHAKA HQ</span>
          <span className="ops-rail-item__v tv-mono">{time}</span>
        </div>
        <div className="ops-rail-item">
          <span className="tv-mono ops-rail-item__l">ON-CALL</span>
          <span className="ops-rail-item__v">N. RAHMAN</span>
        </div>
        <div className="ops-rail-item">
          <span className="tv-mono ops-rail-item__l">STATUS</span>
          <span className="ops-rail-item__v ops-rail-item__v--ok">
            <span className="tv-status-dot tv-status-dot--ok" />
            ALL SYSTEMS
          </span>
        </div>
      </div>
    </header>
  );
}
