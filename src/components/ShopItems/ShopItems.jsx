import React,{ useContext, useState } from "react";
import styles from "./ShopItems.module.css";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";
import ItemCounter from "../ItemCounter/ItemCounter";

const ShopItems = ({ id, name, brand, category, price, stock, img}) => {
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
    <div className={styles.shopItem}>
      <img src={img} className={styles.imgPrincipal}></img>
      <div className={styles.itemHeading}>
        <p>{brand}</p>
        <h3>{name}</h3>
      </div>
      <div className={styles.itemData}>
        <h4>${price}</h4>
        <p>{stock} Disponibles</p>
      </div>
      <div className={styles.itemData}>
      <p>{category}</p>
        <Link to={`/product/${id}`}>Ver detalle</Link>
      </div>
      <div>
        <ItemCounter stock={stock} initialValue={1} onAdd={onAdd} /> {/*para agilizar el testeo del cart*/}
      </div>
    </div>
  );
};

export default ShopItems;
