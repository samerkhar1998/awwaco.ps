import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#chapter', label: 'New Chapter' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="wordmark">
          <span className="wordmark__main">AWWADCO</span>
          <span className="wordmark__est">Est. 1967 &middot; Palestine</span>
        </a>

        <nav className="site-nav site-nav--desktop">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a href="tel:+970598973622" className="btn btn--brass site-header__cta">
          Call Us
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="site-nav site-nav--mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="tel:+970598973622" className="btn btn--brass" onClick={() => setMenuOpen(false)}>
            Call Us
          </a>
        </nav>
      )}
    </header>
  );
}
