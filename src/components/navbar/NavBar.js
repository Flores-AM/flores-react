import React from "react";
import "./_nav.scss";
import "../_generales.scss";
import Cart from "./Cart";

const NavBar = () => {
  return (
    <nav>
      <div className="lista">
        <a href="#">Inicio</a>
        <a href="#">Usuarios</a>
        <a href="https://las.op.gg/summoners/las/blond%C4%B1e">Lolcito</a>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
