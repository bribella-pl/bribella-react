import { NavLink } from "react-router-dom";

export type NavItemProps = {
  to: string;
  label: string;
};

function NavItem(props: NavItemProps) {
  return (
    <li className="p-4 mr-2 whitespace-nowrap content-center text-center text-bribella-blue">
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive
            ? "text-bribella-orange font-bold tracking-wide"
            : "text-bribella-blue"
        }
      >
        {props.label}
      </NavLink>
    </li>
  );
}

export default NavItem;
