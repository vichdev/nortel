interface IProducts {
  img: string;
  title: string;
  description: string;
  route: string;
  alt: string;
}

export const productsList: Array<IProducts> = [
  {
    img: "productbanner_1.jpg",
    title: "Veterinária",
    description: "Produtos para seu pet.",
    route: "/produtos/veterinarios",
    alt: "Produtos veterinários",
  },
  {
    img: "productbanner_2.jpg",
    title: "Hotelaria",
    description: "Produtos para seu negócio.",
    route: "/produtos/hotelaria",
    alt: "Produtos Hotelaria",
  },
  {
    img: "productbanner_3.jpg",
    title: "Fitoterápica",
    description: "Produtos para você.",
    route: "/produtos/fitoterapicos",
    alt: "Produtos Fitoterápicos",
  },
  {
    img: "productbanner_5.jpg",
    title: "Personalizados",
    description: "Personalize seu kit.",
    route: "/produtos/personalize",
    alt: "Produtos Personalizados",
  },
];
