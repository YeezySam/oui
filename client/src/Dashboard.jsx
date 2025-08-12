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
  const [activeSection, setActiveSection] = useState('Sections');

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardNavbar />

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">DASHBOARD</h2>
        <ul>
          <li className={`py-2 ${activeSection === 'Sections' ? 'text-blue-500' : ''}`} onClick={() => setActiveSection('Sections')}>Sections</li>
          <li className={`py-2 ${activeSection === 'Images' ? 'text-blue-500' : ''}`} onClick={() => setActiveSection('Images')}>Images</li>
          <li className={`py-2 ${activeSection === 'Apparence' ? 'text-blue-500' : ''}`} onClick={() => setActiveSection('Apparence')}>Apparence</li>
          <li className={`py-2 ${activeSection === 'Traductions' ? 'text-blue-500' : ''}`} onClick={() => setActiveSection('Traductions')}>Traductions</li>
          <li className={`py-2 ${activeSection === 'Messages' ? 'text-blue-500' : ''}`} onClick={() => setActiveSection('Messages')}>Messages</li>
        </ul>
      </div>

      {/* Contenu Principal */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{activeSection}</h1>
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
