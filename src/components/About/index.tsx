import React from "react";
import ScreenBanners from "../ScreenBanners";
import * as Styles from "./styles";
import banner_about from "../../assets/banner_about_us.jpg";
import BannerButton from "../BannerButton";
import { FaAngleDoubleRight } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div>
      <ScreenBanners
        img={banner_about}
        title="Sobre nós"
        description="Há mais de vinte anos no mercado de produtos de higiene, sabonetes, shampoos para você, para seu pet e para seu negócio."
      >
        <BannerButton title="Home" to="/" />
        <FaAngleDoubleRight />
        <BannerButton title="Sobre nós" to="/about-us" toggleUnderline />
      </ScreenBanners>
    </div>
  );
};

export default About;
