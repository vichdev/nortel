import produto1 from "../../../assets/produtos/fitoterapicos/fito_1.jpeg";
import produto2 from "../../../assets/produtos/fitoterapicos/fito_2.jpeg";
import produto3 from "../../../assets/produtos/fitoterapicos/fito_3.jpeg";
import produto4 from "../../../assets/produtos/fitoterapicos/fito_4.jpeg";
import produto5 from "../../../assets/produtos/fitoterapicos/fito_5.jpeg";

export interface IProdutosVeterinarios {
  titulo: string;
  descricao: string;
  foto: string;
  alt: string;
}

const items: Array<IProdutosVeterinarios> = [
  {
    titulo: "Sabonete Intimus Glicerinado",
    descricao: "Com barbatimão e aroeira.",
    foto: `${produto1}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete de açaí",
    descricao: "Auxilia no embelezamento da pele",
    foto: `${produto2}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete AroSol",
    descricao: "Aroeira e enxofre, auxilia na limpeza e cuidados com a pele.",
    foto: `${produto3}`,
    alt: "foto 1",
  },
  {
    titulo: "Colônia de Lavanda",
    descricao: "Alfazema de lavanda.",
    foto: `${produto4}`,
    alt: "foto 1",
  },
];

export default items;
