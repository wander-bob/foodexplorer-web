import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Container = styled.button`
  width: 2.4rem;
  height: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > span {
    transition: .3s ease-in-out;
    height: .2rem;
    width: 2.4rem;
    background-color: ${theme.colors.light._100};
    pointer-events: none;
  }
  &.open {
    > span:nth-child(1){
      transform: rotate(135deg) translate(.8rem, -.3rem);
    }
    > span:nth-child(2) {
      transform: translateX(-2rem);
      opacity: 0;
    }
    > span:nth-child(3) {
      transform: rotate(-135deg) translate(.8rem, .3rem);
    }
  }
  @media (${theme.screens.large}){
    display: none;
  }
`;