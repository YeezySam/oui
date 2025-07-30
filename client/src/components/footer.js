import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Coordonnées */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">FitClub</h2>
          <p className="mb-2">📍 123 Rue du Fitness, Douala, Cameroun</p>
          <p className="mb-2">📞 +237 6 99 88 77 66</p>
          <p className="mb-2">✉️ contact@fitclub.cm</p>
        </div>

        {/* Formulaire de contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Restez en contact</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <input
              type="email"
              placeholder="Votre e-mail"
              className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <button
              type="submit"
              className="bg-white text-teal-700 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
        © {new Date().getFullYear()} FitClub. Tous droits réservés.
      </div>
    </footer>
  );
}
