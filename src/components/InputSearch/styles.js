import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border-radius: .5rem;
  background: ${theme.colors.dark._900};
  > svg { 
    ${theme.icon_sizes.small_24x24};
  }
  > input {
    width: 100%;
    &::-webkit-search-cancel-button{
       display: none; 
    }
  }
  @media (${theme.screens.medium}){
    padding: 1.6rem 10rem;
  }  
`;