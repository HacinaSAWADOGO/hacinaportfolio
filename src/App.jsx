import { useState, useEffect } from "react";
import "./App.css";

const services = [
  {
    icon: "💻",
    title: "Développement web",
    text: "Création de sites et solutions web modernes, responsives et adaptées aux besoins de votre activité.",
    destination: "Web",
  },

  {
    icon: "🎨",
    title: "Infographie",
    text: "Création de visuels professionnels pour communiquer, présenter et valoriser votre marque.",
    destination: "Design",
  },

  {
    icon: "🎬",
    title: "Montage vidéo",
    text: "Montage de vidéos dynamiques et professionnelles pour les entreprises, créateurs et réseaux sociaux.",
    destination: "Vidéo",
  },

  {
    icon: "🤖",
    title: "Création vidéo avec l'IA",
    text: "Création de vidéos publicitaires et de contenus créatifs grâce aux outils d'intelligence artificielle.",
    destination: "IA",
  },

  {
    icon: "📸",
    title: "Publicité & contenus IA",
    text: "Création de contenus visuels et campagnes publicitaires assistés par l'IA pour mettre vos produits en valeur.",
    destination: "IA",
  },

  {
    icon: "🎓",
    title: "Formation",
    text: "Formation pratique et personnalisée pour apprendre à utiliser l'intelligence artificielle dans différents domaines.",
    destination: "Formations",
  },
];

const projects = [
  {
    category: "IA",
    title: "Création publicitaire avec l'IA",
    description: "Contenu publicitaire créatif réalisé avec des outils d'intelligence artificielle.",
    image: "",
    link: "/projets/creation-ia",
  },
  {
    category: "Vidéo",
    title: "Vidéo publicitaire",
    description: "Conception et montage d'une vidéo destinée à promouvoir un produit.",
    image: "",
    link: "/projets/video-publicitaire",
  },
  {
    category: "Design",
    title: "Création graphique",
    description: "Création d'un support visuel professionnel pour une communication digitale.",
    image: "",
    link: "/projets/creation-graphique",
  },
  {
    category: "Web",
    title: "Projet web",
    description: "Conception d'une interface web moderne et responsive.",
    image: "",
    link: "/projets/projet-web",
  },
];

const tools = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "PHP",
  "Canva",
  "Photoshop",
  "CapCut",
  "Outils IA",
];

