import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [numero, setNumero] = useState(0);
  const [bool, setBool] = useState(false);
  const [btn, setBtn] = useState("Add To Cart");

  const suma = () => {
    if (numero === 10) {
      setBool(true);
    } else {
      setNumero(numero + 1);
    }
  };

  const resta = () => {
    if (numero === 0) {
      setBool(true);
    } else {
      setNumero(numero - 1);
    }
  };

  const handleBtn = () => {
    if (numero >= 1) {
      setBtn("Added");
    }

    setTimeout(() => {
      setBtn("Add To Cart");
    }, 3000);
  };

  return (
    <section className="carta">
      <img src="qu.png"></img>
      <p className="tecla">Tecla 'Q'</p>
      <div className="botonera">
        <button onClick={resta}>-</button>
        <p>{numero}</p>
        <button onClick={suma}>+</button>
      </div>
      <button className="btn-add" onClick={handleBtn}>
        {btn}
      </button>
    </section>
  );
};

export default Counter;
