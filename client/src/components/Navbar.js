import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo ou Titre */}
        <h1 className="text-2xl font-extrabold tracking-wide">FitClub</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#accueil" className="hover:text-yellow-200 transition duration-300">Accueil</a>
          <a href="#services" className="hover:text-yellow-200 transition duration-300">Services</a>
          <a href="#about" className="hover:text-yellow-200 transition duration-300">À propos</a>
          <a href="#menu" className="hover:text-yellow-200 transition duration-300">Menus</a>
          <a href="#contact" className="hover:text-yellow-200 transition duration-300">Contact</a>
        </nav>

        {/* Bouton menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Menu mobile"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-gradient-to-r from-teal-500 to-blue-500">
          <nav className="flex flex-col space-y-4">
            <a href="#accueil" className="hover:text-yellow-200 transition">Accueil</a>
            <a href="#services" className="hover:text-yellow-200 transition">Services</a>
            <a href="#about" className="hover:text-yellow-200 transition">À propos</a>
            <a href="#menu" className="hover:text-yellow-200 transition">Menus</a>
            <a href="#contact" className="hover:text-yellow-200 transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
