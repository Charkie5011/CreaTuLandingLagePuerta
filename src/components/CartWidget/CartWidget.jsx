import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Context from "../../context/CartContext";
import style from "./CartWidget.module.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getCantidad } = useContext(Context);

  return (
    <div className={style.cartWidget}>
      <Link to={"/cart"}>
        <FaShoppingCart />
      </Link>
      <p>{getCantidad()}</p>
    </div>
  );
};

export default CartWidget;
