import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 11.4rem auto 7.8rem;
  > main {
    padding-top: 4rem;
    > button { 
      font-weight: 500;
      > svg {
        pointer-events: none;
        ${theme.icon_sizes.medium_32x32};
      }
      margin-bottom: 2rem;
    }
    > h2 {
      ${theme.fonts.poppins._400_medium};
      margin-bottom: 2.4rem;
    }
    > form {
      background: none;
      > fieldset {
        > div > div {
          background-color: ${theme.colors.dark._800};
        }
        > button{
          background-color: ${theme.colors.tomato._400};
        }
      }
    }
  }
  @media (${theme.screens.medium}){
    > main {
      > form { 
        padding: 0;
      }
    }
  }
  @media (${theme.screens.large}){
    > main {
      > h2 {
        ${theme.fonts.poppins._400_medium};
      }
      > button {
        ${theme.fonts.poppins._300_bold};
      }
      > form {
        > fieldset {
          display: grid;
          align-items: center;
          grid-template-areas: "inputa inputb inputb inputc" "inputd inputd inputd inpute" "textarea textarea textarea textarea" "button button button button";
          > div:nth-child(1){
            grid-area: inputa;
          }
          > div:nth-child(2){
            grid-area: inputb;
            margin-top: 1rem;
            min-width: 100%;
          }
          > div:nth-child(3){
            grid-area: inputc;
            margin-top: 0.8rem;
          }
          > div:nth-child(4){
            grid-area: inputd;
          }
          > div:nth-child(4){
            grid-area: inputd;
          }
          > div:nth-child(6){
            grid-area: textarea;
          }
          > button { 
            grid-area: button;
            max-width: 17.2rem;
            justify-self: end;
          }
        }
      }
    }
  }
`;