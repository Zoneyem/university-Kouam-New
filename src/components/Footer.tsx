import { links } from "@/utils/links";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100/20 backdrop-blur-md text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo + Mission */}
        <div className="animate-pulseMission">
          <h2 className="text-2xl font-bold tracking-wide mb-4">ISSTEK</h2>
          <p className="text-sm leading-relaxed">
            Institut Supérieur des Sciences et Technologies Kouam – Former des
            leaders compétents, engagés et prêts pour le monde de demain.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map(({ ref, label }) => (
              <li key={ref}>
                <NavLink
                  to={ref}
                  className="relative inline-block transition-all duration-300 hover:pl-2 hover:text-gray-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gray-700 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Ressources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ressources</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {["E-Learning", "FAQ"].map((res) => (
              <li key={res}>
                <NavLink
                  to={`/${res.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative inline-block transition-all duration-300 hover:pl-2 hover:text-gray-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gray-700 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {res}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + icônes sociales */}
        <div className="hidden lg:block">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            Yaoundé – Etoug-Ebé, face Collège de l’Espérance
          </p>
          <p className="text-sm mt-2">isstek@gmail.com</p>
          <p className="text-sm">+237 677 699 402 / 699 101 557</p>
          <div className="flex gap-4 mt-4">
            <Link
              to={"https://www.facebook.com/search/top?q=isstek%20kouam"}
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-[#1877F2]"
              target="_blank"
            >
              <Facebook size={24} />
            </Link>
            <Link
              to={"https://www.instagram.com/p/DHFJnnsxC_P/"}
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-[#E4405F]"
              target="_blank"
            >
              <Instagram size={24} />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/posts/socious-io_isstek-shin-digitalcredentials-activity-7305395892390420480-O1Fq"
              }
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-[#0A66C2]"
              target="_blank"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              to={"https://www.youtube.com/@Isstek"}
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-[#FF0000]"
              target="_blank"
            >
              <Youtube size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-gray-300/40 mt-8 py-4 text-center text-sm text-gray-600">
        © {year} ISSTEK. Tous droits réservés.
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes pulseMission {
            0%, 100% { opacity: 1; transform: translateY(0); }
            50% { opacity: 0.8; transform: translateY(-3px); }
          }
          .animate-pulseMission {
            animation: pulseMission 3s infinite ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
