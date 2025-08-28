import LinksDesktop from "./LinksDesktop";
import LinksMobile from "./LinksMobile";

const Navbar = () => {
  return (
    <nav>
      <div className="align-element">
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  );
};

export default Navbar;
