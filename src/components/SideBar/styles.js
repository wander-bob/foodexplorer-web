import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Container = styled.div`
  min-height: 100vh;
  grid-area: main;
  transform: translateX(-100%);
  transition: transform .3s ease-in-out;
  background-color: ${theme.colors.dark._400};
  z-index: 1;
  &.active{
    transform: translateX(0%);
  }
  > main { 
    > button {
      display: inline;
      padding: 1rem;
      margin-top: 3.6rem;
      text-align: left;
      width: 100%;
      font-size: 2.4rem;
      font-weight: 300;
      border-bottom: 1px solid ${theme.colors.dark._1000};
    }
  }
`;