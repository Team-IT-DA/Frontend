import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 20px 20px;
    background-color: #f7f7fc;
    font-family: 'Noto Sans KR', sans-serif;
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
