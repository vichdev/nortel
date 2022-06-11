import React from "react";
import { IButtonProps } from "./interfaces/IButtons";
import * as Styles from "./styles";

const Button: React.FC<IButtonProps> = ({ title, onClick, color, bgColor }) => {
  return (
    <Styles.Button onClick={onClick} bgColor={bgColor} color={color}>
      {title}
    </Styles.Button>
  );
};

export default Button;
