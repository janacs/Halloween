import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/fantasias">Fantasias</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
