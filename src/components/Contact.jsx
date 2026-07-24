const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <p className="kicker">Contact Us</p>
        <h2 className="contact__heading">Let&rsquo;s start a conversation.</h2>
        <p className="contact__lede">
          Reach out by phone, WhatsApp, or email — our team is ready to help.
        </p>

        <div className="contact-panel">
          <div className="contact-row">
            <span className="contact-row__icon"><PhoneIcon /></span>
            <div className="contact-row__info">
              <span className="contact-row__label">Mobile</span>
              <a href="tel:+970598973622" className="contact-row__value">+970 59 897 3622</a>
            </div>
            <div className="contact-row__actions">
              <a href="tel:+970598973622" className="btn btn--brass btn--sm">Call</a>
              <a
                href="https://wa.me/970598973622"
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost-dark btn--sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-row__icon"><PhoneIcon /></span>
            <div className="contact-row__info">
              <span className="contact-row__label">Office</span>
              <a href="tel:+97022727006" className="contact-row__value">+970 2 272 7006</a>
            </div>
            <div className="contact-row__actions">
              <a href="tel:+97022727006" className="btn btn--brass btn--sm">Call</a>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-row__icon"><MailIcon /></span>
            <div className="contact-row__info">
              <span className="contact-row__label">Email</span>
              <a href="mailto:awwadcopalestine@gmail.com" className="contact-row__value contact-row__value--email">
                awwadcopalestine@gmail.com
              </a>
            </div>
            <div className="contact-row__actions">
              <a href="mailto:awwadcopalestine@gmail.com" className="btn btn--brass btn--sm">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
