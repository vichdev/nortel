import React from "react";
import ScreenBanners from "../ScreenBanners";
import * as Styles from "./styles";
import banner_about from "../../assets/banner_about_us.jpg";
import BannerButton from "../BannerButton";
import { FaAngleDoubleRight } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div>
      <ScreenBanners img={banner_about} title="Sobre nós" />
    </div>
  );
};

export default About;
