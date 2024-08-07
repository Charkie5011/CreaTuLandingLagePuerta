import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import HomeContainer from "./components/HomeContainer/HomeContainer";

function App() {
  const secciones = ["home","showroom"];

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar id={"NavPrincipal"} clase={"Nav"} secciones={secciones} />
        <Routes>
          <Route path="/" element={<HomeContainer/>}/>
          <Route path="/home" element={<HomeContainer/>}/>
          <Route path="/showroom" element={<ItemListContainer />} />
          <Route path="/brands/:brandId" element={<ItemListContainer />} />
          <Route path="/product/:prodId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
