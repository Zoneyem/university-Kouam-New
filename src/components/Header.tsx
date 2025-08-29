import { Link } from "react-router-dom";
import isstekImg from "../assets/images/issek_logo.png";

const Header = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center">
        {/* Logo animé */}
        <Link to="/" className="flex items-center gap-4 animate-logo-bounce">
          <img
            src={isstekImg}
            alt="ISSTEK Logo"
            className="h-20 w-20 object-cover rounded-lg shadow-lg border-2 border-yellow-500"
          />
        </Link>

        {/* Nom de l'institut avec gradient harmonisé */}
        <div className="text-center mt-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            INSTITUT SUPERIEUR DES SCIENCES ET TECHNOLOGIES KOUAM
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-yellow-300 to-blue-400 bg-clip-text text-transparent animate-gradient-x delay-200">
            KOUAM HIGHER INSTITUT OF SCIENCE AND TECHNOLOGY
          </h2>
        </div>

        {/* Texte supplémentaire : arrêté et adresse */}
        <p className="mt-2 text-center text-yellow-200 text-sm md:text-base">
          Arrêté No 20-08759/N/MINESUP/SG/DDES/ESUP/SDA/GA du 19/08/2020
          <br />
          Situé à Yaoundé-Etoug-Ebé, Face Collège de l'Espérance
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes logoBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-logo-bounce {
            animation: logoBounce 2s infinite ease-in-out;
          }

          @keyframes gradientX {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradientX 5s ease infinite;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
