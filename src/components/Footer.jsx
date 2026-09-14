export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="wordmark wordmark--footer">
            <span className="wordmark__main">AWWADCO</span>
            <span className="wordmark__est">Est. 1967 &middot; Palestine</span>
          </div>
          <p className="site-footer__tagline">
            A trusted name in Palestinian healthcare since 1967, now advancing
            the practice of aesthetic medicine.
          </p>
        </div>

        <nav className="site-footer__col">
          <h4 className="site-footer__title">Navigate</h4>
          <a href="#about">About</a>
          <a href="#chapter">New Chapter</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="site-footer__col">
          <h4 className="site-footer__title">Contact</h4>
          <a href="tel:+970598973622">+970 59 897 3622</a>
          <a href="tel:+97022727006">+970 2 272 7006</a>
          <a href="mailto:awwadcopalestine@gmail.com">awwadcopalestine@gmail.com</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {year} AWWADCO PS. All rights reserved.</p>
      </div>
    </footer>
  );
}
