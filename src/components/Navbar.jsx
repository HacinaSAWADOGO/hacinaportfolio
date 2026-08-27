import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil', id: 'accueil' },
  { label: 'À propos', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Projets', href: '#projets', id: 'projets' },
  { label: 'Compétences', href: '#competences', id: 'competences' },
  { label: 'Témoignages', href: '#temoignages', id: 'temoignages' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Detect header scrolling shrink
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Intersection observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger near center screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    NAV_LINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#accueil" className="navbar-logo">
          <span>HS</span>
          <span className="logo-dot"></span>
        </a>

        {/* Central Capsule Menu */}
        <nav className="nav-bubble">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions (Decorative Search & Burger) */}
        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Recherche" title="Recherche">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Burger Menu for Mobile */}
          <button 
            className="icon-btn mobile-nav-toggle" 
            onClick={toggleMenu}
            aria-label="Menu principal"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link, idx) => (
          <a 
            key={idx} 
            href={link.href} 
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
