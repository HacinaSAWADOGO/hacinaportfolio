import { useState, useEffect } from "react";
import "./App.css";
import HeroCanvas from "./components/HeroCanvas";
import TypingRole from "./components/TypingRole";
import AnimatedCounter from "./components/AnimatedCounter";
import TiltCard from "./components/TiltCard";
import ScrollProgress from "./components/ScrollProgress";
import CursorSparkles from "./components/CursorSparkles";
import RotatingBadge from "./components/RotatingBadge";
import LiveActivityToast from "./components/LiveActivityToast";

const services = [
  {
    icon: "💻",
    title: "Développement web",
    text: "Création de sites et solutions web modernes, responsives et adaptées aux besoins de votre activité.",
    destination: "Web",
    tag: "Moderne & Rapide",
  },
  {
    icon: "🎬",
    title: "Vidéos publicitaires avec l'IA",
    text: "Création de vidéos publicitaires percutantes grâce aux outils d'intelligence artificielle pour mettre en valeur vos produits et votre marque.",
    destination: "Vidéo IA",
    tag: "Percutant & Créatif",
  },
  {
    icon: "🎓",
    title: "Formation en IA",
    text: "Formations pratiques et personnalisées pour apprendre à utiliser l'intelligence artificielle dans différents domaines.",
    destination: "Formations",
    tag: "Accompagnement Pro",
  },
];

const projects = [
  {
    category: "Vidéo IA",
    title: "Création publicitaire avec l'IA",
    description: "Contenu publicitaire créatif et captivant réalisé avec des outils d'intelligence artificielle générative.",
    image: "/images/projet1.jpeg",
    link: "/projets/creation-ia",
    badge: "Vidéo & IA",
  },
  {
    category: "Vidéo IA",
    title: "Vidéo publicitaire de marque",
    description: "Conception et réalisation avec l'IA d'une vidéo destinée à promouvoir un produit et captiver l'audience.",
    image: "/images/projet2.jpeg",
    link: "/projets/video-publicitaire",
    badge: "Publicité IA",
  },
  {
    category: "Web",
    title: "Application web responsive",
    description: "Conception d'une interface web moderne, fluide, responsive et optimisée pour l'expérience utilisateur.",
    image: "/images/projet3.jpeg",
    link: "/projets/projet-web",
    badge: "Développement Web",
  },
  {
    category: "Design IA",
    title: "Affiches & Identité Visuelle",
    description: "Création graphique professionnelle, affiches promotionnelles et visuels de marque assistés par l'IA.",
    image: "/images/affiche1.png",
    link: "/projets/creation-graphique",
    badge: "Direction Artistique",
  },
];

const tools = [
  "React",
  "JavaScript (ES6+)",
  "HTML5 / CSS3",
  "PHP",
  "Photoshop",
  "CapCut",
  "ChatGPT",
  "Claude AI",
  "Outils IA Vidéo",
];

const stats = [
  { end: 100, suffix: "%", label: "Satisfaction & écoute", desc: "Un accompagnement humain et sur-mesure" },
  { end: 15, suffix: "+", label: "Projets & créations", desc: "Sites web, vidéos et affiches percutantes" },
  { end: 9, suffix: "h", label: "Formation intensive", desc: "3 jours x 3h pour maîtriser l'IA de A à Z" },
  { end: 100, suffix: "%", label: "Créativité & Innovation", desc: "Le meilleur de l'informatique et de l'IA" },
];

