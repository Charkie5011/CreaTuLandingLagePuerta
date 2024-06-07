import React from "react";
import NavItem from "../NavItem/NavItem";

const ItemListContainer = ({ categorias }) => {
  return (
    <>
      <NavItem texto={categorias[0]} />
      <NavItem texto={categorias[1]} />
      <NavItem texto={categorias[2]} />
    </>
  );
};

export default ItemListContainer;
