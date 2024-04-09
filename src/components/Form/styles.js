import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.form`
  > legend {
    display: none;
  }
  fieldset{
    all: unset;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  button {
    height: 4.8rem;
  }
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  @media (${theme.screens.medium}){
    min-width: 47.6rem;
    padding: 6.4rem;
    background-color: ${theme.colors.dark._700};
    border-radius: 1.6rem;
    > legend {
      display: block;
      text-align: center;
      ${theme.fonts.poppins._400_medium};
      color: ${theme.colors.light._100};
      margin-bottom: 3.2rem;
    } 
  }
`;