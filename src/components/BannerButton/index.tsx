import React from "react";
import * as Styles from "./styles";
import { Link } from "react-router-dom";

interface IBannerButton {
  title: string;
  to: string;
  toggleUnderline?: boolean;
}

const BannerButton: React.FC<IBannerButton> = ({
  title,
  to,
  toggleUnderline = false,
}) => {
  return (
    <Styles.BannerButton toggleUnderline={toggleUnderline}>
      <Link to={to}> {title}</Link>
    </Styles.BannerButton>
  );
};

export default BannerButton;
