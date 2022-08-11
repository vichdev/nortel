import React from "react";

import { GlobalStyles } from "./styles/globalStyles";
import { Routes, Route, useLocation } from "react-router-dom";

//Views
import Home from "./views/Home";
import Produtos from "./views/Produtos";
import AboutUs from "./views/AboutUs";
import ProdutosVeterinarios from "./views/ProdutosVeterinarios";
import Contact from "./views/Contact";
import ProdutosHotelaria from "./views/ProdutosHotelaria";
import ProdutosFitoterapicos from "./views/ProdutosFitoterapicos";
import ProdutosPersonalizados from "./views/ProdutosPersonalizados";
import WhatsApp from "./components/WhatsApp";

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
        <Route path="/produtos/hotelaria" element={<ProdutosHotelaria />} />
        <Route
          path="/produtos/fitoterapicos"
          element={<ProdutosFitoterapicos />}
        />
        <Route
          path="/produtos/personalize"
          element={<ProdutosPersonalizados />}
        />
      </Routes>
      <WhatsApp />
    </>
  );
};

export default App;
