import React, { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Bienvenue chez FitClub - Votre bien-être commence ici !";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100); // vitesse d'apparition en ms par lettre

      return () => clearTimeout(timeout);
    } else {
      // Reset après avoir fini d'afficher le texte, délai avant de recommencer
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000); // délai avant de recommencer (2 sec)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gray-900">
      {/* Image floutée en arrière-plan */}
      <img
        src="/images/pexels-823sl-2294361-copy.jpg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-40 z-0"
      />

      {/* Texte au-dessus */}
      <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold px-6 max-w-3xl">
        {displayedText}
        <span className="blinking-cursor">|</span>
      </h1>

      {/* Animation du curseur */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
