import React from "react";
import * as Styles from "./styles";

interface IProductsPageProps {
  image: string;
  link?: string;
  children: React.ReactNode;
}

const ProductsPages: React.FC<IProductsPageProps> = ({
  image,
  link,
  children,
}) => {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Image src={image} />
        <Styles.InfoWrapper>
          <Styles.Info>{children}</Styles.Info>
          <a href={link}>
            <Styles.ButtonBuyNow
              title="Compre agora"
              bgColor="var(--primary)"
              color="white"
            >
              Compre agora
            </Styles.ButtonBuyNow>
          </a>
        </Styles.InfoWrapper>
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default ProductsPages;
