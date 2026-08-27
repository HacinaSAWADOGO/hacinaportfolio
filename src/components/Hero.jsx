import React from 'react';
import Button from './Button';
import hacinaPhoto from '../assets/hacina.jpg';

// ==========================================
// CONFIGURATION : REMPLACEZ LES LIENS CI-DESSOUS PAR VOS VRAIS LIENS
// ==========================================
const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  tiktok: 'https://tiktok.com',
  youtube: 'https://youtube.com'
};

export default function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Info and Text */}
        <div className="hero-col-left">
          <span className="hero-welcome">Bonjour, je suis</span>
          
          <h1 className="hero-name text-gradient">
            Hacina <span className="text-gradient-rose">Sawadogo</span>
          </h1>
          
          <p className="hero-title-scroll">
            Vidéaste | Créatrice de contenu | Formatrice en IA
          </p>
          
          <p className="hero-desc">
            J'aide les marques, entreprises et créateurs de contenu à se démarquer grâce à des vidéos publicitaires percutantes, des identités visuelles uniques et des solutions d'Intelligence Artificielle innovantes.
          </p>
          
          <div className="hero-actions">
            <Button variant="primary" onClick={() => document.getElementById('projets')?.scrollIntoView()}>
              Découvrir mes projets
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Me contacter
            </Button>
          </div>
          
          {/* Social Networks Row */}
          <div className="hero-socials">
            <span className="hero-socials-label">Suivez-moi :</span>
            
            {/* TikTok */}
            <a 
              href={SOCIAL_LINKS.tiktok} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-circle-btn" 
              aria-label="TikTok"
              title="TikTok"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.13 1.25 2.72 1.95 4.4 2.05v3.82c-1.31-.05-2.61-.53-3.65-1.35-.91-.71-1.57-1.74-1.87-2.83-.1-.08-.12-.07-.12.06-.06 2.37-.03 4.75-.05 7.12-.02 1.13-.19 2.27-.61 3.32-.93 2.3-3.08 3.98-5.54 4.19-2.22.18-4.52-.72-5.74-2.58-1.22-1.8-1.23-4.27-.03-6.07 1.04-1.61 2.82-2.63 4.74-2.67.24-.01.48-.01.72.02v3.74c-1.04.14-1.99.78-2.45 1.72-.51 1.01-.39 2.3.31 3.19.78.96 2.11 1.28 3.23.77 1.01-.45 1.67-1.51 1.71-2.61.04-2.31.02-4.63.03-6.94.01-3.23.01-6.46.01-9.69-.36-.02-.73-.02-1.09-.01z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href={SOCIAL_LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-circle-btn" 
              aria-label="YouTube"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-circle-btn" 
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-circle-btn" 
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href={SOCIAL_LINKS.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-circle-btn" 
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9h-2.5V12H10V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.9l-.5 2.9H13v6.9c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Styled Photo Composition */}
        <div className="hero-col-right">
          {/* Abstract wavy decorative circles around the photo */}
          <div className="hero-shapes-container">
            <div className="shape-circle-large anim-float" />
            <div className="shape-circle-small anim-float-rev" />
          </div>
          
          {/* Photo frame shaped like an arched dome */}
          <div className="photo-composer">
            <img 
              src={hacinaPhoto} 
              alt="Hacina Sawadogo" 
              className="hacina-photo-hero"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
