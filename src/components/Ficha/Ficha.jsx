import React from "react";
import style from "./Ficha.module.css"

const Ficha = ({ dataFicha }) => {
  console.log(dataFicha);
  return (
    <div className={style.ficha}>
      <p>{dataFicha.description}</p>
      <div className={style.fichaData}>
        <p>Año: {dataFicha.year}</p>
        <p>Motor: {dataFicha.engine}</p>
        <p>Potencia: {dataFicha.power}</p>
      </div>
    </div>
  );
};
export default Ficha;
