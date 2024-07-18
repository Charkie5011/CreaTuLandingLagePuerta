import React, { useContext, useState } from "react";
import style from "./ItemDetailScreen.module.css";
import Ficha from "../Ficha/Ficha";
import Context from "../../context/CartContext";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetailScreen = ({ id, name, price, brand, stock, img, ficha }) => {
  const [cantitad, setCantidad] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (cantidad) => {
    const item = {
      id,
      name,
      price,
      img,
    };
   
    addItem(item, cantidad);
  };
  return (
    <div className={style.ItemDetail}>
      <img src={img} />
      <div id={style.carTitle}>
        <h2>{brand} {name}</h2>
        <h2>${price}</h2>
      </div>
      <p id={style.unidadesDisponibles}>Unidades disponibles: {stock}</p>
      <Ficha dataFicha={ficha} />
      <ItemCounter stock={stock} initialValue={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailScreen;
