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
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .display-none {
    display: none;
  }
`;
 
export default GlobalStyle;