import React, { useContext } from "react";
import Context from "../../context/CartContext";
import style from "./Cart.module.css";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrecio } = useContext(Context);
  return (
    <div id={style.cartContainer}>
      {cart.map((prod) => (
        <div className={style.cartItem} key={prod.id}>
          <div className={style.cartItemImgWrapper}>
            <img src={prod.img} />
          </div>
          <div id={style.cartItemHeader}>
            <h5>{prod.name}</h5>
          </div>
          <div id={style.cartItemInfo}>
            <p>Unidades: {prod.cantidad}</p>
            <p>Precio por unidad:{prod.price}</p>
            <p>Subtotal: {prod.price * prod.cantidad}</p>
          </div>
          <div>
            <button onClick={() => removeItem(prod.id)}>X</button>
          </div>
        </div>
      ))}
      <div className={style.cartFoot}>
        <h3>Total: ${getTotalPrecio()}</h3>
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
        <h4>Finalizar Compra</h4>
        {/*hacer link que lleva a checkout form*/}
      </div>
    </div>
  );
};

export default Cart;
