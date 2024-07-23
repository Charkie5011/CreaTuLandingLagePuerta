import React, { useEffect, useState } from "react";
//import { getProducts, getProductsByBrand } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import FilterContainer from "../FilterContainer/FilterContainer";
import { useParams } from "react-router-dom";
import { RotateLoader } from "react-spinners";
import style from "./ItemListContainer.module.css";
import { dataBase } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { brandId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getDataBase = async () => {
      const coleccion = collection(dataBase, "productos");

      const queryRef = !brandId
        ? coleccion
        : query(coleccion, where("brand", "==", brandId));

      const response = await getDocs(queryRef);

      const cars = response.docs.map((doc) => {
        const newItem = { ...doc.data(), id: doc.id };
        return newItem;
      });
      setProductos(cars);
      setLoading(false);
    };
    getDataBase();
  }, [brandId]);
  return (
    <div className={style.itemListContainer}>
      <h3>Showroom</h3>
      <FilterContainer />
      {loading ? (
        <div className={style.rotatorContainer}>
        <RotateLoader />
        </div>
      ) : (
        <ItemList className="shopDisplay" stock={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
