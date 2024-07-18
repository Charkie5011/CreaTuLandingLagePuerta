import React, { useContext } from "react";
import Context from "../../context/CartContext";
import style from "./Cart.module.css"

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrecio } = useContext(Context);
  return (
    <div className={style.cartTable}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Modelo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Sub total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => (
            <tr>
                <td>
                    <img src={prod.img}/>
                </td>
              <td>
                {prod.name}
              </td>
              <td>{prod.cantidad}</td>
              <td>{prod.price}</td>
              <td>{prod.price * prod.cantidad}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
