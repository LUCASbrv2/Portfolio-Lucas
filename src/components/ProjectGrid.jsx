import React, { useState } from 'react';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState({ type: null, src: null });

  const projects = [
   
    
    { 
      id: 1, 
      title: "Space Shooter 2D", 
      category: "C", 
      desc: "Développement d'un jeu vidéo de tir spatial en langage C.",
      link: "https://github.com/ArnaudBannier?tab=repositories",
      hasVideo: true,
      hasPdf: false,
      videoSrc: "https://www.youtube.com/embed/SLjEC4Tk56g", 
      img: "https://cdn.phototourl.com/free/2026-03-24-2633b3bc-83ef-4187-87b4-8a4c64be8635.png" 
    },
    { 
      id: 2, 
      title: "Platformer 2D", 
      category: "C", 
      desc: "Conception et développement d'un jeu de plateforme.",
      link: "https://github.com/ArnaudBannier?tab=repositories",
      hasVideo: true,
      hasPdf: false,
      videoSrc: "https://www.youtube.com/embed/4Uqpv7WaS44", 
      img: "https://cdn.phototourl.com/free/2026-03-24-8ba7d6d2-2720-4dfe-9e9d-5f77a31e84ca.png" 
    },
    { 
      id: 3, 
      title: "Gestion de Challenge par QR-Code", 
      category: "Web", 
      desc: "Évolution d'un système technique de gestion de course/challenge en cours.",
      hasVideo: false,
      hasPdf: false,
      img: "https://blog.bulbthings.com/wp-content/uploads/2023/02/Shutterstock_2250578027-scaled.jpg" 
    },
    { 
      id: 4, 
      title: "Refonte de site associatif", 
      category: "Web", 
      desc: "Modernisation et sécurisation d'un site web associatif (Projet en cours).",
      hasVideo: false,
      hasPdf: false,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
    },
    {    id: 5,
      title: "Horloge & Chronomètre sur FPGA",
      category: "Elec",
      desc: "Conception d'une horloge numérique sur Quartus. Implémentation de compteurs synchrones cascadés, de diviseurs de fréquence et multiplexage pour afficheurs 7 segments.",
      hasVideo: false,
      hasPdf: true, 
      pdfSrc: "/docs/projet-elec.pdf", 
      img: "/images/elec-schema.png"
    },
     {
      id: 6,
      title: "Solveur & Générateur Smart Games",
      category: "C",
      desc: "Projet final d'Algorithmique Avancée. Développement d'un moteur pour le jeu \"Lièvres et Renards\", d'un solveur optimisé (BFS et table de hachage sur-mesure) et d'un générateur de niveaux procédural.",
      link: "https://github.com/ArnaudBannier/sdl3-template", // 🔗 Lien vers le basecode du prof
      downloadLink: "/docs/core-smart-games.zip", // 📁 Lien vers TON code à télécharger
      downloadLabel: "📁 Télécharger mon code (Dossier Core)",
      hasVideo: true,
      hasPdf: false,
      videoSrc: "https://youtube.com/embed/rFiOR_dvyFw", 
      img: "https://cdn.phototourl.com/free/2026-03-26-a571775a-6890-473e-b455-f04670ace2e9.png" 
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projets" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Mes Réalisations</h2>
        
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {['all', 'C', 'Web', 'Elec'].map((cat) => (
            <button 
              key={cat}
              className={`btn btn-outline-primary hover-zoom-card ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'Tous les projets' : cat === 'Elec' ? 'Projets Électronique' : `Projets ${cat}`}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="card h-100 shadow-sm border-0 project-card overflow-hidden hover-zoom-card">
                <img src={project.img} className="card-img-top" alt={project.title} style={{height: "250px", objectFit: "cover"}} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold mb-0">{project.title}</h5>
                    <span className="badge bg-secondary">{project.category === 'Elec' ? 'Électronique' : project.category}</span>
                  </div>  
                  <p className="card-text text-muted mb-2">{project.desc}</p>
                  
                  {/* --- ZONE DES LIENS --- */}
                  <div className="mb-3">
                    {/* 1. Lien vers le Basecode externe (ex: GitHub du prof) */}
                    {project.link && (
                      <div className="mb-1">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none small">
                          🔗 Référence du basecode
                        </a>
                      </div>
                    )}
                    
                    {/* 2. Lien de Téléchargement ZIP local */}
                    {project.downloadLink && (
                      <div>
                        <a href={project.downloadLink} download className="text-decoration-none fw-bold text-primary small">
                          {project.downloadLabel}
                        </a>
                      </div>
                    )}
                  </div>
                  {/* ---------------------- */}

                  <div className="mt-auto pt-2">
                    {project.hasVideo ? (
                      <button 
                        className="btn btn-sm btn-primary w-100"
                        data-bs-toggle="modal" 
                        data-bs-target="#mediaModal"
                        onClick={() => setSelectedMedia({ type: 'video', src: project.videoSrc })}
                      >
                        ▶ Voir la démo vidéo
                      </button>
                    ) : project.hasPdf ? (
                      <button 
                        className="btn btn-sm btn-primary w-100 text-white"
                        data-bs-toggle="modal" 
                        data-bs-target="#mediaModal"
                        onClick={() => setSelectedMedia({ type: 'pdf', src: project.pdfSrc })}
                      >
                        📄 Voir le rapport (PDF)
                      </button>
                    ) : (
                      <span className="text-muted small">Projet en cours / Démo à venir</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="modal fade" id="mediaModal" tabIndex="-1" aria-labelledby="mediaModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content bg-dark border-0 shadow-lg">
            
            <div className="modal-header border-secondary">
              <h5 className="modal-title text-white" id="mediaModalLabel">
                {selectedMedia.type === 'pdf' ? 'Rapport du projet' : 'Démo du projet'}
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                onClick={() => setSelectedMedia({ type: null, src: null })}
              ></button>
            </div>
            
            <div className="modal-body p-0" style={{ height: selectedMedia.type === 'pdf' ? '80vh' : 'auto' }}>
              
              {selectedMedia.type === 'video' && (
                <div className="ratio ratio-16x9">
                  <iframe 
                    src={selectedMedia.src} 
                    title="Vidéo du projet" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-bottom"
                  ></iframe>
                </div>
              )}

              {selectedMedia.type === 'pdf' && (
                <iframe 
                  src={selectedMedia.src} 
                  title="Rapport PDF" 
                  width="100%" 
                  height="100%" 
                  className="rounded-bottom border-0"
                ></iframe>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}