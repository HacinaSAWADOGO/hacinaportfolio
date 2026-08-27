import React from 'react';
import SectionHeader from './SectionHeader';

// ==========================================
// CONFIGURATION : MODIFIEZ OU AJOUTEZ LES TÉMOIGNAGES ICI
// ==========================================
const TESTIMONIALS_DATA = [
  {
    name: "Aminata K.",
    role: "Directrice Marketing",
    initials: "AK",
    rating: 5,
    text: "Hacina a réalisé une vidéo publicitaire exceptionnelle pour notre marque. Très professionnelle, créative et à l'écoute, nous retravaillerons ensemble à coup sûr !"
  },
  {
    name: "Ibrahim T.",
    role: "Créateur de Contenu",
    initials: "IT",
    rating: 5,
    text: "Grâce à sa formation en création vidéo IA, j'ai automatisé beaucoup de tâches complexes et gagné un temps précieux dans ma production de contenu TikTok."
  },
  {
    name: "Salimata D.",
    role: "Responsable E-commerce",
    initials: "SD",
    rating: 5,
    text: "Un travail de qualité, livré dans les délais. Avec ses compétences en web et IA, Hacina a su créer un portfolio interactif et moderne qui reflète parfaitement notre vision."
  }
];

export default function Testimonials() {
  return (
    <section id="temoignages">
      <div className="bg-wave-container">
        <div className="bg-wave" style={{ width: '450px', height: '450px', top: '10%', right: '-10%' }} />
      </div>

      <div className="app-container">
        <SectionHeader 
          badge="Ils me font confiance"
          title="Témoignages de mes clients"
          subtitle="Voici ce que disent mes clients et partenaires sur notre collaboration et l'impact de nos réalisations."
        />

        <div className="testimonials-slider">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              {/* Giant quote background decoration */}
              <div className="testimonial-quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem', color: '#ffc107' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="testimonial-text">
                "{t.text}"
              </p>

              {/* Author Info */}
              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.initials}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
