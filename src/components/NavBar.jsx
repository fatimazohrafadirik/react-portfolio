import "./NavBar.css";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logoportfolio.png";

function NavBar() {
  return (
    <nav className="navigation">
      <div>
        <img src={LogoImg} alt="Portfolio logo" className="logo" />
      </div>
      <ul className="navbar">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
