import React, { useState, useEffect } from "react";

const menus = [
  {
    id: 1,
    title: "Menu Vitalité",
    description: "Un menu équilibré pour commencer la journée en forme.",
    price: "12 €",
    image: "/images/pexels-polina-tankilevitch-4443441.jpg",
  },
  {
    id: 2,
    title: "Menu Détox",
    description: "Des plats légers pour purifier votre corps naturellement.",
    price: "15 €",
    image: "/images/pexels-polina-kovaleva-5644945.jpg",
  },
  {
    id: 3,
    title: "Menu Protéiné",
    description: "Idéal pour les sportifs, riche en protéines de qualité.",
    price: "18 €",
    image: "/images/pexels-nicola-barts-7937026.jpg",
  },
  {
    id: 4,
    title: "Menu Végétarien",
    description: "Des saveurs végétales pour une alimentation saine et gourmande.",
    price: "14 €",
    image: "/images/pexels-polina-kovaleva-5644945.jpg",
  },
  {
    id: 5,
    title: "Menu Énergétique",
    description: "Boostez votre énergie avec ce menu riche en nutriments.",
    price: "17 €",
    image: "/images/pexels-jenna-hamra-248942-1182511.jpg",
  },
  {
    id: 6,
    title: "Menu Gourmand",
    description: "Pour les amateurs de saveurs riches et variées.",
    price: "20 €",
    image: "/images/pexels-iara-melo-558346607-30635715.jpg",
  },
];

export default function Menu() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= menus.length) return 1; // Reset à 1 après avoir montré toutes
        return prev + 1;
      });
    }, 3000); // toutes les 3 secondes on montre une carte de plus

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-200 to-yellow-300 py-16 px-6">

      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nos Menus Santé</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menus.slice(0, visibleCount).map((menu) => (
          <div
            key={menu.id}
            className="bg-white rounded-xl shadow-lg p-6 text-center transition-opacity duration-700 opacity-100"
          >
            <img
              src={menu.image}
              alt={menu.title}
              className="mx-auto w-40 h-40 rounded-full object-cover mb-6 shadow-md"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{menu.title}</h3>
            <p className="text-gray-700 mb-4">{menu.description}</p>
            <p className="text-teal-600 font-bold text-xl">{menu.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
