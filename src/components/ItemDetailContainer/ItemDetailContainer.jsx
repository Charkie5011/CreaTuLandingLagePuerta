import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailScreen from "../ItemDetailScreen/ItemDetailScreen";
import { getProductsById } from "../../data/asyncMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();
  const ID = parseInt(prodId);
  useEffect(() => {getProductsById(ID).then((data)=>setProduct(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(product);
  return <div>
    <ItemDetailScreen data={product}/>
  </div>;
};

export default ItemDetailContainer;
