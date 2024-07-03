import React, { useEffect, useState } from "react";
import { getProducts, getProductsByBrand } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import FilterContainer from "../FilterContainer/FilterContainer";
import { useParams } from "react-router-dom";
import { RotateLoader } from "react-spinners";
import style from "./ItemListContainer.module.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { brandId } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(brandId);
  useEffect(() => {
    setLoading(true);
    const data = brandId ? getProductsByBrand(brandId) : getProducts();

    data
      .then((productos) => setProductos(productos))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [brandId]);
  return (
    <div className={style.itemListContainer}>
      <h3>Showroom</h3>
      <FilterContainer />
      {loading ? (
        <RotateLoader />
      ) : (
        <ItemList className="shopDisplay" stock={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
