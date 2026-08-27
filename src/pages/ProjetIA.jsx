import { Link } from "react-router-dom";
import "../project-pages.css";

function ProjetIA() {
  return (
    <div className="project-page">

      <header className="project-header">
        <Link to="/" className="project-logo">
          H<span>.</span>
        </Link>

        <Link to="/" className="project-back">
          ← Retour au portfolio
        </Link>
      </header>


      <section className="project-hero">

        <span className="project-label">
          01 — PROJET IA
        </span>

        <h1>
          Création publicitaire
          <br />
          avec <em>l'intelligence artificielle.</em>
        </h1>

        <p>
          Création d'un contenu publicitaire visuel réalisé
          à l'aide d'outils d'intelligence artificielle,
          de la conception du visuel jusqu'à l'animation.
        </p>

        <div className="project-buttons">
          <a href="#galerie" className="button primary">
            Voir les créations ↓
          </a>
        </div>

      </section>


      <main className="project-content">

        {/* IMAGE PRINCIPALE */}

        <section className="project-section">

          <div className="project-main-image">
            <img
              src="/images/ia-1.jpg"
              alt="Création publicitaire avec IA"
            />
          </div>

        </section>


        {/* DESCRIPTION */}

        <section className="project-section">

          <div className="project-description">

            <div>
              <h2 className="project-section-title">
                À propos du <span>projet.</span>
              </h2>

              <p>
                Ce projet consiste à concevoir un contenu
                publicitaire moderne en utilisant différentes
                technologies d'intelligence artificielle.
              </p>

              <p>
                L'objectif était de créer un visuel attractif,
                professionnel et adapté à une communication
                digitale.
              </p>

              <p>
                J'ai travaillé sur la génération des visuels,
                la cohérence graphique, l'animation et la
                conception du contenu final.
              </p>
            </div>


            <div className="project-details">

              <div className="project-detail">
                <small>Type</small>
                <strong>Création publicitaire</strong>
              </div>

              <div className="project-detail">
                <small>Domaine</small>
                <strong>Intelligence artificielle</strong>
              </div>

              <div className="project-detail">
                <small>Objectif</small>
                <strong>Communication digitale</strong>
              </div>

            </div>

          </div>

        </section>


        {/* GALERIE */}

        <section
          id="galerie"
          className="project-section"
        >

          <h2 className="project-section-title">
            Les <span>créations.</span>
          </h2>

          <div className="project-gallery">

            <img
              src="/images/ia-1.jpg"
              alt="Création IA"
            />

            <img
              src="/images/ia-2.jpg"
              alt="Création IA"
            />

            <img
              src="/images/ia-3.jpg"
              alt="Création IA"
            />

            <img
              src="/images/ia-4.jpg"
              alt="Création IA"
            />

          </div>

        </section>


        {/* OUTILS */}

        <section className="project-section">

          <h2 className="project-section-title">
            Outils <span>utilisés.</span>
          </h2>

          <div className="project-tools">

            <span className="project-tool">ChatGPT</span>
            <span className="project-tool">Génération d'images IA</span>
            <span className="project-tool">Animation IA</span>
            <span className="project-tool">CapCut</span>
            <span className="project-tool">Canva</span>

          </div>

        </section>


        {/* CTA */}

        <section className="project-final">

          <h2>
            Vous avez une idée ?
          </h2>

          <p>
            Je peux également créer des contenus visuels
            et publicitaires adaptés à votre marque.
          </p>

          <a href="/#contact" className="button white">
  Me contacter →
</a>

        </section>

      </main>

    </div>
  );
}

export default ProjetIA;