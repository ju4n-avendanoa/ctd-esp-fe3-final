import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <nav className={state.theme === "dark" ? "dark" : ""}>
      <div className="nav-left">
        <h3>
          <span>D</span>H Odonto
        </h3>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Destacados</Link>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          {state.theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
