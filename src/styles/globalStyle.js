import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
 }

 body {
    background: #f5f5f5;
    color: #312e38;
    -webkit-font-smoothing: antialiased !important
  }
  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
