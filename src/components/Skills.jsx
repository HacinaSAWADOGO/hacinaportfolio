import React from 'react';
import SectionHeader from './SectionHeader';

// ==========================================
// CONFIGURATION : MODIFIEZ LES POURCENTAGES OU COMPÉTENCES ICI
// ==========================================
const TECHNICAL_SKILLS = [
  { name: "Montage vidéo & Post-production", percentage: "90%" },
  { name: "Création vidéo publicitaire & IA", percentage: "92%" },
  { name: "Prompt Engineering & Solutions IA", percentage: "88%" },
  { name: "Création de contenu Reels / TikTok", percentage: "90%" },
  { name: "Vibe Coding & Portfolios", percentage: "85%" },
  { name: "Réseaux Informatiques & Télécoms", percentage: "80%" }
];

const TOOLS_SOFTWARE = [
  { name: "Premiere Pro", abbreviation: "Pr" },
  { name: "After Effects", abbreviation: "Ae" },
  { name: "Photoshop", abbreviation: "Ps" },
  { name: "CapCut", abbreviation: "Cc" },
  { name: "ChatGPT", abbreviation: "Gp" },
  { name: "Claude AI", abbreviation: "Cl" },
  { name: "Midjourney", abbreviation: "Mj" },
  { name: "Canva", abbreviation: "Cv" },
  { name: "VS Code", abbreviation: "Vs" },
  { name: "Figma", abbreviation: "Fi" }
];

export default function Skills() {
  return (
    <section id="competences" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="bg-wave-container">
        <div className="bg-wave" style={{ width: '400px', height: '400px', top: '15%', left: '-5%' }} />
      </div>

      <div className="app-container">
        <SectionHeader 
          badge="Mes compétences"
          title="Mon expertise technique & créative"
          subtitle="Découvrez mes domaines de spécialisation ainsi que la liste des logiciels et outils IA que je maîtrise au quotidien."
        />

        <div className="skills-grid">
          {/* Left Column: Progress Bars */}
          <div className="skills-col-bars">
            <h3 className="skills-subtitle">Compétences techniques</h3>
            
            {TECHNICAL_SKILLS.map((skill, idx) => (
              <div key={idx} className="skill-bar-wrapper">
                <div className="skill-label-row">
                  <span>{skill.name}</span>
                  <span style={{ color: 'var(--rose-primary)' }}>{skill.percentage}</span>
                </div>
                <div className="skill-track">
                  {/* Sets the progress width dynamically */}
                  <div 
                    className="skill-progress" 
                    style={{ width: skill.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Tools & Badges */}
          <div>
            <h3 className="skills-subtitle" style={{ textAlign: 'left' }}>Outils & Logiciels</h3>
            
            <div className="tools-grid">
              {TOOLS_SOFTWARE.map((tool, idx) => (
                <div key={idx} className="tool-badge">
                  <div className="tool-icon-wrapper">
                    {tool.abbreviation}
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
