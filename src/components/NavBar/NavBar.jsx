import React from "react";
import HPBLogo from "../HPBLogo/HPBLogo";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";

const secciones = ["Tienda", "Fotos", "Contacto"];

const NavBar = ({ id, clase }) => {
  return (
    <div id={id} className={clase}>
      <HPBLogo />
      <ul className={clase}>
        <ItemListContainer categorias={secciones} />
        <CartWidget />
      </ul>
    </div>
  );
};

export default NavBar;
