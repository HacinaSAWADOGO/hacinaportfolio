import { Link } from "react-router-dom";
import "../project-pages.css";

function ProjetVideo() {
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
          02 — PROJET VIDÉO
        </span>

        <h1>
          Vidéo
          <br />
          <em>publicitaire.</em>
        </h1>

        <p>
          Conception et montage d'une vidéo publicitaire
          destinée à présenter et valoriser un produit.
        </p>

      </section>


      <main className="project-content">

        <section className="project-section">

          <video
            className="project-video"
            controls
            poster="/images/video-cover.jpg"
          >
            <source
              src="/videos/video-publicitaire.mp4"
              type="video/mp4"
            />

            Votre navigateur ne supporte pas la lecture vidéo.
          </video>

        </section>


        <section className="project-section">

          <div className="project-description">

            <div>

              <h2 className="project-section-title">
                À propos du <span>projet.</span>
              </h2>

              <p>
                Cette réalisation avait pour objectif de créer
                une vidéo courte, dynamique et adaptée aux
                réseaux sociaux.
              </p>

              <p>
                J'ai travaillé sur la structure de la vidéo,
                le rythme, les transitions, les textes et
                l'habillage visuel.
              </p>

            </div>


            <div className="project-details">

              <div className="project-detail">
                <small>Type</small>
                <strong>Vidéo publicitaire</strong>
              </div>

              <div className="project-detail">
                <small>Format</small>
                <strong>Réseaux sociaux</strong>
              </div>

              <div className="project-detail">
                <small>Réalisation</small>
                <strong>Montage vidéo</strong>
              </div>

            </div>

          </div>

        </section>


        <section className="project-section">

          <h2 className="project-section-title">
            Outils <span>utilisés.</span>
          </h2>

          <div className="project-tools">

            <span className="project-tool">CapCut</span>
            <span className="project-tool">Canva</span>
            <span className="project-tool">IA</span>

          </div>

        </section>


        <section className="project-final">

          <h2>
            Un projet vidéo ?
          </h2>

          <p>
            Vous souhaitez présenter votre produit ou votre
            activité avec une vidéo professionnelle ?
          </p>

          <a href="/#contact" className="button white">
  Me contacter →
</a>

        </section>

      </main>

    </div>
  );
}

export default ProjetVideo;