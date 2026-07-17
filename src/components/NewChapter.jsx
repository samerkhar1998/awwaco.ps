const PILLARS = [
  {
    title: 'Aesthetic Products',
    text: 'Innovative aesthetic products selected for quality and performance.',
  },
  {
    title: 'Advanced Technologies',
    text: 'Bringing forward-thinking aesthetic technologies to the region.',
  },
  {
    title: 'Educational Support',
    text: 'Ongoing training and support for healthcare professionals.',
  },
];

export default function NewChapter() {
  return (
    <section id="chapter" className="new-chapter">
      <div className="container new-chapter__inner">
        <p className="kicker kicker--light">2026 &middot; A New Chapter</p>
        <h2 className="new-chapter__heading">
          Expanding our vision into medical aesthetics.
        </h2>
        <p className="new-chapter__lede">
          Building on a legacy of quality, integrity, and professional service, AWWADCO PS now
          focuses on delivering innovative aesthetic products, advanced technologies, and
          educational support to healthcare professionals.
        </p>

        <div className="new-chapter__pillars">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="new-chapter__quote">
          &ldquo;Today, AWWADCO PS combines the strength of its heritage with a
          forward-looking approach &mdash; committed to excellence, innovation, and
          long-term partnerships in the evolving world of aesthetic medicine.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
