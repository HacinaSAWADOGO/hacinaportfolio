import { Link } from "react-router-dom";
import "../project-pages.css";

function ProjetWeb() {
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
          04 — PROJET WEB
        </span>

        <h1>
          Conception d'un
          <br />
          <em>projet web.</em>
        </h1>

        <p>
          Conception et développement d'une interface web
          moderne, responsive et adaptée aux besoins du projet.
        </p>

        <div className="project-buttons">

          {/* À utiliser seulement si le site est en ligne */}

          <a
            href="https://ton-site.com"
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Visiter le site →
          </a>

        </div>

      </section>


      <main className="project-content">

        <section className="project-section">

          <div className="project-main-image">

            <img
              src="/images/web-1.jpg"
              alt="Projet web"
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
                Ce projet consiste à concevoir une interface
                web moderne et responsive permettant aux
                utilisateurs de naviguer facilement entre
                les différentes fonctionnalités.
              </p>

              <p>
                Une attention particulière a été portée à
                l'expérience utilisateur, à la structure des
                pages et à l'adaptation aux différents écrans.
              </p>

            </div>


            <div className="project-details">

              <div className="project-detail">
                <small>Type</small>
                <strong>Application web</strong>
              </div>

              <div className="project-detail">
                <small>Responsive</small>
                <strong>Oui</strong>
              </div>

              <div className="project-detail">
                <small>Réalisation</small>
                <strong>Développement web</strong>
              </div>

            </div>

          </div>

        </section>


        <section className="project-section">

          <h2 className="project-section-title">
            Aperçu du <span>site.</span>
          </h2>

          <div className="project-gallery">

            <img
              src="/images/web-1.jpg"
              alt="Accueil du site"
            />

            <img
              src="/images/web-2.jpg"
              alt="Page du site"
            />

            <img
              src="/images/web-3.jpg"
              alt="Interface du site"
            />

            <img
              src="/images/web-4.jpg"
              alt="Interface responsive"
            />

          </div>

        </section>


        <section className="project-section">

          <h2 className="project-section-title">
            Technologies <span>utilisées.</span>
          </h2>

          <div className="project-tools">

            <span className="project-tool">HTML</span>
            <span className="project-tool">CSS</span>
            <span className="project-tool">JavaScript</span>
            <span className="project-tool">React</span>
            <span className="project-tool">MySQL</span>

          </div>

        </section>


        <section className="project-final">

          <h2>
            Vous avez un projet web ?
          </h2>

          <p>
            Je peux concevoir une interface moderne,
            responsive et adaptée à votre activité.
          </p>

          <a href="/#contact" className="button white">
  Me contacter →
</a>

        </section>

      </main>

    </div>
  );
}

export default ProjetWeb;

