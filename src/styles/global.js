import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-color: #FFFFFF;
    --secondary-bg-color: #EDEDED;
    --text-color: #1B2028;
    --score-color: #F1C40F;
    --modal-genres-bg-color: #FE0078;
  }

  html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

  body {
    color: var(--text-color);
    background-color: var(--bg-color);
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;