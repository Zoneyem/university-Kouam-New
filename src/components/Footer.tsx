import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center">
      <p> {`ISSTEK Copyright ${new Date().getFullYear()}`} </p>

      <p>
        <Link to="https://www.youtube.com/shorts/GnFxMbPYogM" target="_blank">
          <Youtube className="text-red-600"/>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
