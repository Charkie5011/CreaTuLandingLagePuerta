import React from "react";
import ShopItems from "../ShopItems/ShopItems";
import style from "./ItemList.module.css";

const ItemList = ({ stock }) => {
  console.log(stock);
  return (
    <div className={style.shopDisplay}>
      {stock.map((producto) => (
        <ShopItems
        marca={producto.brand}
          textoItem={producto.name}
          categoria={producto.category}
          precio={producto.price}
          stock={producto.stock}
          imagen={producto.img}
          id={producto.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
