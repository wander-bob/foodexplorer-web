import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Container = styled.button`
  &.admin-view {
    display: none;
  }
  > svg {
    pointer-events: none;
    path {
      color: ${theme.colors.light._100};
    }
  }
  > span:nth-child(2){
    display: none;
  }
  > span:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    background-color: ${theme.colors.tomato._100};
    border-radius: 50%;
    transform: translate(-1.3rem, -1rem);
    ${theme.fonts.poppins._100_medium};
    > div {
      display: none;
    }
  }
  @media (${theme.screens.large}){
    min-width: 21.6rem;
    &.admin-view{
      display: flex;
    }
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.6rem 4.6rem;
    background-color: ${theme.colors.tomato._100};
    border-radius: .5rem;
    > span:nth-child(2){
      display: block;
      color: ${theme.colors.light._100};
    }
    > span:nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-radius: 50%;
      transform: translate(0, 0);
      ${theme.fonts.poppins._100_medium};
      color: ${theme.colors.light._100};
      > div {
        display: block;
        color: ${theme.colors.light._100};
      }
    }
  }
`;