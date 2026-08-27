import { Link } from "react-router-dom";
import "../project-pages.css";

function ProjetDesign() {
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
          03 — PROJET DESIGN
        </span>

        <h1>
          Création
          <br />
          <em>graphique.</em>
        </h1>

        <p>
          Conception de supports visuels professionnels
          destinés à renforcer l'identité et la communication
          d'une marque.
        </p>

      </section>


      <main className="project-content">

        <section className="project-section">

          <div className="project-main-image">

            <img
              src="/images/design-1.jpg"
              alt="Création graphique"
            />

          </div>

        </section>


        <section className="project-section">

          <div className="project-description">

            <div>

              <h2 className="project-section-title">
                À propos du <span>projet.</span>
              </h2>

              <p>
                Cette réalisation a été conçue pour proposer
                une communication visuelle moderne, claire
                et attractive.
              </p>

              <p>
                J'ai travaillé sur la composition graphique,
                les couleurs, la typographie et la mise en
                valeur des informations importantes.
              </p>

            </div>


            <div className="project-details">

              <div className="project-detail">
                <small>Type</small>
                <strong>Design graphique</strong>
              </div>

              <div className="project-detail">
                <small>Support</small>
                <strong>Communication digitale</strong>
              </div>

              <div className="project-detail">
                <small>Objectif</small>
                <strong>Valoriser la marque</strong>
              </div>

            </div>

          </div>

        </section>


        <section className="project-section">

          <h2 className="project-section-title">
            Galerie <span>du projet.</span>
          </h2>

          <div className="project-gallery">

            <img
              src="/images/affiche1.png"
              alt="Design graphique"
            />

            <img
              src="/images/Affiche2.png"
              alt="Design graphique"
            />

            <img
              src="/images/affiche3.png"
              alt="Design graphique"
            />

            <img
              src="/images/affiche4.png"
              alt="Design graphique"
            />

          </div>

        </section>


        <section className="project-section">

          <h2 className="project-section-title">
            Outils <span>utilisés.</span>
          </h2>

          <div className="project-tools">

            <span className="project-tool">Canva</span>
            <span className="project-tool">Photoshop</span>
            <span className="project-tool">Illustrator</span>

          </div>

        </section>


        <section className="project-final">

          <h2>
            Besoin d'un visuel ?
          </h2>

          <p>
            Je peux créer vos affiches, flyers, logos et
            supports de communication.
          </p>

          <a href="/#contact" className="button white">
  Me contacter →
</a>

        </section>

      </main>

    </div>
  );
}

export default ProjetDesign;