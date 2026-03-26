import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-glass" id="mainNav">
      <div className="container">

        {/* 1. LOGO POUR MOBILE (Caché sur grand écran avec d-lg-none) */}
        <a className="navbar-brand fw-bold d-flex align-items-center d-lg-none" href="#accueil">
          <img src="https://cdn.phototourl.com/free/2026-03-25-a35c06f7-acc6-4150-80bb-8579c3145ca9.png" alt="Logo" className="rounded" width="80" height="68" loading="lazy" />
        </a>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          {/* On remet mx-auto pour centrer tout le bloc au milieu de l'écran */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">

            {/* 2. LOGO POUR ORDINATEUR (Caché sur mobile, collé juste avant "Accueil" !) */}
            <li className="nav-item d-none d-lg-block me-2">
              <a className="nav-link p-0 hover-zoom-card2" href="#accueil">
                <img src="https://cdn.phototourl.com/free/2026-03-25-a35c06f7-acc6-4150-80bb-8579c3145ca9.png" alt="Logo" className="rounded " width="100" height="90" loading="lazy" />
              </a>
            </li>
            <li className="nav-item" ><a className="nav-link px-3 hover-zoom-card2" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link px-3 hover-zoom-card2" href="#profil">Profil</a></li>
            <li className="nav-item"><a className="nav-link px-3 hover-zoom-card2" href="#projets">Projets</a></li>
            <li className="nav-item"><a className="nav-link px-3 hover-zoom-card2" href="#parcours">Parcours</a></li>
            <li className="nav-item"><a className="nav-link px-3 hover-zoom-card2" href="#loisirs">Hobbies</a></li>
            <li className="nav-item"><a className="nav-link px-3 hover-zoom-card2" href="#contact">Contact</a></li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

