import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

// ==========================================
// CONFIGURATION : AJOUTEZ OU MODIFIEZ LES PROJETS ICI
// ==========================================
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Spot Publicitaire - Fanta",
    category: "Publicités",
    desc: "Production d'une vidéo publicitaire dynamique pour réseaux sociaux avec effets visuels de transition rapides et montage sonore rythmé.",
    details: "Ce projet consistait à réaliser un spot vidéo de 30 secondes pour le lancement d'une nouvelle gamme de saveurs. J'ai géré le storyboarding, le montage et le sound design pour maximiser la rétention d'audience.",
    accent: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
  },
  {
    id: 2,
    title: "Campagne IA - DS DigitalTech",
    category: "IA",
    desc: "Création d'une campagne de communication visuelle complète avec des visuels générés par IA et des avatars animés.",
    details: "Utilisation de Midjourney et Stable Diffusion pour la création des personnages, puis D-ID pour l'animation de porte-paroles IA dans le but d'introduire les nouveaux services de l'entreprise.",
    accent: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
  },
  {
    id: 3,
    title: "Série TikTok - Recettes Faciles",
    category: "Création de contenu",
    desc: "Création et gestion d'une série de courtes vidéos verticales optimisées pour les algorithmes TikTok et Instagram Reels.",
    details: "Production de 15 formats courts (Reels/TikTok) ayant généré plus de 100 000 vues cumulées. Scénarisation basée sur des crochets d'attention de 3 secondes et un montage visuel ultra-rapide.",
    accent: "linear-gradient(135deg, #f1a7c4 0%, #fed6e3 100%)"
  },
  {
    id: 4,
    title: "Identity Branding & Graphic Design",
    category: "Design",
    desc: "Refonte de charte graphique, logos, et supports marketing numériques pour une marque locale de cosmétiques.",
    details: "Conception d'une nouvelle palette de couleurs, typographie de marque et templates réutilisables pour les publications Instagram et brochures publicitaires.",
    accent: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"
  },
  {
    id: 5,
    title: "Site Web - Cabinet Médical",
    category: "IA", // Fits web creation under IA or Design
    desc: "Développement d'un site web complet avec prise de rendez-vous en ligne, conçu à l'aide d'outils de codage assistés par IA.",
    details: "Développement front-end avec React, stylisé avec des transitions fluides. Intégration d'un calendrier interactif et optimisation SEO complète pour le référencement local.",
    accent: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
  },
  {
    id: 6,
    title: "Vidéo Motion Design - Concept Tech",
    category: "Vidéos",
    desc: "Animation de concepts informatiques réseaux complexes pour une vulgarisation professionnelle claire et dynamique.",
    details: "Création de graphismes vectoriels animés (motion design) pour expliquer le fonctionnement des protocoles de routage et de cybersécurité réseaux.",
    accent: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)"
  }
];

const CATEGORIES = ["Tous", "Vidéos", "Publicités", "IA", "Création de contenu", "Design"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedCategory === "Tous"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === selectedCategory);

  return (
    <section id="projets">
      <div className="bg-wave-container">
        <div className="bg-wave" style={{ width: '450px', height: '450px', bottom: '10%', right: '-5%' }} />
      </div>

      <div className="app-container">
        <SectionHeader 
          badge="Mes réalisations"
          title="Mes projets récents"
          subtitle="Explorez une sélection de mes derniers travaux en vidéo, intelligence artificielle et création numérique."
        />

        {/* Filter Navigation Tabs */}
        <div className="projects-filter-bar">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid cards */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Image Preview - Gradient pattern representing digital work */}
              <div className="project-img-wrapper" style={{ background: project.accent }}>
                <span className="project-category-badge">{project.category}</span>
                
                {/* Abstract overlay icon */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.4)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>

              {/* Information Content */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <button 
                  className="project-btn-detail"
                  onClick={() => setActiveProjectModal(project)}
                >
                  <span>En savoir plus</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal Popup */}
      {activeProjectModal && (
        <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal header visual decoration */}
            <div className="modal-header" style={{ background: activeProjectModal.accent }}>
              <button 
                className="modal-close-btn" 
                onClick={() => setActiveProjectModal(null)}
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.45)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
            </div>

            {/* Modal description content */}
            <div className="modal-body">
              <span className="modal-tag">{activeProjectModal.category}</span>
              <h3 className="modal-title">{activeProjectModal.title}</h3>
              <p className="modal-desc">{activeProjectModal.details}</p>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    setActiveProjectModal(null);
                    document.getElementById('contact')?.scrollIntoView();
                  }}
                >
                  Discuter de ce projet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
