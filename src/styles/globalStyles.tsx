import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

:root {
  --background: #fff;
  --red: #b12025;
  --text: #a39f9f;
  --black: #000;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  }
html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
ul {
  cursor: pointer;
}
body {
  font-family: 400 14px Oswald, sans-serif;
  background: var(--background);
  overflow-x: hidden;
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}
button,
svg {
  cursor: pointer;
}
`;
