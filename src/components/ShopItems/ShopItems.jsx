import React from "react";
import styles from "./ShopItems.module.css"

const ShopItems = ({ textoItem }) => {
  const source =
    "https://media.discordapp.net/attachments/963871461628575844/1254139009551040674/218_20240622142116_1.png?ex=667b0a78&is=6679b8f8&hm=b317fb08dcac68a08d2427c4357cd961ed0b92b47a52aeb9796c5c378fc653f9&=&format=webp&quality=lossless&width=1202&height=676";

  return (
    <div className={styles.shopItem}>
      <h3>{textoItem}</h3>
      <img className={styles.imgPrincipal} src={source}></img>
      <div className={styles.imgSecundaria}>
        <img src={source}></img>
        <img src={source}></img>
        <img src={source}></img>
        <img src={source}></img>
      </div>
    </div>
  );
};

export default ShopItems;
