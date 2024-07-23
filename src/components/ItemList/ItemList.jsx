import React from "react";
import ShopItems from "../ShopItems/ShopItems";
import style from "./ItemList.module.css";

const ItemList = ({ stock }) => {
  return (
    <div className={style.shopDisplay}>
      {stock.map((producto) => (
        <ShopItems key={producto.id}
        brand={producto.brand}
          name={producto.name}
          category={producto.category}
          price={producto.price}
          stock={producto.stock}
          img={producto.img}
          id={producto.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
