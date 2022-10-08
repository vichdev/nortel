import produto1 from "../../../assets/produtos/hoteleiros/hot_1.jpg";
import produto2 from "../../../assets/produtos/hoteleiros/hot_2.jpg";
import produto3 from "../../../assets/produtos/hoteleiros/hot_3.jpg";
import produto4 from "../../../assets/produtos/hoteleiros/hot_4.jpg";
import produto5 from "../../../assets/produtos/hoteleiros/hot_5.jpg";
import produto6 from "../../../assets/produtos/hoteleiros/hot_6.jpg";

export interface IProdutosVeterinarios {
  titulo: string;
  descricao: string;
  foto: string;
  alt: string;
}

const items: Array<IProdutosVeterinarios> = [
  {
    titulo: "Kit Viva Las cores",
    descricao: "200 unid. de sabonetes sortidos",
    foto: `${produto1}`,
    alt: "foto 1",
  },
  {
    titulo: "Mini shampoos e sabonetes",
    descricao: "Kit personalizado de shampoos e sabonetes",
    foto: `${produto2}`,
    alt: "foto 1",
  },
  {
    titulo: "Mini sabonetes para hotéis.",
    descricao: "Diversos tipos e soluções.",
    foto: `${produto3}`,
    alt: "foto 1",
  },
  {
    titulo: "Mini shampoos para hotéis.",
    descricao: "Diversos tipos e soluções.",
    foto: `${produto4}`,
    alt: "foto 1",
  },
  {
    titulo: "Mini sabonete",
    descricao: "Contém no kit Viva Las Cores.",
    foto: `${produto5}`,
    alt: "foto 1",
  },
  {
    titulo: "Mini sabonete",
    descricao: "Contém no kit Viva Las Cores.",
    foto: `${produto6}`,
    alt: "foto 1",
  },
];

export default items;
