import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme["black"]};
    color: ${(props) => props.theme["black"]};
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
 }
`;
