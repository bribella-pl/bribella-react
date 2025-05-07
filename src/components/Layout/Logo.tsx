import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink
      to="/"
      className="mx-1 p-1 xs:m-5 xs:px-5 flex xl:ml-8 cursor-pointer"
    >
      <img
        src="/logo.svg"
        alt="Bribella logo"
        className="max-w-10 xl:max-w-15 m-3"
      />
      <div className="max-w-3/4">
        <div className="m-1 xs:m-3 mb-0 p-1 xs:p-3 font-bold tracking-wide content-center text-5xl xl:text-6xl text-bribella-blue font-[Corinthia]">
          Bribella*PL
        </div>
        <div className="m-1 xs:m-3 mt-0 p-1 pt-0 xs:p-3 text-sm xl:text-lg text-wrap text-bribella-black text-center">
          Hodowla kotów brytyjskich
        </div>
      </div>
    </NavLink>
  );
}

export default Logo;
