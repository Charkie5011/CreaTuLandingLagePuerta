import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const secciones = ["Home", "Galeria", "AboutUs"];

  return (
    <BrowserRouter>
      <NavBar id={"NavPrincipal"} clase={"Nav"} secciones={secciones} />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/brands/:brandId" element={<ItemListContainer/>}/>
        <Route path="/product/:prodId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
