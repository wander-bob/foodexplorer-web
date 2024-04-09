import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.header`
  top: 0;
  position: sticky;
  z-index: 2;
  grid-area: header;
  padding: 6.4rem 2.8rem 2.4rem;
  background-color: ${theme.colors.dark._700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input-search {
    display: none;
  }
  > nav {
    width: 100%;
    min-height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    > span {
      width: 100%;
      color: ${theme.colors.light._100};
    }
    > button:nth-child(3) {
      margin: 0 auto;
    }
    > button:nth-child(6) {
      display: none;
    }
  }
  @media(${theme.screens.medium}){
    align-items: end;
    padding: 0 8.4rem 2.6rem;
  }
  @media (${theme.screens.large}){
    padding: 2.8rem 4.4rem;
    gap: 3.2rem;
    .input-search {
      display: flex;
      width: 100%;
    }
    > nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3.2rem;
      > span {
        width: 100%;
        color: ${theme.colors.light._100};
      }
      > button:nth-child(6) {
        display: flex;
        > svg {
          ${theme.icon_sizes.medium_32x32};
        }
      }
    }
  }
 
`;