import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 11.4rem auto 7.8rem;
  > main {
    > button {
      display: flex;
      gap: 0.8rem;
      > svg { 
        ${theme.icon_sizes.small_24x24};
        pointer-events: none;
      }
    }
  }
`;
export const ItemsContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  @media (${theme.screens.large}) {
    margin: 4rem auto;
    max-width: 84rem;
  }
`;
export const ItemsWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${theme.colors.dark._1000} 1px solid;
  padding: 2rem 0.8rem;
  > div { 
    display: flex;
    gap: 1.6rem;
    > img { 
      display: none;
    }
    > span {
      ${theme.fonts.roboto._300_regular_small};
    }
    > div > div {
      justify-content: center;
      gap: 0.8rem;
    }
    > button { 
      min-height: 100%;
      > svg { 
        pointer-events: none;
        ${theme.icon_sizes.small_24x24};
      }
    }
    > button:nth-child(2) { 
      > svg { 
        fill: ${theme.colors.mint._200};
      }
    }
    > button:nth-child(3) { 
      > svg { 
        fill: ${theme.colors.tomato._200};
      }
    }
  }
  @media(${theme.screens.large}){
    > div {
      gap: 8rem;
      > img {
        display: block;
        ${theme.icon_sizes.large_48x48};
      }
      > span {
        ${theme.fonts.roboto._500_bold_bigger};
      }
      > div > div {
        gap: 1.4rem;
        > span {
          ${theme.fonts.roboto._400_bold_big};
        }
      }
      > button { 
        > svg { 
          ${theme.icon_sizes.medium_32x32};
        }
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;
  gap: 1.6rem;
  > button {
    padding: 0.8rem 3.2rem;
    border-radius: 0.5rem;
    &:nth-child(1){
      background-color: ${theme.colors.tomato._200};
    }
    &:nth-child(2){
      background-color: ${theme.colors.mint._200};
    }
  }
  @media (${theme.screens.medium}){
    width: fit-content;
  
  }
  @media (${theme.screens.large}){
    gap: 3.2rem;
    > button {
      padding: 0.8rem 3.2rem;
      border-radius: 0.5rem;
    }
  }
`;