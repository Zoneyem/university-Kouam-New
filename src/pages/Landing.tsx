import backgroundImage from "../assets/images/library.jpg";

const Landing = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Rideau gris léger */}
      <div className="absolute inset-0 bg-gray-300/30 "></div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1
          className="text-gray-100 text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-slideUpFade antialiased"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
        >
          Bienvenue sur ISSTEK
        </h1>
        <p
          className="text-gray-200 text-lg sm:text-xl md:text-2xl animate-slideUpFade delay-300 antialiased"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
        >
          Institut Supérieur des Sciences et Technologies Kouam
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUpFade {
            animation: slideUpFade 1s ease-out forwards;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
