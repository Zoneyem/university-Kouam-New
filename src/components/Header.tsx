import { Link } from "react-router-dom"
import isstekImg from '../assets/images/issek_logo.png'

const Header = () => {
  return (
    <header className="test">
      <div>
        <Link to="/">
          <h1>INSTITUT SUPERIEUR DES SCIENCES ET TECHNOLOGIES KOUAM</h1>
          <h1>KOUAM HIGHER INSTITUT OF SCIENCE AND TECHNOLOGY</h1>
        </Link>
        <Link to="/">
          <img src={isstekImg} alt="isstek Logo" className="object-cover" />
        </Link>
      </div>
    </header>
  );
}

export default Header