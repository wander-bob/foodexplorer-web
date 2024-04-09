import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  padding: 15.8rem 5.6rem 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
  > div {
    > div {
        justify-content: center;
        > svg { 
          height: 4.4rem;
          width: 4.4rem;
        }
        > h2 {
          ${theme.fonts.roboto._700_regular_giant};
          white-space: nowrap;
        }
      }
      > small {
        display: none;
      }
    }
  @media(${theme.screens.large}){
    flex-direction: row;
    justify-content: space-evenly;
    padding: 8rem 10.8rem 4.4rem;
  }
`;