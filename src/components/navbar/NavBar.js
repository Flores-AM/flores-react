import React from "react";
import "./_nav.scss";
import "../_generales.scss";
import Cart from "./Cart";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="lista">
        <NavLink activeclassName to="/" a>
          Inicio{" "}
        </NavLink>
        <NavLink activeclassName to="/Usuarios" a>
          Usuarios
        </NavLink>
        <NavLink activeclassName to="/ItemListContainer" a>
          Lolcito
        </NavLink>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
