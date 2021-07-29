import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  ol,ul,li {
    list-style:none;
  }
  button {
    cursor: pointer;
    outline: none; 
    border: none;
  }
  input {
    outline: none;
  }

`;

export default GlobalStyle;
