import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="banner-footer">
      <Link to="/author">À propos</Link>
      <p>&copy; Jinloup Ludo Art 2025</p>
      <figure className="grid-figure">
        <a href="https://github.com/G-Ludovic" target="blank">
          <img src="public/images/github-mark.svg" alt="logo GitHub" />
        </a>
        <a href="www.linkedin.com/in/ludovic-galicher-69ba9932a" target="blank">
          <img src="public/images/linkedin.webp" alt="logo Linkedin" />
        </a>
      </figure>
    </footer>
  );
}

export default Footer;
