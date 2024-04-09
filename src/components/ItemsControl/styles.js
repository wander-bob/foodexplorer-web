import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.4rem;
   @media(${theme.screens.medium}){
    gap: 1.6rem;
    flex-direction: row;
    width: 100%;
    
    align-items: center;
    justify-content: center;
    > button { 
      height: 4.8rem;
    }
   }
`;
export const Controls = styled.div`
  min-width: 10rem;
  max-width: 10rem;
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: space-between;
  > button {
    > svg {
      color: ${theme.colors.light._100};
      ${theme.icon_sizes.small_24x24};
    }
  }
`;