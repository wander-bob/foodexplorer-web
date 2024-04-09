import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  max-width: 21rem;
  min-width: 21rem;
  min-height: 29.2rem;
  position: relative;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  background-color: ${theme.colors.dark._200};
  border: 1px solid ${theme.colors.dark._300};
  border-radius: .8rem;
  @media(${theme.screens.medium}){
    min-width: 30.4rem;
    min-height: 46.2rem;
    max-height: 46.2rem;
    gap: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  > img {
    ${theme.image_sizes.smaller_88x88};
  }
  > button:nth-child(3) { 
    max-width: 100%;
    display: flex;
    justify-content: center;
    > span:first-child {
      max-width: 100%;
      ${theme.fonts.poppins._100_medium};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    > span:last-child{
      margin-left: .8rem;
    }
  }
  > button:first-child {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    > svg {
      pointer-events: none;
      height: 2.4rem;
      width: 2.4rem;
    }
  }
  > p {
    display: none;
  }
  > span { 
    color: ${theme.colors.cake._100};
    ${theme.fonts.roboto._300_regular_small};
  }
  @media(${theme.screens.medium}){
    gap: 1.5rem;
    > img { 
      ${theme.image_sizes.small_176x176};
    }
    > button:nth-child(3) {
      > span:first-child, span:last-child {
        ${theme.fonts.poppins._300_bold};
      }
    }
    > p {
      height: 4.4rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
      ${theme.fonts.roboto._200_regular_smaller};
    }
    > span { 
      ${theme.fonts.roboto._600_regular_biggest};
    }
  }
`;
