import React, { useState } from 'react';
import SectionCard from "./components/SectionCard";
import DashboardNavbar from './DashboardNavbar';

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
    <div className="flex-1 p-8 bg-green-300 min-h-screen">
      <DashboardNavbar/>
      <div className="pt-20">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onMouseEnter={() => setIsSidebarVisible(true)}
            onMouseLeave={() => setIsSidebarVisible(false)}
          >
            Menu Dashboard
          </button>
          {isSidebarVisible && (
            <div
              className="absolute left-0 mt-2 w-64 bg-gradient-to-r from-green-200 to-white shadow-lg rounded-lg p-4"
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
        </div>
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
