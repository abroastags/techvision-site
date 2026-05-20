export default function CaseCard({ tag, name, claim, blurb, region, year, metric, metricLabel }) {
  return (
    <article className="tv-case">
      <div className="tv-eyebrow tv-case__eyebrow">{tag}</div>
      <h3 className="tv-case__title">{name}</h3>
      <p className="tv-case__claim">{claim}</p>
      <p className="tv-case__blurb">{blurb}</p>
      <div className="tv-case__meta">
        <span>{region} · {year}</span>
        <span className="tv-case__metric">
          {metricLabel} <b>{metric}</b>
        </span>
      </div>
    </article>
  );
}
