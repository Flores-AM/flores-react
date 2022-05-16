import React, { useEffect, useState } from "react";
import Counter from "../counter/Counter";
import { prod } from "./Productos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      resolve(prod);
    });
    data.then((data) => {
      setItems(data);
    });
    data.catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
