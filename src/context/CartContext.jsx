import React, { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productoAdd, cantidad) => {
    const newItem = { ...productoAdd, cantidad };

    const isInCart = cart.some((prod) => prod.id === newItem.id);
    if (isInCart) {
      const updatedCart = cart.map((prod) =>
        prod.id === newItem.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((prod) => prod.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCantidad = () => {
    let total = 0;
    cart.forEach((prod) => {
      total = total + prod.cantidad;
    });
    return total;
  };

  const getTotalPrecio = ()=>{
    const total = cart.reduce((actual, item) => actual + item.price * item.cantidad, 0)
        return total
  }
  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getCantidad,
        getTotalPrecio
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
