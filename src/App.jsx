import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const secciones = ["Home", "Galeria", "AboutUs"];

  return (
    <BrowserRouter>
      <NavBar id={"NavPrincipal"} clase={"Nav"} secciones={secciones} />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/brands/:brandId" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
