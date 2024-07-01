import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ Texto }) => {
  const [productos, setProductos] = useState([]);
  useEffect(
    () =>{
      getProducts()
        .then((productos) => setProductos(productos))
        .catch((error) => console.log(error))},
    []
  );
  return <div>
    <h3>{Texto}</h3>
    <ItemList className="shopDisplay" stock={productos}/>
  </div>;
};

export default ItemListContainer;
