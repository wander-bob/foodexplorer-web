import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  min-width: 100%;
  max-width: 88vw;
  margin-bottom: 2.4rem;
  > h4 {
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
  } 
  .splide__arrows {
    display: none;
  }
  .splide__track {
    overflow-x: hidden;
  }
  .splide__list { 
    display: flex;
    justify-content: start;
    gap: 2.4rem;
  }
  .splide__slide {
    min-width: fit-content;
  }
  @media(${theme.screens.medium}){
    margin-bottom: 4.8rem;
    max-width: 80vw;
    > h4 { 
      ${theme.fonts.poppins._400_medium};
    }
  }
  @media(${theme.screens.large}){
    max-width: 80vw;
    .splide__arrows {
      display: block;
    }
    .splide__arrow  {
      background-color: transparent;
      > svg { 
        fill: ${theme.colors.light._100};
        ${theme.icon_sizes.medium_32x32};
      }
      &:hover:not(button[disabled]) {
        opacity: 1;
        > svg {
          fill: ${theme.colors.cake._100};
        }
      }
    }
  }
`;
