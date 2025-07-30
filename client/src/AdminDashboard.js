// src/AdminDashboard.js
import React from 'react';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-green-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tableau de bord - Administrateur</h1>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Se déconnecter</button>
      </header>

      {/* Message de bienvenue animé */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold text-green-800 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-800 pr-5 w-fit mx-auto">
          Bienvenue, Administrateur !
        </h2>
      </section>

      {/* Zones de contrôle */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2 text-green-700">Modifier la Navbar</h3>
          <p className="text-sm">Changer les titres, couleurs, ou liens du menu de navigation.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2 text-green-700">Modifier le Contenu</h3>
          <p className="text-sm">Changer les textes, titres, descriptions de la page.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2 text-green-700">Modifier les Images</h3>
          <p className="text-sm">Téléverser ou remplacer les images utilisées sur le site.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2 text-green-700">Changer le Thème</h3>
          <p className="text-sm">Configurer les couleurs, styles, apparences du site.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2 text-green-700">Langue du site</h3>
          <p className="text-sm">Gérer les traductions et versions linguistiques du site.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2 text-green-700">Avis des visiteurs</h3>
          <p className="text-sm">Lire et analyser les avis ou commentaires des utilisateurs.</p>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
