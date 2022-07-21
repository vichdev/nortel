export interface ICarousel {
  produtos: Array<ICarouselData>;
}

export interface ICarouselData {
  foto: string;
  titulo: string;
  descricao: string;
  alt: string;
}
