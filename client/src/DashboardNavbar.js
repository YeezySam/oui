// DashboardNavbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DashboardNavbar = () => {
  const location = useLocation();
  const prenom = location.state?.prenom || 'Utilisateur';

  return (
    <nav className="bg-black bg-opacity-70 text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* Partie gauche : Logo + Titre */}
      <div className="flex items-center gap-3">
        {/* Logo (remplace le chemin si nécessaire) */}
        <img
             src="/images/armoiries_logo_cenadi.png"
            alt="Logo"
            className="h-10 w-20 object-contain transform scale-125"
        />

        <span className="text-xl font-bold">GOV-AI</span>
      </div>

      {/* Partie droite : Message personnalisé */}
      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        Bienvenue, administrateur {prenom}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
