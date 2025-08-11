import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (matricule && password) {
      alert("Connexion réussie !");
      navigate("/dashboard");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Se connecter</h2>

        <form onSubmit={handleLogin} className="space-y-6 text-white">
          <div>
            <label className="block text-sm font-medium mb-1">Matricule</label>
            <input
              type="text"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Votre matricule"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Votre mot de passe"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition duration-300 py-3 rounded-lg font-semibold text-white"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
