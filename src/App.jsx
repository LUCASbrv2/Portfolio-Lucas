import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <>
      <Navbar />

      <header id="accueil" className="position-relative vh-100 d-flex align-items-center justify-content-center overflow-hidden text-white text-center">
        
        {/* NOUVEAU : Vidéo YouTube en arrière-plan */}
        <iframe
          className="position-absolute"
          /* ⚠️ ASTUCE YOUTUBE : 
             - autoplay=1 & mute=1 (Obligatoire pour que ça se lance tout seul)
             - loop=1 & playlist=ID (Obligatoire pour que la vidéo tourne en boucle)
             - controls=0 (Cache la barre de lecture) */
          src="https://www.youtube.com/embed/4Uqpv7WaS44?autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&disablekb=1&playlist=4Uqpv7WaS44"
          style={{
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none', /* Empêche l'utilisateur de mettre pause en cliquant sur le fond */
            transform: 'scale(1.5)', /* Zoom de 50% pour cacher les bordures et le logo YouTube */
            zIndex: 0,
            border: 'none'
          }}
          allow="autoplay; encrypted-media"
        ></iframe>

        {/* Le filtre bleu par-dessus pour lire le texte */}
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}></div>
        
        <div className="container position-relative" style={{ zIndex: 2 }} data-aos="zoom-in">
          <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>Lucas Brevet</h1>
<p className="lead mb-4" style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>Construire des solutions robustes, de la logique C au Web moderne.</p>
          <div className="mt-4">
           <span className="badge bg-light text-primary fs-5 p-3 px-4 rounded shadow-sm text-wrap">
  À la recherche d'une alternance (3 ans) - Sept. 2026
