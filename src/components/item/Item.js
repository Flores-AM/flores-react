import React from "react";
import "./item.scss";

const Item = ({ item }) => {
  const { id, name, price, image } = item;

  return (
    <div className="item">
      <img src={image} alt={name} />
      <h5> {name} </h5>
      <p> {price} </p>
    </div>
  );
};

export default Item;
