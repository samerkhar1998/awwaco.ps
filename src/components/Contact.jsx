export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <p className="kicker">Contact Us</p>
        <h2 className="contact__heading">Let&rsquo;s start a conversation.</h2>
        <p className="contact__lede">
          Reach out by phone or WhatsApp — our team is ready to help.
        </p>

        <div className="contact__cards">
          <div className="contact-card">
            <span className="contact-card__label">Mobile</span>
            <a href="tel:+970597939251" className="contact-card__number">
              +970 59 793 9251
            </a>
            <div className="contact-card__actions">
              <a href="tel:+970597939251" className="btn btn--brass">Call</a>
              <a
                href="https://wa.me/970597939251"
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost-dark"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card__label">Office</span>
            <a href="tel:+97022727006" className="contact-card__number">
              +970 2 272 7006
            </a>
            <div className="contact-card__actions">
              <a href="tel:+97022727006" className="btn btn--brass">Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
