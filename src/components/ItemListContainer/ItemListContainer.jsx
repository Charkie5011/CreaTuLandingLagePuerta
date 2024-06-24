import React from "react";
import ShopItems from "../ShopItems/ShopItems";


const ItemListContainer = ({ Texto }) => {
  return (
    <div className="shopDisplay">
      <ShopItems textoItem = {Texto}/>
      <ShopItems textoItem = {Texto}/>
      <ShopItems textoItem = {Texto}/>
      <ShopItems textoItem = {Texto}/>
    </div>
   
  );
};

export default ItemListContainer;