const faqs = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Je réalise des sites et applications web, des vidéos publicitaires créées avec l'intelligence artificielle, et je propose des formations en IA pour les particuliers et les entreprises.",
  },
  {
    question: "Travaillez-vous avec les entreprises ?",
    answer:
      "Oui. J'accompagne les entreprises, marques, entrepreneurs et créateurs dans leurs projets web, leur publicité vidéo et la formation de leurs équipes à l'intelligence artificielle.",
  },
  {
    question: "Proposez-vous des formations en intelligence artificielle ?",
    answer:
      "Oui. Je suis formatrice en IA et je propose des formations pratiques et personnalisées pour apprendre à utiliser l'intelligence artificielle dans plusieurs domaines : productivité, création de contenus, communication, publicité, création d'images, animation, vidéo, TikTok, YouTube et monétisation.",
  },
  {
    question: "La formation porte-t-elle uniquement sur la création de vidéos ?",
    answer:
      "Non. La formation ne se limite pas à la création de vidéos. Elle couvre également l'automatisation, le motion design, la création de sites web, les vidéos virales et publicitaires, les vidéos avatars, les séries IA, les vidéos fruits, la productivité et la monétisation.",
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
      "Vous pouvez me contacter directement afin de présenter votre besoin. Je pourrai ensuite vous proposer une solution adaptée : site web, vidéo publicitaire avec l'IA ou formation selon votre profil, vos objectifs ou les besoins de votre équipe.",
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
  const [scrolled, setScrolled] = useState(false);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  // Scroll spy & navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Section observer for active navbar link
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
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Ensure all sections and elements are immediately visible
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => el.classList.add("is-revealed"));
  }, [activeCategory]);

  // Amplified mouse move parallax for Hero section
  const handleHeroMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) / centerX;
    const offsetY = (clientY - centerY) / centerY;

    setMouseParallax({
      x: offsetX * 28,
      y: offsetY * 28,
    });
  };

  const handleServiceClick = (service) => {
    if (service.destination === "Formations") {
      document.querySelector("#formations")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setActiveCategory(service.destination);
    setTimeout(() => {
      document.querySelector("#realisations")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const categories = ["Tous", "Web", "Vidéo IA", "Design IA"];

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="site">
      {/* Interactive Cursor Follower & Sparkle Trails */}
      <CursorSparkles />

      {/* Live Activity Toast */}
      <LiveActivityToast />

      {/* ================= NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#accueil" className="logo" aria-label="Accueil Hacina">
          H<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
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

          <button
            type="button"
            className="mobile-contact-btn"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              setMenuOpen(false);
            }}
          >
            💬 Me contacter
          </button>
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
          Me contacter ✦
        </button>

        {/* Animated Hamburger Button */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-bar top"></span>
          <span className="hamburger-bar middle"></span>
          <span className="hamburger-bar bottom"></span>
        </button>
      </header>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ================= HERO ================= */}
      <main>
        <section
          id="accueil"
          className="hero"
          onMouseMove={handleHeroMouseMove}
        >
          {/* Interactive Particle Canvas */}
          <HeroCanvas />

          <div
            className="hero-decoration decoration-one anim-pulse-glow"
            style={{
              transform: `translate(${mouseParallax.x * -0.5}px, ${
                mouseParallax.y * -0.5
              }px)`,
            }}
          ></div>
          <div
            className="hero-decoration decoration-two anim-pulse-glow-alt"
            style={{
              transform: `translate(${mouseParallax.x * 0.7}px, ${
                mouseParallax.y * 0.7
              }px)`,
            }}
          ></div>

          {/* Left Column */}
          <div className="hero-left hero-enter-left">
            <div className="hero-badge-wrap">
              <span className="hero-sparkle-pill">
                <span className="sparkle-icon">✦</span>
                COUCOU ET BIENVENUE, JE SUIS
              </span>
            </div>

            <h1 className="hero-main-title">
              Hacina
              <br />
              <span className="gradient-name">Sawadogo</span>
            </h1>

            <div className="hero-dynamic-subtitle">
              <TypingRole />
            </div>

            <p className="hero-description">
              J'aide les marques, entreprises et entrepreneurs à décupler leur
              visibilité grâce au <strong>développement web sur-mesure</strong>,
              aux <strong>vidéos publicitaires propulsées par l'IA</strong> et à la
              <strong> formation pratique en intelligence artificielle</strong>.
            </p>

            <div className="hero-actions">
              <a href="#realisations" className="button primary button-shimmer">
                <span>Voir mes réalisations</span>
                <span className="btn-arrow">→</span>
              </a>

              <a href="#contact" className="button outline">
                Discutons de votre projet
              </a>
            </div>

            {/* Quick highlight tags */}
            <div className="hero-feature-tags">
              <span className="feature-tag">⚡ Rapide & Responsive</span>
              <span className="feature-tag">🎬 Vidéos IA Haute Qualité</span>
              <span className="feature-tag">💡 Formations 100% Pratiques</span>
            </div>
          </div>

          {/* Center Column: Interactive Parallax Portrait with Floating Badges */}
          <div
            className="hero-center hero-enter-center"
            style={{
              transform: `translate3d(${mouseParallax.x * 0.7}px, ${
                mouseParallax.y * 0.7
              }px, 0) rotateY(${mouseParallax.x * 0.35}deg) rotateX(${
                -mouseParallax.y * 0.35
              }deg)`,
            }}
          >
            <div className="hero-glow anim-pulse-soft"></div>
            <div className="hero-circle anim-rotate-slow"></div>
            <div className="hero-circle-secondary anim-pulse-ring"></div>

            <div className="photo-frame">
              <img
                src="/images/hacina.jpeg"
                alt="Hacina Djamilatou Sawadogo - Formatrice en IA & Ingénieure Informatique"
                className="hero-photo-img"
              />
              <div className="photo-shine-sweep"></div>
            </div>

            {/* Rotating Circular Stamp Badge */}
            <RotatingBadge />

            {/* Floating Badges with independent physics */}
            <div
              className="floating-card card-top anim-float-1"
              style={{
                transform: `translate3d(${mouseParallax.x * -1.3}px, ${
                  mouseParallax.y * -1.3
                }px, 0)`,
              }}
            >
              <span className="card-badge-icon">🎓</span>
              <div>
                <strong>Formatrice en IA</strong>
                <small>Particuliers & Entreprises</small>
              </div>
            </div>

            <div
              className="floating-card card-bottom anim-float-2"
              style={{
                transform: `translate3d(${mouseParallax.x * 1.5}px, ${
                  mouseParallax.y * 1.5
                }px, 0)`,
              }}
            >
              <span className="card-badge-icon">🎬</span>
              <div>
                <strong>Vidéos avec l'IA</strong>
                <small>Contenus publicitaires percutants</small>
              </div>
            </div>

            <div
              className="floating-card card-accent anim-float-3"
              style={{
                transform: `translate3d(${mouseParallax.x * -1.0}px, ${
                  mouseParallax.y * 1.4
                }px, 0)`,
              }}
            >
              <span className="card-badge-icon">💻</span>
              <div>
                <strong>Web & Digital</strong>
                <small>Sites modernes 100% responsifs</small>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Card */}
          <div className="hero-right hero-enter-right">
            <span className="small-label">01 — À PROPOS</span>

            <h3>
              Créative.
              <br />
              <span>Technologique.</span>
            </h3>

            <p>
              Ingénieure des travaux en <strong>Réseaux et Systèmes Informatiques</strong>,
              je mets la puissance des technologies et de l'intelligence artificielle
              au service de vos projets les plus ambitieux.
            </p>

            <p>
              De la conception de sites web ultra fluides à la génération de vidéos
              publicitaires virales, je vous accompagne pas à pas pour propulser
              votre activité.
            </p>

            <a href="#apropos" className="text-link hover-slide">
              Découvrir mon parcours <span className="link-arrow">→</span>
            </a>

            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Disponible pour nouveaux projets & formations</span>
            </div>
          </div>
        </section>

        {/* ================= MARQUEUR ================= */}
        <div className="scroll-indicator">
          <div className="scroll-mouse-icon">
            <span className="scroll-mouse-wheel"></span>
          </div>
          <span>Faites défiler pour explorer</span>
        </div>

        {/* ================= STATS STRIP ================= */}
        <section className="stats-section reveal-on-scroll">
          <div className="stats-container">
            {stats.map((st, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number-wrap">
                  <AnimatedCounter end={st.end} suffix={st.suffix} />
                </div>
                <h4 className="stat-label">{st.label}</h4>
                <p className="stat-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="apropos" className="section about-section">
          <div className="section-heading reveal-on-scroll">
            <span>02 — MON PARCOURS</span>
            <h2>
              Derrière les projets,
              <br />
              <em>il y a une passion & une expertise.</em>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-image reveal-on-scroll">
              <div className="about-image-glow anim-pulse-soft"></div>

              <div className="about-photo-wrapper">
                <img
                  src="/images/hacina.jpeg"
                  alt="Hacina Sawadogo"
                  className="about-photo"
                />
              </div>

              <div className="experience-badge anim-float-2">
                <strong>IA & Web</strong>
                <span>L'alliance de la rigueur et de la créativité</span>
              </div>
            </div>

            <div className="about-content reveal-on-scroll">
              <p className="large-text">
                Je suis <strong>Hacina Djamilatou Sawadogo</strong>, ingénieure des
                travaux en Réseaux et Systèmes Informatiques, développeuse web et
                formatrice en IA freelance.
              </p>

              <p>
                Mon univers se trouve à la rencontre précise de la rigueur
                technique et de l'imagination visuelle. J'aime transformer une idée,
                même embryonnaire, en un projet concret, esthétique, performant et
                utile.
              </p>

              <p>
                Le développement web moderne, la création de vidéos publicitaires
                avec l'IA et la formation pratique me permettent d'accompagner
                chacun de mes clients vers un résultat d'exception qui captive
                son audience.
              </p>

              <div className="about-highlights">
                <div className="highlight-box">
                  <strong>01</strong>
                  <span>Développement web moderne</span>
                </div>

                <div className="highlight-box">
                  <strong>02</strong>
                  <span>Vidéos publicitaires avec l'IA</span>
                </div>

                <div className="highlight-box">
                  <strong>03</strong>
                  <span>Formations & Coaching IA</span>
                </div>
              </div>

              <div className="about-cta-row">
                <a href="#services" className="button primary">
                  Découvrir mes services →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section services-section">
          <div className="section-heading center reveal-on-scroll">
            <span>03 — MES SERVICES</span>
            <h2>
              Ce que je peux
              <br />
              <em>réaliser pour vous.</em>
            </h2>

            <p>
              Des solutions numériques, audiovisuelles et pédagogiques haut de
              gamme, taillées pour faire grandir votre visibilité et vos compétences.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <TiltCard key={index} className="service-card-tilt reveal-on-scroll">
                <article className="service-card">
                  <div className="service-top-row">
                    <div className="service-icon-box">{service.icon}</div>
                    <span className="service-number">0{index + 1}</span>
                  </div>

                  <span className="service-tag-pill">{service.tag}</span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <button
                    type="button"
                    className="service-btn"
                    onClick={() => handleServiceClick(service)}
                  >
                    <span>En savoir plus</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </article>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* ================= REALISATIONS ================= */}
        <section id="realisations" className="section projects-section">
          <div className="section-heading reveal-on-scroll">
            <span>04 — MES RÉALISATIONS</span>
            <h2>
              Quelques projets
              <br />
              <em>qui prennent vie sous vos yeux.</em>
            </h2>
            <p>
              Explorez mes récents travaux en vidéo publicitaire IA, en développement
              web et en conception graphique.
            </p>
          </div>

          <div className="filters reveal-on-scroll">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category ? "filter active" : "filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {category === "Tous" && ` (${projects.length})`}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <TiltCard key={project.title + index} className="project-card-tilt reveal-on-scroll">
                <article className="project-card">
                  <div className="project-visual">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="project-img"
                    />

                    <div className="project-visual-overlay">
                      <a href={project.link} className="project-quick-view-btn">
                        Découvrir les détails ↗
                      </a>
                    </div>

                    <span className="project-category-badge">
                      {project.badge || project.category}
                    </span>
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} className="project-detail-link">
                      <span>Explorer le projet</span>
                      <span className="link-arrow">→</span>
                    </a>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="section skills-section">
          <div className="skills-layout">
            <div className="section-heading reveal-on-scroll">
              <span>05 — COMPÉTENCES & OUTILS</span>
              <h2>
                Mon écosystème
                <br />
                <em>technique & créatif.</em>
              </h2>

              <p>
                Une combinaison experte de langages de programmation, de frameworks
                web et des meilleurs modèles d'IA générative pour délivrer des
                résultats innovants.
              </p>
            </div>

            <div className="tools-container reveal-on-scroll">
              {tools.map((tool, index) => (
                <div className="tool-pill" key={index}>
                  <span className="tool-icon">✦</span>
                  <span className="tool-text">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY ME ================= */}
        <section className="section why-section">
          <div className="section-heading center reveal-on-scroll">
            <span>06 — POURQUOI ME FAIRE CONFIANCE ?</span>
            <h2>
              Une démarche
              <br />
              <em>créative, rigoureuse et humaine.</em>
            </h2>
          </div>

          <div className="why-grid">
            {[
              {
                num: "01",
                title: "Créativité percutante",
                text: "Des visuels et interfaces conçus pour capter l'attention dès les premières secondes et marquer les esprits.",
              },
              {
                num: "02",
                title: "Expertise IA & Code",
                text: "Une double compétence rare : la rigueur d'ingénieure en informatique alliée aux dernières avancées de l'IA générative.",
              },
              {
                num: "03",
                title: "Accompagnement sur-mesure",
                text: "Chaque marque et chaque projet a son identité propre. Tout est pensé sur-mesure selon vos objectifs.",
              },
              {
                num: "04",
                title: "Communication fluide & réactive",
                text: "Un suivi transparent du brief initial jusqu'à la livraison finale avec disponibilité directe sur WhatsApp.",
              },
            ].map((item, idx) => (
              <TiltCard key={idx} className="why-card-tilt reveal-on-scroll">
                <div className="why-card">
                  <span className="why-num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section id="processus" className="section process-section">
          <div className="section-heading center reveal-on-scroll">
            <span>07 — LE PROCESSUS DE COLLABORATION</span>
            <h2>
              De l'idée initiale
              <br />
              <em>à la réalisation concrète.</em>
            </h2>
          </div>

          <div className="process-grid">
            {[
              {
                step: "01",
                title: "Échange & Cadrage",
                desc: "Nous échangeons sur vos objectifs, votre cible et vos inspirations pour poser des bases claires.",
              },
              {
                step: "02",
                title: "Conception & Stratégie",
                desc: "Création du script, des maquettes interactives ou du plan de formation personnalisé.",
              },
              {
                step: "03",
                title: "Création & Développement",
                desc: "Génération IA, montage, code et tests poussés avec itérations jusqu'à satisfaction.",
              },
              {
                step: "04",
                title: "Livraison & Suivi",
                desc: "Remise des livrables finaux prêts à l'emploi et accompagnement dans leur prise en main.",
              },
            ].map((proc, i) => (
              <TiltCard key={i} className="process-card-tilt reveal-on-scroll">
                <div className="process-item">
                  <span className="process-step">{proc.step}</span>
                  <h3>{proc.title}</h3>
                  <p>{proc.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* ================= PROJECT CTA ================= */}
        <section className="project-cta section reveal-on-scroll">
          <div className="cta-glow anim-pulse-glow"></div>

          <div className="section-heading center">
            <span>08 — CONFIGUREZ VOTRE PROJET</span>
            <h2>
              Donnez vie
              <br />
              <em>à votre prochain projet.</em>
            </h2>
            <p>
              Sélectionnez le type de projet qui vous intéresse et discutons
              directement de sa concrétisation.
            </p>
          </div>

          <div className="project-options">
            {[
              ["💻", "Développement web"],
              ["🎬", "Vidéo publicitaire avec l'IA"],
              ["🎓", "Formation en IA"],
              ["💬", "Autre projet sur-mesure"],
            ].map(([icon, title]) => (
              <button
                key={title}
                type="button"
                className={`project-option ${
                  projectType === title ? "selected" : ""
                }`}
                onClick={() => setProjectType(title)}
              >
                <span className="opt-icon">{icon}</span>
                <span className="opt-title">{title}</span>
                {projectType === title && <span className="opt-check">✓</span>}
              </button>
            ))}
          </div>

          {/* Formulaire dynamique */}
          {projectType && (
            <div className="selected-project anim-fade-in">
              <p className="selection-notice">
                Projet sélectionné : <strong>{projectType}</strong>
              </p>

              <div className="project-form">
                <div className="form-group">
                  <label htmlFor="clientName">Votre Nom et Prénom</label>
                  <input
                    id="clientName"
                    type="text"
                    placeholder="Ex : Aïcha Traoré"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="clientNeed">Parlez-moi de votre besoin</label>
                  <textarea
                    id="clientNeed"
                    rows="4"
                    placeholder="Expliquez-moi votre projet, vos objectifs, votre calendrier ou toute information utile..."
                    value={clientNeed}
                    onChange={(e) => setClientNeed(e.target.value)}
                  />
                </div>

                <a
                  className="button primary button-shimmer"
                  href={
                    clientName.trim() && clientNeed.trim()
                      ? `https://wa.me/22665433591?text=${encodeURIComponent(
                          `Bonjour Hacina,\n\nJe m'appelle ${clientName}.\nJe suis intéressé(e) par votre service : ${projectType}.\n\nVoici mon besoin :\n${clientNeed}\n\nJe souhaite avoir plus d'informations concernant ce projet.\nMerci !`
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
                  <span>Envoyer ma demande sur WhatsApp</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          )}
        </section>

        {/* ================= FORMATIONS ================= */}
        <section id="formations" className="section formation-section">
          <div className="formation-card reveal-on-scroll">
            <div className="formation-decoration anim-float-slow">✦</div>

            <div className="formation-inner">
              <span className="small-label">09 — FORMATIONS PRATIQUES</span>

              <h2>
                Apprenez à créer
                <br />
                avec <em>l'intelligence artificielle.</em>
              </h2>

              <p>
                Vous souhaitez maîtriser l'IA pour générer du contenu percutant,
                créer des vidéos publicitaires captivantes ou automatiser vos tâches ?
                Je propose un programme complet de <strong>9h réparties sur 3 jours</strong>,
                100% axé sur la pratique et les résultats concrets.
              </p>

              <div className="formation-features-row">
                <span className="form-feat">⚙️ Automatisation</span>
                <span className="form-feat">✨ Motion design</span>
                <span className="form-feat">💻 Création de site web</span>
                <span className="form-feat">🔥 Vidéos virales & vidéos publicitaires</span>
                <span className="form-feat">👤 Vidéo avatar</span>
                <span className="form-feat">🎬 Séries IA</span>
                <span className="form-feat">🍉 Vidéos fruits</span>
              </div>

              <div className="formation-btn-row">
                <a
                  href="https://hacina-ia-digital.mymaketou.shop/fr"
                  target="_blank"
                  rel="noreferrer"
                  className="button white button-shimmer"
                >
                  <span>Découvrir le programme complet</span>
                  <span className="btn-arrow">↗</span>
                </a>

                <a href="#contact" className="button outline-white">
                  Poser une question
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="section faq-section">
          <div className="section-heading center reveal-on-scroll">
            <span>10 — FOIRE AUX QUESTIONS</span>
            <h2>
              Questions
              <br />
              <em>fréquentes.</em>
            </h2>
            <p>
              Retrouvez ici les réponses aux questions les plus posées sur mes
              services, mes modalités de formation et mes réalisations.
            </p>
          </div>

          <div className="faq-container reveal-on-scroll">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? "open" : ""}`}
                key={index}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer anim-accordion-open">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">
          <div className="contact-container reveal-on-scroll">
            <div className="contact-intro">
              <span className="section-label">CONTACT DIRECT</span>
              <h2>
                Vous avez un <em>projet ?</em>
              </h2>
              <p>
                Remplissez simplement ce court formulaire et poursuivons
                notre échange en direct sur WhatsApp en toute simplicité.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const reason = e.target.reason.value;

                const message = encodeURIComponent(
                  `Bonjour Hacina 👋\n\nJe suis ${name}.\nJe vous contacte concernant :\n${reason}`
                );

                window.open(
                  `https://wa.me/22665433591?text=${message}`,
                  "_blank"
                );
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Votre Nom et Prénom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ex : Moussa Ouédraogo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">Comment puis-je vous aider ?</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="5"
                  placeholder="Décrivez votre besoin : site web, vidéo publicitaire, formation ou collaboration..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="button primary button-shimmer">
                <span>Continuer sur WhatsApp</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            H<span>.</span>
          </div>
          <p className="footer-tagline">
            Ingénieure en informatique & Formatrice en IA — Allier la rigueur du
            code à la magie de l'intelligence artificielle.
          </p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hacina Sawadogo. Tous droits réservés.</p>
          <a href="#accueil" className="footer-back-top">
            Retour en haut ↑
          </a>
        </div>
      </footer>

      {/* ================= FLOATING ACTION BUTTONS ================= */}
      {/* 1. Scroll To Top with Circular Progress */}
      <ScrollProgress />

      {/* 2. Floating Quick WhatsApp Button */}
      <a
        href="https://wa.me/22665433591"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-pill"
        aria-label="Discuter directement sur WhatsApp"
        title="Discuter sur WhatsApp"
      >
        <span className="whatsapp-pulse-ring"></span>
        <span className="whatsapp-icon">💬</span>
        <span className="whatsapp-text">Discuter sur WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
