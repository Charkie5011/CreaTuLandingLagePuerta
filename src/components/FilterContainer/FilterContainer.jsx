import React from "react";
import { Link } from "react-router-dom";
import style from "./FilterContainer.module.css"

const FilterContainer = () => {
  return (
    <div className={style.filterContainer}>
        <h4>Marcas: </h4>
        <div className={style.enlaces}>
          <Link to="/brands/Annis">Annis</Link>
          <Link to="/brands/Dinka">Dinka</Link>
          <Link to="/brands/Pfister">Pfister</Link>
          </div>
        
    </div>
  );
};

export default FilterContainer;
