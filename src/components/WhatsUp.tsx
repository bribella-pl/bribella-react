import { NavLink } from "react-router-dom";

function WhatsUp() {
  return (
    <section
      className="
    mx-auto mt-16 px-4 mb-20
    text-bribella-blue 
    flex flex-col lg:flex-row items-center lg:justify-center"
    >
      <h2 className="text-3xl font-semibold m-4 p-4">Co u nas słychać?</h2>
      <NavLink
        to="/aktualnosci"
        className="
            text-2xl font-semibold 
            border-3 border-bribella-blue 
            rounded-xl
            w-50
            px-6 py-4 
            hover:border-bribella-orange hover:text-bribella-orange 
            transition-colors duration-300"
      >
        {" "}
        Sprawdź
      </NavLink>
    </section>
  );
}

export default WhatsUp;
