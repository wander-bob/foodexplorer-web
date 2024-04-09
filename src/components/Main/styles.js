import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.main`
  grid-area: main;
  padding: 4.4rem 2.4rem 4rem;
  @media(${theme.screens.medium}){
    padding: 12rem 8.4rem 3.2rem;
  }
  @media(${theme.screens.large}){
    padding: 16.4rem 12.3rem 4rem;
  }
`;