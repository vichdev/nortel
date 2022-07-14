import React from "react";

import { GlobalStyles } from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import Produtos from "./views/Produtos";
import AboutUs from "./views/AboutUs";
import ProdutosVeterinarios from "./views/ProdutosVeterinarios";
import Contact from "./views/Contact";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/produtos/veterinarios"
          element={<ProdutosVeterinarios />}
        />
      </Routes>
    </>
  );
};

export default App;