</span>
          </div>
        </div>
      </header>

      <main>
        <section id="profil" className="py-5 mt-5">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-5 text-center mb-4 mb-lg-0" data-aos="fade-right">
                <img src="https://cdn.phototourl.com/free/2026-03-24-065e9e84-b576-4b75-880c-08931a928af4.jpg" alt="Lucas Brevet" className="rounded shadow-lg" style={{ width: "100%", maxWidth: "400px", aspectRatio: "1 / 1", objectFit: "cover", border: "5px solid #084887" }} loading="lazy" />
              </div>
              <div className="col-lg-7">
                <h2 className="fw-bold mb-4 text-primary">À propos de moi</h2>
                <div data-aos="fade-left">
                  <p className="lead text-dark">Étudiant en 2e année à l'ESIEA - Laval, je recherche une alternance de 3 ans en cybersécurité ou développement web à partir de septembre 2026. Curieux, motivé et autonome, je souhaite contribuer activement à des projets concrets au sein d'une équipe dynamique.</p>
                  <a href="#contact" className="btn btn-primary btn-lg mt-3 shadow hover-zoom-card">Me contacter</a>
                </div>
              </div>
            </div>

            <h3 className="fw-bold mb-4 text-primary text-center mt-5">Compétences & Outils</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card h-100 border-0 shadow-sm p-3 skill-card">
                  <h5 className="fw-bold text-primary">🖥️ Développement Back-End</h5>
                  <p className="text-muted small mb-0">Maîtrise avancée du langage C (Jeux, Algorithmique). Notions solides en PHP pour la gestion serveur.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card h-100 border-0 shadow-sm p-3 skill-card">
                  <h5 className="fw-bold text-primary">🌐 Développement Front-End</h5>
                  <p className="text-muted small mb-0">Création d'interfaces modernes avec HTML5, CSS3, JavaScript et la bibliothèque React.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 border-0 shadow-sm p-3 skill-card">
                  <h5 className="fw-bold text-primary">⚙️ Logiciels & Outils</h5>
                  <p className="text-muted small mb-0">VS Code, Git/GitHub, Figma utilisation d'outils de maintenance informatique et optimisation système.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectGrid />

        <section id="parcours" className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Mon Parcours & Expériences</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <h3 className="h4 mb-4 text-primary">🎓 Formation</h3>
                <ul className="list-group list-group-flush shadow-sm">
                  
                  <li className="list-group-item p-4" data-aos="fade-up" data-aos-delay="100">
                    <h5 className="text-primary mb-2">🎓 École d'Ingénieurs (ESIEA)</h5>
                    <h6 className="fw-bold mb-1">Cycle préparatoire, 2ème année | Laval (2024 - 2026)</h6>
                    <p className="text-muted mb-3 small">
                      Apprentissage de l'informatique et des sciences de l'ingénieur. Réalisation de multiples projets concrets : développement de jeux vidéo (C) et conception de solutions Web sécurisées.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-secondary border">Algorithmique (C)</span>
                      <span className="badge bg-light text-secondary border">Développement Web</span>
                      <span className="badge bg-light text-secondary border">Gestion de projet</span>
                    </div>
                  </li>

                  <li className="list-group-item p-4" data-aos="fade-up" data-aos-delay="200">
                    <h5 className="text-primary mb-2">🏫 Baccalauréat Général</h5>
                    <h6 className="fw-bold mb-1">Lycée Don Bosco, Mayenne | 2023 - 2024</h6>
                    <p className="text-muted mb-3 small">
                      Spécialités Mathématiques & Physique-Chimie, avec options Sport et Mathématiques Expertes. Un parcours exigeant développant une forte capacité d'abstraction.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-secondary border">Rigueur analytique</span>
                      <span className="badge bg-light text-secondary border">Esprit scientifique</span>
                      <span className="badge bg-light text-secondary border">Logique mathématique</span>
                    </div>
                  </li>

                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="h4 mb-4 text-primary">💼 Expériences</h3>
                <ul className="list-group list-group-flush shadow-sm">
                  <li className="list-group-item p-4" data-aos="fade-up" data-aos-delay="100">
                    <h5 className="text-primary mb-3">🌱 Projets à impact RSE</h5>
                    
                    <div className="mb-3">
                      <h6 className="fw-bold mb-1">Challenge Citoyen (2025/2026)</h6>
                      <p className="text-muted mb-2 small">
                        Gestion de la communication et aide à l'organisation d'un événement sportif et mémoriel.
                      </p>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge bg-light text-secondary border">Organisation</span>
                        <span className="badge bg-light text-secondary border">Communication</span>
                        <span className="badge bg-light text-secondary border">Travail en équipe</span>
                      </div>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">Soutien Scolaire (2024/2025)</h6>
                      <p className="text-muted mb-2 small">
                        Accompagnement et aide méthodologique pour des élèves en difficulté au Lycée Hautes-Follis (Laval).
                      </p>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge bg-light text-secondary border">Pédagogie</span>
                        <span className="badge bg-light text-secondary border">Empathie</span>
                        <span className="badge bg-light text-secondary border">Adaptabilité</span>
                      </div>
                    </div>
                  </li>
                  
                  <li className="list-group-item p-4" data-aos="fade-up" data-aos-delay="200">
                    <h5 className="text-primary mb-2">📦 Magasinier</h5>
                    <h6 className="fw-bold mb-1">BUT Cosy, Mayenne | Juil. - Août (2024 & 2025)</h6>
                    <p className="text-muted mb-3 small">
                      Logistique de distribution, gestion d'entrepôt, manutention et aide au transport/livraison lors des pics d'activité estivaux.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-secondary border">Travail en équipe</span>
                      <span className="badge bg-light text-secondary border">Sens du relationnel</span>
                      <span className="badge bg-light text-secondary border">Rigueur logistique</span>
                    </div>
                  </li>

                  <li className="list-group-item p-4" data-aos="fade-up" data-aos-delay="300">
                    <h5 className="text-primary mb-2">💻 Technicien en informatique (Stages)</h5>
                    <h6 className="fw-bold mb-1">EM Informatique & Maine Services | 2021 & 2022</h6>
                    <p className="text-muted mb-3 small">
                      Maintenance informatique, diagnostic de pannes, sécurité et optimisation des processus de gestion et de production.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-secondary border">Résolution de problèmes</span>
                      <span className="badge bg-light text-secondary border">Autonomie</span>
                      <span className="badge bg-light text-secondary border">Prise d'initiatives</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="loisirs" className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Mon Temps Libre & Engagements</h2>

            <div className="card border-0 shadow-sm mb-4 hover-zoom-card overflow-hidden" data-aos="fade-up">
              <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-8 p-4 p-md-5">
                  <h3 className="h4 text-primary mb-3">🤾‍♂️ Sport : Handball et autres</h3>
                  <p className="text-muted mb-0">Je pratique le handball depuis 11 ans. Ce sport d'équipe m'a appris la rigueur, le dépassement de soi et l'importance de la cohésion de groupe pour atteindre un objectif commun.</p>
                </div>
                <div className="col-md-4">
                  <img src="https://d1p2aimeyx6kdr.cloudfront.net/wp-content/uploads/2024/05/21102746/Karabatic-handball.jpg" alt="Terrain de Handball" className="img-fluid w-100 h-100" style={{ objectFit: "cover", minHeight: "250px" }} loading="lazy" />
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4 hover-zoom-card overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-8 p-4 p-md-5">
                  <h3 className="h4 text-primary mb-3">🤝 Vie Associative : Bureau des Sports</h3>
                  <p className="text-muted mb-0">Membre actif du Bureau des Sports de l'ESIEA Laval, je participe à la gestion de l'événementiel sportif de l'école. C'est une super expérience pour développer mes compétences en organisation, en communication et en gestion de projet !</p>
                </div>
                <div className="col-md-4">
                  <img src="https://cdn.phototourl.com/free/2026-03-25-8ab601fe-6bb5-43d5-8e3f-3604301593fc.png" alt="Événement associatif" className="img-fluid w-100 h-100" style={{ objectFit: "cover", minHeight: "250px" }} loading="lazy" />
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4 hover-zoom-card overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-8 p-4 p-md-5">
                  <h3 className="h4 text-primary mb-3">🎵 Musique</h3>
                  <p className="text-muted mb-0">Passionné par la musique, je passe la plupart de mon temps libre à en écouter. C'est pour moi un excellent moyen de me ressourcer, de me concentrer et de stimuler ma créativité.</p>
                </div>
                <div className="col-md-4">
                  <img src="https://m.media-amazon.com/images/I/51rttY7a+9L.png" alt="Musique" className="img-fluid w-100 h-100" style={{ objectFit: "cover", minHeight: "250px" }} loading="lazy" />
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer id="contact" className="bg-dark text-white text-center py-5 mt-5">
        <div className="container" data-aos="fade-in">
          
          <h3 className="fw-bold mb-4">Travaillons ensemble !</h3>
          <p className="lead mb-4">
            Vous cherchez un alternant motivé pour septembre 2026 ? <br/>
            N'hésitez pas à me contacter par email ou via mes réseaux.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
  <span className="badge bg-primary text-white p-3 px-4 rounded shadow-sm text-wrap" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
    📧 brevet.lucas53@gmail.com
  </span>
  <span className="badge bg-light text-primary p-3 px-4 rounded shadow-sm" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}>
    📞 06 59 50 62 74
  </span>
</div>

          <div className="d-flex justify-content-center gap-3 mb-5 mt-4">
            <a href="https://www.linkedin.com/in/lucas-brevet-18506a386" target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-circle p-3 shadow hover-zoom-card d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-100" />
            </a>
          <a href="https://www.facebook.com/lucas.brevet.92" target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-circle p-3 shadow hover-zoom-card d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-100" />
            </a>
          </div>

          <hr className="bg-light text-white" />
          
          <p className="mt-4 mb-0  small ">
            © 2026 Lucas Brevet - Tous droits réservés. <br/>
            Propulsé par React, Bootstrap & beaucoup de café ☕
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;