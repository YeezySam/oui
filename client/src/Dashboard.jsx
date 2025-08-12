import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import SectionCard from "./components/SectionCard";


const sections = [
  {
    title: "Bienvenue sur GOV-AI_Admin",
    type: "texte",
    description: "GOV-AI est une intelligence artificielle développée pour faciliter l’accès aux textes officiels du Cameroun.",
  },
  {
    title: "Image + texte",
    type: "image",
    description: "Type: texte",
    image: "", // à remplacer par l'image réelle
  },
  {
    title: "Fonctionnalités",
    type: "texte",
  },
  {
    title: "Sanctions",
    type: "texte",
  },
];

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardNavbar />

      {/* Bouton pour ouvrir/fermer la sidebar */}
      <div
        className="fixed left-0 top-20 z-40"
        onMouseEnter={() => setIsSidebarVisible(true)}
        onMouseLeave={() => setIsSidebarVisible(false)}
      >
        <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div
          className="fixed left-0 top-20 w-64 bg-white shadow-md p-4 z-30 h-full"
          onMouseEnter={() => setIsSidebarVisible(true)}
          onMouseLeave={() => setIsSidebarVisible(false)}
        >
          <h2 className="text-xl font-bold mb-4">DASHBOARD</h2>
          <ul>
            <li className="py-2">Sections</li>
            <li className="py-2">Images</li>
            <li className="py-2">Apparence</li>
            <li className="py-2">Traductions</li>
            <li className="py-2">Messages</li>
          </ul>
        </div>
      )}

      {/* Contenu Principal */}
      <div className="flex-1 p-8 ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Sections</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            + Nouvelle section
          </button>
        </div>
        <div className="space-y-4">
          
          {sections.map((section, i) => (
            <SectionCard key={i} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
