import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  min-width: 100%;
  max-width: 88vw;
  min-height: 29.2rem;
  padding: 4rem;
  border-radius: .8rem;
  margin-bottom: 2.4rem;
  @media(${theme.screens.medium}){
    margin-bottom: 4.8rem;
    max-width: 80vw;
  }
  @media(${theme.screens.large}){
    max-width: 80vw;
  }
`;
