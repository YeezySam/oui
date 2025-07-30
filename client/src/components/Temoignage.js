import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Marie K.",
    text: "Grâce à FitClub, j’ai retrouvé ma forme en quelques mois. L’ambiance est incroyable !",
    title: "Infirmière",
  },
  {
    name: "Jean D.",
    text: "Des coachs très professionnels et un suivi nutritionnel au top. Je recommande vivement.",
    title: "Développeur web",
  },
  {
    name: "Sophie L.",
    text: "Les équipements sont modernes et l’équipe est toujours motivante. J’adore venir ici !",
    title: "Étudiante",
  },
  {
    name: "Lucas T.",
    text: "Un cadre propre, des programmes adaptés, et des résultats visibles rapidement.",
    title: "Professeur de sport",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 secondes

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Témoignages</h2>

        <div className="mx-auto w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8 transition-all duration-1000 ease-in-out">
          <p className="text-lg text-gray-700 italic mb-4">“{current.text}”</p>
          <h3 className="text-xl font-semibold text-teal-600">{current.name}</h3>
          <span className="text-sm text-gray-500">{current.title}</span>
        </div>
      </div>
    </section>
  );
}
