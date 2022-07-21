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
    title: "Veterinários",
    description: "",
    route: "/produtos/veterinarios",
    alt: "Produtos veterinários",
  },
  {
    img: "productbanner_2.jpg",
    title: "Hotelaria",
    description: "",
    route: "/produtos/hotelaria",
    alt: "Produtos Hotelaria",
  },
  {
    img: "productbanner_3.jpg",
    title: "Fitoterápicos",
    description: "",
    route: "/produtos/fitoterapicos",
    alt: "Produtos Fitoterápicos",
  },
  {
    img: "productbanner_1.jpg",
    title: "Personalizados",
    description: "Personalize seu kit.",
    route: "/produtos/personalize",
    alt: "Produtos Personalizados",
  },
];
