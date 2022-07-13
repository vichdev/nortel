export interface ICarousel {
  produtos: Array<ICarouselData>;
}

interface ICarouselData {
  foto: string;
  titulo: string;
  descricao: string;
  alt: string;
}
