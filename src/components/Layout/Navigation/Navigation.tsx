import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import Logo from "../Logo";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 flex flex-nowrap items-center justify-between relative bg-bribella-white shadow-lg shadow-gray-300/50 z-5">
      <Logo />

      <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X size={32} className="m-5" />
        ) : (
          <Menu size={32} className="m-5" />
        )}
      </button>

      <ul
        className={`bg-bribella-white
          absolute xl:static
          top-full 
          left-0 
          w-full xl:w-auto xl:max-h-none
          overflow-hidden xl:overflow-visible
          transition-all duration-300 ease-in-out xl:transition-none
          xl:flex xl:items-center xl:space-x-4
          z-50
          ${isOpen ? "max-h-screen" : "max-h-0"}
        `}
      >
        <NavItem to="/" label="Strona główna" />
        <NavItem to="/aktualnosci" label="Aktualności" />
        {/* <NavItem to="/kocieta" label="Kocięta" />
        <NavItem to="/koty" label="Koty" /> */}
        <NavItem to="/zanim-kupisz" label="Zanim kupisz" />
        <NavItem to="/o-nas" label="O nas" />
        <NavItem to="/kontakt" label="Kontakt" />
      </ul>
    </nav>
  );
}

export default Navigation;
