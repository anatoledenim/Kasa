import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-top: 50px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat", sans-serif;
  }

  #root {
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .display-none {
    display: none;
  }

  .apropos-section {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
 
export default GlobalStyle;