import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import * as Styles from "./styles";

const WhatsApp: React.FC = () => {
  return (
    <Styles.WhatsAppWrapper href="https://wa.me/557133017719">
      <IoLogoWhatsapp />
    </Styles.WhatsAppWrapper>
  );
};

export default WhatsApp;
