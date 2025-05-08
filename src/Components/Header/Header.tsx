import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <figure>
        <img
          src="src/assets/img/logo-jinloup-ludo-art.webp"
          alt="logo du site"
        />
      </figure>
      <nav>
        <Link to="/home">Accueil</Link>
        <Link to="/gallery">Galerie</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
