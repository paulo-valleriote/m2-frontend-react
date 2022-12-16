import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --bg-color: ${props => props.theme.bgColor}; 
    --secondary-bg-color: ${props => props.theme.bgSecondaryColor}; 
    --text-color: ${props => props.theme.textColor}; 
    --score-color: ${props => props.theme.scoreColor}; 
    --modal-genres-bg-color: ${props => props.theme.modalBg}; 
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

    transition: color 0.3s, background-color 0.2s;
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

  .react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0,0,0,0.5);
  }

  .react-modal-content {
      width: 100%;
      max-width: 49.5rem;
      max-height: 50.5rem;
      background: var(--secondary-bg-color);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
  }
`;