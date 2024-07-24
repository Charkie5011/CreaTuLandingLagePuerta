import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ texto }) => {
  return (
    <li>
      <Link to={`/${texto}`}>{texto}</Link>
    </li>
  );
};

export default NavItem;
