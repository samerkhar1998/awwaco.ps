import founders from '../assets/images/founders.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="kicker">About Us</p>
          <h2 className="about__heading">AWWADCO PS</h2>

          <p>
            Founded in 1967 by <strong>Nicola Awwad</strong> and <strong>George Awwad</strong>,
            AWWADCO PS has been a trusted name in the healthcare sector for nearly six decades.
          </p>

          <p>
            From 1967 to 1998, the company built a strong reputation in pharmaceutical
            distribution and medical storage, providing reliable logistics and supply chain
            solutions while serving as a trusted partner to healthcare providers.
          </p>
        </div>

        <figure className="photo-frame about__photo">
          <img src={founders} alt="Founders George Awwad and Nicola Awwad" />
          <figcaption>George Awwad &amp; Nicola Awwad, Founders</figcaption>
        </figure>
      </div>
    </section>
  );
}
