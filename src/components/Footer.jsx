import React from 'react';

export default function Footer() {
  const footerLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projets', href: '#projets' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="app-container">
        {/* Footer Brand Logo */}
        <a href="#accueil" className="footer-logo">
          <span>HS</span>
          <span className="logo-dot"></span>
        </a>

        {/* Footer Navigation menu */}
        <nav className="footer-nav">
          {footerLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hacina Sawadogo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
