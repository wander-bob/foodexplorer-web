import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  height: 3.2rem;
  padding: 0.8rem 0 0.8rem 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.light._600};
  > input {
    max-width: 7.2rem;
    ${theme.fonts.roboto._300_regular_small};
    color: ${theme.colors.light._100};
    &::placeholder{
      color: ${theme.colors.light._100};
    }
  }
  > button {
    height: 3.2rem;
    width: 100%;
    padding-right: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    > svg { 
      fill: ${theme.colors.light._100};
      pointer-events: none;
    }
  }
  &[data-is-new="true"]{
    border: dashed 1px ${theme.colors.light._500};
    background: none;
    > input {
      color: ${theme.colors.light._500};
      &::placeholder{
        color: ${theme.colors.light._500};
      } 
    }
    > button{
      &[data-is-new="true"]{
        > svg { 
          fill: ${theme.colors.light._500};
        }
      }
    }
  }
`;