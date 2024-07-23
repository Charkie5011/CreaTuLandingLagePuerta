import React, { useContext, useState } from "react";
import style from "./Checkout.module.css";
import Context from "../../context/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { dataBase } from "../../config/firebase";
import Swal from 'sweetalert2'

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
    validateForm();
  };
  const [error, setError] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "Tenés que agregar un nombre";
    } else if (user.name.length < 2 || user.name.length > 20) {
      errors.name =
        "El nombre debe tener al menos 2 caracteres y un máximo de 20";
    }
    if (!user.lastName) {
      errors.lastName = "Tenés que agregar un apellido";
    } else if (user.lastName.length < 2 || user.lastName.length > 25) {
      errors.lastName =
        "El apellido debe tener al menos 2 caracteres y un máximo de 25";
    }
    if (!user.email) {
      errors.email = "Tenés que ingresar un email";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Tenés que ingresar un email válido";
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = "Tenés que volver a ingresar el email";
    } else if (user.email !== user.repeatedEmail) {
      errors.repeatedEmail = "Los emails no coinciden";
    }
    if (!user.phone) {
      errors.phone = "Tenés que agregar un teléfono";
    } else if (user.phone.length < 8) {
      errors.phone = "Tenés que ingresar un teléfono válido";
    }
    setError(errors);
    console.log(error);
    return Object.keys(errors).length === 0;
  };

  const { cart, getTotalPrecio, clearCart } = useContext(Context);

  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }
    if (cart.length === 0) {
      console.log("el carrito está vacío");
      return;
    }
    const ordersCollection = collection(dataBase, "orders");

    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotalPrecio(),
        buyDate: Timestamp.now(),
      };

      const orderRef = await addDoc(ordersCollection, order);
      clearCart()
      //no anda
      Swal.fire({
        title: 'Compra exitosa!',
        text: `su numero de orden es : ${orderRef.id}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.formInputContainer}>
      <div id={style.contendorImagenCheckout}>
        <img src="https://i.imgur.com/1gy1IHO.png"></img>
      </div>
      <form>
        <h2>Finalizar compra</h2>
        <div>
          <p>Nombre</p>
          <input
            type="text"
            id="nombre"
            name="name"
            placeholder="Nombre"
            onChange={updateUser}
          ></input>
          <span>{error.name}</span>
        </div>
        <div>
          <p>Apellido</p>
          <input
            type="text"
            id="apellido"
            name="lastName"
            placeholder="Apellido"
            onChange={updateUser}
          ></input>
          <span>{error.lastName}</span>
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={updateUser}
          ></input>
          <span>{error.email}</span>
        </div>
        <div>
          <p>Confirmar Email</p>
          <input
            type="email"
            id="confirmEmail"
            name="repeatedEmail"
            placeholder="Confirmar email"
            onChange={updateUser}
          ></input>
          <span>{error.repeatedEmail}</span>
        </div>
        <div>
          <p>Telefono</p>
          <input
            type="tel"
            id="telefono"
            name="phone"
            placeholder="Telefono"
            onChange={updateUser}
          ></input>
          <span>{error.phone}</span>
        </div>
        <button type="button" onClick={getOrder}>
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
