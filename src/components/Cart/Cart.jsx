import React, { useContext } from "react";
import Context from "../../context/CartContext";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrecio } = useContext(Context);

  if(cart.length === 0){
    return(
    <div className={style.noItemsMessage}>
      <h4>Todavia no has agregado productos al carrito</h4>
      <Link to={`/`}>Volver al Showroom</Link>
    </div>);
  }else{

  
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
        <Link to={'/checkout'}>
        <h4>Finalizar Compra</h4>
        </Link>
        {/*hacer link que lleva a checkout form*/}
      </div>
    </div>
  );}
};

export default Cart;
