import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import hacinaPhoto from '../assets/hacina.jpg';

export default function About() {
  const stats = [
    { number: '3+', label: "Années d'expérience" },
    { number: '50+', label: 'Projets réalisés' },
    { number: '30+', label: 'Clients satisfaits' },
    { number: '10+', label: 'Formations animées' }
  ];

  return (
    <section id="about">
      <div className="bg-wave-container">
        <div className="bg-wave" style={{ width: '400px', height: '400px', top: '10%', left: '-5%' }} />
      </div>
      
      <div className="app-container">
        <SectionHeader 
          badge="À propos de moi"
          title="Mon parcours & profil professionnel"
          subtitle="Découvrez comment j'allie ingénierie et créativité pour donner vie à vos projets numériques."
        />
        
        <div className="about-grid">
          {/* Left: Professional Photo */}
          <div className="about-photo-wrapper">
            <div className="about-photo-frame">
              <img 
                src={hacinaPhoto} 
                alt="Hacina Sawadogo en réunion professionnelle" 
                className="about-photo"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right: Bio and Profile */}
          <div className="about-content">
            <p className="about-bio">
              Je suis <strong>Hacina Sawadogo</strong>, une professionnelle multi-potentielle combinant une expertise technique rigoureuse et une créativité multimédia poussée. Diplômée en tant qu'<strong>Ingénieure des travaux en réseaux informatiques et télécommunications</strong>, je maîtrise les aspects fondamentaux des infrastructures technologiques et des systèmes connectés.
            </p>
            
            <p className="about-bio">
              Passionnée par la création numérique, j'ai évolué en tant que <strong>vidéaste</strong>, <strong>créatrice de contenu</strong> et <strong>formatrice spécialisée en Intelligence Artificielle</strong>. J'accompagne les marques, entreprises et particuliers dans leur croissance en créant des campagnes publicitaires vidéo dynamiques et en développant des sites web et des portfolios modernes et interactifs.
            </p>
            
            <p className="about-bio">
              Mon objectif principal est de démystifier l'IA et de l'intégrer au cœur de vos processus de création de contenus pour maximiser l'impact de votre communication visuelle.
            </p>
            
            {/* Stats Card Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Action Download CV */}
            <div>
              <Button variant="primary" onClick={() => window.open('#', '_blank')}>
                <span>Télécharger mon CV</span>
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
