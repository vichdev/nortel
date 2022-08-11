import produto1 from "../../../assets/produtos/personalize/conj1.jpg";
import produto2 from "../../../assets/produtos/personalize/conj2.jpg";
import produto3 from "../../../assets/produtos/personalize/conj3.jpg";
import produto4 from "../../../assets/produtos/personalize/conj4.jpg";
import produto5 from "../../../assets/produtos/personalize/conj5.jpg";
import produto6 from "../../../assets/produtos/personalize/conj6.jpg";
import produto7 from "../../../assets/produtos/personalize/conj7.jpg";

export interface IProdutosVeterinarios {
  titulo: string;
  descricao: string;
  foto: string;
  alt: string;
}

const items: Array<IProdutosVeterinarios> = [
  {
    titulo: "Kit da linha Totó",
    descricao: "Shampoos, condicionadores, sabonetes.",
    foto: `${produto1}`,
    alt: "Produto",
  },
  {
    titulo: "Kit personalizado Totó",
    descricao: "Talcos, condicionadores, sabonetes, colônias.",
    foto: `${produto2}`,
    alt: "Produto",
  },
  {
    titulo: "Kit personalizado Totó",
    descricao: "Talcos, condicionadores, sabonetes, colônias.",
    foto: `${produto3}`,
    alt: "Produto",
  },
  {
    titulo: "Kit de colônias Totó",
    descricao: "",
    foto: `${produto4}`,
    alt: "Produto",
  },
  {
    titulo: "Kit Hotel Viva Las Cores",
    descricao: "",
    foto: `${produto5}`,
    alt: "Produto",
  },
  {
    titulo: "Kit de talco Totó",
    descricao: "",
    foto: `${produto6}`,
    alt: "Produto",
  },
  {
    titulo: "Kit shampoo/condicionador Totó",
    descricao: "",
    foto: `${produto7}`,
    alt: "Produto",
  },
];

export default items;
