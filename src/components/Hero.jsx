import building from '../assets/images/awwadco-building.jpg';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <img src={building} alt="The original AWWADCO building, Palestine" />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <p className="kicker kicker--light">Medical Aesthetics &middot; Palestine</p>
        <h1 className="hero__title">
          Nearly six decades of trusted care, now shaping the future of aesthetic medicine.
        </h1>
        <p className="hero__subtitle">
          Founded in 1967, AWWADCO PS has served healthcare providers across Palestine
          with reliability and integrity &mdash; and in 2026, begins a new chapter.
        </p>
        <div className="hero__actions">
          <a href="tel:+970598973622" className="btn btn--light">Call Us</a>
          <a
            href="https://wa.me/970598973622"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