const faqs = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Je réalise des projets web, des créations graphiques, du montage vidéo, des contenus publicitaires, des contenus pour les réseaux sociaux ainsi que des créations assistées par l'intelligence artificielle.",
  },

  {
    question: "Travaillez-vous avec les entreprises ?",
    answer:
      "Oui. J'accompagne les entreprises, marques, entrepreneurs et créateurs dans leurs projets numériques, leur communication visuelle et la création de contenus.",
  },

  {
    question: "Proposez-vous des formations en intelligence artificielle ?",
    answer:
      "Oui. Je propose des formations pratiques et personnalisées pour apprendre à utiliser l'intelligence artificielle dans plusieurs domaines : productivité, création de contenus, communication, publicité, création d'images, animation, vidéo, TikTok, YouTube et monétisation.",
  },

  {
    question: "La formation porte-t-elle uniquement sur la création de vidéos ?",
    answer:
      "Non. La formation ne se limite pas à la création de vidéos. Elle couvre également les bases de l'intelligence artificielle, les prompts, la productivité, la création d'images, les personnages et visuels cohérents, les affiches et logos, l'animation, la publicité, la création de contenus pour TikTok et YouTube ainsi que les possibilités de monétisation.",
  },

  {
    question: "La formation est-elle individuelle ?",
    answer:
      "Oui ! Je propose des formations individuelles et personnalisées, avec des exercices pratiques et un accompagnement adapté au niveau et aux objectifs du participant.",
  },

  {
    question: "Pouvez-vous former une équipe ou plusieurs personnes ?",
    answer:
      "Oui ! Si vous avez une équipe et que vous souhaitez que je vienne vous former directement dans vos bureaux, c'est également possible. Le contenu de la formation peut être adapté aux besoins de votre équipe.",
  },

  {
    question: "La formation peut-elle être adaptée à mes besoins ?",
    answer:
      "Oui. Le contenu peut être adapté à vos besoins, à votre niveau et à vos objectifs afin de vous permettre de travailler directement sur des cas pratiques qui vous concernent.",
  },

  {
    question: "Combien de temps dure la formation ?",
    answer:
      "La formation personnalisée est organisée sur 3 jours, à raison de 3 heures par jour, soit 9 heures au total. L'organisation peut être adaptée selon les besoins de la formation.",
  },

  {
    question: "Comment se déroule la formation ?",
    answer:
      "La formation repose sur des démonstrations, des exercices pratiques et un accompagnement personnalisé afin de permettre une mise en pratique directe des notions apprises.",
  },

  {
    question: "Quels outils d'intelligence artificielle sont utilisés ?",
    answer:
      "Les outils sont choisis en fonction des objectifs de la formation. La formation peut notamment inclure l'utilisation d'assistants IA comme ChatGPT et Claude, ainsi que différents outils de création d'images, d'animation et de vidéos.",
  },

  {
    question: "Pouvez-vous vous déplacer pour une formation en entreprise ?",
    answer:
      "Oui. Je peux me déplacer dans vos locaux pour former votre équipe. Les modalités de la formation et les éventuels frais de déplacement sont à définir selon le lieu et les besoins.",
  },

  {
    question: "Comment demander un devis ?",
    answer:
      "Vous pouvez me contacter directement afin de présenter votre besoin. Je pourrai ensuite vous proposer une formation adaptée à votre profil, à vos objectifs ou aux besoins de votre équipe.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [projectType, setProjectType] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [clientName, setClientName] = useState("");
  const [clientNeed, setClientNeed] = useState("");
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  const handleServiceClick = (service) => {
  if (service.destination === "Formations") {
    document
      .querySelector("#formations")
      ?.scrollIntoView({ behavior: "smooth" });

    return;
  }

  setActiveCategory(service.destination);

  setTimeout(() => {
    document
      .querySelector("#realisations")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};


  const categories = ["Tous", "IA", "Vidéo", "Design", "Web"];

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const whatsappMessage = encodeURIComponent(
    `Bonjour Hacina, je souhaite vous contacter concernant ${
      projectType || "un projet"
    }.`
  );

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#accueil" className="logo">
          H<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
  <a
    href="#accueil"
    className={activeSection === "accueil" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Accueil
  </a>

  <a
    href="#apropos"
    className={activeSection === "apropos" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    À propos
  </a>

  <a
    href="#services"
    className={activeSection === "services" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Services
  </a>

  <a
    href="#realisations"
    className={activeSection === "realisations" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Réalisations
  </a>

  <a
    href="#processus"
    className={activeSection === "processus" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Processus
  </a>

  <a
    href="#formations"
    className={activeSection === "formations" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Formations
  </a>

  <a
    href="#faq"
    className={activeSection === "faq" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    FAQ
  </a>
</nav>

        <button
  type="button"
  className="nav-contact"
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  }}
>
  Me contacter
</button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section id="accueil" className="hero">

          <div className="hero-decoration decoration-one"></div>
          <div className="hero-decoration decoration-two"></div>

          <div className="hero-left reveal">
            <span className="small-label">
              ✦ COUCOU et BIENVENUE, JE SUIS
            </span>

            <h1>
              Hacina
              <br />
              <span>Sawadogo</span>
            </h1>

            <h2>
              Ingénieure en informatique
              <br />
              <strong>& créatrice digitale.</strong>
            </h2>

            <p>
              J'aide les entreprises et particuliers à 
              renforcer leur présence en ligne 
              grâce au web, au design, aux vidéos et à
              l'intelligence artificielle.
              
            </p>

            <div className="hero-actions">
              <a href="#realisations" className="button primary">
                Voir mes réalisations
              </a>

              <a href="#contact" className="button outline">
                Discutons de votre projet
              </a>
            </div>
          </div>


          <div className="hero-center">
            <div className="hero-glow"></div>
            <div className="hero-circle"></div>

            <div className="photo-frame">
              <img
                src="/images/hacina.jpeg"
                alt="Hacina Djamilatou Sawadogo"
              />
            </div>

            <div className="floating-card card-top">
               Créatrice digitale
            </div>

            <div className="floating-card card-bottom">
               Création avec l'IA
            </div>
          </div>


          <div className="hero-right reveal">
            <span className="small-label">
              01 — À PROPOS
            </span>

            <h3>
              Créative.
              <br />
              <span>Technologique.</span>
            </h3>

            <p>
              Ingénieure des travaux en Réseaux et Systèmes
              Informatiques, je suis freelance dans le
              développement web, l'infographie et le montage vidéo.
            </p>

            <p>
              Je crée également des contenus visuels et des vidéos
              assistés par l'intelligence artificielle pour les
              marques et les entreprises.
            </p>

            <a href="#apropos" className="text-link">
              Découvrir mon parcours →
            </a>
          </div>

        </section>


        {/* ================= MARQUEUR ================= */}
        <div className="scroll-indicator">
          <span></span>
          Faites défiler
        </div>


        {/* ================= ABOUT ================= */}
        <section id="apropos" className="section about-section">

          <div className="section-heading">
            <span>02 — À PROPOS</span>
            <h2>
              Derrière les projets,
              <br />
              <em>il y a une passion.</em>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-image">
              <div className="about-image-glow"></div>

              <img
                src="/images/hacina.jpeg"
                alt="Hacina Sawadogo"
              />

              <div className="experience-badge">
                <strong>IA</strong>
                <span>au cœur de ma créativité</span>
              </div>
            </div>

            <div className="about-content">
              <p className="large-text">
                Je suis <strong>Hacina Djamilatou Sawadogo</strong>,
                ingénieure des travaux en Réseaux et Systèmes
                Informatiques et créatrice digitale freelance.
              </p>

              <p>
                Mon univers se trouve à la rencontre de la technologie
                et de la créativité. J'aime transformer une idée,
                même simple, en un projet concret, esthétique et utile.
              </p>

              <p>
                Le développement web, le design, la vidéo et
                l'intelligence artificielle me permettent d'explorer
                différentes façons de donner vie aux idées.
              </p>

              <div className="about-highlights">
                <div>
                  <strong>01</strong>
                  <span>Technologie</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Créativité</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Intelligence artificielle</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ================= SERVICES ================= */}
        <section id="services" className="section services-section">

          <div className="section-heading center">
            <span>03 — MES SERVICES</span>
            <h2>
              Ce que je peux
              <br />
              <em>faire pour vous.</em>
            </h2>

            <p>
              Des solutions numériques et créatives adaptées à vos
              besoins, votre activité et votre image.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={index}>
                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <button
  type="button"
  onClick={() => handleServiceClick(service)}
>
  En savoir plus →
</button>
              </article>
            ))}
          </div>
        </section>


        {/* ================= REALISATIONS ================= */}
        <section id="realisations" className="section projects-section">

          <div className="section-heading">
            <span>04 — MES RÉALISATIONS</span>
            <h2>
              Quelques projets
              <br />
              <em>qui prennent vie.</em>
            </h2>
          </div>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter active"
                    : "filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article className="project-card" key={index}>

                <div className="project-visual">

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>✦</span>
                      <small>{project.category}</small>
                    </div>
                  )}

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>Voir le projet →</a>
                </div>

              </article>
            ))}
          </div>
        </section>


        {/* ================= SKILLS ================= */}
        <section className="section skills-section">

          <div className="skills-layout">

            <div className="section-heading">
              <span>05 — COMPÉTENCES</span>
              <h2>
                Mes outils pour
                <br />
                <em>créer et construire.</em>
              </h2>

              <p>
                Une combinaison de compétences techniques et
                créatives pour transformer vos idées en réalisations.
              </p>
            </div>

            <div className="tools-container">
              {tools.map((tool, index) => (
                <div className="tool-pill" key={index}>
                  <span>✦</span>
                  {tool}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= WHY ME ================= */}
        <section className="section why-section">

          <div className="section-heading center">
            <span>06 — POURQUOI TRAVAILLER AVEC MOI ?</span>

            <h2>
              Une approche
              <br />
              <em>créative et humaine.</em>
            </h2>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <span>01</span>
              <h3>Créativité</h3>
              <p>
                Je cherche à créer des solutions qui ne sont pas
                seulement fonctionnelles, mais aussi mémorables.
              </p>
            </div>

            <div className="why-card">
              <span>02</span>
              <h3>Technologie</h3>
              <p>
                Je combine mes compétences informatiques avec les
                nouvelles possibilités offertes par l'IA.
              </p>
            </div>

            <div className="why-card">
              <span>03</span>
              <h3>Sur mesure</h3>
              <p>
                Chaque projet est différent. Je m'adapte à votre
                besoin, votre cible et votre identité.
              </p>
            </div>

            <div className="why-card">
              <span>04</span>
              <h3>Accompagnement</h3>
              <p>
                Je privilégie une communication claire du début
                jusqu'à la livraison du projet.
              </p>
            </div>

          </div>
        </section>


        {/* ================= PROCESS ================= */}
        <section id="processus" className="section process-section">

          <div className="section-heading center">
            <span>07 — MON PROCESSUS</span>

            <h2>
              De l'idée
              <br />
              <em>au projet concret.</em>
            </h2>
          </div>

          <div className="process-grid">

            <div className="process-item">
              <span>01</span>
              <h3>Échange</h3>
              <p>
                Vous me présentez votre idée et vos objectifs.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>Conception</h3>
              <p>
                Nous définissons ensemble la meilleure approche.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Création</h3>
              <p>
                Je transforme le concept en réalisation concrète.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>Livraison</h3>
              <p>
                Vous recevez un projet finalisé et prêt à être utilisé.
              </p>
            </div>

          </div>
        </section>


        {/* ================= PROJECT CTA ================= */}
<section className="project-cta section">

  <div className="cta-glow"></div>

  <div className="section-heading center">
    <span>08 — VOTRE PROJET</span>

    <h2>
      Vous avez
      <br />
      <em>un projet ?</em>
    </h2>

    <p>
      Dites-moi ce que vous souhaitez créer.
      Je vous aiderai à transformer votre idée en projet.
    </p>
  </div>

  <div className="project-options">

    {[
      ["🎨", "Design graphique"],
      ["🎬", "Publicité vidéo"],
      ["🤖", "Création avec l'IA"],
      ["📱", "Contenu réseaux sociaux"],
      ["💻", "Projet web"],
      ["🎓", "Formation"],
      ["📸", "Contenu pour une marque"],
      ["💬", "Autre projet"],
    ].map(([icon, title]) => (

      <button
        key={title}
        type="button"
        className={
          projectType === title
            ? "project-option selected"
            : "project-option"
        }
        onClick={() => setProjectType(title)}
      >
        <span>{icon}</span>
        {title}
      </button>

    ))}

  </div>

  {/* ================= FORMULAIRE ================= */}
  {projectType && (

    <div className="selected-project">

      <p>
        Vous avez choisi :{" "}
        <strong>{projectType}</strong>
      </p>

      <div className="project-form">

        <div className="form-group">

          <label htmlFor="clientName">
            Nom et prénom
          </label>

          <input
            id="clientName"
            type="text"
            placeholder="Ex : Aïcha Traoré"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label htmlFor="clientNeed">
            Parlez-moi de votre besoin
          </label>

          <textarea
            id="clientNeed"
            rows="5"
            placeholder="Expliquez-moi votre projet, vos besoins, vos objectifs ou toute information que vous souhaitez me communiquer..."
            value={clientNeed}
            onChange={(e) => setClientNeed(e.target.value)}
          />

        </div>

        <a
          className="button primary"
          href={
            clientName.trim() && clientNeed.trim()
              ? `https://wa.me/22665433591?text=${encodeURIComponent(
                  `Bonjour Hacina,

Je m'appelle ${clientName}.

Je suis intéressé(e) par votre service : ${projectType}.

Voici mon besoin :
${clientNeed}

Je souhaite avoir plus d'informations concernant mon projet.

Merci.`
                )}`
              : "#"
          }
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {

            if (!clientName.trim() || !clientNeed.trim()) {
              e.preventDefault();

              alert(
                "Veuillez renseigner votre nom et prénom ainsi que votre besoin avant de continuer."
              );
            }

          }}
        >
          Envoyer ma demande sur WhatsApp →
        </a>

      </div>

    </div>

  )}

</section>


        {/* ================= FORMATIONS ================= */}
        <section id="formations" className="section formation-section">

          <div className="formation-card">

            <div className="formation-decoration">
              ✦
            </div>

            <div>
              <span className="small-label">
                09 — FORMATIONS
              </span>

              <h2>
                Apprenez à créer
                <br />
                avec <em>l'intelligence artificielle.</em>
              </h2>

              <p>
                Je propose des formations en création de vidéos
                avec l'IA pour vous permettre de transformer vos
                idées en contenus créatifs et professionnels.
              </p>

              <a
                href="https://hacina-ia-digital.mymaketou.shop/fr"
                target="_blank"
                rel="noreferrer"
                className="button white"
              >
                Découvrir mes formations →
              </a>
            </div>

          </div>
        </section>


        {/* ================= FAQ ================= */}
        <section id="faq" className="section faq-section">

          <div className="section-heading center">
            <span>10 — FAQ</span>

            <h2>
              Les questions
              <br />
              <em>fréquentes.</em>
            </h2>
          </div>

          <div className="faq-container">

            {faqs.map((faq, index) => (
              <div
                className={
                  openFaq === index
                    ? "faq-item open"
                    : "faq-item"
                }
                key={index}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

          </div>

        </section>

        <section id="contact" className="contact-section">
  <div className="contact-container">

    <div className="contact-intro">
      <span className="section-label">CONTACT</span>

      <h2>
        Vous avez un <em>projet ?</em>
      </h2>

      <p>
        Remplissez simplement ces deux informations et
        je vous répondrai directement sur WhatsApp.
      </p>
    </div>

    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const reason = e.target.reason.value;

        const message = encodeURIComponent(
          `Bonjour Hacina 👋\n\n +
          Je suis ${name}.\n\n +
          Je vous contacte concernant :\n${reason}`
        );

        window.open(
          `https://wa.me/22665433591?text=${message}`,
          "_blank"
        );
      }}
    >
      <div className="form-group">
        <label htmlFor="name">Nom et prénom</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Votre nom et prénom"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="reason">
          Pourquoi me contactez-vous ?
        </label>

        <textarea
          id="reason"
          name="reason"
          rows="6"
          placeholder="Décrivez brièvement votre besoin ou votre projet..."
          required
        ></textarea>
      </div>

      <button type="submit" className="button primary">
        Continuer sur WhatsApp →
      </button>
    </form>

  </div>
</section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-logo">
          H<span>.</span>
        </div>

        <p>
          © {new Date().getFullYear()} Hacina Sawadogo.
          Tous droits réservés.
        </p>

        <a href="#accueil">
          Retour en haut ↑
        </a>
      </footer>

    </div>


  );
}

export default App;