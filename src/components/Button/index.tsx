import React from "react";
import { IButtonProps } from "./interfaces/IButtons";
import * as Styles from "./styles";

const Button: React.FC<IButtonProps> = ({ title }) => {
  return <Styles.Button>{title}</Styles.Button>;
};

export default Button;
