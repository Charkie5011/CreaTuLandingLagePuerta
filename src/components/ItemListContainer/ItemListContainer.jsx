import React, { useEffect, useState } from "react";
import { getProducts, getProductsByBrand } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import FilterContainer from "../FilterContainer/FilterContainer";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {brandId} = useParams();
  console.log(brandId)
  useEffect(
    () =>{
      const data = brandId ? getProductsByBrand(brandId) : getProducts()

      data
        .then((productos) => setProductos(productos))
        .catch((error) => console.log(error))},
    [brandId]
  );
  return <div>
    <h3>Showroom</h3>
    <FilterContainer/>
    <ItemList className="shopDisplay" stock={productos}/>
  </div>;
};

export default ItemListContainer;
