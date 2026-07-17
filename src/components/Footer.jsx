export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="wordmark wordmark--footer">
          <span className="wordmark__main">AWWADCO</span>
          <span className="wordmark__est">Est. 1967 &middot; Palestine</span>
        </div>

        <div className="site-footer__links">
          <a href="#about">About</a>
          <a href="#chapter">New Chapter</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="site-footer__phones">
          <a href="tel:+970597939251">+970 59 793 9251</a>
          <a href="tel:+97022727006">+970 2 272 7006</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>&copy; {year} AWWADCO PS. All rights reserved.</p>
      </div>
    </footer>
  );
}
