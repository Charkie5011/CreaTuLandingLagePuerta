import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailScreen from "../ItemDetailScreen/ItemDetailScreen";
import { getProductsById } from "../../data/asyncMock";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/firebase";
import { RotateLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { prodId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const queryRef = doc(dataBase, "productos", prodId);
      const response = await getDoc(queryRef);

      const newItem = { ...response.data(), id: response.id };
      setProduct(newItem);
      setLoading(false);
    };
    getData();
  }, []);
  console.log(product);
  return (
    <div>
      {loading ? (
        <RotateLoader />
      ) : (
      <ItemDetailScreen data={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
