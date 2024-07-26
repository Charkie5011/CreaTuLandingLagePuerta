import React from "react";
import HPBLogo from "../HPBLogo/HPBLogo";

import CartWidget from "../CartWidget/CartWidget";
import NavItem from "../NavItem/NavItem";


const NavBar = ({ id, clase, secciones }) => {
  return (
    <div id={id} className={clase}>
      <HPBLogo />
      <ul className={clase}>
        {
          secciones.map((element) => (<NavItem texto={element}/>))
        }
        <CartWidget />
      </ul>
    </div>
  );
};

export default NavBar;
