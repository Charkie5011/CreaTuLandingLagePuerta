import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  
const secciones = ["Home","Galeria","AboutUs"];
const itemsTienda=["Cosa1"];

  return (
    <>
      <div>
        <NavBar id={"NavPrincipal"} clase={"Nav"} secciones={secciones}/>
        <ItemListContainer Texto={itemsTienda} />
      </div>
    </>
  );
}

export default App;
