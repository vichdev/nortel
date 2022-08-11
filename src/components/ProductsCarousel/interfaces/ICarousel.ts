export interface ICarousel {
  produtos: Array<ICarouselData>;
  title: string;
  descricao: string;
  slidesPerView?: number;
}

export interface ICarouselData {
  foto: string;
  titulo: string;
  descricao: string;
  alt: string;
}
