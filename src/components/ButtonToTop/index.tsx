import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { MdArrowUpward } from "react-icons/md";

const ButtonToTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const displayButton = (): void => {
      return window.scrollY >= 700
        ? setShowButton(!showButton)
        : setShowButton(false);
    };
    displayButton();
    window.addEventListener("scroll", displayButton);
  }, []);

  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Styles.ButtonWrapper onClick={scrollToTop} showButton={showButton}>
      <MdArrowUpward />
    </Styles.ButtonWrapper>
  );
};

export default ButtonToTop;
