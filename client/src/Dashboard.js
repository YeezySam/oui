import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTypewriter } from './useTypewriter';
import {
  FaHome,
  FaBars,
  FaLanguage,
  FaImage,
  FaComments,
  FaChartBar,
  FaPaintBrush,
  FaCog,
  FaTools,
} from 'react-icons/fa';

const Dashboard = () => {
  const location = useLocation();
  const prenom = location.state?.prenom || 'Administrateur';
  const text = `Bienvenue, ${prenom}`;
  const animatedText = useTypewriter(text, 100);

  const [active, setActive] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: <FaHome />, label: 'Tableau de bord' },
    { id: 'navbar', icon: <FaBars />, label: 'Modifier Navbar' },
    { id: 'footer', icon: <FaTools />, label: 'Modifier Footer' },
    { id: 'accueil', icon: <FaCog />, label: 'Contenu Accueil' },
    { id: 'langue', icon: <FaLanguage />, label: 'Changer la langue' },
    { id: 'theme', icon: <FaPaintBrush />, label: 'Thème du site' },
    { id: 'images', icon: <FaImage />, label: 'Gérer les images' },
    { id: 'avis', icon: <FaComments />, label: 'Avis des visiteurs' },
    { id: 'stats', icon: <FaChartBar />, label: 'Statistiques' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white shadow-lg">
        <div className="p-6 font-bold text-xl border-b border-blue-500">
          Admin Panel
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 w-full px-6 py-3 hover:bg-blue-600 transition-all ${
                active === item.id ? 'bg-blue-600' : ''
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 p-10 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('images/LocalCENADI.webp')",
        }}
      >
        {/* Couche sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0"></div>

        {/* Contenu principal */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-6">
            {animatedText}
            <span className="blink">|</span>
          </h1>

          <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {menuItems.find((item) => item.id === active)?.label}
            </h2>
            <p className="text-white">
              Contenu en cours de développement pour :{' '}
              <strong>{active}</strong>
            </p>
          </div>
        </div>

        <style>{`
          .blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}</style>
      </main>
    </div>
  );
};

export default Dashboard;
