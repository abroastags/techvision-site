const PRINCIPLES = [
  { n: '01', name: 'Same team ships and runs.',
    body: 'The engineer who picks up the pager wrote the code. No hand-off to a different ops org after launch.' },
  { n: '02', name: 'Specifics over slogans.',
    body: 'Every claim is backed by a named project. We will tell you the client, the SLA, and what the system actually does.' },
  { n: '03', name: 'Built once, runs for a decade.',
    body: 'Architectures that survive the busy hour. We optimise for the system still working in year ten, not for the demo on day one.' },
  { n: '04', name: 'Operations is a first-class engineering practice.',
    body: 'Runbooks live with the code. The pager rotates through the team. We answer the phone at 3am.' },
  { n: '05', name: 'No surprise integrations.',
    body: 'When something fails, the failure boundary is the same as the deploy boundary. No third-party agents in the request path we cannot read.' },
];

export default function AboutPrinciples() {
  return (
    <section className="tv-section about-principles">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">03</span>
        <h2 className="tv-section-break__title">How we work</h2>
        <span className="tv-mono tv-section-break__meta">five principles · zero exceptions</span>
      </header>

      <div className="about-principles__list">
        {PRINCIPLES.map(p => (
          <article className="about-principles__row" key={p.n}>
            <span className="tv-mono about-principles__num">{p.n}</span>
            <div className="about-principles__body">
              <h3 className="about-principles__name">{p.name}</h3>
              <p>{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
