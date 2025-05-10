import { NavLink } from "react-router-dom";

type CheckOutOurCatsProps = {
  type: "kotki" | "kocury" | "kocieta";
};

function CheckOutOurCats({ type }: CheckOutOurCatsProps) {
  return (
    <div className="mt-15 mb-15">
      <NavLink
        to={`/${type}`}
        className="
            text-2xl font-semibold 
            border-3 border-bribella-blue 
            rounded-xl
            w-150
            px-6 py-4 
            hover:border-bribella-orange hover:text-bribella-orange 
            transition-colors duration-300"
      >
        {" "}
        Sprawdź nasze {type === "kocieta" ? "kocięta" : type}
      </NavLink>
    </div>
  );
}

export default CheckOutOurCats;
