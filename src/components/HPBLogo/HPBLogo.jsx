import React from "react";
import HPBBlack from "../../../src/assets/1SS-Logo02PureBlack.png";
import { Link } from "react-router-dom";

const HPBLogo = () => {
  return (
    <Link to={'/'}>
      <img src={HPBBlack} alt={"Logo"} width={360} height={90} />
    </Link>
  );
};

export default HPBLogo;
