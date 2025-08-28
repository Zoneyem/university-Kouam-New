import { links } from "@/utils/links";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Mission avec animation */}
        <div className="animate-pulseMission">
          <h2 className="text-2xl font-bold tracking-wide mb-4">ISSTEK</h2>
          <p className="text-sm leading-relaxed">
            Institut Supérieur des Sciences et Technologies Kouam – Former des
            leaders compétents, engagés et prêts pour le monde de demain.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {links.map(({ ref, label }) => (
              <li key={ref}>
                <NavLink
                  to={ref}
                  className="relative inline-block transition-all duration-300 hover:pl-2 hover:text-secondary"
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
          <ul className="space-y-2 text-sm">
            {["E-Learning", "FAQ"].map((res) => (
              <li key={res}>
                <NavLink
                  to={`/${res.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative inline-block transition-all duration-300 hover:pl-2 hover:text-secondary"
                >
                  {res}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            Yaoundé – Etoug-Ebé, face Collège de l’Espérance
          </p>
          <p className="text-sm mt-2">isstek@gmail.com</p>
          <p className="text-sm">+237 677 699 402 / 699 101 557</p>
          <div className="flex gap-4 mt-4">
            <Link
              to={"https://www.facebook.com/search/top?q=isstek%20kouam"}
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-secondary"
              target="_blank"
            >
              <Facebook size={20} />
            </Link>
            <Link
              to={"https://www.instagram.com/p/DHFJnnsxC_P/"}
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-secondary"
              target="_blank"
            >
              <Instagram size={20} />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/posts/socious-io_isstek-shin-digitalcredentials-activity-7305395892390420480-O1Fq"
              }
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-secondary"
              target="_blank"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              to={"https://www.youtube.com/@Isstek"}
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-secondary"
              target="_blank"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-primary-foreground/20 mt-8 py-4 text-center text-sm">
        © {year} ISSTEK. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
