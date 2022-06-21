import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyles } from "./styles/globalStyles";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Produtos from "./views/Produtos";
import ProdutosVeterinarios from "./views/ProdutosVeterinarios";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route
          path="/produtos/veterinarios"
          element={<ProdutosVeterinarios />}
        />
      </Routes>
    </>
  );
};

export default App;
