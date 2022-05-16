import React, { useEffect, useState } from "react";
import Item from "../item/Item";
import "./lista.scss";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((iteracion) => {
        return <Item key={iteracion.id} item={iteracion} />;
      })}
    </div>
  );
};

export default ItemList;
