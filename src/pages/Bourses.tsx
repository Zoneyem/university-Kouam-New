import React from "react";
import bourseImg from "../assets/images/bourse.jpg"; // Place ton image ici

const Bourse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-yellow-200 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bourseImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />{" "}
        {/* Overlay pour lisibilité */}
      </div>

      {/* Contenu central */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-slideUp">
          Bourses d'études
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl animate-slideUp animate-delay-200">
          Des bourses d'études disponibles couvrant{" "}
          <span className="font-bold text-blue-400">jusqu'à 50%</span> des frais
          de scolarité
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 animate-slideUp animate-delay-400">
          Souscrivez Maintenant
        </button>
      </div>

      {/* Styles d'animation simples */}
      <style>
        {`
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 0.8s ease forwards;
          }
          .animate-delay-200 {
            animation-delay: 0.2s;
          }
          .animate-delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );
};

export default Bourse;
