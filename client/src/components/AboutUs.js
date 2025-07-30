import React, { useEffect, useState } from "react";
import aboutImage from "../assets/pexels-ketut-subiyanto-5038876 copy.jpg"; // Image déplacée

export default function AboutUs() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000); // 5 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-300 to-orange-300 py-20 px-4" id="about">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="À propos de nous"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Texte */}
        <div className="w-full md:w-1/2 transition-opacity duration-1000"
             style={{ opacity: showText ? 1 : 0 }}>
          <h2 className="text-4xl font-bold text-teal-600 mb-6">À propos de nous</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Chez FitClub, notre mission est de transformer votre bien-être. Nous allions sport, nutrition et accompagnement personnalisé pour vous offrir une expérience de remise en forme unique et durable. Rejoignez notre communauté pour atteindre vos objectifs en toute sérénité.
          </p>
        </div>
      </div>
    </section>
  );
}
