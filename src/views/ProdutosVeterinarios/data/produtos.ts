import produto1 from "../../../assets/produtos/veterinarios/vet1.jpg";
import produto2 from "../../../assets/produtos/veterinarios/vet2.jpg";
import produto3 from "../../../assets/produtos/veterinarios/vet3.jpg";
import produto4 from "../../../assets/produtos/veterinarios/vet4.jpg";
import produto5 from "../../../assets/produtos/veterinarios/vet5.jpg";
import produto6 from "../../../assets/produtos/veterinarios/vet6.jpg";
import produto7 from "../../../assets/produtos/veterinarios/vet7.jpg";
import produto8 from "../../../assets/produtos/veterinarios/vet13.jpg";
import produto9 from "../../../assets/produtos/veterinarios/vet14.jpg";
import produto10 from "../../../assets/produtos/veterinarios/vet15.jpg";
import produto11 from "../../../assets/produtos/veterinarios/vet16.jpg";
import produto12 from "../../../assets/produtos/veterinarios/vet17.jpg";
import produto13 from "../../../assets/produtos/veterinarios/vet18.jpg";
import produto14 from "../../../assets/produtos/veterinarios/vet19.jpg";
import produto15 from "../../../assets/produtos/veterinarios/vet20.jpg";
import produto16 from "../../../assets/produtos/veterinarios/vet21.jpg";
import produto17 from "../../../assets/produtos/veterinarios/vet22.jpg";

export interface IProdutosVeterinarios {
  titulo: string;
  descricao: string;
  foto: string;
  alt: string;
}

const items: Array<IProdutosVeterinarios> = [
  {
    titulo: "Sabonete TOTÓ Anti-pulgas",
    descricao: "Anti-pulgas, bacterícida, espumante e perfumado.",
    foto: `${produto1}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete TOTÓ Aroeira",
    descricao: "Anti-pulgas, bacterícida, espumante e perfumado.",
    foto: `${produto2}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete TOTÓ Coco",
    descricao: "Com leite de coco natural, saudável para pele e pelo.",
    foto: `${produto3}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete TOTÓ filhotes",
    descricao: "Aroma de morango, Anti-pulgas, bacterícida.",
    foto: `${produto4}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete TOTÓ alcatrão",
    descricao: "Mata bicheiras (Miiases).",
    foto: `${produto5}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete TOTÓ sulforol",
    descricao: "Com enxofre.",
    foto: `${produto6}`,
    alt: "foto 1",
  },
  {
    titulo: "Sabonete TOTÓ sarnol",
    descricao: "Anti-pulgas, bacterícida, espumante e perfumado.",
    foto: `${produto7}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo TOTÓ Filhotes",
    descricao: "Shampoo e condiconador orgânico.",
    foto: `${produto8}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo TOTÓ Nim",
    descricao: "Shampoo e condiconador orgânico.",
    foto: `${produto9}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo TOTÓ 4X1",
    descricao: "Shampoo, condiconador, anti-pulgas e bacterícida.",
    foto: `${produto10}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo TOTÓ coco",
    descricao: "Shampoo e condiconador com leite de coco natural.",
    foto: `${produto11}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo TOTÓ morango",
    descricao: "Shampoo e condiconador com aroma de morango.",
    foto: `${produto12}`,
    alt: "foto 1",
  },
  {
    titulo: "Colônias TOTÓ",
    descricao: "Nos aromas de lavanda plus e alfazema.",
    foto: `${produto13}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo veterinário Lulu",
    descricao: "Shampoo com fragrância de morango.",
    foto: `${produto14}`,
    alt: "foto 1",
  },
  {
    titulo: "Shampoo veterinário p/ Equinol",
    descricao: "Shampoo orgânico potros e cavalos.",
    foto: `${produto15}`,
    alt: "foto 1",
  },
  {
    titulo: "Talco TOTÓ",
    descricao: "Talco para cães e gatos.",
    foto: `${produto16}`,
    alt: "foto 1",
  },
  {
    titulo: "Eliminador de  odores",
    descricao: "Elimina odores para limpar o ambiente do pet.",
    foto: `${produto17}`,
    alt: "foto 1",
  },
];

export default items;
