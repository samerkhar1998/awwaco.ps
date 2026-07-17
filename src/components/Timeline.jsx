const MILESTONES = [
  {
    year: '1967',
    title: 'The Founding',
    text: 'Nicola Awwad and George Awwad establish AWWADCO PS.',
  },
  {
    year: '1967–98',
    title: 'Trusted Partner',
    text: 'Decades of pharmaceutical distribution, medical storage, and dependable logistics.',
  },
  {
    year: '2026',
    title: 'A New Chapter',
    text: 'Relaunch into medical aesthetics — heritage meets innovation.',
  },
];

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="container timeline__inner">
        {MILESTONES.map((m, i) => (
          <div className="timeline__item" key={m.year}>
            <span className="timeline__year">{m.year}</span>
            <span className="timeline__dot" />
            <h3 className="timeline__title">{m.title}</h3>
            <p className="timeline__text">{m.text}</p>
            {i < MILESTONES.length - 1 && <span className="timeline__connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}
