import React from "react";
import styles from "./ShopItems.module.css";
import { Link } from "react-router-dom";

const ShopItems = ({ id, textoItem, marca, categoria, precio, stock, imagen}) => {
  return (
    <div className={styles.shopItem}>
      <img src={imagen} className={styles.imgPrincipal}></img>
      <div className={styles.itemHeading}>
        <p>{marca}</p>
        <h3>{textoItem}</h3>
      </div>
      <div className={styles.itemData}>
        <h4>${precio}</h4>
        <p>{stock} Disponibles</p>
      </div>
      <p>{categoria}</p>
      <div>
        <Link to={`/product/${id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default ShopItems;
