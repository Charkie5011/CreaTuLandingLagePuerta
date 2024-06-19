import React from "react";
import HPBLogo from "../HPBLogo/HPBLogo";

import CartWidget from "../CartWidget/CartWidget";
import NavItem from "../NavItem/NavItem";


const NavBar = ({ id, clase, secciones }) => {
  return (
    <div id={id} className={clase}>
      <HPBLogo />
      <ul className={clase}>
        <NavItem texto={secciones[0]}/>
        <NavItem texto={secciones[1]}/>
        <NavItem texto={secciones[2]}/>
        <CartWidget />
      </ul>
    </div>
  );
};

export default NavBar;
