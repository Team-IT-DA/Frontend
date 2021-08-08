import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "./index.css";
const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    /* overflow: hidden; */
    /* font-family: 'Gowun Batang', serif; */
    /* font-family: 'Gowun Dodum', sans-serif; */
    font-family: 'Nanum Gothic', sans-serif;
    
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
    padding:0;
    margin:0;
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
