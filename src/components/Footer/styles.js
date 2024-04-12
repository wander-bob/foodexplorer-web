import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.footer`
  grid-area: footer;
  padding: 2.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: space-between;
  background-color: ${theme.colors.dark._600};
  width: 100%;
  > div {
    width: auto;
    > div { 
      > svg {
        ${theme.icon_sizes.smaller_18x18};
        fill: ${theme.colors.light._700};
      }
      > h2 { 
        color: ${theme.colors.light._700};
        font-size: 1.6rem;  
      }
    }
  }
  > small {
    display: none;
  }
  
  > span {
    ${theme.fonts.dm_sans._100_regular};
    color: ${theme.colors.light._200};
  }
  @media(max-width: 416px){
    > div > div {
      gap: 0.4rem;
      > h2 {
        white-space: nowrap;
      }
    }
    > span { 
      white-space: nowrap;
      font-size: 1.2rem;
    }
  }
  @media (${theme.screens.medium}){
    padding: 2.4rem 12.3rem;
    > div > div {
      > svg {
        ${theme.icon_sizes.medium_32x32};
      }
      > h2 {
        ${theme.fonts.roboto._500_bold_bigger};
      }
    }
    > span {
      ${theme.fonts.roboto._200_regular_smaller};
    }
  }
`;