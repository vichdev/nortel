import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

:root {
  --background: #fff;
  --text: #333333;
  --primary: #345EAB;
  --secondary: #3BBAC3;
  --yellow: #EEDBCB;
  --black: #000;
  --green:  #8abc00;
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
  font-family: 'Montserrat', sans-serif;
  background: var(--background);
  font-size: 16px;
  font-weight: 400;
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
  font-family:  'Montserrat', sans-serif;
}
button,
svg,
a {
  cursor: pointer;
}

h1,h2,h3,h4,h5,h6,span {
  font-family: 'Montserrat', sans-serif;
}
  `;
