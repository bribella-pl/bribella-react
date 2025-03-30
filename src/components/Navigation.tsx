import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Strona główna</NavLink>
        </li>
        <li>
          <NavLink to="/aktualnosci">Aktualności</NavLink>
        </li>
        <li>
          <NavLink to="/kocieta">Kocięta</NavLink>
        </li>
        <li>
          <NavLink to="/koty">Koty</NavLink>
        </li>
        <li>
          <NavLink to="/zanim-kupisz">Zanim kupisz</NavLink>
        </li>
        <li>
          <NavLink to="/o-nas">O nas</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
