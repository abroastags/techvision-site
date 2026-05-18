const CHAPTERS = [
  { year: '2009',
    title: 'Started in Banani.',
    body: 'Two engineers and one promise — if the system has to work, we want to build it. First contract: an internal reconciliation tool for a Dhaka power utility.' },
  { year: '2014',
    title: 'First national-scale deploy.',
    body: 'Won the ERP rebuild for the Power Division. What started at one organisation now runs at fifteen.' },
  { year: '2018',
    title: 'New York desk opens.',
    body: 'Took on AML and CRA compliance work for our first US bank. Hung a sign at 40 Wall Street and stayed.' },
  { year: '2022',
    title: 'Binimoy goes live.',
    body: 'The country\'s interoperable digital transaction platform — banks, MFS, PSPs on the same rails. We own the reference implementation.' },
  { year: '2024',
    title: 'Imaging at the NCC.',
    body: 'On-prem cardiac AI for the National Cardiovascular Center. No patient data leaves the hospital.' },
  { year: 'now',
    title: 'Still answering the phone.',
    body: 'Seven systems under management. One on-call rota. Same engineers who shipped the code.' },
];

export default function AboutStory() {
  return (
    <section className="tv-section about-story">
      <header className="tv-section-break">
        <span className="tv-mono tv-section-break__num">01</span>
        <h2 className="tv-section-break__title">How we got here</h2>
        <span className="tv-mono tv-section-break__meta">2009 → present</span>
      </header>

      <div className="about-story__intro">
        <p className="tv-lede">
          We started writing code that other systems depend on. We have not stopped.
        </p>
      </div>

      <ol className="about-story__list">
        {CHAPTERS.map(c => (
          <li className="about-story__item" key={c.year}>
            <div className="about-story__year tv-mono">{c.year}</div>
            <div className="about-story__body">
              <h3 className="about-story__title">{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
