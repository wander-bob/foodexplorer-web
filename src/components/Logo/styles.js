
import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  > small {
    color: ${theme.colors.cake._100};
    ${theme.fonts.roboto._100_regular_smallest};
    margin-top: 0.6rem;
  }
  @media (${theme.screens.large}){
    flex-direction: column;
    min-width: fit-content;
    gap: 0;
    > small {
      margin-top: 0;
      width: 100%;
      text-align: right;
    }
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  > svg { 
    ${theme.icon_sizes.small_24x24};
    fill: ${theme.colors.cake._200};
  }
  > h2 {
    ${theme.fonts.roboto._400_bold_big};
    color: ${theme.colors.light._100};
    white-space: nowrap;
  }
  @media (${theme.screens.medium}){
    > svg { 
      height: 4.8rem;
      width: 4.8rem;
    }
    > h2 {
      ${theme.fonts.roboto._500_bold_bigger};
    }
  }
`