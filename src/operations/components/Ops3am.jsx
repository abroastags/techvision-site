import { useEffect, useState } from 'react';

function formatDhakaTime() {
  const now = new Date();
  const dhakaMs = now.getTime() + (now.getTimezoneOffset() + 6 * 60) * 60000;
  const d = new Date(dhakaMs);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function formatDhakaDate() {
  const now = new Date();
  const dhakaMs = now.getTime() + (now.getTimezoneOffset() + 6 * 60) * 60000;
  const d = new Date(dhakaMs);
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} · DHAKA`;
}

export default function Ops3am() {
  const [time, setTime] = useState(formatDhakaTime());
  const [calling, setCalling] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(formatDhakaTime()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="ops-3am">
      <div className="ops-shell">
        <div className="ops-section-break ops-section-break--paper">
          <span className="ops-eyebrow ops-eyebrow--dark">
            <span className="ops-eyebrow__mark">▾</span>
            SECTION 05 · THE 3AM POSTURE
          </span>
          <span className="tv-mono ops-section-break__meta ops-section-break__meta--dark">
            A short demo
          </span>
        </div>

        <div className="ops-3am__grid">
          <div className="ops-3am__copy">
            <h2 className="ops-3am__claim">If it has to work,<br />we want to build it.</h2>
            <p>
              The engineer who picks up the phone is on the team that shipped the code.
              The runbook was written by the person on the rota. The escalation tree is
              two layers deep.
            </p>
            <p>
              We don't hand off after launch. Same firm, same team, same name on the pager —
              for as long as the system has to run.
            </p>
            <button
              className="ops-3am__btn"
              onClick={() => setCalling(c => !c)}
            >
              {calling ? 'End call' : 'Place a 3am call'}
            </button>
          </div>

          <div className={`ops-3am__phone ${calling ? 'is-calling' : ''}`}>
            <div className="ops-3am__phone-bezel">
              <div className="ops-3am__phone-screen">
                <div className="ops-3am__phone-head tv-mono">
                  <span>+880 2 555 0144</span>
                  <span>{calling ? 'CONNECTING…' : 'DIRECT LINE'}</span>
                </div>
                <div className="ops-3am__phone-idle">
                  <div className="ops-3am__phone-time">{time}</div>
                  <div className="ops-3am__phone-date tv-mono">{formatDhakaDate()}</div>
                  <div className="ops-3am__phone-cta tv-mono">
                    {calling ? 'ringing on-call · N. Rahman' : 'tap "place call" →'}
                  </div>
                </div>
                <div className="ops-3am__phone-keys tv-mono">
                  {Array.from({ length: 6 }).map((_, i) => <span key={i}>·</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
