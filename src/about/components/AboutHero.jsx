export default function AboutHero() {
  return (
    <section id="top" className="tv-hero about-hero">
      <div className="tv-hero__grid" aria-hidden="true" />
      <div className="tv-section">
        <div className="tv-eyebrow tv-hero__eyebrow">About · Dhaka · est. 2009 · still on-call</div>
        <h1 className="tv-hero__claim about-hero__claim">
          We build the systems<br />other systems depend on.
        </h1>
        <div className="about-hero__proof">
          <p>
            TechVision is a Dhaka software firm. We build full-lifecycle systems for{' '}
            <b>governments, banks, utilities, hospitals,</b> and a Major League Baseball franchise —
            and we operate them, around the clock, from Banani.
          </p>
          <p className="about-hero__sub">
            Sixteen years, seven systems under management, one on-call rota.
            The engineer who picks up the phone at 3am is on the team that shipped the code.
          </p>
        </div>
      </div>
    </section>
  );
}
