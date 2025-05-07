import "./Header.css";

function Header() {
  return (
    <header>
      <img src="src/assets/img/logo-jinloup-ludo-art.webp" alt="logo du site" />
      <nav>
        <a href="HomePage">Home</a>
        <a href="DrawPage">Galerie</a>
        <a href="ContactPage">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
