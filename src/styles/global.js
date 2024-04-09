import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    font-family: Poppins, sans-serif;
    color: ${theme.colors.light._300};
  }
  .hidden {
    opacity: 0;
    display: none;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  body {
    background: ${theme.colors.dark._400};
    min-height: 100vh;
    color: ${theme.colors.light._300};
  }
  input, button, textarea {
    background-color: transparent;
    outline: none;
    border: none; 
  }
  button, a {
    cursor: pointer;
    transition: filter .2s;
    &:hover:not(button[disabled]){ 
      filter: brightness(.9);
    }
  }
  a {
    text-decoration: none;
  }
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    list-style: none;
  }
`;