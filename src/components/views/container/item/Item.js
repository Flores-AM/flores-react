import React from "react";
import "../../../_generales.scss";
import "./item.scss";
import Counter from "./counter/Counter";

const Item = ({ item }) => {
  const { id, name, price, image } = item;

  return (
    <div className="item">
      <img src={image} alt={name} />
      <h5> {name} </h5>
      <p> {price} </p>
      <Counter />
    </div>
  );
};

export default Item;
