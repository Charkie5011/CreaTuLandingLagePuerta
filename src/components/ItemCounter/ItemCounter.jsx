import React from "react";
import useCounter from "../hooks/useCounter";
import style from "./ItemCounter.module.css"

const ItemCounter = ({ initialValue, stock, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);
  return (
    <div className={style.itemCounter}>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCounter;
