import React, { useState } from 'react';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: "Space Shooter 2D", 
      category: "C", 
      desc: "Développement d'un jeu vidéo de tir spatial en langage C.",
      link: "https://github.com/ArnaudBannier?tab=repositories",
      hasVideo: true,
      // ⚠️ REMPLACE CE LIEN par le lien "Intégrer/Embed" de ta vidéo
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
      // ⚠️ REMPLACE CE LIEN par le lien "Intégrer/Embed" de ta vidéo
      videoSrc: "https://www.youtube.com/embed/4Uqpv7WaS44", 
      img: "https://cdn.phototourl.com/free/2026-03-24-8ba7d6d2-2720-4dfe-9e9d-5f77a31e84ca.png" 
    },
    { 
      id: 3, 
      title: "Gestion de Challenge par QR-Code", 
      category: "Web", 
      desc: "Évolution d'un système technique de gestion de course/challenge en cours.",
      hasVideo: false,
      img: "https://blog.bulbthings.com/wp-content/uploads/2023/02/Shutterstock_2250578027-scaled.jpg" 
    },
    { 
      id: 4, 
      title: "Refonte de site associatif", 
      category: "Web", 
      desc: "Modernisation et sécurisation d'un site web associatif (Projet en cours).",
      hasVideo: false,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projets" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Mes Réalisations</h2>
        
        <div className="text-center mb-5">
          {['all', 'C', 'Web'].map((cat) => (
            <button 
              key={cat}
              className={`btn btn-outline-primary mx-1 ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'Tous les projets' : `Projets ${cat}`}
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
                    <span className="badge bg-secondary">{project.category}</span>
                  </div>  
                  <p className="card-text text-muted">{project.desc}</p>
                  
                  {project.link && (
                    <p className="card-text">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        Référence du basecode
                      </a>
                    </p>
                  )}
                  
                  <div className="mt-auto pt-3">
                    {project.hasVideo ? (
                      <button 
                        className="btn btn-sm btn-primary w-100"
                        data-bs-toggle="modal" 
                        data-bs-target="#videoModal"
                        onClick={() => setSelectedVideo(project.videoSrc)}
                      >
                        ▶ Voir la démo vidéo
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

      {/* LA MODALE BOOTSTRAP (Fenêtre pop-up) */}
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark border-0 shadow-lg">
            
            <div className="modal-header border-secondary">
              <h5 className="modal-title text-white" id="videoModalLabel">Démo du projet</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                onClick={() => setSelectedVideo(null)}
              ></button>
            </div>
            
            <div className="modal-body p-0">
              {selectedVideo && (
                /* NOUVEAU : iframe responsive pour les liens externes (YouTube, etc.) */
                <div className="ratio ratio-16x9">
                  <iframe 
                    src={selectedVideo} 
                    title="Vidéo du projet" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-bottom"
                  ></iframe>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}